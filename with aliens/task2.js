$(document).ready(function() {
  // Set initial positions
  parallaxScroll();
  
  $(window).on('scroll', function() {
    parallaxScroll();
  });
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();

  // Section 1: Space Station Parallax
  $('.space-station').css('transform', 'translateX(-50%) translateY(' + (-0.2 * scrolled) + 'px)');

  // Section 2: Planets Parallax
  $('.planet-1').css('top', (30 + scrolled * 0.05) + '%');
  $('.planet-2').css('top', (20 + scrolled * 0.06) + '%');
  $('.planet-3').css('top', (25 + scrolled * 0.05) + '%');

  // UFOs: Activate movement only after Section 3 comes into view.
  var section3Offset = $('.section-3').offset().top;
  var effectiveScrollUFO = scrolled - section3Offset;
  if (effectiveScrollUFO < 0) {
    effectiveScrollUFO = 0;
  }
  $('.ufo-1').css('top', (60 + effectiveScrollUFO * 0.09) + '%');
  $('.ufo-2').css('top', (80 + effectiveScrollUFO * 0.07) + '%');

  // Aliens: Calculate scroll relative to Section 4
  var section4Offset = $('.section-4').offset().top;
  var effectiveScrollAlien = scrolled - section4Offset;
  if (effectiveScrollAlien < 0) {
    effectiveScrollAlien = 0;
  }
  
  // Debug: log effective scroll for aliens
  console.log("Effective Scroll for Aliens: " + effectiveScrollAlien);

  // Define the scroll range for alien movement:
  var scrollStart = section4Offset;      // Start moving when Section 4 is reached
  var scrollEnd = section4Offset + 400;    // Complete the movement 300px later

  // Use mapRange to calculate the new positions
  // For the left alien: from -200px (off-screen) to 0px (fully visible)
  var alienLeftPos = mapRange(scrolled, scrollStart, scrollEnd, -200, 0);
  $('.alien-left').css('left', alienLeftPos + 'px');

  // For the right alien: from -200px (off-screen) to 0px (fully visible)
  var alienRightPos = mapRange(scrolled, scrollStart, scrollEnd, -200, 0);
  $('.alien-right').css('right', alienRightPos + 'px');
}

function mapRange(value, inMin, inMax, outMin, outMax) {
  let progress = (value - inMin) / (inMax - inMin);
  // Clamp the progress between 0 and 1
  if (progress < 0) progress = 0;
  if (progress > 1) progress = 1;
  return outMin + progress * (outMax - outMin);
}
