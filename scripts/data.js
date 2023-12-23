//#region List of books
var books = {
  data: [
    {
      title: "Harry Potter and the Philosopher's Stone",
      category: "Fantasy",
      price: "25",
      image: "resources/Books/Fantasy/1.jpg",
    },
    {
      title: "Harry Potter and the Chamber of Secrets",
      category: "Fantasy",
      price: "30",
      image: "resources/Books/Fantasy/2.jpg",
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      category: "Fantasy",
      price: "35",
      image: "resources/Books/Fantasy/3.jpg",
    },
    {
      title: "Harry Potter and the Goblet of Fire",
      category: "Fantasy",
      price: "50",
      image: "resources/Books/Fantasy/4.jpg",
    },
    {
      title: " Harry Potter and the Order of the Phoenix",
      category: "Fantasy",
      price: "65",
      image: "resources/Books/Fantasy/5.jpg",
    },
    {
      title: "Harry Potter and the Half-Blood Prince",
      category: "Fantasy",
      price: "55",
      image: "resources/Books/Fantasy/6.jpg",
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      category: "Fantasy",
      price: "70",
      image: "resources/Books/Fantasy/7.jpg",
    },
    {
      title: "Grokking Algorithms",
      category: "IT",
      price: "60",
      image: "resources/Books/IT/grokking.jpg",
    },
    {
      title: "Eloquent Javascript",
      category: "IT",
      price: "75",
      image: "resources/Books/IT/javascript.jpg",
    },
    {
      title: "python programming for beginners",
      category: "IT",
      price: "65",
      image: "resources/Books/IT/python.jpg",
    },
    {
      title: "Murder on the orient express",
      category: "Mystery",
      price: "80",
      image: "resources/Books/Mystery/orient-express.jpg",
    },
    {
      title: "Sherlock Holmes and other stories",
      category: "Mystery",
      price: "75",
      image: "resources/Books/Mystery/sherlock.jpg",
    },
    {
      title: "Physics for beginners",
      category: "Science",
      price: "90",
      image: "resources/Books/Science/physics.jpg",
    },
    {
      title: "Basics of Chemistry",
      category: "Science",
      price: "85",
      image: "resources/Books/Science/chemistry.jpg",
    },
    {
      title: "Conceptual Biology",
      category: "Science",
      price: "65",
      image: "resources/Books/Science/biology.jpg",
    },
    {
      title: "SQL for beginners",
      category: "IT",
      price: "50",
      image: "resources/Books/IT/sql.jpg",
    },
    {
      title: "Machine learning for beginners",
      category: "IT",
      price: "100",
      image: "resources/Books/IT/ML.jpg",
    },
    {
      title: "Code like a pro in C#",
      category: "IT",
      price: "75",
      image: "resources/Books/IT/csharp.jpg",
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

//#endregion
