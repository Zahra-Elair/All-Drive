// const mysql = require("mysql");

// let db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// db.connect(function (err) {
//     if (err) throw err;

//     console.log("Connected to the database");
// });

// module.exports = db;

// ! Execute this script only once
// Connect to MongoDB and "Google Drive", "Microsoft One Drive", "Dropbox" collections
const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main() {
    await mongoose.connect(
        "mongodb+srv://alabaganne:ala50101959@cluster0.xga5n.mongodb.net/all-drive?retryWrites=true&w=majority"
    );

    const DriveSchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true,
        },
    });

    const Drive = mongoose.model("Drive", DriveSchema);

    let drives = await Drive.find();
    if (drives.length) {
        console.log("Drives already inserted");
        return;
    }

    Drive.insertMany([
        { name: "Google Drive" },
        { name: "Microsoft One Drive" },
        { name: "Dropbox" },
        { name: "Mega" },
    ])
        .then(async function () {
            drives = await Drive.find();

            if (drives.length) {
                console.log("Drives inserted successfully");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}
main();
