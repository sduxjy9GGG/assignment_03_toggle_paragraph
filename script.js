// Function to show or hide the paragraph
function togglePara() {

  // Get the paragraph element by its ID
  var paragraph = document.getElementById("para");

  // Check current display state and toggle it
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block"; // Show paragraph
  } else {
    paragraph.style.display = "none";  // Hide paragraph
  }
}
