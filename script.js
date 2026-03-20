function converter(){

    let real = Numbergt(document.getElementById("ValorReal").value);
    let dolar = Number(document.getElementById("ValorDolar").value);

    let resultado = real / dolar;

    document.getElementById("resultado").innerText =
    "você tem $" + resultado.toFixed(2); 


}