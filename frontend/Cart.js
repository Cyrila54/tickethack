document.querySelector('#').addEventListener('onload', displayBookings)

function displayBookings(){

    fetch ('http://localhost:3000').then (response=>response.json()).then(data=>{

/*     for (const element of data.resultFind){
    document.querySelector('').innerHTML +=
} */
    })

}

fetch("http://localhost:3000/travels/find/cart")
fetch("http://localhost:3000/travels/find/false")