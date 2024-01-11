const notas = [10,6.5,8,7.5];

let somaDasNotas = 0;

for(let elemento of notas){
    somaDasNotas += notas;
}
//TRADUÇÃO: PARA CADA ELEMENTO DE NOTAS EXECUTE ESSE CÓDIGO QUE ESTÁ ENTRE AS CHAVES

const media = somaDasNotas/notas.length;

console.log(media);