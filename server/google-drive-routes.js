const router = require("express").Router();
const { google } = require("googleapis");

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const scopes = [process.env.GOOGLE_SCOPE];
const redirectUrl = process.env.GOOGLE_REDIRECT_URL;

router.get("/", (req, res) => {
    const auth = new google.auth.OAuth2({
        clientId,
        clientSecret,
    });

    const authUrl = auth.generateAuthUrl({
        access_type: "online",
        redirect_uri: redirectUrl,
        scope: scopes,
    });

    res.redirect(authUrl);
});

router.get("/auth", async (req, res) => {
    const code = req.query.code;
    const auth = new google.auth.OAuth2({
        clientId,
        clientSecret,
        redirectUri: redirectUrl,
    });
    const { tokens } = await auth.getToken(code);

    //remove dots from token
    const token = tokens.access_token;
    console.log(token);
    const redirectLink = `http://localhost:9000/add-drive-middleware/google-drive/${token}`;
    res.redirect(redirectLink);
});

function getDriveInstance(token) {
    const auth = new google.auth.OAuth2({
        clientId,
        clientSecret,
    });
    auth.setCredentials({ access_token: token });
    const drive = google.drive({ version: "v3", auth });
    return drive;
}

router.post("/getFiles", async (req, res) => {
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

router.get("/drives", () => {});

module.exports = { router, getDriveInstance };
