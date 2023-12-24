function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "inline-block";
}

function changeSlides(n) {
  showSlides((slideIndex += n));
}

function autoSlide() {
  changeSlides(1);
}

var slideIndex = 1;
showSlides(slideIndex);

// Automatic sliding
var slideInterval = setInterval(autoSlide, 4000);

// Pause on hover
var slidesContainer = document.getElementsByClassName("slider-container")[0];
slidesContainer.addEventListener("mouseover", function () {
  clearInterval(slideInterval);
});

// Resume on hover removal
slidesContainer.addEventListener("mouseout", function () {
  slideInterval = setInterval(autoSlide, 4000);
});
