var id,
  myCarousel = document.querySelector("#myCarousel"),
  carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2e3,
    wrap: !0,
    pause: "hover",
    keyboard: !0,
    touch: !0,
  });
$("#modalForm").on("show.bs.modal", function (e) {
  var t = $(e.relatedTarget);
  const a = t.data("email"),
    o = t.data("nume");
  $(".modal-body #email").val(a),
    $(".modal-body #name").val(o),
    (id = t.attr("id")),
    alert(JSON.stringify(t[0]));
}),
  $("#modalForm").on("hidden.bs.modal", function (e) {
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
    const e = document.querySelectorAll(".requires-validation");
    Array.from(e).forEach(function (e) {
      e.addEventListener(
        "submit",
        function (t) {
          e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
            e.classList.add("was-validated");
        },
        !1
      );
    });
  })();
