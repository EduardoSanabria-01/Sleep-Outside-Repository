import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category');

// 1. Instancia de ProductData
const dataSource = new ProductData();

// 2. Elemento del DOM donde se renderizará la lista
const listElement = document.querySelector('.product-list');

// 3. Instancia de ProductList pasándole la categoría, la fuente de datos y el elemento
const myList = new ProductList(category, dataSource, listElement);

// 4. Inicializar para mostrar los productos
myList.init();