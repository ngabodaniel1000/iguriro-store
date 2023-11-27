function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.visibility ="visible";
      } else {
        li[i].style.display = "none";
      }
    }
    
  }
  // cart javascript
  let cartItems = [];
let cartTotal = 0;

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    cartTotal += productPrice;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear the cart display
    cartItemsElement.innerHTML = '';

    // Populate the cart display with updated items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
    });

    // Update the total price
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

function showcart(){
  let cart = document.getElementById("cart");
  cart.style.display = "block";
  cart.style.position = "absolute";
  cart.style.top = "30px";
  cart.style.left = "450px";
  cart.style.padding ="10px";
  cart.style.background ="rgb(0, 0, .5 ,0.7)";
  cart.style.color ="#fff"
}