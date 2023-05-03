const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const { User, UserDriveSchema, userDriveSchema } = require("../models/user");
// This route is PROTECTED by auth middleware

// will get you all connected drives with tokens [driveId, token]
// ? can do INNER JOIN to get driveName
router.get("/", async function (req, res) {
    const { userId } = req.auth; // coming from auth middleware
    const user = await User.find({ userId });
    res.send(user.drives);
});

// save or update user drive token
// request body should contain drive name, token
router.post("/", async function (req, res) {
    const { driveName, token } = req.body;
    const { userId } = req.auth;

    if (userId && driveName && token && token.length) {
        // Check if Drive exists?
        let user = await User.findOne({ userId });
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

module.exports = router;
