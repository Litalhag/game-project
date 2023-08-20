const cart = {};
// כשקוראים לפונקציה מבחוץ עם פרודוקטאידי היא מחזירה את הפונקציה הפנימית לתוך משתנה כלשהו ואז אפשר לקרוא לאותו משתנה עם סוגריים ריקים ויש לה את הנתונים על המשתנה מהפונקציה הקודמת
function addProductToCart(productId) {
  console.log("one", productId);
  return function () {
    // add product to cart,event listener?
    cart[productId] = (cart[productId] || 0) + 1;
    updateCart();
  };
}
function updateCart() {
  const cartElement = document.querySelector(".cart"); // CR - should be 'const cartItemsDiv = document.querySelector('.cart-items');'
  cartElement.innerHTML = "";
  for (const [productId, quantity] of Object.entries(cart)) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `product ID:${productId} and quantity:${quantity}`; // CR - should be 'cartItemDiv.innerHTML = `Product ${productId}: ${quantity}`;'
    cartElement.appendChild(cartItemDiv);
  }
}

const products = document.querySelectorAll(".product");
products.forEach((element) => {
  const btn = element.querySelector("button");
  btn.addEventListener("click", addProductToCart(element.dataset.id));
});
