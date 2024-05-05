const express = require("express");
const cors = require("cors");
const addon = require("./build/Release/addon");

const app = express();
app.use(express.json());
app.use(cors());

const port = 7000;

app.post("/", (req, res) => {
  // res.json(addon.first_task(req.body.input));
  switch (req.body.id) {
    case 1:
      res.json(addon.first_task(req.body.input));
      break;
    case 2:
      res.json(addon.second_task(req.body.input));
      break;
    case 3:
      res.json(addon.third_task(req.body.input));
      break;
    case 8:
      res.json(addon.eighth_task(req.body.input));
      break;
    case 9:
      res.json(addon.ninth_task(req.body.input));
      break;
  }
});

app.post("/create-function", (req, res) => {
  res.json(addon.first_task(req.body.input));
});

app.post("/4", (req, res) => {
  res.json(addon.fourth_task(req.body.selected, req.body.func));
});

app.post("/5", (req, res) => {
  res.json(addon.fifth_task(req.body.func, req.body.first, req.body.second));
});

const start = () => {
  try {
    app.listen(port, () => console.log(`port: ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();

// const addon = require('./build/Release/addon');
// console.log(addon.fourth_task("Нулевая", "0001"));
