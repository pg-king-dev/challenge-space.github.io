document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".clickable-dot");

  function changeColors(dot, backgroundColor, dotColor) {
    document.body.style.backgroundColor = backgroundColor;
    dot.style.backgroundColor = dotColor;
    // You can add logic to navigate to different pages here if needed
  }

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      changeColors(dot, "white", "white"); // Change 'blue' to the desired dot color
    });

    dot.addEventListener("mouseover", function () {
      dot.style.backgroundColor = "white"; // Change color on hover
    });

    dot.addEventListener("mouseout", function () {
      dot.style.backgroundColor = "transparent"; // Restore original color on mouseout
    });
  });
});

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
