const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db = require("./config/mongoose");
// Connect db
db();

const PORT = process.env.PORT || 3000;

dotenv.config({ path: "config.env" });

// View Engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes/home.routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in starting server!");
  } else {
    console.log(`Server started on port: ${PORT}`);
  }
});
