// console.log('hello')

//testing

function isThisEmail(email)
{
  if (email.length <= 2) {
    return false
  }

  if (email.indexOf('@') == -1) { //check if have @ or not, return false if not
    return false
  }

    var str = email.split('@');//split email into 2 parts from the @ symbol
    var dot = str[1].indexOf('.');//check if a dot exist in 2nd part of email, e.g. .net or .com
    var len = str[1].length;
    var dotParts = str[1].split('.');
    var dotCount = dotParts.length - 1; //check if dot character exist more
    if (dot == -1 || dot < 2 || dotCount > 2) { //if dot doesn't exits, 
      return false
    }

    for (var i = 0; i < dotCount.length; i++)
    {
      if (dotParts[i].length == 0) { //case of dot repeated or nothing after or before dot
        return false;
      }
    }
  

  return true;
}

var curr = 1;
$(function(){
  $("#regisForm").on('submit', function (event) {
    var valid = true;
    var radioValue = $("input[name='gender']:checked").val();

      $(this.elements).each(function() { 
        $(this).css("border", "3px transparent");
        if (!$(this).val().length && (this.nodeName == 'INPUT' || this.nodeName == 'SELECT')) {
          valid = false;
          $(this).css("border", "3px solid red");
        }
     });

     if (!radioValue) { //check if gender is selected
      valid = false;
      $("input[name='gender']").css("border", "3px solid red");
    }
  
    if (!$("input[name='toc']:checked").length) { // check if TOC is Checked
      alert("Please Tick Terms and Condition");
      valid = false;
      $("input[name='toc']").css("border", "3px solid red");
    }

    if ($("input[name='password']").val().length < 8) { // check if password is more than 8 letter
      alert("Password must be 8 or more letters");
      valid = false;
      $("input[name='toc']").css("border", "3px solid red");
    }

    var isEmail = isThisEmail($("input[name='email']").val())

    if (!isEmail) { // check if email is valid
      alert("Email is Invalid");
      valid = false;
      $("input[name='email']").css("border", "3px solid red");
    }
    console.log(valid)
     if (!valid) {
       event.preventDefault();
     }
  })

  //navbar
  $(".hamburger-menu").click(function(){
    console.log("clicked")
    $("#myNav").css("height", "100%")
  });
  $(".closebtn").click(function(){
    $("#myNav").css("height", "0")
  });
});