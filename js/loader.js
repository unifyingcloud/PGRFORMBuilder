
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
      
{"type":"text","subtype":"text","description":"FED/SEIDF/ UEIDT-  /000000/2017","label":"​NÚMERO DE AVERIGUACIÓN PREVIA O CARPETA DE INVESTIGACION"},{"type":"date","name":"date2","label":"II)FECHA DE INICIO DE LA CARPETA DE INVESTIGACION", "class":"formControl"},{"type":"radio-group","name":"radiogroup3","label":"III)DELITO POR EL QUE SE INICIA LA CARPETA DE INVESTIGACIÓN","values":[{"label":"INHUMANOS O DEGRADANTES","value":"INHUMANOS O DEGRADANTES"},{"label":"TRATOS O PENAS CRUELES","value":"TRATOS O PENAS CRUELES"},{"label":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL","value":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL"},{"label":"TORTURA","value":"TORTURA"}]},{"type":"date","name":"date4","label":"IV) DATOS DE LA INVESTIGACION DE ORIGEN"},{"type":"Seleccionable","className":"fromControl","label":"JUZGADO"},{"type":"Seleccionable","className":"fromControl","label":"PROCESO"},{"type":"Seleccionable","className":"fromControl","label":"DELITO"},{"type":"Paragraph","subtype":"p","label":"V) DATOS DE LA PUESTA A DISPOSICION"},{"type":"autocomplete","subtype":"p","label":"ESTADO"},{"type":"autocomplete","subtype":"p","label":"MUNICIPIO"},{"type":"date","name":"date11","label":"FECHA DE LA PUESTA A DISPOSICION"},{"type":"Paragraph","subtype":"p","label":"V) INFORMACIÓN REFERENTE A  LAS PROBABLES VICTIMAS​"},{"type":"Paragraph","subtype":"p","label":"V.I GENERALES DE LA VICTIMA​"},{"type":"text","subtype":"text","description":"","label":"NOMBRE(S)"},{"type":"text","subtype":"text","description":"","label":"APELLIDO PATERNO"},{"type":"text","subtype":"text","description":"","label":"APELLIDO MATERNO"},{"type":"radio-group","name":"radiogroup17","label":"CUENTA CON MEDIDAS DE PROTECCION","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"number","subtype":"p","label":"EDAD"},{"type":"Paragraph","subtype":"p","label":"V.II DATOS RECABADOS DE CONFORMIDAD CON LO ESTABLECIDO EN EL ARTÍCULO 27 FRACC. II, III, V, VI,  VII y VIII, de la LEY GENERAL PARA PREVENIR, INVESTIGAR Y SANCIONAR LA TORTURA Y OTROS TRATOS Y PENAS CRUELES, INHUMANOS  O DEGRADANTES.​"},{"type":"radio-group","name":"radiogroup20","label":"ESTADO DE GESTACIÓN","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","name":"radiogroup21","label":"PERTENECE A ALGUNA ETNIA","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","name":"radiogroup22","label":"ACTIVIDAD","values":[{"label":"DEFENSOR DE LOS DERECHOS HUMANOS","value":"DEFENSOR DE LOS DERECHOS HUMANOS"},{"label":"PERIODISTA","value":"PERIODISTA"}]},{"type":"radio-group","name":"radiogroup23","label":"DISCAPACIDAD","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","name":"radiogroup24","label":"NACIONALIDAD","values":[{"label":"OTRA","value":"OTRA"},{"label":"MEXICANA","value":"MEXICANA"}]},{"type":"radio-group","name":"radiogroup25","label":"GENERO","values":[{"label":"OTRA ORIENTACIÓN SEXUAL","value":"OTRA ORIENTACIÓN SEXUAL"},{"label":"MUJER","value":"MUJER"}]},{"type":"radio-group","name":"radiogroup26","label":"V) SITUACIÓN JURÍDICA DE LA PROBABLE VÍCTIMA Ó VÍCTIMAS","values":[{"label":"PRESO","value":"PRESO"},{"label":"LIBRE","value":"LIBRE"}]},{"type":"radio-group","name":"radiogroup27","label":"PROCESO","values":[{"label":"RECLUSION","value":"RECLUSION"},{"label":"LIBERTAD","value":"LIBERTAD"}]},{"type":"radio-group","name":"radiogroup28","label":"SENTENCIADO","values":[{"label":"CONDENADO","value":"CONDENADO"},{"label":"ABSUELTO","value":"ABSUELTO"}]},{"type":"Seleccionable","className":"fromControl","label":"VIII) DENUNCIANTE"},{"type":"Seleccionable","className":"fromControl","label":"SERVIDOR PUBLICO"},{"type":"Paragraph","subtype":"p","label":"VIII) LAS AUTORIDADES SEÑALADAS COMO PROBABLES  RESPONSABLES "},{"type":"Seleccionable","className":"fromControl","label":"NIVEL FEDERAL"},{"type":"Seleccionable","className":"fromControl","label":"NIVEL ESTATAL"},{"type":"Seleccionable","className":"fromControl","label":"NIVEL MUNICIPAL"},{"type":"Paragraph","subtype":"p","label":"XI) LUGAR DE LOS HECHOS"},{"type":"date","name":"date36","label":"FECHA"},{"type":"autocomplete","subtype":"p","label":"ESTADO"},{"type":"autocomplete","subtype":"p","label":"MUNICIPIO"},{"type":"autocomplete","subtype":"p","label":"LOCALIDAD"},{"type":"Paragraph","subtype":"p","label":"X)CIRCUNSTANCIAS"},{"type":"Seleccionable","className":"fromControl","label":"DELITO DE TORTURA"},{"type":"Seleccionable","className":"fromControl","label":"DELITO TRATOS O PENAS CRUELES INHUMANOS O DEGRADANTES"},{"type":"radio-group","name":"radiogroup43","label":"XI) TECNICAS UTILIZADAS COMO ACTOS DE TORTURA","values":[{"label":"REALIZAR…","value":"REALIZAR…"},{"label":"CONDUCTA","value":"CONDUCTA"}]},{"type":"radio-group","name":"radiogroup44","label":"XII) TECNICAS UTILIZADAS COMO ACTOS DE TRATOS O PENAS CRUELES INHUMANOS O DEGRADANTES","values":[{"label":" INSULTOS Y/O HUMILLACIONES","value":" INSULTOS Y/O HUMILLACIONES"},{"label":"MALTRATO DEGRADANTE","value":"MALTRATO DEGRADANTE"}]},{"type":"radio-group","name":"radiogroup45","label":"XIII) ESTATUS DE LA INVESTIGACIÓN","values":[{"label":"NO EJERCUCIO DE LA ACCION PENAL","value":"NO EJERCUCIO DE LA ACCION PENAL"},{"label":"ARCHIVO TEMPORAL","value":"ARCHIVO TEMPORAL"}]},{"type":"Paragraph","subtype":"p","label":"CUENTA CON EXAMEN MEDICO PSICOLOGICO ESPECIALIZADO"},{"type":"Seleccionable","className":"fromControl","label":"SI"},{"type":"Seleccionable","className":"fromControl","label":"NO"},{"type":"Seleccionable","className":"fromControl","label":"JUDIALIZACIÓN"},{"type":"Seleccionable","className":"fromControl","label":"SENTENCIADO"}

    

]`
  
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData
    });
  


});


 
