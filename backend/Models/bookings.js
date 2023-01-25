const mongoose = require ('mongoose');

const tripSchema = mongoose.Schema({
    departure:String,
    arrival:String,
    date: String,
    price:Number,
    ispaid:Boolean,

})

const Booking = mongoose.model('bookings', tripSchema);
module.exports=Booking;