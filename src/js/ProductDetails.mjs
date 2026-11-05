import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document.getElementById('addToCart')
            .addEventListener('click', this.addProductToCart.bind(this));
  }
  addProductToCart() {
    setLocalStorage('so-cart', this.product);
  }
  renderProductDetails() {
    document.querySelector('#productName').innerText = this.product.Brand.Name;
    document.querySelector('#productNameWithoutBrand').innerText = this.product.NameWithoutBrand;
    document.querySelector('#product-image').src = this.product.Image;
    document.querySelector('#product-image').alt = this.product.Name;
    document.querySelector('#productCard__price').innerText = this.product.FinalPrice;
    document.querySelector('#product-colorName').innerText = this.product.Colors[0].ColorName;
    document.querySelector('#product-description').innerHTML = this.product.DescriptionHtmlSimple;
    document.querySelector('#addToCart').dataset.id = this.product.Id;
  }
}