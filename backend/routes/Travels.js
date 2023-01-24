var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const Trip = require("../models/trips");

router.get("/", (req, res) => {
  let date = req.body.date;
  date = Date.parse(date); // transforme la string reçue en date
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    //date: { $gte: new Date("2023-01-24").toISOString(), $lt: new Date("2023-01-24").toISOString() },
    date: { $gte: new Date("2023-01-24").toISOString() },
  }).then((data) => {
    console.log(data);
  });
});

module.exports = router;
