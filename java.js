function tecla(elemento) {
    const valor = elemento.getAttribute('value');
    const input = document.getElementById("input"); 
    input.innerText = input.innerText + valor;  
}

function del() {
    const input = document.getElementById("input"); 
    input.innerText = input.innerText.slice(0, -1); 
}
