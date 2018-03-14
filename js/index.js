jQuery(function($) {
  var options = {
      i18n: {
        locale: 'es-ES'
      }
    },
    $fbTemplate = $(document.getElementById('fb-editor'));
  $fbTemplate.formBuilder(options);
});