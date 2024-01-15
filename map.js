const notas = [10, 9.5, 8, 7, 6];

//pode ser feito com forEach, mas nesse caso com o map() é  melhor

const notasAtualizadas = notas.map((nota) => {
    //para fazer a tratativa das notas que ficam acima de 10, fazemos:
    return nota + 1 >= 10?10: nota + 1;
    //tradução: nota + 1 é maior ou igual a 10? se sim, retorne 10; se não (:), retorne nota + 1;
});

console.log(notasAtualizadas);





