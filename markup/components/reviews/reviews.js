$(document).ready(function () {
  $(".carousel-inner").swipe({
    swipeLeft: function (event, phase, direction, distance, duration, fingers) {
      $(".right.carousel-control").trigger("click");
    },
    swipeRight: function (event, phase, direction, distance, duration, fingers) {
      $(".left.carousel-control").trigger("click");
    },
  }); 
});
