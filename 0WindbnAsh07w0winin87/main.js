 $(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'a0lerFR0tm0s.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


     $('.map').click(function() {
        audioElement.play();

    });

      $('.black').click(function() {
        audioElement.play();

    });


       $('#footer').click(function() {
        audioElement.play();

    });

        $('#poptxt').click(function() {
        audioElement.play();

    });





});

 $("#footer").fadeIn('slow')
.css({bottom:0,position:'absolute'})
.animate({bottom:0}, 800, function() {
    //callback
});
$(document).ready(function() {
    $(".arow-div").delay(1000).fadeIn(500);
});

    $(document).ready(function(){
  $("#poptxt").click(function(){
    $('#poptxt').hide('fast');
  });
});
    $(document).ready(function(){
  $(".alert_popup").click(function(){
    $('.alert_popup').hide('fast');
  });
});



           $(document).ready(function(){
  $("#footer").click(function(){
    $('#poptxt').hide('fast');
  });
});

   $(document).ready(function(){
  $(".black").click(function(){
    $('.delayedPopupWindow').hide('fast');
  });
});
