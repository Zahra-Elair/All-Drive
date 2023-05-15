const mongoose = require("mongoose");

const userDriveSchema = new mongoose.Schema({
    driveName: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: String,
    },
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    drives: [
        {
            driveName: {
                type: String,
                required: true,
            },
            token: {
                type: String,
                required: String,
            },
        },
    ],
});

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userDriveSchema,
};
