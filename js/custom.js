$(function(){
    $('.slide-one').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive : {
          0 : {
            items:1
          },
          480 : {
            items:2
          },
          768 : {
            items:3
          },
          992 : {
            items:4
          }
        }
    })

    $('.slide-two').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots: true,
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      items:1
    })

    $('.button-nav').on('click', function(event) {
        $('.nav-list').slideToggle(400);
        event.preventDefault();
	  })

    $('.mobile-icon').on('click', function(event) {
      $('.mobile-menu').slideToggle(400);
      event.preventDefault();
    });

    $("a.scroll-to").on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
          scrollTop: $(anchor).offset().top - 75
      }, 1200);
  });

  });