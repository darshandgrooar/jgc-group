
 $(document).ready(function () {

    /* Mobile menu */

  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-close");

    $(".navigation-bar").toggleClass("slide-menu");

    $("body").addClass("body-fixed");
  });

  $(".sidebar-overlay, .close-menu").click(function () {
    $(".menu-icon").removeClass("menu-close");

    $(".navigation-bar").removeClass("slide-menu");

    $("body").removeClass("body-fixed");
  });

  $(document).on('click', '.navigation-bar, .close-menu', function () {
     $('.navigation-bar').toggleClass('slide-menu');
     $('body').removeClass('body-fixed');
 });

  $(".menuMain li:has(ul)").prepend('<span class="arrow"></span>');

  $(".arrow").click(function () {
    $(this).siblings("ul").slideToggle("slow");

    $(this).toggleClass("minus");
  });

  /*~~~~~~~ 02. Window Scroll  ~~~~~~~~*/

  $(".scrollTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);

    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $(".scrollTop").fadeIn();

      $(".header-main").addClass("has-sticky");
      $("body").addClass("sticky-header");
    } else {
      $(".scrollTop").fadeOut();

      $(".header-main").removeClass("has-sticky");
      $("body").removeClass("sticky-header");
    }
  });

    $('a[href^="#"]').on("click", function(event) {
        var target = $(this.getAttribute("href"));
        if (target.length) {
            event.preventDefault();
            $("html, body").stop().animate({
                scrollTop: target.offset().top,
            }, 1000)
        }
    });

$('.newsSlider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {

      breakpoint: 991, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 569,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }

    }
  ]
});


$('.testimonial_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  fade: true,
  appendDots:'.tstsliderDots',
  arrows: false,
  pauseOnHover: true,
  autoplay: true,
  autoplaySpeed: 2500,  
});


  /* ------| A. Svg Rendering In Browser |--------- */

  function svgConvert(svgClass) {
    $(svgClass).each(function () {
      var $img = $(this);

      var imgID = $img.attr("id");

      var imgClass = $img.attr("class");

      var imgURL = $img.attr("src");

      $.get(
        imgURL,
        function (data) {
          /* Get the SVG tag, ignore the rest */

          var $svg = $(data).find("svg");

          /* Add replaced image's ID to the new SVG */

          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }

          /* Add replaced image's classes to the new SVG */

          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " svgIcon");
          }

          $svg = $svg.attr("fill", "currentColor");

          /* Remove any invalid XML tags as per http://validator.w3.org */

          $svg = $svg.removeAttr("xmlns:a");

          /* Replace image with new SVG*/

          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  }

 });