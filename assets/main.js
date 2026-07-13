(function () {
  // Book covers: try the local file first, then Open Library, then a
  // styled placeholder built from the data-title / data-author attributes.
  window.__cover = function (img) {
    var next = img.getAttribute("data-alt");
    if (next) {
      img.removeAttribute("data-alt");
      img.src = next;
      return;
    }
    var box = img.closest ? img.closest(".bcov") : null;
    if (!box) return;
    box.classList.add("placeholder");
    while (box.firstChild) box.removeChild(box.firstChild);
    var t = document.createElement("span");
    t.className = "ph-title";
    t.textContent = box.getAttribute("data-title") || "";
    var a = document.createElement("span");
    a.className = "ph-author";
    a.textContent = box.getAttribute("data-author") || "";
    box.appendChild(t);
    box.appendChild(a);
  };

  document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu.
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

    // Dissertation modal ("In progress" until the ProQuest link is live).
    var modal = document.getElementById("diss-modal");
    if (modal) {
      var open = function () { modal.classList.add("open"); };
      var close = function () { modal.classList.remove("open"); };
      document.querySelectorAll(".js-diss").forEach(function (b) {
        b.addEventListener("click", function (e) { e.preventDefault(); open(); });
      });
      modal.addEventListener("click", function (e) {
        if (e.target === modal) close();
      });
      var x = modal.querySelector(".modal-close");
      if (x) x.addEventListener("click", close);
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
      });
    }

    // Personal page: left sub-nav switches panels, syncs to URL hash.
    var ptabs = document.querySelectorAll(".ptab-btn");
    if (ptabs.length) {
      var show = function (id) {
        document.querySelectorAll(".ppanel").forEach(function (p) {
          p.classList.toggle("active", p.id === "panel-" + id);
        });
        ptabs.forEach(function (b) {
          b.classList.toggle("active", b.getAttribute("data-tab") === id);
        });
      };
      ptabs.forEach(function (b) {
        b.addEventListener("click", function () {
          var id = b.getAttribute("data-tab");
          show(id);
          if (history.replaceState) {
            history.replaceState(null, "", "#" + id);
          } else {
            location.hash = id;
          }
        });
      });
      var initial = (location.hash || "").replace("#", "");
      var valid = Array.prototype.some.call(ptabs, function (b) {
        return b.getAttribute("data-tab") === initial;
      });
      show(valid ? initial : ptabs[0].getAttribute("data-tab"));
      window.addEventListener("hashchange", function () {
        var h = (location.hash || "").replace("#", "");
        if (h) { show(h); }
      });
    }
  });
})();
