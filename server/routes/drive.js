const Drive = require("../models/drive");

const router = require("express").Router();

router.get("/", async (req, res) => {
    let drives = await Drive.find();

    res.send(drives);
});

module.exports = router;
