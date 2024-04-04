function validar(form){
    var alumnos = form.alumnos.value.trim();
    if (!alumnos.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor a 0 y unicamente números porfavor");
        form.alumnos.focus();
        return false;
    } else if (parseFloat(alumnos) <= 0) {
        alert("Escriba un valor mayor a 0 y unicamente números porfavor");
        form.alumnos.focus();
        return false;
    } 

    var chicos = form.chicos.value.trim();
    if (!chicos.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0 y unicamente números porfavor");
        form.chicos.focus();
        return false;
    } else if (parseFloat(chicos) <= 0) {
        alert("Escriba un valor mayor o igual a 0 y unicamente números porfavor");
        form.chicos.focus();
        return false;
    } 
    
    var mujeres = form.mujeres.value.trim();
    if (!mujeres.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 0 y unicamente números porfavor");
        form.mujeres.focus();
        return false;
    } else if (parseFloat(mujeres) <= 0) {
        alert("Escriba un valor mayor o igual a 0 y unicamente números porfavor");
        form.mujeres.focus();
        return false;
    } 

    var suma = (chicos+mujeres);
    if(suma>alumnos || suma<alumnos){
        alert("Escriba valores que su suma no exceda o falte el valor total del número de alumnos")
        form.chicos.focus();
        return false;
    } else{
        promedio(parseFloat(alumnos), parseFloat(chicos), parseFloat(mujeres));
        return true;
    }
}

function promedio(alumnos, chicos, mujeres){
    var totalalumnos = alumnos;
    var porchicos = ((chicos*100)/totalalumnos);
    var pormujeres = ((mujeres*100)/totalalumnos);

    mostrarresultados(porchicos, pormujeres);
}

function mostrarresultados(porchicos, pormujeres){
    alert("El porcentaje de hombres que hay en el grupo es de: "+porchicos.toFixed(2)+ "% y de mujeres: "+pormujeres.toFixed(2)+"%");
}