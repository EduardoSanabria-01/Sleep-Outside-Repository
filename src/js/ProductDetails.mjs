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
    
    const addToCartBtn = document.getElementById('addToCart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', this.addProductToCart.bind(this));
    }
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
    const productName = document.querySelector('#productName');
    if (productName) productName.innerText = this.product.Brand.Name;

    const productNameWithoutBrand = document.querySelector('#productNameWithoutBrand');
    if (productNameWithoutBrand) productNameWithoutBrand.innerText = this.product.NameWithoutBrand;
    
    // Cambiado de this.product.Image a PrimaryLarge según los requisitos de la API
    const productImage = document.querySelector('#product-image');
    if (productImage) {
      productImage.src = this.product.Images.PrimaryLarge;
      productImage.alt = this.product.Name;
    }

    const productPrice = document.querySelector('#productCard__price');
    if (productPrice) productPrice.innerText = this.product.FinalPrice;

    const productColor = document.querySelector('#product-colorName');
    if (productColor) productColor.innerText = this.product.Colors[0].ColorName;

    const productDesc = document.querySelector('#product-description');
    if (productDesc) productDesc.innerHTML = this.product.DescriptionHtmlSimple;

    const addToCartBtn = document.querySelector('#addToCart');
    if (addToCartBtn) addToCartBtn.dataset.id = this.product.Id;
  }
}