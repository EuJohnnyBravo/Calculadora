const resultado = document.getElementById("resultado");
function pegaValores() {
  return {
    numero1: Number(document.getElementById("numero1").value),
    numero2: Number(document.getElementById("numero2").value),
  };
}

function soma() {
  let { numero1, numero2 } = pegaValores();
  resultado.innerHTML = numero1 + numero2;
}
