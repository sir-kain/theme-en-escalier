$(document).ready(function() {

    // $('.loader').fadeOut(3000, function() {
    //     $("#corps").fadeIn(1000);
    // });


  // Display other languages on click
  $("nav li.active").on('click', function(e) {
    e.preventDefault();
    $('nav li:not(.active)').slideToggle(400);
    // $(this).closest('li').siblings('li').slideToggle(400);
  });

});