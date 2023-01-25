var express = require("express");
var router = express.Router();
const Booking = require("../models/bookings");

router.post("/", (req, res) => {
    console.log(req.body.date);
  const newBooking = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
  });
  newBooking.save()
  .then((data) => {
    res.json({Booking:data})
    console.log(data);
  });
});




module.exports = router;
