const express = require("express");
const { ServerConfig } = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(ServerConfig.PORT, () => {
  console.log("We are able to connect with PORT,", ServerConfig.PORT);
});
