const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota (aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){

        // console.log(`${aluno} está cadastrado!`);

        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        //essas duas consts acima podem ser simplificadas da seguinte forma, utilizando desestruturação de lista:

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        // console.log(indice);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    } else {
        console.log('Aluno não encontrado!');
    }
}

exibeNomeENota('João');

