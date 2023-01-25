document.getElementById('datePicker').valueAsDate = new Date(); //préremplir la date du jour par défaut

document.querySelector('#searchbutton').addEventListener('click',
    function () {
        const selectedDate = document.querySelector('#datePicker').value
        console.log(selectedDate)
        const selectedDeparture = document.querySelector('#departure').value
        const selectedArrival = document.querySelector('#arrival').value
        fetch('http://localhost:3000/travels', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                departure: selectedDeparture,
                arrival: selectedArrival,
                date: selectedDate,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.trips)
                if (data.trips.length > 0) {
                    document.querySelector('#result').innerHTML =
                        `<div id="trainresult">
                            </div>`
                    for (let i = 0; i < 20; i++) {
                        document.querySelector('#trainresult').innerHTML += `
                        <div class="train">
                            <p>${data.trips[i].departure} > ${data.trips[i].arrival}</p>
                            <p>${data.trips[i].date}</p>
                            <p>${data.trips[i].price}</p>
                            <button type="submit" id="bookbutton">Book</button>
                        </div>`
                    }
                    const allButtons = document.querySelectorAll(`#bookbutton`);
                    for (let j = 0; j < allButtons.length; j++) {
                        allButtons[j].addEventListener('click', function () {
                            console.log(data.trips[j]) // Remplacer par la bonne route pour enregistrer le choix en BDD
                        })
                    }
                } else {
                    document.querySelector('#result').innerHTML = `
                    <div id="noresult">
                        <img class="imageresult" src="/tickethack/frontend/images/notfound.png" />
                        <hr>
                        <p class="textresult">No trip found.</p>
                    </div>`;
                }

            })
    })

