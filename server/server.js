const express = require("express");
const cors = require("cors");
const path = require("path");

const meetups = require("./data");

const app = express();
app.use(cors());

app.use("/materials", express.static(path.join(__dirname, "public", "materials")));

app.get("/api/meetups", (req, res) => {
  res.json(meetups);
});

app.get("/api/meetups/:id", (req, res) => {
  const meetup = meetups.find((m) => m.id == req.params.id);
  meetup ? res.json(meetup) : res.status(404).json({ message: "Not found" });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));