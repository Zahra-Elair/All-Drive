require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 9000;

const authMiddleware = require("./middlewares/auth");

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));
app.use("/user-drive", authMiddleware, require("./routes/userDrive"));

app.listen(PORT, function () {
    console.log("App is listening on port " + PORT);
});
