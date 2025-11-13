// Get references to button and text
const btn = document.getElementById("toggleBtn");
const text = document.getElementById("hiddenText");

// Listen for button click
btn.addEventListener("click", function() {
  if (text.style.display === "none") {
    // Show the text
    text.style.display = "block";
    btn.textContent = "Hide Text"; // change button label
  } else {
    // Hide the text
    text.style.display = "none";
    btn.textContent = "Show Text";
  }
});
