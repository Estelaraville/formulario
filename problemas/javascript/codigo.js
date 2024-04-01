function validar(form) {
    var capital = form.capital.value.trim(); 
    if (!capital.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Por favor, ingrese solo números para el capital.");
        form.capital.focus();
        return false;
    } else if (capital <= 0) {
        alert("Escriba un valor mayor a 0 por favor.");
        form.capital.focus();
        return false;
    } else {
        calcularNuevoCapital(capital);
        return true; 
    }
}

function calcularNuevoCapital(capital) {
    var nuevoCapital = parseFloat(capital) * 1.02;
    mostrarNuevoCapital(nuevoCapital);
}

function mostrarNuevoCapital(nuevoCapital) {
    alert("Su capital dentro de un mes será de: "+nuevoCapital.toFixed(2));
}