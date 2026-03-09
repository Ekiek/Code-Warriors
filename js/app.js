document.querySelectorAll(".section").forEach((section) => {

  const container = section.querySelector(".cards-scroll");
  const leftArrow = section.querySelector(".arrow-left");
  const rightArrow = section.querySelector(".arrow-right");

  if (!container) return;

  rightArrow?.addEventListener("click", () => {
    container.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  });

  leftArrow?.addEventListener("click", () => {
    container.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  });

});

const lockBtn = document.querySelector(".lock-btn");

lockBtn.addEventListener("click", () => {
  lockBtn.classList.toggle("active");
});

const playlistToggle = document.querySelector(".playlist-toggle");
const submenu = document.querySelector(".sidebar-submenu");

playlistToggle.addEventListener("click", () => {

  submenu.classList.toggle("open");

  playlistToggle.classList.toggle("active");

});