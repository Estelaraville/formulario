function validar(form){
    if(form.capital.value <=0){
        alert("Escriba un valor mayor a 0 porfavor");
        form.capital.focus();
        return false;
    }
}