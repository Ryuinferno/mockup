$(document).ready(function(){
  $(".button-collapse").sideNav();
});
(function(){
  window.urlParams = {};
  var e, a = /\+/g,
      r = /([^&=]+)=?([^&]*)/g,
      d = function(s) {
          return decodeURIComponent(s.replace(a, " "));
      },
      q = window.location.search.substring(1);
  while (e = r.exec(q)) {
    window.urlParams[d(e[1])] = d(e[2]);
  }
  if (window.urlParams.device) {
    $("li#device_" + window.urlParams.device).addClass('active blue');
    var $header = $("li#device_" + window.urlParams.device)
        .closest('#vendor')
        .find('.collapsible-header')
    $header.addClass('active');
    $header.find('i.material-icons').html('keyboard_arrow_up');
  } else {
    $('li#device_all').addClass('active blue');
  }
  if (window.urlParams.type) {
    $("li#type_" + window.urlParams.type).addClass('active blue');
  } else {
    $('li#type_all').addClass('active blue');
  }
})();
$('input#search').focus(function(){
  $(this).parent().addClass('focused');
});
$('input#search').blur(function(){
  if (!$(this).val()) {
    $(this).parent().removeClass('focused');
  }
});
$('.collapsible-header').bind('click', function(){
  if ($(this).hasClass('active')) {
    $(this).find('i.material-icons').html('keyboard_arrow_down');
  } else {
    $(this).find('i.material-icons').html('keyboard_arrow_up');
  }
});