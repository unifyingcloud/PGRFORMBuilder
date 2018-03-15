 

jQuery(function($) {
  
 
    var formData = `[
 
      {"type":"text","required":"true","Placeholder":"Escribe un valor","subtype":"text","description":"FED/SEIDF/ UEIDT-  /000000/2017","label":"​Número de Averiguación Previa o carpeta de Investigacion","className":"form-control ns_"},{"type":"date","name":"date2","label":"Ii)Fecha de Inicio de la carpeta de Investigacion", "class":"form-control ns_"},{"type":"radio-group","name":"radiogroup3","label":"Iii)delito por el que se Inicia la carpeta de Investigación","values":[{"label":"INHUMANOS O DEGRADANTES","value":"INHUMANOS O DEGRADANTES"},{"label":"TRATOS O PENAS CRUELES","value":"TRATOS O PENAS CRUELES"},{"label":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL","value":"DELITOS VINCULADOS DESCRITOS EN LOS ART. 30 Y 31 DE LA LEY GENERAL"},{"label":"TORTURA","value":"TORTURA"}]},{"type":"date","name":"date4","label":"Iv) Datos de la Investigacion de Origen", "class":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"Juzgado","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"Proceso","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"delito","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"V) Datos de la Puesta a Disposicion","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Estado","label":"Estado","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Municipio","label":"Municipio","className":"form-control ns_"},{"type":"date","name":"date11","label":"Fecha de la Puesta a Disposicion", "class":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"V) Información Referente a  las Probables Victimas​","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"V.I Generales de la Victima​","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Nombre(S)","label":"Nombre(S)","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Apellido Paterno","label":"Apellido Paterno","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Apellido Materno","label":"Apellido Materno","className":"form-control ns_"},{"type":"radio-group","name":"radiogroup17","label":"Cuenta Con Medidas de Proteccion","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"number","subtype":"p","label":"Edad"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"V.Ii Datos Recabados de Conformidad Con Lo Establecido En el Artículo 27 Fracc. Ii, Iii, V, Vi,  Vii Y Viii, de la Ley General Para Prevenir, Investigar Y Sancionar la Tortura Y Otros Tratos Y Penas Crueles, Inhumanos  o degradantes.​","className":"form-control ns_"},{"type":"radio-group","name":"radiogroup20","label":"Estado de Gestación","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","name":"radiogroup21","label":"Pertenece a Alguna Etnia","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","name":"radiogroup22","label":"Actividad","values":[{"label":"Defensor De Los Derechos Humanos","value":"Defensor De Los Derechos Humanos"},{"label":"Periodista","value":"Periodista"}]},{"type":"radio-group","name":"radiogroup23","label":"Discapacidad","values":[{"label":"No","value":"No"},{"label":"si","value":"si"}]},{"type":"radio-group","name":"radiogroup24","label":"Nacionalidad","values":[{"label":"Otra","value":"Otra"},{"label":"Mexicana","value":"Mexicana"}]},{"type":"radio-group","name":"radiogroup25","label":"Genero","values":[{"label":"OTRA ORIENTACIÓN SEXUAL","value":"OTRA ORIENTACIÓN SEXUAL"},{"label":"MUJER","value":"MUJER"}]},{"type":"radio-group","name":"radiogroup26","label":"V) Situación Jurídica de la Probable Víctima Ó Víctimas","values":[{"label":"PRESO","value":"PRESO"},{"label":"LIBRE","value":"LIBRE"}]},{"type":"radio-group","name":"radiogroup27","label":"Proceso","values":[{"label":"RECLUSION","value":"RECLUSION"},{"label":"LIBERTAD","value":"LIBERTAD"}]},{"type":"radio-group","name":"radiogroup28","label":"sentenciado","values":[{"label":"CONDENADO","value":"CONDENADO"},{"label":"ABSUELTO","value":"ABSUELTO"}]},{"type":"radio-group","name":"radiogroup29","label":"Viii) denunciante","values":[{"label":"Particular","value":"Particular"},{"label":"Vista Peritos","value":"Vista Peritos"},{"label":"Vista Ministerial","value":"Vista Ministerial"},{"label":" Vista Judicial","value":" Vista Judicial"},{"label":"Víctima","value":"Víctima"}]},{"type":"radio-group","name":"radiogroup30","label":"servidor Publico","values":[{"label":" Nivel Municipal","value":" Nivel Municipal"},{"label":"Nivel Estatal","value":"Nivel Estatal"}]},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"Viii) las Autoridades señaladas Como Probables  Responsables ","className":"form-control ns_"},{"type":"radio-group","name":"radiogroup32","label":"Nivel Federal","values":[{"label":"Policia","value":"Policia"},{"label":"Sedena ","value":"Sedena "},{"label":"Secretaria De Marina","value":"Secretaria De Marina"}]},{"type":"radio-group","name":"radiogroup33","label":"Nivel Estatal","values":[{"label":"Policia","value":"Policia"},{"label":"Sedena ","value":"Sedena "},{"label":"Secretaria De Marina","value":"Secretaria De Marina"}]},{"type":"radio-group","name":"radiogroup34","label":"Nivel Municipal","values":[{"label":"Policia","value":"Policia"},{"label":"Sedena ","value":"Sedena "},{"label":"Secretaria De Marina","value":"Secretaria De Marina"}]},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"Xi) Lugar de Los Hechos","className":"form-control ns_"},{"type":"date","name":"date36","label":"Fecha", "class":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Estado","label":"Estado","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Municipio","label":"Municipio","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"Localidad","label":"Localidad","className":"form-control ns_"},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"X)Circunstancias","className":"form-control ns_"},{"type":"radio-group","name":"radiogroup41","label":"delito de Tortura","values":[{"label":"Otro","value":"Otro"},{"label":"Con La Utoridad","value":"Con La Utoridad"},{"label":"En La Detencion, ","value":"En La Detencion, "}]},{"type":"radio-group","name":"radiogroup42","label":"delito Tratos o Penas Crueles Inhumanos o degradantes","values":[{"label":"Otro","value":"Otro"},{"label":"Con La Utoridad","value":"Con La Utoridad"},{"label":"En La Detencion, ","value":"En La Detencion, "}]},{"type":"radio-group","name":"radiogroup43","label":"Xi) Tecnicas Utilizadas Como Actos de Tortura","values":[{"label":"REALIZAR…","value":"REALIZAR…"},{"label":"CONDUCTA","value":"CONDUCTA"}]},{"type":"radio-group","name":"radiogroup44","label":"Xii) Tecnicas Utilizadas Como Actos de Tratos o Penas Crueles Inhumanos o degradantes","values":[{"label":" INSULTOS Y/O HUMILLACIONES","value":" INSULTOS Y/O HUMILLACIONES"},{"label":"MALTRATO DEGRADANTE","value":"MALTRATO DEGRADANTE"}]},{"type":"radio-group","name":"radiogroup45","label":"Xiii) Estatus de la Investigación","values":[{"label":"NO EJERCUCIO DE LA ACCION PENAL","value":"NO EJERCUCIO DE LA ACCION PENAL"},{"label":"ARCHIVO TEMPORAL","value":"ARCHIVO TEMPORAL"}]},{"type":"text","Placeholder":"Escribe un valor","subtype":"text","description":"","label":"Cuenta Con Examen Medico Psicologico Especializado","className":"form-control ns_"},{"type":"radio-group","name":"radiogroup47","label":"Si","values":[{"label":"Independiente","value":"Independiente"},{"label":"Oficial","value":"Oficial"}]},{"type":"radio-group","name":"radiogroup48","label":"No","values":[{"label":"Negativa De La Victima","value":"Negativa De La Victima"},{"label":"Sin Solicitar","value":"Sin Solicitar"}]},{"type":"radio-group","name":"radiogroup49","label":"Judialización","values":[{"label":"Vinculacion, Investigación","value":"Vinculacion, Investigación"},{"label":"Orden De Aprencion","value":"Orden De Aprencion"}]},{"type":"radio-group","name":"radiogroup50","label":"sentenciado","values":[{"label":"Condenado","value":"Condenado"},{"label":"Absuelto","value":"Absuelto"}]}
    ]`


var templates = {
  start: function(fieldData) {
    return {
      field: "<div class='col-md-4' id='"+fieldData.name+"'>",
      onRender: function() {

        alert('hello');
       // $(document.getElementById(fieldData.name)).rateYo({rating: 3.6});
      }
    };
  }
};

  //debugger
    $(".render-wrap").empty();
    $(".render-wrap").formRender({
      formData: formData,
      templates: templates 
      
    });
   //$('.rendered-form').children('div').addClass('col-md-4');


});


 
