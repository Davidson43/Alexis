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
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      items:1
    })

    $('.button-nav').on('click', function(event) {
        $('.nav-list').slideToggle(400);
        event.preventDefault();
	  })

  });