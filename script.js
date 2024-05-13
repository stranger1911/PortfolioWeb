// const nav = document.querySelector(".nav");
// console.log(nav);
// const anch = document.querySelectorAll("a.anchor");
// console.log(anch);

document.querySelectorAll("a.anchor").forEach(function (element) {
  // console.log(element);
  element.addEventListener("click", function (event) {
    document.querySelectorAll("a.anchor").forEach(function (ele) {
      ele.style.color = "#fff";
    });
    element.style.color = "#018901";
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
header.classList.remove("nav-open");
document.querySelector(".mobile-nav").addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const anchor = document.querySelectorAll(".anchor");
anchor.forEach((el) => {
  el.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

// document.querySelector(".plus").addEventListener(function () {
//   const dropDown = document.querySelector(".experience-section-details");
//   dropDown.style.display = "block";
// });

const plusIcon = document.querySelector("svg.plus");
const dropDown = document.querySelector(".experience-section-details");
const minusIcon = document.querySelector("svg.minus");
plusIcon.addEventListener("click", function () {
  dropDown.style.display = "block";
  plusIcon.style.display = "none";
  minusIcon.style.display = "block";
});

minusIcon.addEventListener("click", function () {
  dropDown.style.display = "none";
  plusIcon.style.display = "block";
  minusIcon.style.display = "none";
});

const plus1Icon = document.querySelector("svg.plus1");
const drop1Down = document.querySelector(".experience-section-details1");
const minus1Icon = document.querySelector("svg.minus1");
plus1Icon.addEventListener("click", function () {
  drop1Down.style.display = "block";
  plus1Icon.style.display = "none";
  minus1Icon.style.display = "block";
});

minus1Icon.addEventListener("click", function () {
  drop1Down.style.display = "none";
  plus1Icon.style.display = "block";
  minus1Icon.style.display = "none";
});
