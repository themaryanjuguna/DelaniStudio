$(document).ready(function() {
    $("flipcard").click(function() {
      $(".front").toggle();
      $(".back").toggle();
      $(".front").toggle();
    });
  });

$("delaniForm" ).submit(function(event) {
    if ( $("input").first().val() === "correct" ) {
      $( "span" ).text( "Thank you. Your message has been recieved" ).show();
      return;
    }
   
    $("span").text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
  });