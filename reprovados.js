const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];

const medias = [ 7, 4.5, 8, 7.5];

//para resolução pode ser utilizado o método forEach e dentro dele o splice. Mas o filter nesse caso é mais simples
//metodo filter: retorna um novo array

const reprovados = alunos.filter((aluno, indice) => {
    return media[indice] < 7;
});

console.log(reprovados);


//para trazer a lista de aprovados, bastava utilizar >=7