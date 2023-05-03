const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const UserDrive = require("../models/user-drive");
// This route is PROTECTED by auth middleware

// will get you all connected drives with tokens [driveId, token]
// ? can do INNER JOIN to get driveName
router.get("/", async function (req, res) {
    const { userId } = req.auth; // coming from auth middleware

    const userDrives = await UserDrive.find({ userId });

    res.send(userDrives);

    // db.query(
    //     "SELECT driveId, token FROM userDrive WHERE userId = ?",
    //     userId,
    //     function (err, rows) {
    //         if (err) return res.status(400).send(err);

    //         res.send(rows);
    //     }
    // );
});

// save or update user drive token
// request body should contain driveId, token
router.post("/", async function (req, res) {
    const { driveId, token } = req.body;
    const { userId } = req.auth;

    if (userId && driveId && token && token.length) {
        // Check if Drive exists?
        let userDrive = await UserDrive.findOne({ userId, driveId });

        if (userDrive) {
            userDrive.token = token;
            console.log(userDrive);
            userDrive.save();
            res.send("Drive token updated");
        } else {
            userDrive = new UserDrive({
                userId,
                driveId,
                token,
            });

            userDrive.save();
            res.status(201).send("Connected to new drive");
        }

        // db.query(
        //     "SELECT 1 FROM userDrive WHERE driveId = ? and userId = ?",
        //     [driveId, userId],
        //     function (err, rows) {
        //         if (err) return res.status(400).send(err);
        //         if (rows.length == 0) {
        //             // first time connection to this drive, insert record
        //             db.query(
        //                 "INSERT INTO userDrive (userId, driveId, token) VALUES (?, ?, ?)",
        //                 [userId, driveId, token],
        //                 function (err, result) {
        //                     if (!err)
        //                         res.status(201).send("Connected to new drive");
        //                 }
        //             );
        //         } else {
        //             // Update existing record token
        //             db.query(
        //                 "UPDATE userDrive SET token = ? " +
        //                     "WHERE userId = ? AND driveId = ?",
        //                 [token, userId, driveId],
        //                 function (err, result) {
        //                     if (err) return res.status(400).send(err);
        //                     res.send("Drive token updated");
        //                 }
        //             );
        //         }
        //     }
        // );
    } else {
        res.status(422).send("Invalid data");
    }
});

module.exports = router;
