function getControlsPosition() {
  if($(".slider_wrapp").length > 0 ) {
    leftSlide = $(".slider_wrapp .left_slice");
    rightSlide = $(".slider_wrapp .right_slice");
    offsetLeftCoord = $("#coords").offset().left;
    leftSlide.css({
      "margin-left" : offsetLeftCoord + "px"
    });
    rightSlide.css({
      "margin-right" : offsetLeftCoord + "px"
    });
  }
}

function getSlideDescriptPosition() {
  var indexAttr;
  if(bodyWidth > 767) {
    leftCoord = -1 * (bodyWidth - $("#coords").width() + 100);
    indexAttr = parseInt( $(".slider .slick-current").attr("data-slick-index") ) + 1;
    $(".slider .slick-current + .slick-slide .slide_descript").css({
      "left" : leftCoord + "px"
    });
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getControlsPosition();
  getSlideDescriptPosition();
});

$(document).scroll(function() {

});

$(document).ready(function() {

    getControlsPosition();

    $("[data-thumbs-link]").on("click", function(e) {
        e.preventDefault();
        name = $(this).attr("data-thumbs-link");
        $("[data-thumbs = '"+name+"'] .thumb_photo").removeClass("hide");
        $(this).remove();
    });

    Fancybox.bind("[data-fancybox]", {});


    if( $(".slider").length > 0 ) {

      var currentSlideBlock, nextSlideBlock, indexPrevSlide, indexNextSlide, slideIndex, prevSlide, activeSlide, videoEl, videoId;

      $(".slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
          currentSlideBlock = $(".slider .slick-slide:eq("+currentSlide+")");
          nextSlideBlock = $(".slider .slick-slide:eq("+nextSlide+")");
          if(currentSlideBlock.hasClass("next_slide")) {
            currentSlideBlock.removeClass("next_slide")
          }
          if(nextSlideBlock.hasClass("prev_slide")) {
            nextSlideBlock.removeClass("prev_slide");
            nextSlideBlock.addClass("next_slide");
          } else {
            nextSlideBlock.removeClass("next_slide");
            currentSlideBlock.addClass("prev_slide");
          }
          if(currentSlideBlock.find("video").length > 0) {
            videoId = currentSlideBlock.find("video").attr("id");
            videoEl = document.getElementById(videoId);
            videoEl.pause();
          }
          if(nextSlideBlock.find("video").length > 0) {
            videoId = nextSlideBlock.find("video").attr("id");
            videoEl = document.getElementById(videoId);
            videoEl.play();
          }
          if(bodyWidth > 767) {
            leftCoord = -1 * (bodyWidth - $("#coords").width() + 100);
            $(".slider .slick-current + .slick-slide + .slick-slide .slide_descript").css({
              "left" : leftCoord + "px"
            });
          }
      });

      $(".slider").on('init', function(){
          getSlideDescriptPosition();
      });

      $(".slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          autoplaySpeed: 10000,
          autoplay: true,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: true,
          swipe: false
      });

      $(".left_slice").on("click", function(e) {
        if($(".slider .slick-current").attr("data-slick-index") != 0) {
          $(".slider .slick-prev").trigger("click");
        } else {
          e.preventDefault();
        }
      });

      $(".right_slice").on("click", function(e) {
        if($(".slider .slick-current").attr("data-slick-index") !=  ( $(".slider .slick-slide").length - 1 ) ) {
          $(".slider .slick-next").trigger("click");
        } else {
          e.preventDefault();
        }
      });

    }

});