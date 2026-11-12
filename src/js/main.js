import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { renderAlert } from "./utils.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const listing = new ProductList("tents", dataSource, listElement);

listing.init();

// Muestra la alerta personalizada en el index
renderAlert("¡Gran venta de temporada! Descuentos de hasta el 30% en carpas seleccionadas.", "warning");
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();