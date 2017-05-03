//wow animation //

$(function () {

//animate on scroll
new WOW().init();

});

//magnificpopup//


$(function () {

  $('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{enabled:true}
  // other options
});

});

// owl carousel//

$(function () {

  $('#team-members').owlCarousel({

      loop: true,
      autoplay: true,
      items: 3,
      autoplayHoverPause: true

  })

});

//owl-carousel-testimonials//

$(function () {

  $('#testimonials').owlCarousel({

      loop: true,
      autoplay: true,
      items: 1,
      autoplayHoverPause: true

  })

});

//counter up //

$(function () {

  $('.counter').counterUp({
    delay: 10,
    time: 1000
})

});

//owl carousel clients//

$(function () {

  $('#client-group').owlCarousel({

      loop: true,
      autoplay: true,
      items: 6,
      autoplayHoverPause: true

  })

});

//navigation scroll transparent hide and show method//


$(function () {

  $(window).scroll(function() {

    if($(this).scrollTop() <= 200)
    {
      $("nav").removeClass("navbar-custom");
    }
    else
    {
      $("nav").addClass("navbar-custom");
    }

  })

});
