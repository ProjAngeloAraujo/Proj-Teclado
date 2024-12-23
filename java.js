function tecla(elemento){
    const valor = elemento.getAttribute('value');
    document.getElementById("input").value = document.getElementById("input").value + valor;

}

function del(){
    const input = document.getElementById("input");
    input.value = input.value.slice(0, -1);
}