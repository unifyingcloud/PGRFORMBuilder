var formData = window.sessionStorage.getItem('formData');
var editing = true;

var templates = {
  starRating: function(fieldData) {
    return {
      field: '<span id="'+fieldData.name+'">',
      onRender: function() {
        $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
      }
    };
  }
};


function toggleEdit() {
  document.body.classList.toggle('form-rendered', editing);
  return editing = !editing;
}


jQuery(function($) {
  var options = {
      i18n: {
        locale: 'es-ES'
      },
      templates: templates,
      
      onSave: function(e, formData) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

          var json = formData,
          blob = new Blob([json], {type: "octet/stream"}),
          url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = "formulario.json";
          a.click();
          window.URL.revokeObjectURL(url);
        // toggleEdit();

        // $('.render-wrap').empty();
        // $('.render-wrap').formRender({
        //   formData: formData,
        //   templates: templates
        // });
        // window.sessionStorage.setItem('formData', JSON.stringify(formData));
      },
    
    
    
    
    }
    $fbTemplate = $(document.getElementById('fb-editor'));
    var formBuilder=$fbTemplate.formBuilder(options);

 


  document.getElementById('getXML').addEventListener('click', function() {
   alert(  formBuilder.actions.getData('xml'));
   
  });
 
  document.getElementById('getJSON').addEventListener('click', function() {
    alert(formBuilder.actions.getData('json', true));
  });
  
  // document.getElementById('getJS').addEventListener('click', function() {
  //   alert('check console');
  //   console.log(formBuilder.actions.getData());
  // });
 


});


 