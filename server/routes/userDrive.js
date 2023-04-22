const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
const salt = 10;
// ! this route is PROTECTED by auth middleware

// will get you all connected drives with tokens
router.get("/", function (req, res) {
    const { userId } = req.auth; // coming from auth middleware

    db.query(
        "SELECT driveId, token FROM userDrive WHERE userId = ?",
        userId,
        function (err, rows) {
            if (err) return res.status(400).send(err);

            res.send(rows);
        }
    );
});

// save or update user drive token
// request body should contain driveId, token
router.post("/", function (req, res) {
    const { driveId, token } = req.body;
});

module.exports = router;
