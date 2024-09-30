document.getElementById("sumarBtn").addEventListener("click", function() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultadoSuma").textContent = resultado;
});