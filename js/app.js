let menuToggle = () => {
  let menuWrap = document.getElementById("menu-wrap");
  menuWrap.style.display = "block";
  menuWrap.classList.add("active-nav");
  menuWrap.classList.remove("close-nav");
};
let closeNav = () => {
  let menuWrap = document.getElementById("menu-wrap");
  menuWrap.classList.add("close-nav");
  menuWrap.classList.remove("active-nav");
  setTimeout(() => {
    menuWrap.style.display = "none";
  }, 500);
};

var acc = document.getElementsByClassName("accord");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-faq");
    if (this.classList.contains("active-faq")) {
      this.classList.remove("remove-faq");
    } else {
      this.classList.add("remove-faq");
    }
  });
}
