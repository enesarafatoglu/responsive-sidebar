let my_sidebar = document.querySelector(".my-sidebar");
let my_closeBtn = document.querySelector("#my_btn");
let my_searchBtn = document.querySelector(".bx-search");

my_closeBtn.addEventListener("click", () => {
  my_sidebar.classList.toggle("open");
  menuBtnChange();
});

my_searchBtn.addEventListener("click", () => {
  my_sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (my_sidebar.classList.contains("open")) {
    my_closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    my_closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}
