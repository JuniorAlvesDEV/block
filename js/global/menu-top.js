export default function initMenuTop() {
  const menu = document.querySelector(".main-nav");

  function menuTop() {
    const scroll = window.scrollY;
    if (scroll > 50) {
      menu.classList.add("navOnTop");
    } else {
      menu.classList.remove("navOnTop");
    }
  }

  window.addEventListener("scroll", menuTop);
}
