
// hero section

$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function () {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});


// animate on scroll

/**
  * Animation on scroll function and init
  */
function aos_init() {
  AOS.init({
    duration: 700,
    easing: 'ease-in-out',
    once: false,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});



