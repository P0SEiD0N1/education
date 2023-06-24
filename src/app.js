const express = require("express");
const fileUpload = require("express-fileupload");

const config = require("./config");
const routes = require("./routes");

const app = express();



app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world :))");
});

app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "/uploads"));

app.use(routes);

app.listen(config.PORT, () => {
  console.log(config.PORT);
});
