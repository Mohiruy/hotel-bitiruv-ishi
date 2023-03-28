const gap = 16;

const carousel = document.getElementById("carousel"),
  destination = document.getElementById("destination"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);  
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
});

let width = destination.offsetWidth;
window.addEventListener("resize", e => (width = destination.offsetWidth));
