//What we do section

$(document).ready(function() {
  $("img[alt=service-1]").click(function() {
    $(".content-after").toggle();
    $(".service-img").toggle();
  });
  $(".content-after").click(function() {
    $(".service-img").show();
    $(".content-after").hide();
});
});


$(document).ready(function() {
  $("img[alt=service-2]").click(function() {
    $(".content-after-a").toggle();
    $(".service-img-a").toggle();
});
    $(".content-after-a").click(function() {
    $(".service-img-a").show();
    $(".content-after-a").hide();

  });

});

$(document).ready(function() {
  $("img[alt=service-3]").click(function() {
    $(".content-after-b").toggle();
    $(".service-img-b").toggle();
  });
  $(".content-after-b").click(function() {
  $(".service-img-b").show();
  $(".content-after-b").hide();
  });
});


// Portfolio Section


$(document).ready(function(){
  $("#img1").hover(function(){
    $(".p-a").toggle();
  });
});

$(document).ready(function(){
  $("#img2").hover(function(){
    $(".p-b").toggle();
  });
});

$(document).ready(function(){
  $("#img3").hover(function(){
    $(".p-c").toggle();
  });
});

$(document).ready(function(){
  $("#img4").hover(function(){
    $(".p-d").toggle();
  });
});

$(document).ready(function(){
  $("#img5").hover(function(){
    $(".p-e").toggle();
  });
});
$(document).ready(function(){
  $("#img6").hover(function(){
    $(".p-f").toggle();
  });
});

$(document).ready(function(){
  $("#img7").hover(function(){
    $(".p-g").toggle();
  });
});

$(document).ready(function(){
  $("#img8").hover(function(){
    $(".p-h").toggle();
  });
});


//Contact section

// document.getElementById("delaniForm").submit();
// const myForm = document.getElementById("delaniForm");
// document.querySelector(".submit").addEventListener("click", function(){

//   myForm.submit();

// });



function validateForm() {
  let x = document.forms["delaniForm"]["name, email, comments"].value;
  if (x == "") {
    prompt("All fields must be filled out");
    return false;

  }
}

var input = document.getElementById("comments");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("delaniForm").click();
  }
});