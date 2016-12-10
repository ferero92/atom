$(document).ready(function () {
  $('img').mouseenter(function (e) {
    $('img').addClass('class2');
    $('img').removeClass('class1');
    $('#tip1').css('left', e.pageX + 5);
    $('#tip1').css('top', e.pageY + 5);
    $('#tip1').css('display', 'block');
  });
  $('img').mouseleave(function () {
    $('img').addClass('class1');
    $('img').removeClass('class2');
    $('#tip1').css('display', 'none');
  });
})
