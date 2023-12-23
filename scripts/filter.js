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

// Initially unhides all books
window.onload = () => {
  filterBooks("all");
};
