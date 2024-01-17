window.addEventListener('scroll', checkScrollPosition);

var scrollUpElement = document.getElementById("scroll-arrow");
scrollUpElement.addEventListener('click', ScrollUp);

function checkScrollPosition() {
  if (window.scrollY > 200) {
    scrollUpElement.classList.add("return-arrow-show");
  } else {
    scrollUpElement.classList.remove("return-arrow-show");
  }
}

function ScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

