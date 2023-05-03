const mongoose = require("mongoose");

const DriveSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

const Drive = mongoose.model("Drive", DriveSchema);

module.exports = Drive;
