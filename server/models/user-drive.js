const mongoose = require("mongoose");

const userDriveSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    driveId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    token: {
        type: String,
    },
});

const UserDrive = mongoose.model("UserDrive", userDriveSchema);

module.exports = UserDrive;
