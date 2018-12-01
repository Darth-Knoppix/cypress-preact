const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(8080, function() {
  console.log("Server running at port 8080: http://127.0.0.1:8080");
});
