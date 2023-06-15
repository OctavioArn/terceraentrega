const order = orderManager1.getCurrentOrder();

let ul = document.getElementById("products");

order.products.forEach((element) => {
    ul.innerHTML += `<li>${element.name} - ${element.price} x ${element.quantity}</li>`;
});

const totalPrice = document.getElementById("totalPrice");

let total = order.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
);

totalPrice.innerHTML = `Total: ${total}`;

// let goBack = document.createElement("button");
// goBack.id = "go-back";
// goBack.innerHTML = "Go back";

// mainSection.appendChild(goBack);

// goBack.addEventListener("click", () => {
//     window.location.href = "../index.html";
// });

