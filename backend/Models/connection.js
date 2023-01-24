const mongoose = require ('mongoose');
const connectionString = 'mongodb+srv://admin:kuqyWfdFZskYm5zR@cluster0.pgyytgf.mongodb.net/Travels';

mongoose.connect(connectionString, {connectTimeoutMS:2000})
    .then (() => console.log ('Database connected'))
    .catch ((error) => console.error(error))
