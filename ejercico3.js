const numeros = [2, 3, 5, 6, 7, 10];

function sumarPares(numeros) {
  let sumas = 0;

  for (let i = 0; i < numeros.length; i++) {
    //for recibe tres parametros 1-> donde arranca, 2-> donde termina, 3-> de cuanto en cuanto itera
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i], "valor de la posicion");
      sumas += numeros[i];
      console.log(sumas, "valor parcial de la suma");
    }
  }
  return sumas;
}

console.log(sumarPares(numeros));
