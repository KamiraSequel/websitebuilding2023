// go to top
const scrollBtn = document.querySelector(".gototop");
        const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

var id;
    $("#modalForm").on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); //Button that triggered the modal
      const produs = button.data('name') //need to find the button and get product
      const pret = button.data('price') //need to find the button and get price
      const description = button.data('description');
      $(".modal-header #titleModalLabel").html(produs);
      $(".modal-body #price").html(pret);
      $(".modal-body #description").html(description);
      id = button.attr('id');
      // var datainfo = document.getElementById(id);
      alert(JSON.stringify(button));
      // alert(JSON.stringify(datainfo));
    })


