(function () {
  var supported = ["en", "de", "es", "fr", "it", "pt"];
  var redirect = document.querySelector("[data-lang-redirect]");
  if (redirect) {
    var pick = null;
    try { var saved = localStorage.getItem("lang"); if (supported.indexOf(saved) >= 0) pick = saved; } catch (e) {}
    if (!pick) {
      var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
      for (var i = 0; i < langs.length && !pick; i++) {
        var code = String(langs[i]).toLowerCase().split("-")[0];
        if (supported.indexOf(code) >= 0) pick = code;
      }
    }
    var path = redirect.getAttribute("data-lang-path");
    location.replace("/" + (pick || "en") + "/" + (path ? path + "/" : "") + location.search + location.hash);
  }
  document.addEventListener("DOMContentLoaded", function () {
    var picker = document.getElementById("lang-picker");
    if (!picker) return;
    picker.addEventListener("change", function () {
      try { localStorage.setItem("lang", picker.value); } catch (e) {}
      location.href = "/" + picker.value + picker.getAttribute("data-path") + location.search + location.hash;
    });
  });
})();
