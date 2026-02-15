let themeController = document.querySelector("#theme-controller");

window.addEventListener("load", () => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  // set the initial state of the toggle based on the current theme
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeController.checked = true;
  }
});

themeController.addEventListener("change", (e) => {
  if (e.target.checked) {
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
    document.documentElement.classList.toggle("dark", true);
  } else {
    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";
    document.documentElement.classList.toggle("dark", false);
  }
});
