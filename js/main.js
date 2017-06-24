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
    $("li#device_" + window.urlParams.device)
        .closest('#vendor')
        .find('.collapsible-header')
        .addClass('active');
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
