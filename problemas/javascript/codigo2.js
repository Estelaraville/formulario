function validar(form) {
    var venta1 = form.num1.value.trim(); 
    if (!venta1.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Por favor, ingrese solo números.");
        form.venta1.focus();
        return false;
    } else if (parseFloat(venta1) < 0) {
        alert("Escriba un valor mayor o igual a 0 por favor.");
        form.capital.focus();
        return false;
    } 

    var venta2 = form.num2.value.trim(); 
    if (!venta2.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Por favor, ingrese solo números.");
        form.venta2.focus();
        return false;
    } else if (parseFloat(venta2) < 0) {
        alert("Escriba un valor mayor o igual a 0 por favor.");
        form.venta2.focus();
        return false;
    } 

    var venta3 = form.num3.value.trim(); 
    if (!venta3.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Por favor, ingrese solo números.");
        form.venta3.focus();
        return false;
    } else if (parseFloat(venta3) < 0) {
        alert("Escriba un valor mayor o igual a 0 por favor.");
        form.venta3.focus();
        return false;
    } else{
        totalventa(parseFloat(venta1), parseFloat(venta2), parseFloat(venta3));
        return true;
    }
}

function totalventa(venta1, venta2, venta3){
    var totalsincom = parseFloat(venta1+venta2+venta3);
    var totalconcom = parseFloat(venta1+venta2+venta3)*1.10;
    mostrarTotal(totalsincom, totalconcom);
}

function mostrarTotal(totalsincom, totalconcom){
    alert("Su total de ventas sin comisión es de: "+totalsincom.toFixed(2)+", y con la comisión es de: "+totalconcom.toFixed(2));
}