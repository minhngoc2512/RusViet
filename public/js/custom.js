$(".slider-img").slick({
  dots: true,
  arrows: false,
});

function getForwardImage(status){
    if(status==='next'){
      $(".slider-img").slick("slickNext");
    }
    if(status==='prev'){
      $(".slider-img").slick("slickPrev");
    }
}

if ($(".slider-item").hasClass("slick-active")) {
  var el =  $(".slider-img .slick-list .slick-track .slick-active img");
  console.log(el);
  var title = el.attr("alt");
  var des = el.attr("data-des");
   $("#title-slider").text(title);
   $("#des-slider").text(des);
 }
 $(".slider-img").on("afterChange", function(slick, currentSlide) {
   if ($(".slider-item").hasClass("slick-active")) {
    var el =  $(".slider-img .slick-list .slick-track .slick-active img");
    var title = el.attr("alt");
    var des = el.attr("data-des");
     $("#title-slider").text(title);
     $("#des-slider").text(des);
   }
 });