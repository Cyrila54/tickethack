// This program generate trips in trips.json file. Feel free to modify or improve it!

const moment = require('moment'); // génére des dates aléatoires
const momentRandom = require('moment-random');  // génére des dates aléatoires
const fs = require('fs');

const NB_TRIPS = 2000;
const CITIES = ['Paris', 'Lyon', 'Marseille', 'Bruxelles']; // liste prédéfinie de villes
const MIN_PRICE = 25;
const MAX_PRICE = 150; // plage de prix aléatoire

function randomElement(array, nb) { //permet de choisir une ville au hasard
  const shuffled = [...array].sort(() => 0.5 - Math.random()); 
  return shuffled.slice(0, nb);
}

function randomNumber(min, max) { // random un chiffre aléatoire
  return Math.floor(Math.random() * (max - min)) + min;
}

const trips = [];
for (let i = 0; i < NB_TRIPS; i++) {
  const [departure, arrival] = randomElement(CITIES, 2);
  const date = momentRandom(moment().add(2, 'weeks'), moment());
  trips.push({ departure, arrival, date: { $date: date.toDate() }, price: randomNumber(MIN_PRICE, MAX_PRICE) }); // génère date et plage de prix aléatoire
}

const sortedTrips = trips.sort((a, b) => a.date.$date - b.date.$date);
fs.writeFile('./trips.json', JSON.stringify(sortedTrips), (err) => { //enregistre les voyages créer dans le fichier trips.json
  if (err) {
    console.error(err);
  } else {
    console.log(`${NB_TRIPS} trips have been generated in trips.json file. Happy hackathon!`);
  }
});
