let newClient = document.getElementById("newClient");

newClient.addEventListener("click", () => {
    orderManager1.createOrder();
    window.location.href = "/products.html";
});
