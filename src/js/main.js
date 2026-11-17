import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";
import { renderAlert, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices("tents");
const listElement = document.querySelector(".product-list");
const listing = new ProductList("tents", dataSource, listElement);

listing.init();

// Muestra la alerta personalizada en el index
renderAlert("¡Gran venta de temporada! Descuentos de hasta el 30% en carpas seleccionadas.", "warning");