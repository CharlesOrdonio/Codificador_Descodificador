function codificaTexto() {
    let text = document.getElementById('inputTexto').value;
    
    let codificaTexto = text
        .replace(/a/, "ai")
        .replace(/e/, "enter")
        .replace(/i/, "imes")
        .replace(/o/, "obes")
        .replace(/u/, "ufat");

    document.getElementById('outputTexto').value = codificaTexto;
}

function descodificaTexto() {
    let text = document.getElementById('inputTexto').value;
    
    let descodificaTexto = text
        .replace(/ufat/, "u")
        .replace(/obes/, "o")
        .replace(/imes/, "i")
        .replace(/enter/, "e")
        .replace(/ai/, "a");

    document.getElementById('outputTexto').value = descodificaTexto;
}

function copiaTexto() {
    let outputTexto = document.getElementById('outputTexto');
    outputTexto.select();
    document.execCommand("copy");
    alert("Texto copiado");
}
