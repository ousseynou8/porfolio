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
  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
  });

  // boutonHaut
  $(function () {
    $("#monBouton").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 3000);
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


 


var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})




});