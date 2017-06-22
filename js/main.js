$(document).ready(function(){
  $(".button-collapse").sideNav();
});
$('input#search').focus(function(){
  $(this).parent().addClass('focused');
});
$('input#search').blur(function(){
  if (!$(this).val()) {
    $(this).parent().removeClass('focused');
  }
});
