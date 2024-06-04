document.querySelectorAll(".card-tour__contant").forEach((el) => {
  el.addEventListener("click", () => {
    const link = el.getAttribute("data-tour-link");
    location.href = location.origin + link;
  });
});
