function slideRight() {
  var clickToSlide = document.getElementById("child-two");
  clickToSlide.classList.toggle("slide-left");
}

function slideLeft() {
  var clickToSlide = document.getElementById("child-two");
  clickToSlide.classList.remove("slide-left");
}
