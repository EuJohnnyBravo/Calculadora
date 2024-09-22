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

function subtracao() {
  let { numero1, numero2 } = pegaValores();
  resultado.innerHTML = numero1 - numero2;
}

function multiplicacao() {
  let { numero1, numero2 } = pegaValores();
  resultado.innerHTML = numero1 * numero2;
}

function divisao() {
  let { numero1, numero2 } = pegaValores();
  if (numero2 === 0) {
    resultado.innerHTML = "O segundo valor precisa ser diferente de 0";
  } else {
    resultado.innerHTML = numero1 / numero2;
  }
}
