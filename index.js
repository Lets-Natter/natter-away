const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(bodyParser.json());

const natters = {};

app.get("/natters", (req, res) => {
  res.send(natters);
});

app.post("/natters", async (req, res) => {
  const id = uuidv4();
  const { natter } = req.body;

  natters[id] = { id, natter };

  res.status(201).send(natters[id]);
});

app.listen(5000, () => console.log("Listening on 5000.."));
