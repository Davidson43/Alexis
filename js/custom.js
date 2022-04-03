$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1
    })

    $('.button-nav').on('click', function(event) {
		$('.nav-list').slideToggle(400);
		event.preventDefault();
	});

  });