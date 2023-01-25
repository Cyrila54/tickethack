var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");

router.post("/find", (req, res) => {
  let newDate = Date.parse(req.body.date);
  let year = new Date(newDate).getFullYear();
  let month = new Date(newDate).getMonth() + 1;
  let day = new Date(newDate).getDate();
// ${year}-${month}-${day + 1}

  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: {
      $gte: new Date(`${req.body.date}`).toISOString(),
      $lt: new Date(`${year}-${month}-${day + 1}`).toISOString(),
    },
  }).then((data) => {
    res.json({ result: data });
  });
});

module.exports = router;
