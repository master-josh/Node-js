// 2WEQvAQloEY5Ujt0

const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.MODE_ENV !== "production") {
    require("dotenv").config();
}
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("hello welcome");
});

app.post("/", (req, res) => {
  res.send("this is a post req");
});

app.post("/api/people", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

const start = async () => {
  try {
    await mongoose.connect(CONNECTION);
    app.listen(PORT, () => {
      console.log(`app is active at http://localhost:` + PORT);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
 