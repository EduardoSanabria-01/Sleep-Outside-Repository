import CheckoutProcess from "./CheckoutProcess.mjs";

const order = new CheckoutProcess("so-cart", ".checkout-summary");
order.init();

document.querySelector("#zip").addEventListener("blur", () => {
  order.calculateOrderTotal();
});

document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  order.checkout(e.target);
});