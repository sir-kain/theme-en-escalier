$(document).ready(function () {


  //initialize swiper when document ready  
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true
  });

  // $('.loader').fadeOut(3000, function() {
  //     $("#corps").fadeIn(1000);
  // });


  // Display other languages on click
  $('nav li.active').on('click', function (e) {
    e.preventDefault();
    $('nav li.active ~ li:not(.active)').fadeOut();
    // $('nav li.active:active ~ li:not(.active)').slideToggle(400);
    $(this).closest('li').siblings('li').slideToggle(400);
  });

  // $(document).scroll(function () {
  //   if ($(document).scrollTop() > $('.menu').height()) {
  //     // $('.menu').transition('flash');
  //     $('.menu').css({
  //       'display': 'none'
  //     });
  //     $('.top_header').css({
  //       'display': 'block'
  //     });
  //     setTimeout(function () {
  //       $('.flag').removeClass('bounce');
  //     }, 1000);
  //   } else {
  //     $('.menu').css({
  //       'display': ''
  //     });
  //     $('.top_header').css({
  //       'display': 'none'
  //     });
  //     setTimeout(function () {
  //       $('.flag').addClass('bounce');
  //     }, 1000);
  //   }
  //   // console.log('ok', $(document).scrollTop(), 'ko ', $('.menu').height());
  // });

  new WOW().init();
});
