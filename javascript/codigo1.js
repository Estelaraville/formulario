function validar(form) {
    var capital = form.capital.value.trim(); 
    if (!capital.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Por favor, ingrese solo números sin espacios y mayores a 0");
        form.capital.focus();
        return false;
    } else if (capital <= 0) {
        alert("Por favor, ingrese solo números sin espacios y mayores a 0");
        form.capital.focus();
        return false;
    } else {
        NuevoCapital(capital);
        return true; 
    }
}

function NuevoCapital(capital) {
    var nuevoCapital = parseFloat(capital) * 1.02;
    mostrarNuevoCapital(nuevoCapital);
}

function mostrarNuevoCapital(nuevoCapital) {
    alert("Su capital dentro de un mes será de: "+nuevoCapital.toFixed(2));
}