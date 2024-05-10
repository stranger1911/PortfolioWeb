document.querySelectorAll("a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    var pageId = this.getAttribute("data-page");
    var marginTopOffset = 60; // Adjust as needed
    var headerOffset = document.querySelector(".header").offsetHeight; // Height of the navigation bar
    var targetOffset =
      document.getElementById(pageId).offsetTop -
      marginTopOffset -
      headerOffset;

    var finalOffset = Math.max(targetOffset, 0); // Ensure it doesn't go below 0
    document.querySelector("html, body").scrollTop = finalOffset;
  });
});

const header = document.querySelector(".header");
document.querySelector(".mobile-nav").addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const anchor = document.querySelectorAll(".anchor");
anchor.forEach((el) => {
  el.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});
