import { loadHeaderFooter, setLocalStorage } from "./utils.mjs";

// Vaciar el carrito al completar la compra con éxito
setLocalStorage("so-cart", []);

loadHeaderFooter();