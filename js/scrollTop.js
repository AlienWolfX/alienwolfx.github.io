let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", () => {
  scrollToTop();
});

function scrollToTop() {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
