import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  
  async init() {
    // 1. Obtiene el producto directamente de la API usando el ID
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    
    document.getElementById('addToCart')
            .addEventListener('click', this.addProductToCart.bind(this));
  }
  
  addProductToCart() {
    // Obtener el carrito actual o inicializarlo como array vacío
    let cart = getLocalStorage('so-cart') || [];
    // Asegurarnos de que sea un array antes de hacer push
    if (!Array.isArray(cart)) {
      cart = [];
    }
    cart.push(this.product);
    setLocalStorage('so-cart', cart);
  }
  
  renderProductDetails() {
    document.querySelector('#productName').innerText = this.product.Brand.Name;
    document.querySelector('#productNameWithoutBrand').innerText = this.product.NameWithoutBrand;
    
    // Cambiado de this.product.Image a PrimaryLarge según los requisitos de la API
    const productImage = document.querySelector('#product-image');
    productImage.src = this.product.Images.PrimaryLarge;
    productImage.alt = this.product.Name;

    document.querySelector('#productCard__price').innerText = this.product.FinalPrice;
    document.querySelector('#product-colorName').innerText = this.product.Colors[0].ColorName;
    document.querySelector('#product-description').innerHTML = this.product.DescriptionHtmlSimple;
    document.querySelector('#addToCart').dataset.id = this.product.Id;
  }
}