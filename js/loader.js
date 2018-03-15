
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
 
{"type":"text","subtype":"text","description":"FED/SEIDF/ UEIDT-  /000000/2017","label":"​NÚMERO DE AVERIGUACIÓN PREVIA O CARPETA DE INVESTIGACION","className":"formControl"},{"type":"date","name":"date2","label":"II)FECHA DE INICIO DE LA CARPETA DE INVESTIGACION", "class":"formControl"},{"type":"radio-group","name":"radiogroup3","label":"III)DELITO POR EL QUE SE INICIA LA CARPETA DE INVESTIGACIÓN","values":[{"label":"INHUMANOS O DEGRADANTES","value":"INHUMANOS O DEGRADANTES"},{"label":"TRATOS O PENAS CRUELES","value":"TRATOS O PENAS CRUELES"},{"label":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL","value":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL"},{"label":"TORTURA","value":"TORTURA"}]},{"type":"date","name":"date4","label":"IV) DATOS DE LA INVESTIGACION DE ORIGEN"},{"type":"text","subtype":"text","description":"","label":"JUZGADO","className":"formControl"},{"type":"text","subtype":"text","description":"","label":"PROCESO","className":"formControl"},{"type":"text","subtype":"text","description":"","label":"DELITO","className":"formControl"}

]`
  
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData
    });
  


});


 
