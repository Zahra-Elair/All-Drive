const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const { User, UserDriveSchema, userDriveSchema } = require("../models/user");
const { getDriveInstance } = require("../google-drive-routes");
const upload = require("../middlewares/upload");
// This route is PROTECTED by auth middleware
const fs = require("fs");

// will get you all connected drives with tokens [driveId, token]
// ? can do INNER JOIN to get driveName
router.get("/", async function (req, _res) {
    const { userId } = req.auth; // coming from auth middleware
    console.log(userId);
    let drives = [];
    try {
        const user = await User.findOne({ _id: userId });
        drives = user.drives;
        _res.json({ data: drives });
    } catch (error) {
        console.log(error);
        _res.status(500).send("Server error");
    }
});

// save or update user drive token
// request body should contain drive name, token
router.post("/", async function (req, res) {
    const { driveName, token } = req.body;
    const { userId } = req.auth;

    if (userId && driveName && token && token.length) {
        // Check if Drive exists?
        let user = await User.findOne({ _id: userId });
        console.log(user);
        if (!user) return res.send("User not found");
        try {
            if (user.drives.length)
                user.drives.forEach((d, i) => {
                    if (d.driveName == driveName) user.drives[i].token = token;
                });
            else user.drives.push({ driveName, token });
            await user.save();
            res.status(201).json({
                message: "Drive created/updated successfully",
            });
        } catch (error) {
            res.status(422).json({ message: "Invalid data" });
        }
    } else {
        res.status(422).json({ message: "Invalid data" });
    }
});

router.post("/getFolders", async (req, res) => {
    if (!req.auth.userId) return res.send("User not found");
    const token = req.body.token;
    if (!token) return res.status(400).json({ message: "Bad request" });
    const drive = getDriveInstance(token);
    const response = await drive.files.list({
        pageSize: 10,
        q: "mimeType='application/vnd.google-apps.folder'",
        fields: "nextPageToken, files(id, name,mimeType)",
    });
    const files = response.data.files;
    if (files.length) {
        res.send(files);
    } else {
        res.send("No files found.");
    }
});

router.post("/getFiles", async (req, res) => {
    if (!req.auth.userId) return res.send("User not found");
    const { token, folderId, folderName } = req.body;
    if (!(token && folderId))
        return res.status(400).json({ message: "Bad request" });
    const drive = getDriveInstance(token);
    const response = await drive.files.list({
        pageSize: 10,
        q: `'${folderId}' in parents and trashed = false`,
        fields: "files(id, name, createdTime,mimeType, webContentLink)",
    });
    const files = response.data.files;
    if (files.length) {
        res.json({ data: files });
    } else {
        res.send("No files found.");
    }
});

router.post("/about", async (req, res) => {
    if (!req.auth.userId) return res.send("User not found");
    console.log("I am hitting this api");
    console.log("body ", req.body);
    const { token, driveName } = req.body;
    if (!token) return res.status(400).json({ message: "Bad request" });
    const drive = getDriveInstance(token);
    try {
        const driveInformations = await drive.about.get({
            fields: "storageQuota",
        });
        res.status(200).json({
            data: { ...driveInformations.data.storageQuota, driveName },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
});

router.post("/upload", upload.single("file"), (req, res) => {
    if (!req.auth.userId) return res.send("User not found");
    const { token } = req.body;
    console.log("token ", token);
    console.log("fileeeeee ", req.file);
    const filePath = req.file.path;
    const fileMetadata = {
        name: req.file.originalname,
    };
    const media = {
        mimeType: req.file.mimetype,
        body: fs.createReadStream(filePath),
    };

    const drive = getDriveInstance(token);
    console.log(drive);

    drive.files.create(
        {
            resource: fileMetadata,
            media: media,
            fields: "id",
        },
        (err, file) => {
            if (err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                console.log(`File ID: ${file.data.id}`);
                res.send(`File ID: ${file.data.id}`);
            }

            fs.unlinkSync(filePath);
        }
    );
    // res.status(200).json({ message: "File uploaded successfully" });
});

router.post("/search", async (req, res) => {
    const { fileName, token } = req.body;
    const drive = getDriveInstance(token);
    try {
        const files = await searchFiles(fileName, drive);
        res.status(200).json({ data: files });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error while searching" });
    }
});

async function searchFiles(query, drive) {
    try {
        const response = await drive.files.list({
            q: `name contains '${query}'`,
            fields: "nextPageToken, files(id, name, mimeType, webContentLink)",
        });

        const files = response.data.files;
        console.log(`Found ${files.length} files:`);

        files.forEach((file) => {
            console.log(`${file.name} (${file.mimeType}) - ${file.id}`);
        });
        return files;
    } catch (err) {
        console.log("drive: ", err);
        throw new Error(err);
    }
}

module.exports = router;
