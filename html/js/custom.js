
 $(document).ready(function () {

    /* Mobile menu */

  $(".menuIcon").click(function () {
    $(this).toggleClass("menu-close");

    $(".navigationBar").toggleClass("slideMenu");

    $("body").addClass("bodyFixed");
  });

  $(".sidebar-overlay, .closeMenu").click(function () {
    $(".menuIcon").removeClass("menu-close");

    $(".navigationBar").removeClass("slideMenu");

    $("body").removeClass("bodyFixed");
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

      $(".headerMain").addClass("has_sticky");
      $("body").addClass("sticky_header");
    } else {
      $(".scrollTop").fadeOut();

      $(".headerMain").removeClass("has_sticky");
      $("body").removeClass("sticky_header");
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

    $('.banner-video-slide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
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