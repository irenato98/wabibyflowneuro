const buttons = document.querySelectorAll(".menu-button");

buttons.forEach((button) => {
  button.addEventListener("pointerdown", () => {
    buttons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
  });

  button.addEventListener("pointerup", () => {
    window.setTimeout(() => {
      button.classList.remove("is-selected");
    }, 550);
  });

  button.addEventListener("pointercancel", () => {
    button.classList.remove("is-selected");
  });
});

document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
