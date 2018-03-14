
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
      
 {
        ""type"": ""radio-group"",
        ""label"": ""III)DELITO POR EL QUE SE INICIA LA CARPETA DE INVESTIGACIÓN"",
        ""name"": ""radio-group"",
        ""values"": [{label:""TORTURA"",value: ""DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL""},{label:""TRATOS O PENAS CRUELES"",value:""""}, {label:""INHUMANOS O DEGRADANTES"",value:""""}
        ]
      }

    

]`
  
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData
    });
  


});


 
