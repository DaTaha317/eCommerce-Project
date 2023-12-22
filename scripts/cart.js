//#region List of books
var books = {
  data: [
    {
      title: "Harry Potter and the Philosopher's Stone",
      category: "fantasy",
      price: "20",
      image: "resources/Books/Fantasy/1.jpg",
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      category: "fantasy",
      price: "20",
      image: "resources/Books/Fantasy/2.jpg",
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      category: "fantasy",
      price: "30",
      image: "resources/Books/Fantasy/3.jpg",
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      category: "fantasy",
      price: "50",
      image: "resources/Books/Fantasy/4.jpg",
    },
    {
      title: " Harry Potter and the Order of the Phoenix",
      category: "fantasy",
      price: "50",
      image: "resources/Books/Fantasy/5.jpg",
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      category: "fantasy",
      price: "60",
      image: "resources/Books/Fantasy/6.jpg",
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      category: "fantasy",
      price: "70",
      image: "resources/Books/Fantasy/7.jpg",
    },
  ],
};

//#endregion

//#region Display cards

var bookContainer = document.getElementById("bookContainer");

books.data.forEach(function (book) {
  // Create elements
  var card = document.createElement("div");
  card.classList.add("card", book.category, "hide");

  var image = document.createElement("img");
  image.src = book.image;

  var title = document.createElement("p");
  title.textContent = book.title;
  title.classList.add("book-title");

  var price = document.createElement("p");
  price.textContent = "$" + book.price;

  var addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Add to Cart";

  // Append the elements to the card
  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(price);
  card.appendChild(addToCartButton);

  // Append the card to the container
  bookContainer.appendChild(card);
});

// filter books function

function filterBooks(value) {
  var buttons = document.querySelectorAll(".filterBtns");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      // applies active effect to the button
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  var elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      // display all elements
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Initially setting all books to active
window.onload = () => {
  filterBooks("all");
};

//#endregion
