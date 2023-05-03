const Drive = require("../models/drive");

const router = require("express").Router();

router.get("/", (req, res) => {
    const drives = Drive.find();

    res.send(drives);
});

module.exports = router;
