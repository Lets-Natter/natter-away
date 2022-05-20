const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const natters = {};

app.get("/natters", (req, res) => {
  res.send(natters);
});

app.post("/natters", async (req, res) => {
  const id = uuidv4();
  const { natter } = req.body;

  natters[id] = { id, natter };

  await axios.post("http://localhost:5005/events", {
    type: "SomeoneNattered",
    data: { id, natter },
  });

  res.status(201).send(natters[id]);
});

app.post("/events", (req, res) => {
  console.log("Received Event: ", req.body.type);
  res.send({});
});

app.listen(5000, "127.0.0.1", () => console.log("Listening on 5000.."));
