$(function() {


$('button.switch').on('click', function() {
    $(this).toggleClass( "on" );
    $(this).toggleClass( "off" );

    $("body").toggleClass( "light" );
    $("body").toggleClass( "dark" );

    if ( $(this).hasClass("off") ) {
      $('h1.status').text("Hey, who turned off the lights")
    }
    else {
      $('h1.status').text("It's so bright in here!")
    }
  });


});
