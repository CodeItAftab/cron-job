const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./tasks/ping");

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
