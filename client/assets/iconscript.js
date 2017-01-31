var secondcontent = $('#candocontent').offset().top + $('#candocontent').height();
var secondcontentwo = $('#candocontent2').offset().top + $('#candocontent2').height();
var secondcontenthree = $('#candocontent3').offset().top + $('#candocontent3').height();

$(window).on('scroll', function() {
  var stop = Math.round($(window).scrollTop());

  // if (stop > secondcontent) {
  //   $('.icons').addClass('animated fadeInLeft')
  // }
  if (stop > secondcontentwo) {
    $('.iconstwo').addClass('animated rollIn')
  }
  if (stop > secondcontenthree) {
    $('.iconsthree').addClass('animated rollIn')
  } else {
    $('.icons').removeClass('animated fadeInLeft')
    $('.iconstwo').removeClass('animated rollIn')
    $('.iconsthree').removeClass('animated rollIn')
  }
})
