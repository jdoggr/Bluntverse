document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".rule-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
