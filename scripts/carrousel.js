// $(document).ready(function () {

//     if (screen.width > 1000) {
//         $(".chapters__div").hide();
//     }
//     else {

//         $(".chapters__div").show();
//     }

// });

// $(document).ready(function () {

//     if (screen.width < 1000) {
//         $(".carrousel__div").css();
//     }
//     else {

//         $(".carrousel__div").show();
//     }

// });

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: document.getElementById('window-prev'),
  nextArrow: document.getElementById('window-next'),
  
  fade: false,
  accessibility: true,
  cssEase: 'ease-out',
  infinite: false,
  keyboard: true,

  autoplay: false,
  speed: 1500,
  autoplaySpeed: 15000,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  speed: 2000,
  asNavFor: '.slider-for',
  dots: false,
  infinite: false,
  centerMode: false,
  focusOnSelect: true,
  prevArrow: document.getElementById('nav-prev'),
  nextArrow: document.getElementById('nav-next'),
});

//
//
//hide buttons & nav
//
//

$(".carrousel__exit").css({opacity:1});
var exit = null;
$(".chapter__body").mousemove(function() {
    clearTimeout(exit);
    $(".carrousel__exit").css({opacity:1});
    exit = setTimeout('$(".carrousel__exit").css({opacity:0});', 5000);
}).mouseleave(function() {
    clearTimeout(exit);
    $(".carrousel__exit").css({opacity:1});  
});

$("#window-prev").css({opacity:1});
var windowPrev = null;
$(".chapter__body").mousemove(function() {
    clearTimeout(windowPrev);
    $("#window-prev").css({opacity:1});
    windowPrev = setTimeout('$("#window-prev").css({opacity:0});', 5000);
}).mouseleave(function() {
    clearTimeout(windowPrev);
    $("#window-prev").css({opacity:1});  
});

$("#window-next").css({opacity:1});
var windowNext = null;
$(".chapter__body").mousemove(function() {
    clearTimeout(windowNext);
    $("#window-next").css({opacity:1});
    windowNext = setTimeout('$("#window-next").css({opacity:0});', 5000);
}).mouseleave(function() {
    clearTimeout(windowNext);
    $("#window-next").css({opacity:1});  
});

$("#nav-prev").css({opacity:1});
var navPrev = null;
$(".chapter__body").mousemove(function() {
    clearTimeout(navPrev);
    $("#nav-prev").css({opacity:1});
    navPrev = setTimeout('$("#nav-prev").css({opacity:0});', 5000);
}).mouseleave(function() {
    clearTimeout(navPrev);
    $("#nav-prev").css({opacity:1});  
});

$("#nav-next").css({opacity:1});
var navNext = null;
$(".chapter__body").mousemove(function() {
    clearTimeout(navNext);
    $("#nav-next").css({opacity:1});
    navNext = setTimeout('$("#nav-next").css({opacity:0});', 5000);
}).mouseleave(function() {
    clearTimeout(navNext);
    $("#nav-next").css({opacity:1});  
});

$("#nav").css({opacity:1});
var nav = null;
$(".chapter__body").mousemove(function() {
    clearTimeout(nav);
    $("#nav").css({opacity:1});
    nav = setTimeout('$("#nav").css({opacity:0});', 5000);
}).mouseleave(function() {
    clearTimeout(nav);
    $("#nav").css({opacity:1});  
});




$(document).ready(function() {
    $('body').hide().stop().fadeIn(1000);
    $('.carrousel__nav-image').parent().addClass('carrousel__nav-frame');
    $("a").click(function(e) {
        e.preventDefault();
        $link = $(this).attr("href");
        $("body").fadeOut(1000,function(){
          window.location =  $link; 
        });
    });
  });


  $(document).on('keydown',function(e) {
    if(e.which == 37) {
        $("#window-prev").click();
    }
});

  $(document).on('keydown',function(e) {
    if(e.which == 39) {
        $("#window-next").click();
    }
});

$(document).on('keydown',function(e) {
    if(e.which == 65) {
        $("#window-prev").click();
    }
});

  $(document).on('keydown',function(e) {
    if(e.which == 68) {
        $("#window-next").click();
    }
});
