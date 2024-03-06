const menuBtn = document.querySelector(".menu-icon");
const dropDownMenu = document.querySelector(".drop-down-menu");

menuBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("hide");
});
