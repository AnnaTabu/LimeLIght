$(document).ready(function() {
 
  parallaxScroll();
  
  $(window).on('scroll', function() {
    parallaxScroll();
  });

});

function parallaxScroll() {
  let scrolled = $(window).scrollTop();

  $('.space-station').css('transform', 'translateX(-50%) translateY(' + (-0.2 * scrolled) + 'px)');
  $('.planet-1').css('top',(30 + scrolled * 0.05) +'%');
  $('.planet-2').css('top',(20 + scrolled * 0.06) +'%');
  $('.planet-3').css('top',(25 + scrolled * 0.05) +'%');


  let section3Offset = $('.section-3').offset().top;
  let effectiveScrollUFO = scrolled - section3Offset;
  if (effectiveScrollUFO < 0) {
    effectiveScrollUFO = 0;
  }
  $('.ufo-1').css('top', (60 + effectiveScrollUFO * 0.09) + '%');
  $('.ufo-2').css('top', (80 + effectiveScrollUFO * 0.07) + '%');
}
