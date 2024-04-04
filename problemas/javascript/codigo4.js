function validar(form){
    var primero = form.primero.value.trim(); 
    if (!primero.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.primero.focus();
        return false;
    } else if (parseFloat(primero) < 0 || parseFloat(primero) > 10) {
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.primero.focus();
        return false;
    } 

    var segundo = form.segundo.value.trim(); 
    if (!segundo.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.segundo.focus();
        return false;
    } else if (parseFloat(segundo) < 0 || parseFloat(segundo) > 10) {
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.segundo.focus();
        return false;
    } 

    var tercero = form.tercero.value.trim(); 
    if (!tercero.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.tercero.focus();
        return false;
    } else if (parseFloat(tercero) < 0 || parseFloat(tercero) > 10) {
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.tercero.focus();
        return false;
    } 

     var examen = form.examen.value.trim();
     if (!examen.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.examen.focus();
        return false;
    } else if (parseFloat(examen) < 0 || parseFloat(examen) > 10) {
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.examen.focus();
        return false;
    } 

    var trabajo = form.trabajo.value.trim();
    if (!trabajo.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.trabajo.focus();
        return false;
    } else if (parseFloat(trabajo) < 0 || parseFloat(trabajo) > 10) {
        alert("Escriba un valor mayor o igual a 0  pero menor o igual a 10 y solo números porfavor");
        form.trabajo.focus();
        return false;
    } else{
        sumaTotal(parseFloat(primero), parseFloat(segundo), parseFloat(tercero), parseFloat(trabajo), parseFloat(examen));
        return true;
    } 
}

function sumaTotal(primero, segundo, tercero, trabajo, examen){
    var sumaparcial = (primero+segundo+tercero);
    if(sumaparcial===30){
        sumaparcial= 5.5;
    } else if(sumaparcial<30){
        sumaparcial = ((sumaparcial*5.5)/30)
    } 
    
    var examenFinal = examen;
    if(examenFinal===10){
        examenFinal = 3;
    }else if(examenFinal<10){
        examenFinal = ((examenFinal*3)/10);
    }

    var trabajoFinal = trabajo;
    if(trabajoFinal===10){
        trabajoFinal=1.5;
    } else if(trabajoFinal<10){
        trabajoFinal = ((trabajoFinal*1.5)/10);
    }

     var sumaTotal = (sumaparcial+examenFinal+trabajoFinal); 
    
     sumatoriaTotal(sumaTotal);
}

function sumatoriaTotal(sumaTotal){
    alert("La calificación final es de: "+sumaTotal.toFixed(2))
}