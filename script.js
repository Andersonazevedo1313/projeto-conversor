function converter() {
    let real = parseFloat(document.getElementById("ValorReal").value);
    let dolar = parseFloat(document.getElementById("ValorDolar").value);

    if (isNaN(real) || isNaN(dolar) || dolar === 0) {
        document.getElementById("resultado").innerText = "Digite valores válidos!";
        return;
    }

    let resultado = real / dolar;

    document.getElementById("resultado").innerText =
        "💵 Valor em dólar: $" + resultado.toFixed(2);
}
