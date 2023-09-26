//header hamburger
$(document).ready(function () {
  $(".header__hamburger").click(function (e) { 
    e.preventDefault();
    $(".header__hamburger").toggleClass("active");
    $(".header__menu__items").slideToggle();
    $(".header__menu__items").css("display", "flex");
     $(".header__inner").toggleClass("active");
  });
});



//faq
$(document).ready(function () {
  $(".item").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).find(".item__a").slideToggle();
    $(this).siblings().find(".item__a").slideUp();
    $(this).siblings().removeClass("active");
  });
});

// ヘッダーの出たり消えたりのです
var startPos = 0;
$(window).scroll(function(){
  var currentPos = $(this).scrollTop();
  if (currentPos > startPos) {
    if($(window).scrollTop() >= 160) {
      $(".header").css("top", "-" + 220 + "px");
    }
  } else {
    $(".header").css("top", 0 + "px");
  }
  startPos = currentPos;
});