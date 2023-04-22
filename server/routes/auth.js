const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");
const salt = 10;

router.post("/register", function (req, res) {
    const { username, email, password } = req.body;

    if (username && email && password) {
        bcrypt.hash(password, salt, function (err, hashedPassword) {
            if (err) return res.status(400).send(err);

            db.query(
                "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
                [username, email, hashedPassword],
                function (err, result) {
                    if (err) return res.status(400).send(err);

                    res.send("User created");
                }
            );
        });
    } else {
        res.status(422).send("Invalid data");
    }
});

router.post("/login", function (req, res) {
    const { email, password } = req.body;

    if (email && password) {
        db.query(
            "SELECT id, password FROM user WHERE email = ?",
            email,
            function (err, users) {
                if (err) return res.status(400).send(err);

                if (users && users.length) {
                    const user = users.pop();

                    bcrypt.compare(
                        password,
                        user.password,
                        function (err, same) {
                            if (err) return res.status(400).send(err);
                            if (same) {
                                const token = jwt.sign(
                                    { userId: user.id },
                                    process.env.JWT_SECRET
                                );
                                res.send(token);
                            } else {
                                res.status(401).send("Wrong credentials");
                            }
                        }
                    );
                } else {
                    res.status(401).send("Wrong credentials");
                }
            }
        );
    } else {
        res.status(422).send("Invalid data");
    }
});

module.exports = router;
