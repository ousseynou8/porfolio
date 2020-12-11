$(document).ready(function () {
  "use strict";
  // Eau
  $(".slider").ripples({
    resoluion: 512,
    dropRadius: 11,
    perturbance: 0.1,
  });

  $("#year").text(new Date().getFullYear());

  // Scroll
 

  // boutonHaut
  $(function () {
    $("#monBouton").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
    });
  });


// $(function(){
//   var scroll = document.body.scrollTop&&document.documentElement;
//       $(document).scroll(function() {
//         if($('html').scrollTop() > 130 || $('body').scrollTop() > 130)
//      $("#image").css('visibility', 'visible').fadeInt(300);
//       else
//      $("#image").css('visibility', 'hidden').fadeOut(100);
//       });
//   });


 

});