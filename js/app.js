console.log("sanity check");

(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".topnav").hide();

    // fade in .navbar
    $(function () {
      $(window).scroll(function () {
        // set distance user needs to scroll before we start fadeIn
        if ($(this).scrollTop() > 320) {
          $('.topnav').fadeIn();
        } else {
          $('.topnav').fadeOut();
        }
      });
    });
  });
}(jQuery));
