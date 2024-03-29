var myCarousel = document.querySelector("#myCarousel"),
  carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2e3,
    wrap: !0,
    pause: "hover",
    keyboard: !0,
    touch: !0,
  });
const scrollBtn = document.querySelector(".gototop"),
  btnVisibility = () => {
    window.scrollY > 400
      ? (scrollBtn.style.visibility = "visible")
      : (scrollBtn.style.visibility = "hidden");
  };
var id;
function includeHTML() {
  var t, e, o, n, i;
  for (t = document.getElementsByTagName("*"), e = 0; e < t.length; e++)
    if ((n = (o = t[e]).getAttribute("w3-include-html")))
      return (
        ((i = new XMLHttpRequest()).onreadystatechange = function () {
          4 == this.readyState &&
            (200 == this.status && (o.innerHTML = this.responseText),
            404 == this.status && (o.innerHTML = "Page not found."),
            o.removeAttribute("w3-include-html"),
            includeHTML());
        }),
        i.open("GET", n, !0),
        void i.send()
      );
}
document.addEventListener("scroll", () => {
  window.scrollY > 400
    ? (scrollBtn.style.visibility = "visible")
    : (scrollBtn.style.visibility = "hidden");
}),
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
  $("#modalForm").on("show.bs.modal", function (t) {
    var e = $(t.relatedTarget);
    const o = e.data("name"),
      n = e.data("price"),
      i = e.data("description");
    $(".modal-header #titleModalLabel").html(o),
      $(".modal-body #price").html(n),
      $(".modal-body #description").html(i),
      (id = e.attr("id")),
      alert(JSON.stringify(e));
  }),
  includeHTML(),
  $("#modalForm").on("show.bs.modal", function (t) {
    var e = $(t.relatedTarget);
    const o = e.data("email"),
      n = e.data("nume");
    $(".modal-body #email").val(o),
      $(".modal-body #name").val(n),
      (id = e.attr("id")),
      alert(JSON.stringify(e[0]));
  }),
  $("#modalForm").on("hidden.bs.modal", function (t) {
    alert("Modalul s-a inchis"),
      document.getElementById(id).classList.remove("btn-primary"),
      document.getElementById(id).classList.add("btn-success");
  }),
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      window.scrollY > 400
        ? (document.getElementById("navbar_top").classList.add("fixed-top"),
          (navbar_height = document.querySelector(".navbar").offsetHeight),
          (document.body.style.paddingTop = navbar_height + "px"))
        : (document.getElementById("navbar_top").classList.remove("fixed-top"),
          (document.body.style.paddingTop = "0"));
    });
  }),
  $(document).ready(function () {
    $("body").scrollspy({ target: "#myNavbar" });
  }),
  (function () {
    "use strict";
    const t = document.querySelectorAll(".requires-validation");
    Array.from(t).forEach(function (t) {
      t.addEventListener(
        "submit",
        function (e) {
          t.checkValidity() || (e.preventDefault(), e.stopPropagation()),
            t.classList.add("was-validated");
        },
        !1
      );
    });
  })();
