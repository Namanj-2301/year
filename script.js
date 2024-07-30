// JavaScript for additional interactions
// Example: Reveal the surprise section on a specific date

document.addEventListener("DOMContentLoaded", function() {
  const revealDate = new Date("2024-08-01T00:00:00");
  const today = new Date();

  if (today >= revealDate) {
    document.getElementById("surprise").style.display = "block";
  }
});
