(function () {
  var root = document.documentElement;

  // Initial theme: respect saved choice, else system preference.
  try {
    var saved = localStorage.getItem("nd-theme");
    if (saved === "dark" || saved === "light") {
      root.setAttribute("data-theme", saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  } catch (e) {
    root.setAttribute("data-theme", "light");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("nd-theme", next); } catch (e) {}
      });
    }

    var burger = document.querySelector(".nav-burger");
    var nav = document.querySelector(".nav");
    if (burger && nav) {
      burger.addEventListener("click", function () {
        nav.classList.toggle("open");
      });
      nav.querySelectorAll(".nav-links a").forEach(function (a) {
        a.addEventListener("click", function () { nav.classList.remove("open"); });
      });
    }
  });
})();
