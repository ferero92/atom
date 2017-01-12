$(document).ready(function() {
  $('#click').click(function() {
    var total = 0;
    var $total = $('#'+$('select').val()+' .total');
    $('<li>'+$('#add').val()+'</li>').insertBefore($total);
    $total.siblings('li').each(function(index, el) {
      total += parseInt($(this).html());
    });
    $total.html($total.html().substring(0,7) + total);
  });
});
