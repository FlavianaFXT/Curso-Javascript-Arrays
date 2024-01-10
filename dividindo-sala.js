const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];


//slice = fatiar, dividir
//não altera o array original

// alunos.slice(0,10);

//indice de 0 a 9

// const sala1 = alunos.slice(0,10);
// const sala2 = alunos.slice(10);

//de forma mais dinâmica:
 const sala1 = alunos.slice(0,alunos.length/2);
 const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);
