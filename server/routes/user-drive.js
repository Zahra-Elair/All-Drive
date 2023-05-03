const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const { User, UserDriveSchema, userDriveSchema } = require("../models/user");
const { getDriveInstance } = require("../google-drive-routes").getDriveInstance;
// This route is PROTECTED by auth middleware

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
    console.log(userId);

    if (userId && driveName && token && token.length) {
        // Check if Drive exists?
        let user = await User.findOne({ _id: userId });
        console.log(user);
        if (!user) return res.send("User not found");
        if (user.drives) {
            user.drives.forEach((d, i) => {
                if (d.driveName == driveName) user.drives[i].token = token;
            });
            await user.save();
            res.send("Drive token updated");
        } else {
            userDriveSchema = new UserDriveSchema({
                driveName,
                token,
            });
            user.updateOne(
                { $push: { drives: userDriveSchema } },
                { new: true },
                function (err, user) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(user);
                    }
                }
            );
            await userDrive.save();
            res.status(201).send("Connected to new drive");
        }
    } else {
        res.status(422).send("Invalid data");
    }
});

router.post("/getFiles", async (req, res) => {
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

router.post("/about", async (req, res) => {
    if (!req.auth.userId) return res.send("User not found");
    const token = req.body.token;
    if (!token) return res.status(400).json({ message: "Bad request" });
    const drive = getDriveInstance(token);
    try {
        const driveInformations = await drive.about.get({
            fields: "storageQuota",
        });
        res.send(driveInformations);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;
