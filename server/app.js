require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 9000;
const mongoose = require("mongoose");

const authMiddleware = require("./middlewares/auth");

app.use(bodyParser.json());
app.use(cors());

async function main() {
    await mongoose.connect(
        "mongodb+srv://alabaganne:ala50101959@cluster0.xga5n.mongodb.net/all-drive?retryWrites=true&w=majority"
    );
    console.log("Connected to MongoDB");
}
main();

app.use("/", require("./google-drive-routes"));
app.use("/auth", require("./routes/auth"));
app.use("/user-drive", authMiddleware, require("./routes/user-drive"));

app.listen(PORT, function () {
    console.log("App is listening on port " + PORT);
});
