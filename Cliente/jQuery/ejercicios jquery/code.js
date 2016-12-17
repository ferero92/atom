$(document).ready(function () {

  $('#hide').click(function () {
    $('*').hide();
  });

  $('#hideme').click(function () {
    $(this).hide();
  });

  $('#introhide').click(function () {
    $('p.intro').hide();
  });

  $('#hidefirst').click(function () {
    $('p:first').hide();
  });

  $('#hidelist').click(function () {
    $('ul:first li:first').hide();
  });

  $('#hidelistfirst').click(function () {
    $('ul:first li').hide();
  });

  $('#hidelink').click(function () {
    $('a').hide();
  });

  $('#hidetarget').click(function () {
    $('a[target=_blank]').hide();
  });

  $('#hidethis').click(function () {
    $(this).hide();
  });

  $('tr:even').css('background-color', 'red');
  $('tr:odd').css('background-color', 'green');

  $('p:first').dblclick(function() {
    $(this).hide();
  });

  $('p:eq(1)').click(function() {
    alert('click sobre el segundo párrafo');
  });

  // $('p').hover(function() {
  //   alert('Entrando en un párrafo');
  // }, function() {
  //   alert('Saliendo de un párrafo');
  // });

  $(':text').focus(function() {
    $(this).css('background-color', 'yellow');
  });

  $(':text').blur(function() {
    $(this).css('background-color', 'transparent')
  });

  $('button.capa').click(function() {
    $(this).parent().hide();
  });

  $('td').click(function() {
    $(this).css('font-size', $(':selected').val());
  });

  $('ul').click(function() {
    $(this).children().each(function(index, el) {
      $(this).parent().next().html($(this).parent().next().html()+$(el).html());
    });
  });

});
