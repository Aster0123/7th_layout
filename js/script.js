$(document).ready(function(){
  $('.slider1').slick({
    arrows:false,
    dots:true,
    slidesToShow:1,
    autoplay:false,
    speed:false,
    autoplaySpeed:false,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.slider2').slick({
    arrows:false,
    dots:true,
    slidesToShow:1,
    autoplay:false,
    speed:false,
    autoplaySpeed:false,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, nav').toggleClass('active');
  });
});




