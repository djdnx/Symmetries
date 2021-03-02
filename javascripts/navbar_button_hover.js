$(function () {

  var isTouchDevice = ('ontouchstart' in window || 'onmsgesturechange' in window)

  var $collapsedNavbarButton = $(".navbar-default .navbar-toggle")

  if(!isTouchDevice) {
      $collapsedNavbarButton.on({
          mouseenter: function() {
            if ($(this).hasClass('collapsed')) {
              $(this).css("cssText", "background-color: #ddd !important")
            }
          },
          mouseleave: function() {
            if ($(this).hasClass('collapsed')) {
              $(this).css("cssText", "background-color: transparent !important")
            }
          }
      })
  }
})
