require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));

app.listen(PORT, function () {
    console.log("App is listening on port " + PORT);
});
