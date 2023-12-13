$(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".responsive").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Function on the position of the second section
  function secondSectionPosition() {
    return $(".about__part").offset().top;
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > secondSectionPosition()) {
      $(".contact-button").fadeIn();
    } else {
      $(".contact-button").fadeOut();
      $(".contact-form").fadeOut();
    }
  });

  $(".contact__Btn").click(function () {
    $(".contact-form").fadeIn();
    $(".contact__Btn").fadeOut();
  });

  $(".cross").click(function () {
    $(".contact-form").fadeOut();
    $(".contact__Btn").fadeIn();
  });

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    // Handled form submission here
    // Reset the form after submission
    $("#contactForm")[0].reset();
    $(".contact-form").fadeOut();
  });

  $("header").on("click", ".bar__icon", function () {
    var dropdownMenu = $(".dropdown__menu");
    var barImg = $(".bar__img");
    var crossImg = $(".cross__img");

    dropdownMenu.toggleClass("open");

    if (dropdownMenu.hasClass("open")) {
      barImg.css("display", "none");
      crossImg.css("display", "inline-block");
    } else {
      barImg.css("display", "inline-block");
      crossImg.css("display", "none");
    }
  });
});
