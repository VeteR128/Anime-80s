gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let arrayone = gsap.utils.toArray(".cards__left .item");
let arraytwo = gsap.utils.toArray(".cards__right .item");
let arraytree = gsap.utils.toArray(".cards__left .item-text");
let arrayfour = gsap.utils.toArray(".cards__right .item-text");
const popupBtn = "cards__img";
const thirstPopup = document.querySelector(".popup");
const popupAnimImg = ".popup__img";
const popupAnimtext = ".popup__paragraph";
const popupAnimAUDIO = ".popup__audio";
const shadon = document.querySelector(".shadon");

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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    console.log(4);
    gsap.fromTo(
      popupAnimImg,
      { opacity: 1, y: 0 },
      { opacity: 0, duration: 1, y: 100 }
    );
    gsap.fromTo(
      popupAnimtext,
      { opacity: 1, x: 0, y: 0 },
      { opacity: 0, x: 50, duration: 1, y: -100 }
    );
    gsap.fromTo(
      popupAnimAUDIO,
      { opacity: 1, x: 0, y: 0 },
      { opacity: 0, x: -50, duration: 1, y: 300 }
    );
    gsap.fromTo(".popup__container", { x: 0 }, { x: 700, duration: 1 });
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cards__img")) {
    gsap.fromTo(
      popupAnimImg,
      { opacity: 0, y: -200, ease: Power1.easeOut },
      {
        opacity: 1,
        duration: 3,
        y: 0,
        ease: Power4.easeOut,
      }
    );
    gsap.fromTo(
      popupAnimtext,
      { opacity: 0, x: 50, y: -100, ease: Power1.easeOut },
      { opacity: 1, x: 0, duration: 3, y: 0, ease: Power4.easeOut }
    );
    gsap.fromTo(
      popupAnimAUDIO,
      { opacity: 0, x: -50, y: 300, ease: Power1.easeOut },
      { opacity: 1, x: 0, duration: 3, y: 0, ease: Power4.easeOut }
    );
    gsap.fromTo(".popup__container", { x: -500 }, { x: 0, duration: 1 });
  }
});
const ourText = new SplitType(".header__title", { types: "chars" });
const chars = ourText.chars;
const ourParagraph = new SplitType(".header__paragraph", { types: "chars" });
const charsP = ourParagraph.chars;
const windownText = new SplitType(".window__text", { types: "chars" });
const charsT = windownText.chars;
gsap.fromTo(
  charsT,
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, stagger: 0.01, duration: 0.00001, ease: "power4.out" }
);
gsap.fromTo(
  ".window__block",
  { opacity: 0 },
  { opacity: 1, repeat: 6, duration: 0.85, ease: "power4.out" }
);
let low = gsap.fromTo(
  ".window",
  { autoAlpha: 1 },
  { autoAlpha: 0, ease: "power4.out" }
);
low.delay(5);
class charsanimate {
  constructor(item) {
    this._item = item;
  }

  anim() {
    gsap.fromTo(
      this._item,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.75,
        duration: 0.00001,
        ease: "power4.out",
        scrollTrigger: {
          trigger: this._item,
          start: "-550",
          end: "-50",
          scrub: true,
        },
      }
    );
  }
}
const titleAnim = new charsanimate(chars);
titleAnim.anim();
const paragraphAnim = new charsanimate(charsP);
paragraphAnim.anim();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__logo")) {
    shadon.play();
  }
});
