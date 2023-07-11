
// Lấy phần tử HTML liên quan đến nút điều hướng
var toggleButton = document.querySelector(".inner-menu-mobi .button-menu");

// Lấy phần tử HTML liên quan đến menu
var menu = document.querySelector("#show-menu");

// Thêm sự kiện "click" vào nút điều hướng
toggleButton.addEventListener("click", function() {
  // Thêm hoặc xóa lớp "show-menu" vào phần tử HTML liên quan đến menu
  menu.classList.toggle("show-menu");
});