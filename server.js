const express = require("express");
const app = express();

app.use(express.static("dist"));

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(8080, function() {
  console.log("Server running at port 8080: http://127.0.0.1:8080");
});
