const main_nav_toggle = document.querySelector(".main-nav__toggle");
const main_nav = document.querySelector(".main-nav");
const slider_bullits = document.querySelectorAll(".slider-toggles__item");
const reviews_list = document.querySelector(".reviews__list");
const slider_prev = document.querySelector(".slider-flipping__item--prev");
const slider_next = document.querySelector(".slider-flipping__item--next");
const reviews = document.querySelectorAll(".reviews__item");

main_nav_toggle.classList.add("main-nav__toggle--v");
main_nav.classList.add("main-nav--close");

main_nav_toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  main_nav.classList.toggle("main-nav--close");
});

slider_bullits.forEach(function (elem) {
  elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    document
      .querySelector(".slider-toggles__item--current")
      .classList.remove("slider-toggles__item--current");
    this.classList.add("slider-toggles__item--current");

    let k = Array.from(slider_bullits).indexOf(evt.target);
    reviews_list.style.marginLeft =
      -1 * k * (document.documentElement.clientWidth - 17) + 19 + "px";

    document
      .querySelector(".reviews__item--active")
      .classList.remove("reviews__item--active");
    reviews[k].classList.add("reviews__item--active");
  });
});

window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth < 1200) {
    let k = Array.from(reviews).indexOf(
      document.querySelector(".reviews__item--active")
    );
    reviews_list.style.marginLeft =
      -1 * k * (document.documentElement.clientWidth - 17) + 19 + "px";
  } else {
    /*   reviews_list.style.marginLeft = "0px"; */
  }
});

reviews[0].classList.add("reviews__item--active");

slider_prev.addEventListener("click", function (evt) {
  evt.preventDefault();
  let k = Array.from(reviews).indexOf(
    document.querySelector(".reviews__item--active")
  );
  if (k > 0) {
    k = k - 1;
  } else {
    k = reviews.length - 1;
  }
  reviews_list.style.marginLeft =
    -1 * k * (document.documentElement.clientWidth - 17) + 19 + "px";
  document
    .querySelector(".reviews__item--active")
    .classList.remove("reviews__item--active");
  console.log(k);
  reviews[k].classList.add("reviews__item--active");

  document
    .querySelector(".slider-toggles__item--current")
    .classList.remove("slider-toggles__item--current");
  slider_bullits[k].classList.add("slider-toggles__item--current");
});

slider_next.addEventListener("click", function (evt) {
  evt.preventDefault();
  let k = Array.from(reviews).indexOf(
    document.querySelector(".reviews__item--active")
  );
  if (k < reviews.length - 1) {
    k = k + 1;
  } else {
    k = 0;
  }
  reviews_list.style.marginLeft =
    -1 * k * (document.documentElement.clientWidth - 17) + 19 + "px";
  document
    .querySelector(".reviews__item--active")
    .classList.remove("reviews__item--active");
  console.log(k);
  reviews[k].classList.add("reviews__item--active");

  document
    .querySelector(".slider-toggles__item--current")
    .classList.remove("slider-toggles__item--current");
  slider_bullits[k].classList.add("slider-toggles__item--current");
});
