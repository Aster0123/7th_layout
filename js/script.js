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

function myFunction() {
  var element = document.getElementById("my");
  element.classList.toggle("anotherColor");
};
function myFunction1() {
  var element = document.getElementById("my1");
  element.classList.toggle("anotherColor");
};
function myFunction2() {
  var element = document.getElementById("my2");
  element.classList.toggle("anotherColor");
};
function myFunction3() {
  var element = document.getElementById("my3");
  element.classList.toggle("anotherColor");
};


