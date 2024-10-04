document.getElementById("sumarBtn").addEventListener("click", function() {
<<<<<<< HEAD
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    var resultado = num1 + num2 + num3;
=======
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
>>>>>>> 76bd812eb96f5c028ed25fff97303db0735472f9
    document.getElementById("resultadoSuma").textContent = resultado;
});