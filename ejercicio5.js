let numeros = [5, -10, -2, 25, 7];
const copiaNumeros = [...numeros];
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b);
console.log(copiaNumeros); // [2, 5, 7, 10, 25]
console.log(numeros);
