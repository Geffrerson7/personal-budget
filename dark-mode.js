const botonTema = document.getElementById("toggle-theme");

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

botonTema.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});