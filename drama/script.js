// console.log('hello')

//testing

//generate div with image etc

function createTag(data, index) {
  var tag = document.createElement("div");
  var id = 'mov-' + index;
  // tag.setAttribute("class", id);
  tag.setAttribute("class", "movie-tile " + id);

  var h1 = document.createElement("h1");
  var text = document.createTextNode(data.title);
  h1.setAttribute("id", "mov-title");
  tag.appendChild(text);

  var img = document.createElement("img");
  img.setAttribute("src", data.link_image);
  img.setAttribute("class", "mov-poster-img");
  h1.appendChild(text);
  tag.appendChild(img);
  tag.appendChild(h1);

  $(".movie-country").append(tag);
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

var currCountry = 1;

var country = {"Asia" : 1, "Africa" : 2, "America" : 3, "Australia" : 4, "Europe" : 5,};

$(function(){
  var movData;
  $.getJSON("/movie-list.json", function(data){
    for (var i = 0; i < 5; i++)
    {
      generateOnly(data, i + 1);
    }

  }).fail(function(){ console.log("error")});
  
  $('body').click(function(e){
    var target = $(e.target);

    if (!target.is('.dropdown-content') && !target.is('#selectBox')) {
      $('.dropdown-content').hide();
      $("#selectBox").attr("class", "selector-box");
    }
  });
  
  $(".dropdown-content a").click(function(e){
    $("#selectBox").text(e.target.innerHTML);
    var selected = country[e.target.innerHTML];
    var a = '.mov-' + selected;
    var b = '.mov-' + currCountry;
    if (a != b) {
    $(a).show();
    $(b).hide();
    currCountry = selected;
    }
  });

  $("#selectBox").click(function(){
    
    if($(".dropdown-content").is(':visible'))
    {
      $("#selectBox").attr("class", "selector-box");
    }else
    {
      $("#selectBox").attr("class", "selector-box-selected");
    }
    $(".dropdown-content").toggle();
  }
  );
})