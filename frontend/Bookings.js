
    fetch("http://localhost:3000/bookings/find/bookings")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.resultFind);
            if (data.resultFind.length != 0) {
                document.querySelector("#body_booking").innerHTML =
                    `<div id="contentbookings">
                        <p>My bookings</p>
                        <div id="finalbookings"></div>
                        <hr id="hr2">
                        <p id="enjoy">Enjoy your travels with Tickethack!</p>
                        </div>`;
                for (let i = 0; i < data.resultFind.length; i++) {
                    let newDate = data.resultFind[i].date.trim().split(':');
                        const depDate = new Date();
                    depDate.setHours(parseInt(newDate[0]))
                    depDate.setMinutes(parseInt(newDate[0]))

                    let restingTime = new Date(depDate - new Date());

                    document.querySelector("#finalbookings").innerHTML +=
                        `<div class="booking_cont">
                       <p>${data.resultFind[i].departure} > ${data.resultFind[i].arrival} </p> 
                       <p>${data.resultFind[i].date} </p>
                       <p>${data.resultFind[i].price}€ </p>
                       <p>Departure in ${restingTime.getHours()}hours and ${restingTime.getMinutes()}minutes</p>
                   </div>
                   
               </div>`
                }
            } else {
                document.querySelector("#body_booking").innerHTML =
                    `  <div id="contentnocart"> 
                <p>No booking yet.</p>
                <p>What not plan a trip?</p>
                </div> `
            }
        });