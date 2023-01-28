//slide ảnh
$("#banner").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 1,
    dots: true,
    dotsEach: true,
  });
  
  $("#women-product").owlCarousel({
    loop: true,
    margin: 30,
    // nav: true,
    // navText: [
    //   "<div class='nav-button owl-prev'>‹</div>",
    //   "<div class='nav-button owl-next'>›</div>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  
  $("#men-product").owlCarousel({
    loop: true,
    margin: 30,
    // nav: true,
    // navText: [
    //   "<div class='nav-button owl-prev'>‹</div>",
    //   "<div class='nav-button owl-next'>›</div>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  
  $("#featured-product").owlCarousel({
    loop: true,
    margin: 30,
    // nav: true,
    // navText: [
    //   "<div class='nav-button owl-prev'>‹</div>",
    //   "<div class='nav-button owl-next'>›</div>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  
  $("#product-trend").owlCarousel({
    loop: true,
    margin: 30,
    // nav: true,
    // navText: [
    //   "<div class='nav-button owl-prev'>‹</div>",
    //   "<div class='nav-button owl-next'>›</div>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $("#product__thumb-gallery").owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
