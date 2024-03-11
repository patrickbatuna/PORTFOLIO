const tl = gsap.timeline({
  defaults: {
    duration: 0.3,
    opacity: 0,
    blur: 1,
    x: -100,
    ease: Power2,
  },
});
const cardArray = document.querySelectorAll(".card");
for (card of cardArray) {
  tl.from(card, {});
}

document.addEventListener("DOMContentLoaded", function () {
  tl.play();
});
