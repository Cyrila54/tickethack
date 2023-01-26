fetch(`http://localhost:3000/bookings/find`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("#container_cart > p").remove();
    document.querySelector("#container_cart > p").textContent = "My Cart";
    let total = 0;
    for (const element of data.resultFind) {
      document.querySelector("#container_cart").innerHTML += `
<div class="bookContainer">
<div class="travel">${element.departure} > ${element.arrival}</div>
<div class="hours">${element.date}</div>
<div class="price">${element.price}€</div>
<div class="del"><span class="delete">X</span></div>
</div>
`;

      total += element.price;
    }

    document.querySelector("#container_cart").innerHTML += `
<div id="footer_container">
<div id="total"><span>Total : ${total}€</span></div>
<a href="Bookings.html"><button class="purchase">Purchase</button>
</div></a>
`;

    for (
      let i = 0;
      i < document.querySelectorAll(".bookContainer").length;
      i++
    ) {
      document
        .querySelectorAll(".delete")
        [i].addEventListener("click", function () {
          this.parentNode.parentNode.remove();

          console.log(data.resultFind[i]._id);
          fetch(
            `http://localhost:3000/bookings/del/${data.resultFind[i]._id}`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data.newResult);
            });
        });
    }

    document.querySelector(".purchase").addEventListener("click", function () {
      for (
        let i = 0;
        i < document.querySelectorAll(".bookContainer").length;
        i++
      ) {
        fetch(
          `http://localhost:3000/bookings/update/${data.resultFind[i]._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.resultUpdate);
          });
      }
    });
  }); //fin then data
