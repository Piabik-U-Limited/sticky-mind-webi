const express = require("express");
const app = express();

const path = require("path");

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server Running on port: ", port);
});
