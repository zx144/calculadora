document.getElementById("sumarBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    var resultado = num1 + num2 + num3;
    document.getElementById("resultadoSuma").textContent = resultado;
});