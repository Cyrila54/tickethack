var express = require("express");
var router = express.Router();
const Booking = require("../models/bookings");

router.post("/", (req, res) => {
  const newBooking = new Booking({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
    ispaid:false
  });
  newBooking.save()
  .then((data) => {
    res.json({Booking:data})
    console.log(data);
    /* 
    EXPECTED :
    {
  "Booking": {
    "departure": "Paris",
    "arrival": "Lyon",
    "date": "2023-01-24",
    "ispaid": false,
    "_id": "63d10acc75e8574a7d62b659",
    "__v": 0
  }
}
 */
  });
});

router.delete("/del/:id", (req, res) => {
  Booking.deleteOne({_id:req.params.id}).then
  ((data)=>{
    res.json({newResult:data})
    /*
    EXPECTED:
    {
  "newResult": {
    "acknowledged": true,
    "deletedCount": 1
  }
} */

  })
});

router.get("/find", (req, res) => {
  Booking.find().then(data=>{
    res.json({resultFind:data})
  })
  /* 
  EXPECTED:
  {
  "resultFind": [
    {
      "_id": "63d0e05e7f03a35342754473",
      "departure": "Paris",
      "arrival": "Lyon",
      "date": "09:38",
      "price": 67,
      "__v": 0
    },
    {
      "_id": "63d10b596326b920064f239f",
      "departure": "Paris",
      "arrival": "Lyon",
      "date": " 01:02",
      "price": 134,
      "__v": 0
    }
  ]
}
 */
});

router.get("/purchase/:id", (req, res) => {
  Booking.find({_id:req.params.id}).then (data=>{
    res.json({resultPurchase:data})
  })

});


router.put('/update/:id', (req,res)=>{
  Booking.updateOne({_id:req.params.id},{ispaid:true})
  .then (data=>{
    res.json({resultUpdate:data})
  })
})

router.get("/find/bookings", (req, res) => {
  Booking.find({ispaid: true}).then(data=>{
    res.json({resultFind:data})
  })
})

module.exports = router;
