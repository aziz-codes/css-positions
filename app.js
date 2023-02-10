const menuIcon = document.getElementById("iconMenu");
const sideBar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
menuIcon.addEventListener("click", () => {
  sideBar.style.display === "block"
    ? (sideBar.style.display = "none")
    : (sideBar.style.display = "block");
  //   main.classList.toggle(".translate-main");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 600) {
    sideBar.style.display === "block";
  }
});
