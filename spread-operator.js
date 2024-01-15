const notas = [7,7,8,9];

//const novasNotas = notas;
//se deixasse como acima o JS gerava sempre um array em substituição do primeiro; ou seja, a nota inserida or ultimo passaria a fazer parte das notas (array original)

const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

