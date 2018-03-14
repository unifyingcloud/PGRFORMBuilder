
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
      
      {"type":"paragraph","subtype":"p","label":"​NÚMERO DE AVERIGUACIÓN PREVIA O CARPETA DE INVESTIGACION"},{"type":"paragraph","subtype":"p","label":"II)FECHA DE INICIO DE LA CARPETA DE INVESTIGACION"},{"type":"paragraph","subtype":"p","label":"III)DELITO POR EL QUE SE INICIA LA CARPETA DE INVESTIGACIÓN"},{"type":"paragraph","subtype":"p","label":"IV) DATOS DE LA INVESTIGACION DE ORIGEN"},{"type":"paragraph","subtype":"p","label":"JUZGADO"},{"type":"paragraph","subtype":"p","label":"PROCESO"},{"type":"paragraph","subtype":"p","label":"DELITO"},{"type":"paragraph","subtype":"p","label":"V) DATOS DE LA PUESTA A DISPOSICION"},{"type":"paragraph","subtype":"p","label":"ESTADO"},{"type":"paragraph","subtype":"p","label":"MUNICIPIO"},{"type":"paragraph","subtype":"p","label":"FECHA DE LA PUESTA A DISPOSICION"},{"type":"paragraph","subtype":"p","label":"V) INFORMACIÓN REFERENTE A  LAS PROBABLES VICTIMAS​"},{"type":"paragraph","subtype":"p","label":"V.I GENERALES DE LA VICTIMA​"},{"type":"paragraph","subtype":"p","label":"NOMBRE(S)"},{"type":"paragraph","subtype":"p","label":"APELLIDO PATERNO"},{"type":"paragraph","subtype":"p","label":"APELLIDO MATERNO"},{"type":"paragraph","subtype":"p","label":"CUENTA CON MEDIDAS DE PROTECCION"},{"type":"paragraph","subtype":"p","label":"EDAD"},{"type":"paragraph","subtype":"p","label":"V.II DATOS RECABADOS DE CONFORMIDAD CON LO ESTABLECIDO EN EL ARTÍCULO 27 FRACC. II, III, V, VI,  VII y VIII, de la LEY GENERAL PARA PREVENIR, INVESTIGAR Y SANCIONAR LA TORTURA Y OTROS TRATOS Y PENAS CRUELES, INHUMANOS  O DEGRADANTES.​"},{"type":"paragraph","subtype":"p","label":"ESTADO DE GESTACIÓN"},{"type":"paragraph","subtype":"p","label":"PERTENECE A ALGUNA ETNIA"},{"type":"paragraph","subtype":"p","label":"ACTIVIDAD"},{"type":"paragraph","subtype":"p","label":"DISCAPACIDAD"},{"type":"paragraph","subtype":"p","label":"NACIONALIDAD"},{"type":"paragraph","subtype":"p","label":"GENERO"},{"type":"paragraph","subtype":"p","label":"V) SITUACIÓN JURÍDICA DE LA PROBABLE VÍCTIMA Ó VÍCTIMAS"},{"type":"paragraph","subtype":"p","label":"PROCESO"},{"type":"paragraph","subtype":"p","label":"SENTENCIADO"},{"type":"paragraph","subtype":"p","label":"VIII) DENUNCIANTE"},{"type":"paragraph","subtype":"p","label":"SERVIDOR PUBLICO"},{"type":"paragraph","subtype":"p","label":"VIII) LAS AUTORIDADES SEÑALADAS COMO PROBABLES  RESPONSABLES "},{"type":"paragraph","subtype":"p","label":"NIVEL FEDERAL"},{"type":"paragraph","subtype":"p","label":"NIVEL ESTATAL"},{"type":"paragraph","subtype":"p","label":"NIVEL MUNICIPAL"},{"type":"paragraph","subtype":"p","label":"XI) LUGAR DE LOS HECHOS"},{"type":"paragraph","subtype":"p","label":"FECHA"},{"type":"paragraph","subtype":"p","label":"ESTADO"},{"type":"paragraph","subtype":"p","label":"MUNICIPIO"},{"type":"paragraph","subtype":"p","label":"LOCALIDAD"},{"type":"paragraph","subtype":"p","label":"X)CIRCUNSTANCIAS"},{"type":"paragraph","subtype":"p","label":"DELITO DE TORTURA"},{"type":"paragraph","subtype":"p","label":"DELITO TRATOS O PENAS CRUELES INHUMANOS O DEGRADANTES"},{"type":"paragraph","subtype":"p","label":"XI) TECNICAS UTILIZADAS COMO ACTOS DE TORTURA"},{"type":"paragraph","subtype":"p","label":"XII) TECNICAS UTILIZADAS COMO ACTOS DE TRATOS O PENAS CRUELES INHUMANOS O DEGRADANTES"},{"type":"paragraph","subtype":"p","label":"XIII) ESTATUS DE LA INVESTIGACIÓN"},{"type":"paragraph","subtype":"p","label":"CUENTA CON EXAMEN MEDICO PSICOLOGICO ESPECIALIZADO"},{"type":"paragraph","subtype":"p","label":"SI"},{"type":"paragraph","subtype":"p","label":"NO"},{"type":"paragraph","subtype":"p","label":"JUDIALIZACIÓN"},{"type":"paragraph","subtype":"p","label":"SENTENCIADO"}
    ]`
  
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData
    });
  


});


 