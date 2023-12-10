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

let toggleDrop = () => {
  let dpe = document.getElementById("dpe");
  let overlaydrop = document.getElementById("overlay-drop");
  overlaydrop.classList.toggle("drop-over");
  dpe.classList.toggle("active-dropdown");
};
//
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("#home");
  if (window.scrollY > 120) {
    header.classList.add("sticky-header");
  } else if (window.scrollY < 7) {
    header.classList.remove("sticky-header");
  }
  //  header.classList.toggle("sticky-header", window.scrollY > 120);
});

let toggleTab1 = () => {
  let tab2 = document.getElementById("tab2");
  let tab1 = document.getElementById("tab1");
  let swipeCont = document.getElementById("swipe-cont");
  swipeCont.classList.remove("active-swipe2");
  tab1.classList.add("Mui-selected");
  tab2.classList.remove("Mui-selected");
};
let toggleTab2 = () => {
  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let swipeCont = document.getElementById("swipe-cont");
  swipeCont.classList.add("active-swipe2");
  tab2.classList.add("Mui-selected");
  tab1.classList.remove("Mui-selected");
};

// Animation
document.addEventListener("DOMContentLoaded", initTextAnimSlider);

function initTextAnimSlider() {
  var textAnimHolder = document.querySelector("[data-words]");
  var textAnimItem = document.querySelectorAll(".text-anim-item");
  var textAnimItems = document.querySelector(".text-anim-items");
  var animLine = document.querySelector(".anim-line");
  var animIn = "anim-in";
  var animOut = "anim-out";
  var lineActiveClass = "line-active";
  var animNextItem = null;
  var animPrevItem = null;
  var animFirstLoad = false;
  var animDuration = textAnimHolder.getAttribute("data-delay");
  var animCounter = 0;
  var setTimeAnim;
  var setTimeAnimResize;

  animFunc();
  getHolderWidth();

  function animFunc() {
    clearTimeout(setTimeAnim);

    setTimeAnim = setTimeout(
      function () {
        animFirstLoad = true;

        if (animPrevItem !== null) {
          animPrevItem.classList.add(animOut);
        }
        animNextItem = textAnimItems.children[animCounter];
        animNextItem.classList.remove(animOut);
        animNextItem.classList.add(animIn);

        animLine.style.width = animNextItem.clientWidth + "px";
        animLine.classList.add(lineActiveClass);

        animPrevItem = animNextItem;

        if (animCounter === textAnimItem.length - 1) {
          animCounter = 0;
        } else {
          animCounter++;
        }
        animFunc();
      },
      animFirstLoad ? animDuration : 100
    );
  }

  function getHolderWidth() {
    var itemsWidth = [];

    for (var i = 0; i < textAnimItem.length; i++) {
      itemsWidth.push(textAnimItem[i].clientWidth);
    }

    textAnimHolder.style.width = "450px";
  }

  function resizeHandler() {
    clearTimeout(setTimeAnim);
    clearTimeout(setTimeAnimResize);
    getHolderWidth();

    setTimeAnimResize = setTimeout(function () {
      animFunc();
    }, 50);
  }

  window.addEventListener("resize", resizeHandler);
  window.addEventListener("orientationchange", resizeHandler);
}

let activeBx1 = () => {
  let chkra1 = document.getElementById("chkra1");
  let chkra2 = document.getElementById("chkra2");
  let chkra3 = document.getElementById("chkra3");
  let chkra4 = document.getElementById("chkra4");
  let tabOne = document.getElementById("tabOne");
  let tabTwo = document.getElementById("tabTwo");
  let tabThree = document.getElementById("tabThree");
  let tabFour = document.getElementById("tabFour");
  tabOne.style.display = "flex";
  tabTwo.style.display = "none";
  tabThree.style.display = "none";
  tabFour.style.display = "none";
  chkra1.classList.add("activeTB");
  chkra2.classList.remove("activeTB");
  chkra3.classList.remove("activeTB");
  chkra4.classList.remove("activeTB");
};
let activeBx2 = () => {
  let chkra1 = document.getElementById("chkra1");
  let chkra2 = document.getElementById("chkra2");
  let chkra3 = document.getElementById("chkra3");
  let chkra4 = document.getElementById("chkra4");
  let tabOne = document.getElementById("tabOne");
  let tabTwo = document.getElementById("tabTwo");
  let tabThree = document.getElementById("tabThree");
  let tabFour = document.getElementById("tabFour");
  tabOne.style.display = "none";
  tabTwo.style.display = "flex";
  tabThree.style.display = "none";
  tabFour.style.display = "none";
  chkra1.classList.remove("activeTB");
  chkra2.classList.add("activeTB");
  chkra3.classList.remove("activeTB");
  chkra4.classList.remove("activeTB");
};
let activeBx3 = () => {
  let chkra1 = document.getElementById("chkra1");
  let chkra2 = document.getElementById("chkra2");
  let chkra3 = document.getElementById("chkra3");
  let chkra4 = document.getElementById("chkra4");
  let tabOne = document.getElementById("tabOne");
  let tabTwo = document.getElementById("tabTwo");
  let tabThree = document.getElementById("tabThree");
  let tabFour = document.getElementById("tabFour");
  tabOne.style.display = "none";
  tabTwo.style.display = "none";
  tabThree.style.display = "flex";
  tabFour.style.display = "none";
  chkra1.classList.remove("activeTB");

  chkra2.classList.remove("activeTB");
  chkra3.classList.add("activeTB");
  chkra4.classList.remove("activeTB");
};
let activeBx4 = () => {
  let chkra1 = document.getElementById("chkra1");
  let chkra2 = document.getElementById("chkra2");
  let chkra3 = document.getElementById("chkra3");
  let chkra4 = document.getElementById("chkra4");
  let tabOne = document.getElementById("tabOne");
  let tabTwo = document.getElementById("tabTwo");
  let tabThree = document.getElementById("tabThree");
  let tabFour = document.getElementById("tabFour");
  tabOne.style.display = "none";
  tabTwo.style.display = "none";
  tabThree.style.display = "none";
  tabFour.style.display = "flex";
  chkra1.classList.remove("activeTB");
  chkra2.classList.remove("activeTB");
  chkra3.classList.remove("activeTB");
  chkra4.classList.add("activeTB");
};
let changeSlide = () => {
  var slideNum = document.getElementById("slideNum");
  var totalAccount = document.getElementById("totalAccount");
  var totalVal = document.getElementById("totalVal");
  var slider = document.getElementById("slider1");
  if (slideNum.value > 1000) {
    slideNum.value = 1000;
  } else if (slideNum.value < 1) {
    slideNum.value = 1;
  }
  slider.value = slideNum.value;
  let price = slider.value * 2342;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
let slideToggle = () => {
  var totalAccount = document.getElementById("totalAccount");
  var totalVal = document.getElementById("totalVal");
  var slider = document.getElementById("slider1");
  var slideNum = document.getElementById("slideNum");

  slideNum.value = slider.value;
  let price = slider.value * 2342;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};

let setNum1 = () => {
  var totalAccount = document.getElementById("totalAccount");
  var totalVal = document.getElementById("totalVal");
  var slider = document.getElementById("slider1");
  var slideNum = document.getElementById("slideNum");

  slideNum.value = 1;

  slider.value = 1;
  let price = slider.value * 2342;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  //
  var totalAccount2 = document.getElementById("totalAccount2");
  var totalVal2 = document.getElementById("totalVal2");
  var slider2 = document.getElementById("slider2");
  var slideNum2 = document.getElementById("slideNum2");

  slideNum2.value = 1;

  slider2.value = 1;
  let price2 = slider2.value * 1165;
  totalVal2.innerHTML = price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount2.innerHTML = slider.value;
  //
  //
  var totalAccount3 = document.getElementById("totalAccount3");
  var totalVal3 = document.getElementById("totalVal3");
  var slider3 = document.getElementById("slider3");
  var slideNum3 = document.getElementById("slideNum3");

  slideNum3.value = 1;

  slider3.value = 1;
  let price3 = slider3.value * 1000;
  totalVal3.innerHTML = price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount3.innerHTML = slider.value;
  //
  //
  var totalAccount4 = document.getElementById("totalAccount4");
  var totalVal4 = document.getElementById("totalVal4");
  var slider4 = document.getElementById("slider4");
  var slideNum4 = document.getElementById("slideNum4");

  slideNum4.value = 1;

  slider4.value = 1;
  let price4 = slider4.value * 2059;
  totalVal4.innerHTML = price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount4.innerHTML = slider.value;
  //

  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");
  ac1.classList.add("activeAccount");
  ac2.classList.remove("activeAccount");
  ac3.classList.remove("activeAccount");
  ac4.classList.remove("activeAccount");
};
let setNum10 = () => {
  var totalAccount = document.getElementById("totalAccount");
  var totalVal = document.getElementById("totalVal");
  var slider = document.getElementById("slider1");
  var slideNum = document.getElementById("slideNum");

  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");
  ac1.classList.remove("activeAccount");
  ac2.classList.add("activeAccount");
  ac3.classList.remove("activeAccount");
  ac4.classList.remove("activeAccount");

  slideNum.value = 10;

  slider.value = 10;
  let price = slider.value * 2342;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;

  //
  var totalAccount2 = document.getElementById("totalAccount2");
  var totalVal2 = document.getElementById("totalVal2");
  var slider2 = document.getElementById("slider2");
  var slideNum2 = document.getElementById("slideNum2");

  slideNum2.value = 10;

  slider2.value = 10;
  let price2 = slider2.value * 1165;
  totalVal2.innerHTML = price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount2.innerHTML = slider.value;
  //
  //
  var totalAccount3 = document.getElementById("totalAccount3");
  var totalVal3 = document.getElementById("totalVal3");
  var slider3 = document.getElementById("slider3");
  var slideNum3 = document.getElementById("slideNum3");

  slideNum3.value = 10;

  slider3.value = 10;
  let price3 = slider3.value * 1000;
  totalVal3.innerHTML = price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount3.innerHTML = slider.value;
  //
  //
  var totalAccount4 = document.getElementById("totalAccount4");
  var totalVal4 = document.getElementById("totalVal4");
  var slider4 = document.getElementById("slider4");
  var slideNum4 = document.getElementById("slideNum4");

  slideNum4.value = 10;

  slider4.value = 10;
  let price4 = slider4.value * 2059;
  totalVal4.innerHTML = price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount4.innerHTML = slider.value;
  //
};
let setNum100 = () => {
  var totalAccount = document.getElementById("totalAccount");
  var totalVal = document.getElementById("totalVal");
  var slider = document.getElementById("slider1");
  var slideNum = document.getElementById("slideNum");

  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");
  ac1.classList.remove("activeAccount");
  ac2.classList.remove("activeAccount");
  ac3.classList.add("activeAccount");
  ac4.classList.remove("activeAccount");

  slideNum.value = 100;

  slider.value = 100;
  let price = slider.value * 2342;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;

  //
  var totalAccount2 = document.getElementById("totalAccount2");
  var totalVal2 = document.getElementById("totalVal2");
  var slider2 = document.getElementById("slider2");
  var slideNum2 = document.getElementById("slideNum2");

  slideNum2.value = 100;

  slider2.value = 100;
  let price2 = slider2.value * 1165;
  totalVal2.innerHTML = price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount2.innerHTML = slider.value;
  //
  //
  var totalAccount3 = document.getElementById("totalAccount3");
  var totalVal3 = document.getElementById("totalVal3");
  var slider3 = document.getElementById("slider3");
  var slideNum3 = document.getElementById("slideNum3");

  slideNum3.value = 100;

  slider3.value = 100;
  let price3 = slider3.value * 1000;
  totalVal3.innerHTML = price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount3.innerHTML = slider.value;
  //
  //
  var totalAccount4 = document.getElementById("totalAccount4");
  var totalVal4 = document.getElementById("totalVal4");
  var slider4 = document.getElementById("slider4");
  var slideNum4 = document.getElementById("slideNum4");

  slideNum4.value = 100;

  slider4.value = 100;
  let price4 = slider4.value * 2059;
  totalVal4.innerHTML = price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount4.innerHTML = slider.value;
  //
};
let setNum1000 = () => {
  var totalAccount = document.getElementById("totalAccount");
  var totalVal = document.getElementById("totalVal");
  var slider = document.getElementById("slider1");
  var slideNum = document.getElementById("slideNum");

  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");
  ac1.classList.remove("activeAccount");
  ac2.classList.remove("activeAccount");
  ac3.classList.remove("activeAccount");
  ac4.classList.add("activeAccount");

  slideNum.value = 1000;

  slider.value = 1000;
  let price = slider.value * 2342;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;

  //
  var totalAccount2 = document.getElementById("totalAccount2");
  var totalVal2 = document.getElementById("totalVal2");
  var slider2 = document.getElementById("slider2");
  var slideNum2 = document.getElementById("slideNum2");

  slideNum2.value = 1000;

  slider2.value = 1000;
  let price2 = slider2.value * 1165;
  totalVal2.innerHTML = price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount2.innerHTML = slider.value;
  //
  //
  var totalAccount3 = document.getElementById("totalAccount3");
  var totalVal3 = document.getElementById("totalVal3");
  var slider3 = document.getElementById("slider3");
  var slideNum3 = document.getElementById("slideNum3");

  slideNum3.value = 1000;

  slider3.value = 1000;
  let price3 = slider3.value * 1000;
  totalVal3.innerHTML = price3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount3.innerHTML = slider.value;
  //
  //
  var totalAccount4 = document.getElementById("totalAccount4");
  var totalVal4 = document.getElementById("totalVal4");
  var slider4 = document.getElementById("slider4");
  var slideNum4 = document.getElementById("slideNum4");

  slideNum4.value = 1000;

  slider4.value = 1000;
  let price4 = slider4.value * 2059;
  totalVal4.innerHTML = price4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount4.innerHTML = slider.value;
  //
};
//

let changeSlide2 = () => {
  var slideNum = document.getElementById("slideNum2");
  var totalAccount = document.getElementById("totalAccount2");
  var totalVal = document.getElementById("totalVal2");
  var slider = document.getElementById("slider2");
  if (slideNum.value > 1000) {
    slideNum.value = 1000;
  } else if (slideNum.value < 1) {
    slideNum.value = 1;
  }
  slider.value = slideNum.value;
  let price = slider.value * 1165;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
let slideToggle2 = () => {
  var totalAccount = document.getElementById("totalAccount2");
  var totalVal = document.getElementById("totalVal2");
  var slider = document.getElementById("slider2");
  var slideNum = document.getElementById("slideNum2");

  slideNum.value = slider.value;
  let price = slider.value * 1165;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
let changeSlide3 = () => {
  var slideNum = document.getElementById("slideNum3");
  var totalAccount = document.getElementById("totalAccount3");
  var totalVal = document.getElementById("totalVal3");
  var slider = document.getElementById("slider3");
  if (slideNum.value > 1000) {
    slideNum.value = 1000;
  } else if (slideNum.value < 1) {
    slideNum.value = 1;
  }
  slider.value = slideNum.value;
  let price = slider.value * 1000;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
let slideToggle3 = () => {
  var totalAccount = document.getElementById("totalAccount3");
  var totalVal = document.getElementById("totalVal3");
  var slider = document.getElementById("slider3");
  var slideNum = document.getElementById("slideNum3");

  slideNum.value = slider.value;
  let price = slider.value * 1000;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
let changeSlide4 = () => {
  var slideNum = document.getElementById("slideNum4");
  var totalAccount = document.getElementById("totalAccount4");
  var totalVal = document.getElementById("totalVal4");
  var slider = document.getElementById("slider4");
  if (slideNum.value > 1000) {
    slideNum.value = 1000;
  } else if (slideNum.value < 1) {
    slideNum.value = 1;
  }
  slider.value = slideNum.value;
  let price = slider.value * 2059;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
let slideToggle4 = () => {
  var totalAccount = document.getElementById("totalAccount4");
  var totalVal = document.getElementById("totalVal4");
  var slider = document.getElementById("slider4");
  var slideNum = document.getElementById("slideNum4");

  slideNum.value = slider.value;
  let price = slider.value * 2059;
  totalVal.innerHTML = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  totalAccount.innerHTML = slider.value;
  var ac1 = document.getElementById("ac1");
  var ac2 = document.getElementById("ac2");
  var ac3 = document.getElementById("ac3");
  var ac4 = document.getElementById("ac4");

  if (slideNum.value >= 10 && slideNum.value < 100) {
    ac1.classList.remove("activeAccount");
    ac2.classList.add("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value >= 100 && slideNum.value < 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.add("activeAccount");
    ac4.classList.remove("activeAccount");
  } else if (slideNum.value == 1000) {
    ac1.classList.remove("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.add("activeAccount");
  } else {
    ac1.classList.add("activeAccount");
    ac2.classList.remove("activeAccount");
    ac3.classList.remove("activeAccount");
    ac4.classList.remove("activeAccount");
  }
};
