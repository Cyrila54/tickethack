/* OPERATION QUAND CLIC SUR SEARCH */

document.querySelector("#searchbutton").addEventListener("click", () => {
  fetch("http://localhost:3000/travels/find", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      departure: document.querySelector("#Departure").value,
      arrival: document.querySelector("#Arrival").value,
      date: document.querySelector("#Date").value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      if (data.result.length == 0) {
        console.log("zero");
        //document.querySelector('')  ---- Mettre en place l'image pas de résultat ---
      } else if (data.result.length > 0) {
        document.querySelector("#initialresult").remove();
        for (const element of data.result) {
          let newDate = Date.parse(element.date);

          let hours = new Date(newDate).getHours();
          let minutes = new Date(newDate).getMinutes();
          if (hours < 10) {
            hours = "0" + hours;
          }
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          let formattedTime = hours + ":" + minutes;

          document.querySelector("#result").innerHTML += `
              <div class="train">
        <div class="trajet">
          <span><span id="depart">${element.departure}</span><span id="arrivee">${element.arrival}</span> <span id="formatDate">${formattedTime}</span> <span id="price">${element.price}</span>€</span>
          <button class="bookbutton">Book</button>
        </div>
      </div>
              `;
        }
      }
      /* AJOUT A 'BOOKINGS' LE CHOIX SELECTIONNE */

      for (let i = 0; i < document.querySelectorAll(".bookbutton").length; i++) {
        document.querySelectorAll(".bookbutton")[i].addEventListener("click", () => {
            fetch("http://localhost:3000/bookings", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                departure: document.querySelectorAll("#depart")[i].textContent,
                arrival: document.querySelectorAll("#arrivee")[i].textContent,
                date: document.querySelectorAll("#formatDate")[i].textContent,
                price: document.querySelectorAll("#price")[i].textContent,
              }),
            })
              .then((response) => response.json)
              .then((data) => {
                console.log(data.Booking);
                console.log(data);
              });
          });
      }
    });
});
