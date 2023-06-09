export default function initAnimatedScroll() {
  const section = document.querySelectorAll("[data-scroll]");

  function animateScroll() {
    section.forEach((item) => {
      const clientWindow = window.innerHeight * 0.9;
      const sectionTop = item.getBoundingClientRect().top - clientWindow;

      if (sectionTop < 0) {
        item.classList.add("active-scroll");
      }
    });
  }

  window.addEventListener("scroll", animateScroll);
}
