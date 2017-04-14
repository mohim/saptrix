   // Counter 
   jQuery('.statistic-counter').counterUp({
       delay: 10,
       time: 2000
   });

   function initMap() {
       var uluru = {
           lat: -25.363,
           lng: 131.044
       };
       var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 4,
           center: uluru
       });
       var marker = new google.maps.Marker({
           position: uluru,
           map: map
       });
   }

   // scroll animation

   // https://github.com/dirkgroenen/jQuery-viewport-checker
   // https://daneden.github.io/animate.css/
   var $target = $("[data-scroll-effect]"),
       scrollDataAttr = "scroll-effect",
       scrollHiddenClass = "scroll-effect-hidden",
       scrollVisibleClass = "visible",
       animateClass = "animated",
       scrollOffset = 100;

   $target.each(function () {
       var effect = $(this).data(scrollDataAttr);
       $(this)
           .addClass(scrollHiddenClass)
           .attr("aria-hidden", true)
           .viewportChecker({
               classToAdd: scrollVisibleClass + " " + animateClass + " " + effect,
               offset: scrollOffset,
               callbackFunction: function (elem, action) {
                   elem.removeAttr("aria-hidden")
               }
           });
   });

   // ===== Scroll to Top ==== 
   $(window).scroll(function () {
       if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
           $('#return-to-top').fadeIn(200); // Fade in the arrow
       } else {
           $('#return-to-top').fadeOut(200); // Else fade out the arrow
       }
   });
   $('#return-to-top').click(function () { // When arrow is clicked
       $('body,html').animate({
           scrollTop: 0 // Scroll to top of body
       }, 500);
   });