$(document).ready(function(){
    $("#flipcard").flip({
        trigger: 'hover',
    })
})


$("delaniForm" ).submit(function(event) {
    if ( $("input").first().val() === "correct" ) {
      $( "span" ).text( "Thank you. Your message has been recieved" ).show();
      return;
    }
   
    $("span").text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
  });