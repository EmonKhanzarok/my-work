$(document).ready(function () {

  "use strict"

  // preloader js
  $(window).load(function () {
    $("#loading").fadeOut(1000);
  })

  // navigation js
  $(function () {
    $(".navigation__icon").click(function () {
      $(".navigation").toggleClass('navigation-open');
    });
  });

  // typing plugin
  var typed = new Typed('.typing', {
    strings: [
      'Designer.',
      'Freelancer.',
      'Photographer.',
      'Developer.'
    ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
  });

  // ripple plugin
  $('#banner').ripples({
    dropRadius: 20,
    resolution: 256,
    interactive:true,
    crossOrigin:'',
    perturbance: 0.4,
  });

  // pie chart plugin
  $('.chart').easyPieChart({
    barColor: '#f7082d',
    trackColor: '#f2f2f2',
    scaleLength: false,
    lineCap: 'squre',
    lineWidth: 12,
    size: 150,
    animate: 7000,
  });

  // counter-up plugin
  $('.counter').counterUp({
    delay: 100,
    time: 5000
  });

  // mixitup plugin
  var mixer = mixitup('.portfolio-list');

  // vanilla tilt plugin
  VanillaTilt.init(document.querySelectorAll(".service-item"), {
    max: 25,
    speed: 400,
  });

  // swiper plugin
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // testimonial plugin
  $('.test-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // likhon-link plugin
  $('.likhon-link-slide').slick({
    dots: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // scroll top js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });

  $('#scroll-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  // wow.js plugin
  new WOW().init();

  //  cursor.js plugin
  var kursorx = new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: '#f7082d',
  })


});