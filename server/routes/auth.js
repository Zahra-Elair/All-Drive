const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = 10;
const { User } = require("../models/user");

router.post("/register", function (req, res) {
    const { username, email, password } = req.body;

    if (username && email && password) {
        bcrypt.hash(password, salt, async function (err, hashedPassword) {
            if (err) return res.status(400).send(err);
            const user = new User({
                username,
                email,
                password: hashedPassword,
            });

            await user.save();

            res.send("User created");
        });
    } else {
        res.status(422).send("Invalid data");
    }
});

router.post("/login", async function (req, res) {
    const { email, password } = req.body;

    if (email && password) {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send("Invalid credentials");
        }

        bcrypt.compare(password, user.password, function (err, same) {
            if (err) return res.status(400).send(err);
            if (same) {
                const token = jwt.sign(
                    { userId: user._id },
                    process.env.ACCESS_TOKEN_SECRET
                );
                res.json({ token });
            } else {
                res.status(401).send("Wrong credentials");
            }
        });
    } else {
        res.status(422).send("Invalid data");
    }
});

module.exports = router;
