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
      dot.style.backgroundColor = "grey"; // Restore original color on mouseout
    });
  });
});
