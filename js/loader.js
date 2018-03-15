
var editing = true;

var templates = {
  starRating: function(fieldData) {
    return {
      field: "<span id='"+fieldData.name+"'>",
      onRender: function() {
        $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
      }
    };
  }
};


function toggleEdit() {
  document.body.classList.toggle("form-rendered", editing);
  return editing = !editing;
}


jQuery(function($) {
  var options = {
      i18n: {
        locale: "es-ES"
      },
      templates: templates,
      
      onSave: function(e, formData) {
        toggleEdit();

        $(".render-wrap").empty();
        $(".render-wrap").formRender({
          formData: formData,
          templates: templates
        });
        window.sessionStorage.setItem("formData", JSON.stringify(formData));
      },
    
    
    
    
    }
 
    var formData = `[
 

{"type":"text","subtype":"text","description":"FED/SEIDF/ UEIDT-  /000000/2017","label":"​NÚMERO DE AVERIGUACIÓN PREVIA O CARPETA DE INVESTIGACION","className":"formControl"}

]`
  
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData
    });
  


});


 
