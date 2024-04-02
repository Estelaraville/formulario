function validar(form){
    var compra = form.compra.value.trim(); 
    if (!compra.match(/^(-?\d*\.?\d*)$/)) { 
        alert("Por favor, ingrese solo números sin espacios.");
        form.compra.focus();
        return false;
    } else if (parseFloat(compra) <= 0) {
        alert("Escriba un valor mayor a 0 por favor.");
        form.compra.focus();
        return false;
    } else{
        compraReal(parseFloat(compra));
        return true;
    }
}

function compraReal(compra){
    var totalCompra = parseFloat(compra)*.15;
    var total = parseFloat(compra)-totalCompra;
    mostrar(total)
}

function mostrar(total){
    alert("Lo que tiene que pagar aplicando el descuento es de: "+total.toFixed(2));
}