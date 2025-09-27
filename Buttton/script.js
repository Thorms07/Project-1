// Grab the button
const btn = document.getElementById("colorBtn");

// Define an array of colors
const colors = ["#ff6b6b", "#6bcfff", "#ffd93d", "#6bff95", "#b26bff"];

// Listen for button click
btn.addEventListener("click", function() {
  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Change the background color
  document.body.style.backgroundColor = randomColor;
});
