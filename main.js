// function recursiva() {
//   if (/* Validación */) {
//     // LLamados recursivos
//   }
//   else  {
//     // Llamados normales, sin recursividad
//   }
// }

const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numeritos2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
  numerito = numeritos[index];
  console.log({ index, numerito });
}

function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNumber = numbersArray[0];
    console.log(firstNumber);
    numbersArray.shift();
    recursiva(numbersArray);
  }
}
