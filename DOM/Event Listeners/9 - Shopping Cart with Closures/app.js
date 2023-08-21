const cart = {};

function addProductToCart(productId) {
  return function () {
    if (cart.hasOwnProperty(productId)) {
      cart[productId]++;
    } else {
      cart[productId] = 1;
    }
    updateCart();
    console.log(cart); // for testing
  };
}

function updateCart() {
  let cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = '';
  for (const [productId, quantity] of Object.entries(cart)) {
    let cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `The product id is ${productId} and it's quantity is ${quantity}!`;
    cartItems.appendChild(cartItemDiv);
  }
}

let products = document.querySelectorAll('.product');
products.forEach((product) => {
  let btn = product.querySelector('button');
  const dataId = product.getAttribute('data-id');
  btn.addEventListener('click', addProductToCart(dataId));
});
