
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
      
{"type":"Input text","subtype":"p","label":"​NÚMERO DE AVERIGUACIÓN PREVIA O CARPETA DE INVESTIGACION"},{"type":"DATE","subtype":"p","label":"II)FECHA DE INICIO DE LA CARPETA DE INVESTIGACION"},{"type":"radio-group","subtype":"p","label":"III)DELITO POR EL QUE SE INICIA LA CARPETA DE INVESTIGACIÓN"},{"type":"DATE","subtype":"p","label":"IV) DATOS DE LA INVESTIGACION DE ORIGEN"},{"type":"CATALOGUE","subtype":"p","label":"JUZGADO"},{"type":"CATALOGUE","subtype":"p","label":"PROCESO"},{"type":"CATALOGUE","subtype":"p","label":"DELITO"},{"type":"Paragraph","subtype":"p","label":"V) DATOS DE LA PUESTA A DISPOSICION"},{"type":"AUTOCOMPLETE","subtype":"p","label":"ESTADO"},{"type":"AUTOCOMPLETE","subtype":"p","label":"MUNICIPIO"},{"type":"DATE","subtype":"p","label":"FECHA DE LA PUESTA A DISPOSICION"},{"type":"Paragraph","subtype":"p","label":"V) INFORMACIÓN REFERENTE A  LAS PROBABLES VICTIMAS​"},{"type":"Paragraph","subtype":"p","label":"V.I GENERALES DE LA VICTIMA​"},{"type":"Input text","subtype":"p","label":"NOMBRE(S)"},{"type":"Input text","subtype":"p","label":"APELLIDO PATERNO"},{"type":"Input text","subtype":"p","label":"APELLIDO MATERNO"},{"type":"RADIO","subtype":"p","label":"CUENTA CON MEDIDAS DE PROTECCION"},{"type":"NUMBER","subtype":"p","label":"EDAD"},{"type":"PARAGRAPH","subtype":"p","label":"V.II DATOS RECABADOS DE CONFORMIDAD CON LO ESTABLECIDO EN EL ARTÍCULO 27 FRACC. II, III, V, VI,  VII y VIII, de la LEY GENERAL PARA PREVENIR, INVESTIGAR Y SANCIONAR LA TORTURA Y OTROS TRATOS Y PENAS CRUELES, INHUMANOS  O DEGRADANTES.​"},{"type":"RADIO","subtype":"p","label":"ESTADO DE GESTACIÓN"},{"type":"RADIO","subtype":"p","label":"PERTENECE A ALGUNA ETNIA"},{"type":"RADIO","subtype":"p","label":"ACTIVIDAD"},{"type":"RADIO","subtype":"p","label":"DISCAPACIDAD"},{"type":"RADIO","subtype":"p","label":"NACIONALIDAD"},{"type":"RADIO","subtype":"p","label":"GENERO"},{"type":"RADIO","subtype":"p","label":"V) SITUACIÓN JURÍDICA DE LA PROBABLE VÍCTIMA Ó VÍCTIMAS"},{"type":"RADIO","subtype":"p","label":"PROCESO"},{"type":"CATALOGUE","subtype":"p","label":"SENTENCIADO"},{"type":"CATALOGUE","subtype":"p","label":"VIII) DENUNCIANTE"},{"type":"CATALOGUE","subtype":"p","label":"SERVIDOR PUBLICO"},{"type":"PARAGRAPH","subtype":"p","label":"VIII) LAS AUTORIDADES SEÑALADAS COMO PROBABLES  RESPONSABLES "},{"type":"CATALOGUE","subtype":"p","label":"NIVEL FEDERAL"},{"type":"CATALOGUE","subtype":"p","label":"NIVEL ESTATAL"},{"type":"CATALOGUE","subtype":"p","label":"NIVEL MUNICIPAL"},{"type":"PARAGRAPH","subtype":"p","label":"XI) LUGAR DE LOS HECHOS"},{"type":"DATE","subtype":"p","label":"FECHA"},{"type":"AUTOCOMPLETE","subtype":"p","label":"ESTADO"},{"type":"AUTOCOMPLETE","subtype":"p","label":"MUNICIPIO"},{"type":"AUTOCOMPLETE","subtype":"p","label":"LOCALIDAD"},{"type":"PARAGRAPH","subtype":"p","label":"X)CIRCUNSTANCIAS"},{"type":"CATALOGUE","subtype":"p","label":"DELITO DE TORTURA"},{"type":"CATALOGUE","subtype":"p","label":"DELITO TRATOS O PENAS CRUELES INHUMANOS O DEGRADANTES"},{"type":"MULTISELECT","subtype":"p","label":"XI) TECNICAS UTILIZADAS COMO ACTOS DE TORTURA"},{"type":"MULTISELECT","subtype":"p","label":"XII) TECNICAS UTILIZADAS COMO ACTOS DE TRATOS O PENAS CRUELES INHUMANOS O DEGRADANTES"},{"type":"MULTISELECT","subtype":"p","label":"XIII) ESTATUS DE LA INVESTIGACIÓN"},{"type":"PARAGRAPH","subtype":"p","label":"CUENTA CON EXAMEN MEDICO PSICOLOGICO ESPECIALIZADO"},{"type":"CATALOGUE","subtype":"p","label":"SI"},{"type":"CATALOGUE","subtype":"p","label":"NO"},{"type":"CATALOGUE","subtype":"p","label":"JUDIALIZACIÓN"},{"type":"CATALOGUE","subtype":"p","label":"SENTENCIADO"}


    

]`
  
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData
    });
  


});


 
