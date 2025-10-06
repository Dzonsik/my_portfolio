// Basic interactivity placeholder
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded!");
});

fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
  });
  