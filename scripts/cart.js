// Initialize an empty cart or retrieve existing cart from session cookie
var cart = JSON.parse(getSessionCookie("cart")) || { items: [] };

// Function to get the value of a session cookie
function getSessionCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(";");
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}

// add items to the cart
function addItemToCart(item) {
  cart.items.push(item);
  updateCartCookie();
}

// remove items from the cart
function removeItemFromCart(index) {
  cart.items.splice(index, 1);
  updateCartCookie();
}

// update cart cookies
function updateCartCookie() {
  document.cookie = "cart=" + JSON.stringify(cart) + "; path=/";
}

// Adding product to cookies upon button clicked

var addBtns = document.querySelectorAll(".addToCart");

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    var card = btn.parentElement;
    var title = card.getElementsByTagName("p")[0].innerText;
    var image = card.getElementsByTagName("img")[0].src;
    var price = card.getElementsByTagName("p")[1].innerText.replace("$", "");

    var item = {
      title: title,
      image: image,
      price: price,
    };

    addItemToCart(item);
  });
});

// retrieving products from cookies to display in cart
function displayCart() {
  var cartContainer = document.getElementById("cartContainer");
  cart.items.forEach((item, index) => {
    var row = document.createElement("tr");

    var number = document.createElement("td");
    number.textContent = index + 1;

    var title = document.createElement("td");
    title.textContent = item.title;

    var imageCol = document.createElement("td");
    var image = document.createElement("img");
    image.src = item.image;
    imageCol.appendChild(image);

    var price = document.createElement("td");
    price.innerText = "$" + item.price;

    var btnTd = document.createElement("td");
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeFromCart", "btn", "btn-primary");
    btnTd.appendChild(removeBtn);

    row.appendChild(number);
    row.appendChild(imageCol);
    row.appendChild(title);
    row.appendChild(price);
    row.appendChild(btnTd);
    cartContainer.appendChild(row);
  });
}

displayCart();

// removing products from cookies upon button clicked
var removeBtns = document.querySelectorAll(".removeFromCart");
removeBtns.forEach((item, index) => {
  item.addEventListener("click", () => {
    removeItemFromCart(index);
    location.reload();
  });
});
