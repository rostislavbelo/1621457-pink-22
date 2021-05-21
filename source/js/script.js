const main_nav_toggle = document.querySelector(".main-nav__toggle");
const main_nav = document.querySelector(".main-nav");
const slider_bullits_r = document.querySelectorAll(".reviews-bullit");
const reviews_list = document.querySelector(".reviews__list");
const slider_prev = document.querySelector(".slider-flipping__item--prev");
const slider_next = document.querySelector(".slider-flipping__item--next");
const reviews = document.querySelectorAll(".reviews__item");
const slider_bullits_p = document.querySelectorAll(".slider-toggles__item");
const price_list = document.querySelector(".price__list-container");
const form = document.querySelector(".contest__form");
const surname = document.querySelector(".surname");
const name = document.querySelector(".name");
const mail = document.querySelector(".mail");
const m_failed = document.querySelector(".failed");
const m_success = document.querySelector(".success");
const popup_close = document.querySelectorAll(".popup-close");
const contr_crop = document.querySelectorAll(".crop");
const contr_fill = document.querySelectorAll(".fill");
const contr_contrast = document.querySelectorAll(".contrast");

if (form) {
  name.required = false;
  surname.required = false;
  mail.required = false;
}

main_nav_toggle.classList.add("main-nav__toggle--v");
main_nav.classList.add("main-nav--close");

main_nav_toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  main_nav.classList.toggle("main-nav--close");
});

if (slider_bullits_r) {
  slider_bullits_r.forEach(function (elem) {
    elem.addEventListener("click", function (evt) {
      evt.preventDefault();
      document
        .querySelector(".reviews-bullit--current")
        .classList.remove("reviews-bullit--current");
      this.classList.add("reviews-bullit--current");

      let k = Array.from(slider_bullits_r).indexOf(evt.target);
      reviews_list.style.marginLeft =
        -1 * k * (document.documentElement.clientWidth - 17) + 19 + "px";

      document
        .querySelector(".reviews__item--active")
        .classList.remove("reviews__item--active");
      reviews[k].classList.add("reviews__item--active");
    });
  });
}

window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth < 1200) {
    let k = Array.from(reviews).indexOf(
      document.querySelector(".reviews__item--active")
    );
    reviews_list.style.marginLeft =
      -1 * k * (document.documentElement.clientWidth - 17) + 19 + "px";
  } else {
  }
});

if (slider_prev) {
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
      .querySelector(".reviews-bullit--current")
      .classList.remove("reviews-bullit--current");
    slider_bullits_r[k].classList.add("reviews-bullit--current");
  });
}

if (slider_next) {
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
      .querySelector(".reviews-bullit--current")
      .classList.remove("reviews-bullit--current");
    slider_bullits_r[k].classList.add("reviews-bullit--current");
  });
}

if (slider_bullits_p) {
  slider_bullits_p.forEach(function (elem) {
    elem.addEventListener("click", function (evt) {
      evt.preventDefault();
      document
        .querySelector(".slider-toggles__item--current")
        .classList.remove("slider-toggles__item--current");
      this.classList.add("slider-toggles__item--current");

      let k = Array.from(slider_bullits_p).indexOf(evt.target);
      price_list.style.marginLeft =
        -1 * k * (document.documentElement.clientWidth - 41) + 19 + "px";
    });
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!name.value || !surname.value || !mail.value) {
      m_failed.classList.add("popup--show");
      if (!name.value) {
        name.classList.add("error");
      }
      if (!surname.value) {
        surname.classList.add("error");
      }
      if (!mail.value) {
        mail.classList.add("error");
      }
    } else {
      m_success.classList.add("popup--show");
    }
  });

  name.addEventListener("change", function () {
    this.classList.remove("error");
  });
  surname.addEventListener("change", function () {
    this.classList.remove("error");
  });
  mail.addEventListener("change", function () {
    this.classList.remove("error");
  });
}

if (popup_close) {
  popup_close.forEach(function (el) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      document.querySelector(".popup--show").classList.remove("popup--show");
    });
  });
}

if (contr_fill) {
  contr_fill.forEach(function (el) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      document
        .querySelector(".photo-upload__item-handle--active")
        .classList.remove("photo-upload__item-handle--active");
      document
        .querySelector(".handle-fill")
        .classList.add("photo-upload__item-handle--active");
      document
        .querySelector(".photo-upload__icon--active")
        .classList.remove("photo-upload__icon--active");
      document
        .querySelector(".photo-upload__icon-fill")
        .classList.add("photo-upload__icon--active");
    });
  });
}

if (contr_crop) {
  contr_crop.forEach(function (el) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      document
        .querySelector(".photo-upload__item-handle--active")
        .classList.remove("photo-upload__item-handle--active");
      document
        .querySelector(".handle-crop")
        .classList.add("photo-upload__item-handle--active");
      document
        .querySelector(".photo-upload__icon--active")
        .classList.remove("photo-upload__icon--active");
      document
        .querySelector(".photo-upload__icon-crop")
        .classList.add("photo-upload__icon--active");
    });
  });
}

if (contr_contrast) {
  contr_contrast.forEach(function (el) {
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      document
        .querySelector(".photo-upload__item-handle--active")
        .classList.remove("photo-upload__item-handle--active");
      document
        .querySelector(".handle-contrast")
        .classList.add("photo-upload__item-handle--active");
      document
        .querySelector(".photo-upload__icon--active")
        .classList.remove("photo-upload__icon--active");
      document
        .querySelector(".photo-upload__icon-contrast")
        .classList.add("photo-upload__icon--active");
    });
  });
}
