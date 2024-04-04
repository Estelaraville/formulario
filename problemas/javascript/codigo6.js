function validar(form){
    var año = form.año.value.trim();
    if (!año.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Escriba un valor mayor o igual a 1900 y unicamente números porfavor");
        form.año.focus();
        return false;
    } else if (parseInt(año) < 1900) {
        alert("Escriba un valor mayor o igual a 1900 y unicamente números porfavor");
        form.año.focus();
        return false;
    }  else if(parseInt(año)>=2024){
        alert("Escriba un año menor a 2024")
        form.año.focus();
        return false;
    }else {
        sumaTotal(parseInt(año));
    }


}

function sumaTotal(año){
    var edad = (2024-año);
    alert("La edad que tiene usted es de: "+edad+ " años");
}