var curr = 1;

$(function(){
  $(".mySlides").hide();
  $(".mySlides:nth-child(" + curr + ")").fadeToggle();
  // console.log("init");
  $(".next").click(function(){
    // console.log($(".mySlides").length)
    $(".mySlides:nth-child(" + curr + ")").hide();
    curr++;
    if (curr > $(".mySlides").length) {
      curr = 1;
    }
    $(".mySlides:nth-child(" + curr + ")").fadeToggle();
  })

  $(".prev").click(function(){
    // console.log($(".mySlides").length)
    $(".mySlides:nth-child(" + curr + ")").hide();
    curr--;
    if (curr < 1) {
      curr = $(".mySlides").length;
    }
    $(".mySlides:nth-child(" + curr + ")").fadeToggle();
  })

  //navbar
  $(".hamburger-menu").click(function(){
    console.log("clicked")
    $("#myNav").css("height", "100%")
  })
  $(".closebtn").click(function(){
    $("#myNav").css("height", "0")
  })
})