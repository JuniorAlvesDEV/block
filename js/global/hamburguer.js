export default function initHamburguer() {
  const hamburguer = document.querySelector(".hamburguer");
  const html = document.querySelector("html");

  function openMenu() {
    html.classList.toggle("active-menu");
  }

  hamburguer.addEventListener("click", openMenu);
}
