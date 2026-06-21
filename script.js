const swatches = document.querySelectorAll(".swatch");
const mainBoot = document.querySelector("#mainBoot");

swatches.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    const alt = button.dataset.alt;

    if (!image || !mainBoot) {
      return;
    }

    swatches.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    mainBoot.src = image;
    mainBoot.alt = alt || "Buty wędkarskie Andrew";
  });
});
