// console.log('hello')

//testing

//test for generate template

function createTag(data, index) {
  var tag = document.createElement("div");
  var id = 'mov-' + index;
  tag.setAttribute("id", id);
  tag.setAttribute("class", "TESTYO");

  
  var h1 = document.createElement("h1");
  var text = document.createTextNode(data.title);
  tag.appendChild(text);

  var img = document.createElement("img");
  img.setAttribute("src", data.link_image);
  img.setAttribute("class", "mov-poster-img");
  h1.appendChild(text);
  tag.appendChild(img);
  tag.appendChild(h1);

  $(".content-test").append(tag);
}

function generateAll(data)
{
  var l = data.dramas.length;
  for (var i = 0; i < l; i++)
  {
    createTag(data.dramas[i], index);
  }
}

function generateOnly(data, index)
{
  var l = data.dramas.length;
  for (var i = 0; i < l; i++)
  {
    if (data.dramas[i].countries.indexOf(index) != -1) {
      createTag(data.dramas[i], index);
    }
  }
}


var curr = 1;

$(function(){
  var movData;
  $.getJSON("/movie-list.json", function(data){
    console.log(data.dramas[0].link_image);
    movData = data;
    console.log("yo " + movData);
    // createTag(data.dramas[0]);
    for (var i = 0; i < 5; i++)
    {
      generateOnly(data, i + 1);
    }

  }).fail(function(){ console.log("error")});

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

  //navbar
  $(".hamburger-menu").click(function(){
    console.log("clicked")
    $("#myNav").css("height", "100%")
  })
  $(".closebtn").click(function(){
    $("#myNav").css("height", "0")
  })
})


