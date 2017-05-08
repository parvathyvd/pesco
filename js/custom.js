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
      autoplayHoverPause: true,
              responsive : {
            // breakpoint from 0 up
            0 : {
              items: 1
            },
            // breakpoint from 480 up
            480 : {
              items: 1
            },
            // breakpoint from 768 up
            768 : {
              items: 3
            },
            992 : {
              items: 3
            }
        }

  })

});

//owl-carousel-testimonials//

$(function () {

  $('#testimonials').owlCarousel({

      loop: true,
      autoplay: true,
      items: 1,
      autoplayHoverPause: true,
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
      autoplayHoverPause: true,
              responsive : {
            // breakpoint from 0 up
            0 : {
              items: 1
            },
            // breakpoint from 480 up
            480 : {
              items: 2
            },
            // breakpoint from 768 up
            768 : {
              items: 4
            },
            992 : {
              items: 6
            }
        }

  })

});

//navigation scroll transparent hide and show method//


$(function () {

  $(window).scroll(function() {

    if($(this).scrollTop() >= 64)
    {
      $("nav").addClass("navbar-custom");
    }
    else
    {
      $("nav").removeClass("navbar-custom");
    }

  })

});


//navigation scroll smooth effect//




// Smooth scrolling



//menu icon closes automatically when user clicks on it//

$(function() {

  $(".navbar-collapse ul li a").on("click touch",function()
  {

    $(".navbar-toggler").click();
  }

  );

});
