gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".page",
  smooth: 1.5,
  effects: true,
});

gsap.fromTo(
  ".header__logo",
  { opacity: 1, ease: "none" },
  {
    opacity: 0,

    scrollTrigger: {
      trigger: ".header__logo",
      start: "center",
      end: "820",
      scrub: true,
    },
  }
);

let arrayone = gsap.utils.toArray(".cards__left .item");
console.log(arrayone);
arrayone.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -150 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});
let arraytwo = gsap.utils.toArray(".cards__right .item");
arraytwo.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 150 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});
let arraytree = gsap.utils.toArray(".cards__left .item-text");
arraytree.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-100",
        scrub: true,
      },
    }
  );
});

let arrayfour = gsap.utils.toArray(".cards__right .item-text");
arrayfour.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-850",
        end: "-300",
        scrub: true,
      },
    }
  );
});
const popupBtn = "cards__img";
const thirstPopup = document.querySelector(".popup");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    console.log(4);
    gsap.fromTo(
      popupAnimImg,
      { opacity: 1, y: 0 },
      { opacity: 0, duration: 2, y: 100 }
    );
    gsap.fromTo(
      popupAnimtext,
      { opacity: 1, x: 0, y: 0 },
      { opacity: 0, x: 50, duration: 2, y: -100 }
    );
    gsap.fromTo(
      popupAnimAUDIO,
      { opacity: 1, x: 0, y: 0 },
      { opacity: 0, x: -50, duration: 2, y: 300 }
    );
    gsap.fromTo(".popup__container", { x: 0 }, { x: 700, duration: 2 });
  }
});

class OpenAndClosePopup {
  constructor(popup, openButton) {
    this._popup = popup;
    this._openButton = openButton;
  }
  setEventListeners() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains(this._openButton)) {
        console.log("1");
        this._open();
      }
      if (e.target.classList.contains("open")) {
        this._close();
      }
    });
  }
  _open = () => {
    this._popup.classList.add("open");
  };
  _close = () => {
    this._popup.classList.remove("open");
  };
}
class setPopupInfo {
  constructor(popup, card) {
    this._card = card;
    this._popup = popup;
  }
  _setPopupContent = (e) => {
    this._popup.querySelector(".popup__paragraph").textContent = e.target
      .closest(".card")
      .querySelector(".cards__text").textContent;
    this._popup.querySelector(".popup__img").src = e.target
      .closest(".card")
      .querySelector(".cards__img").src;

    this._popup.querySelector(".popup__audio").src = `audio/${
      e.target.closest(".card").querySelector(".cards__title").textContent
    }.mp3`;
    this._popup.querySelector(".popup__audio").setAttribute("autoplay", true);
  };
  setEventListeners() {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains(this._card)) {
        this._setPopupContent(e);
      }
      if (e.target.classList.contains("open")) {
        this._popup.querySelector(".popup__audio").pause();
      }
    });
  }
}

const setThirstPopupInfo = new setPopupInfo(thirstPopup, popupBtn);
setThirstPopupInfo.setEventListeners();
const openThirstPopup = new OpenAndClosePopup(thirstPopup, popupBtn);
openThirstPopup.setEventListeners();
const popupAnimImg = ".popup__img";
const popupAnimtext = ".popup__paragraph";
const popupAnimAUDIO = ".popup__audio";

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cards__img")) {
    gsap.fromTo(
      popupAnimImg,
      { opacity: 0, y: -200, ease: Power1.easeOut },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: Power4.easeOut,
      }
    );
    gsap.fromTo(
      popupAnimtext,
      { opacity: 0, x: 50, y: -100, ease: Power1.easeOut },
      { opacity: 1, x: 0, duration: 2, y: 0, ease: Power4.easeOut }
    );
    gsap.fromTo(
      popupAnimAUDIO,
      { opacity: 0, x: -50, y: 300, ease: Power1.easeOut },
      { opacity: 1, x: 0, duration: 2, y: 0, ease: Power4.easeOut }
    );
    gsap.fromTo(".popup__container", { x: -500 }, { x: 0, duration: 2 });
  }
});
