import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
      <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.Name}" />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // 1. Obtiene los productos pasando la categoría a la API
    const list = await this.dataSource.getData(this.category);
    
    // 2. Renderiza la lista en el DOM
    this.renderList(list);

    // 3. Actualiza el título dinámicamente con la categoría seleccionada
    const categoryTitle = document.querySelector('.products .title');
    if (categoryTitle && this.category) {
      categoryTitle.innerHTML = `Top Products: ${this.category.charAt(0).toUpperCase() + this.category.slice(1)}`;
    }
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}