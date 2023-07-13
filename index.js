const express = require("express");
const path = require("path");
const { ServerConfig } = require("./config");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const app = express();
const URL = require("./models/url");
const StaticRoute = require("./routes/staticRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(
  console.log("MongoDB connected!")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", urlRoute);
app.use("/", StaticRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(ServerConfig.PORT, () => {
  console.log("We are able to connect with PORT,", ServerConfig.PORT);
});
