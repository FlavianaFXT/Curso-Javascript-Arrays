const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// const meuSet = new Set(nomes);

// const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

//FORMA MAIS CONCISA

const nomesAtualizados = [...new Set(nomes)];

