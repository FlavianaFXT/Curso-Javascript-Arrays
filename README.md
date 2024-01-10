# Curso-Javascript-Arrays

Pasta dedicada ao curso de Javascript - Arrays da Alura

 conceitos básicos de arrays: como declará-los, acessá-los e consultar suas propriedades. Também estudaremos métodos de arrays, explorando como melhor lidar com eles, alterando-os conforme os desafios.

Outro tópico serão os loops, também chamados de laços de repetição. Esse recurso é importante para percorrer e manipular arrays, lidando com vários dados simultaneamente.

Além disso, aprenderemos sobre as funções callback: o que são e para que servem. Elas serão bastante úteis para tratar arrays juntamente de métodos mais modernos do JavaScript, como map, filter e reduce.

Temos aqui:
            As características principais de arrays:
            
            Os conceitos de elemento e índice:
            
            Como utilizar a propriedade .length:
            
            Como utilizar os métodos .push() e .pop():
            Separar um array em partes com slice() (utilizamos para obter dois novos arrays a partir de um).
            Remover e incluir novos elementos em um array com splice(); sendo que esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.
            
            Concatenar elementos em um único array com concat(); sendo que essa é uma forma facilitada de juntar dois arrays.
            
            Trabalhar com arrays de duas dimensões. Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].

 Utilizar os métodos includes() e indexOf():
O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.

Desestruturar um array:
Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.

Utilizar a estrutura for e entender seu funcionamento:
O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.

Utilizar a estrutura for of e entender a diferença em relação ao for:
O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

            
## 1 - Preparando o ambiente

JavaScript é conhecida como a “linguagem da web”. Embora tenha se desenvolvido no front-end, atualmente cada vez mais a utilizamos no chamado back-end, ou server side (lado do servidor) das aplicações web. Este curso foca no uso do JavaScript para back-end.

 Assim, precisaremos instalar duas ferramentas: o NodeJS, necessário para executar código JavaScript sem precisar do navegador, e o Visual Studio Code ou VSC, editor que usamos para escrever código.

### NodeJS

Caso já tenha feito algum curso anterior de JavaScript para back-end, o NodeJS pode já estar instalado. Se não tiver certeza, é possível conferir com os seguintes passos:

1) Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:
 Windows: Você pode acessar a busca no menu inicial e procurar por Prompt de Comando, ou acessar via Menu Iniciar > Sistema do Windows > Prompt de Comando.

 MacOs: O Terminal está disponível no menu de Aplicações, dentro da pasta de Utilitários.

Linux (Ubuntu): O Terminal está disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.

No terminal, digite node --version ou node -v - caso retorne um número de versão, como por exemplo, v14.16.0, o NodeJS já está instalado.

Caso precise instalar, siga as instruções para cada sistema operacional que estão na página inicial do NodeJS. Este curso foi desenvolvido usando a versão 16.17.0.

O site do NodeJS oferece duas opções para download, a LTS e a "current" (atual). Você pode escolher a versão LTS (Long Term Support, ou Suporte a Longo Prazo) e clicar no botão correspondente para baixar e instalar normalmente como qualquer outro programa.


### Visual Studio Code

O Visual Studio Code é o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Os links para baixar e instalar de acordo com o seu sistema operacional estão na página inicial do VSC.



## 2- Introdução a Arrays

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/fa089fef-beb9-4afb-8d4d-d222d50764ef)

### Como funcionam os arrays

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/ba1a8335-ca1b-495c-b9d6-869e4def9f92)

Toda lista precisa de um identificador — no caso, temos notas.

Cada um dos valores de um array está guardado dentro de uma "caixinha", que representa um espaço na memória que o nosso computador reservou para armazenar esse valor. Então, temos uma caixinha com o valor 10, outra caixinha com valor 6.5, outra com valor 8 e outra com valor 7.5.

Vale lembrar que um array pode ter o tamanho que nós quisermos.

Cada um dos valores de um array pode ser chamado de elemento, item ou valor. Usando qualquer um desses três termos, você será entendida ou entendido.

Também aprendemos que cada um desses itens tem um identificador numérico único. Esses identificadores são chamados de índices ou posições. Eles sempre começam no zero e aumentam de um em um, até onde for necessário.

Portanto, esses são os nomes mais técnicos das estruturas que compõem uma lista.

*Listas e tipos de valor*

Por ora, estamos trabalhando apenas com números, mas vale ressaltar que as listas do JavaScript não se restringem a um único tipo de dado. Em um único array, podemos ter o valor 10 , uma string "oi" e um valor true e outro false (booleanos). É possível colocar todos esses valores em uma mesma lista, apesar de não ser comum.

Considera-se uma boa prática trabalhar com o mesmo tipo de dado em um array, mas o JavaScript permite inserir diferentes tipos de dados em um mesmo array. Geralmente, teremos uma lista só de número ou uma lista só de string, por exemplo, ou até uma lista só de booleanos, que também não é muito comum.

### Para saber mais: O que são Arrays?

Como vimos na aula, vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.

const numero1 = 50;
const numero2 = 43;
const numero3 = 12;

// utilizando array
const numeros = [50, 43, 12];COPIAR CÓDIGO
Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice. Vamos destrinchar essa explicação.

Uma lista ordenada de valores enumerados:

Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript.

const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];COPIAR CÓDIGO
Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem: [50, 43, 12], por exemplo.

Cada valor é chamado de elemento ou item:

Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de elemento ou item cada um dos valores da lista.

// array com 1 elemento
const numero = [5];

// array com 3 elementos
const nums = [50, 43, 12];COPIAR CÓDIGO
Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.

Cada elemento está localizado em uma posição na lista, chamada de índice:

Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos a posição dele na lista. Por exemplo:

const nums = [50, 43, 12];
// o número 43 está na posição de número 1 (segunda posição) nessa lista de três números.COPIAR CÓDIGO
Em programação, chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.

Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0. Então, se quisermos acessar determinado valor pelo número do índice temos que levar isso em consideração:

// índice     0   1   2   3
const nums = [50, 43, 12, 98];COPIAR CÓDIGO
Sendo assim, o elemento de valor 43 está localizado no índice de número 1.

A imagem abaixo mostra um diagrama da representação de um array, nomeando seus recursos:

Diagrama representando um array. Há um texto “notas” e ao lado direito do texto há 4 retângulos lado a lado. Cada retângulo contém um número dentro, que representa uma nota. Ao lado direito da fileira de retângulos, há um seta apontando para eles, com o texto “elementos / itens / valores”. Abaixo de cada retângulo, há um número, que começa à esquerda, do zero no primeiro retângulo e vai até o número três, mais à direita, no último retângulo. Ao lado dessa fileira de números, há uma seta apontando para eles, com o texto “índices / posições”.

A propriedade length:
Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:

// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //4COPIAR CÓDIGO
Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.

A propriedade length é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.

### Adicionando Elementos

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/3234d56e-1541-4b56-b340-f2b8819f8070)

Desafio 2: Adicionando elementos
Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:

10
6
8
Para corrigir, precisamos adicionar a nota 7 e fazer o cálculo da média corretamente.

Alterando constantes?

Ao longo desse processo, você pode ter percebido um ponto curioso: como conseguimos alterar o array de notas se ele é uma constante? Se você percebeu isso, você é uma pessoa bastante atenta!

Esse é um comportamento específico do JavaScript. Por mais que declaremos um array como constante, conseguimos alterá-lo de acordo com alguns métodos do próprio array. Quando criamos uma constante no JavaScript, somos somente impedidos de fazer uma nova atribuição para a constante.

### Deletando Elementos

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/c57fe0ad-37d7-4f0f-9c24-0626efd0b8ce)

Desafio 3: Deletando elementos
Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno:

10
6
8
5.5
10
Para corrigir, precisamos que remover a última nota e fazer o cálculo da média corretamente.

Para remover a última nota, usaremos outro método dos arrays do JavaScript — o pop().

Aprimorando a mensagem impressa

Em vez de simplesmente imprimir o valor numérico da média, vamos exibir uma mensagem mais explicativa. No console.log(), em vez de passar apenas a constante media, vamos incluir um texto também.

Usaremos duas crases para escrever uma template string. Entre as crases, escreveremos a mensagem "A média é ", seguida do símbolo de cifrão ($) e um par de chaves, dentro dos quais passaremos a constante media. Finalizaremos com um ponto final:

```bash
console.log(`A média é ${media}.`);
```

08
Para saber mais: métodos de array

Já utilizamos alguns métodos dos arrays nessa aula, e ainda existem muitos métodos que não vimos. Porém, pode ainda ter ficado a dúvida: o que são os métodos?

Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles:

concat()

Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
filter()

Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
find()

Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
findIndex()

Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
lastIndexOf()

É igual o findIndex() porém começa do último elemento, não no primeiro.
forEach()

Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
pop()

Retira o último elemento do array.
Altera o array original removendo o elemento.
shift()

Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
push()

Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.
unshift()

Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.
reduce()

Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
reduceRight()

Funciona igual o reduce() porém começa do final do array e segue até o início.
reverse()

Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
slice()

Copia uma parte do array para outro array.
sort()

Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
splice()

Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.


### 3-Alterando Arrays

### Dividindo com slice()

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/aeb6b29e-b5c7-4882-a06b-5f031d504a47)

Desafio 4: Sala dividida
Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'

Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

Informaremos dois parâmetro para o método slice(), separados por vírgula. O primeiro indicará a posição do elemento em que começaremos a "fatiar" a lista original. No caso, começaremos por João, que está na posição 0. O segundo parâmetro indicará onde terminaremos de "fatiar". No caso, colocaremos o valor 10, que se refere ao índice do 11° estudante, André.

Existe uma peculiaridade do método slice() que devemos nos atentar! No segundo parâmetro, informamos o índice de um elemento e esse elemento não será incluído no novo array! Ou seja, ao colocar os parâmetro 0 e 10, estamos selecionando os alunos do índice 0 ao 9.

Melhorias

Atualmente, nosso código funciona para uma lista de 20 estudantes. Mas e se tivéssemos uma lista de 30, 40 ou 100 alunos? É interessante que o nosso código seja o mais dinâmico possível. Em vez de escrever valores estáticos (como o 10, que sabemos que é a metade da lista), podemos inserir valores dinâmicos.

Para encontrar a metade do nosso array, em lugar de 10, vamos colocar o tamanho da lista dividido por 2. Faremos isso tanto na atribuição da constante sala1 como em sala2.

 documentação do JavaScript: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript

 #### Para saber mais: consultando a documentação

 https://developer.mozilla.org/pt-BR/

Em caso de dúvidas sobre como funciona um método de array, você sempre pode consultá-lo na documentação oficial da MDN, como por exemplo os métodos push e slice.

Por exemplo, na página do método push, vemos a seguinte descrição:

O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

Exatamente como vimos em aula, a documentação diz que o método push altera o array original, além de informar seu valor de retorno (que não foi necessário para nós no desafio).

Na página do método slice, vemos a seguinte descrição:

O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

Novamente, podemos consultar rapidamente o que o método faz, seu valor de retorno e se ele altera o array original.

A documentação também fornece informações bastante detalhadas sobre cada recurso da linguagem; você não precisa entender tudo que é mencionado em cada página (e no início de desenvolvimento, você provavelmente irá se deparar com muitos termos novos), mas ela é uma excelente fonte de consultas. Além disso, ela fornece vários exemplos práticos onde um método pode ser útil. A documentação será muito importante na sua jornada de desenvolvimento!

### Alterando com splice()

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/d243d406-2efb-4a45-89fc-f075a1d723f7)

Em inglês, o termo splice significa "emendar" ou "juntar". Cuidado para não confundi-lo com o método slice() que abordamos na última aula, já que seus nomes são parecidos. Até o funcionamento deles é semelhante e pode causar confusão!

O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1. 
O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2.
O método splice() aceita um terceiro parâmetro. Então, vamos colocar a string "Rodrigo".

### Concatenando Arrays

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/aa7a5c1e-94d4-4006-8e23-b148662390ed)

Mais uma vez, teremos um método para nos auxiliar na junção dessas listas: o concat(), que vem da palavra "concatenar". Em programação, isso significa "juntar".
Dentro dos parênteses desse método, passaremos como parâmetro outra lista. No caso, salaPython.

O método concat() não alterará nenhum dos arrays, ele retornará uma nova lista. Sabendo disso, vamos guardar o resultado numa constante chamada salasUnificadas.
Como resultado, temos um novo array com todos os nomes — primeiro com estudantes de JavaScript e, depois, os de Python. 

Vale lembrar que a ordem em que informamos os arrays afeta a ordem em que os nomes aparecerão na lista final. Para demonstrar essa diferença, vamos inverter as referências na linha em que atribuímos o valor da constante salasUnificadas. Em vez de salaJS, colocaremos salaPython e, em lugar de salaPython, usaremos salaJS.

### Lista com 2 Dimensões

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/1fff1b43-ab46-4069-bba8-44e5f25379dd)

Desafio 7: Lista com 2 dimensões
Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9
Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.

Listas dentro de listas
No VS Code, vamos criar um arquivo chamado lista-duas-dimensoes.js. Começaremos declarando duas listas, uma com os nomes das pessoas estudantes e outra com suas notas:

Em seguida, vamos declarar uma lista chamada listaDeAlunosEMedias, que conterá as listas alunos e medias. O primeiro elemento será a lista de estudantes e o segundo será a lista de médias:

O retorno pode parecer um pouco estranho, mas está correto. Trata-se de uma lista cujo conteúdo são duas listas. Nas extremidades, abrimos e fechamos os colchetes do array "externo". Dentro dele, temos a lista de estudantes na primeira posição e a lista de médias na segunda posição.

Acessando elementos
Conseguimos criar uma lista que contém outras duas listas, mas como faremos para acessar elementos dentro delas? Por exemplo, como podemos selecionar Juliana, que está na posição 1 da lista alunos? Vamos descobrir, a seguir.

bash```

    console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0]}.`
    );
```

Portanto, listadeAlunosEMedias[0] representa a lista de alunos. Na sequência, vamos acessar a posição 1 da lista de alunos, pois sabemos que é onde está Juliana. Após [0], basta abrir e fechar outros colchetes e inserir o valor 1 entre eles:


bash```

     console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.`
     );
```

Digamos que agora também precisamos indicar a média da Juliana.
Uma vez dentro da lista de médias, vamos acessar a nota de Juliana, que está na posição 1 também. 

bash```

    console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
    `
    );
    
 ```


```
Para saber mais: matrizes

Durante a aula vimos as listas com duas dimensões, ou seja, arrays que contêm arrays, podendo ter um único array ou vários dentro do principal.

```
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];
```

O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

0 -> nomes
1 -> idades
2 -> faculdade

O segundo colchete será usado para acessar a informação dentro do array escolhido.

Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.

vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array:
```
const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)
```

O resultado no terminal agora é:
```
[ 50, 60, 70, 80, [ 90, 100 ] ]
[ 50, 60, 70 ]
```` 

Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.


### 3- Laços de Repetição

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/2bce8028-6631-4112-af0e-6f3a86cf2e03)


Desafio 8: Procurando na lista
Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
Para este desafio, usaremos as mesmas listas da aula anterior:

'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9

Checando nomes cadastrados
Vamos criar uma função chamada exibeNomeENota(), que verificará se o nome de uma pessoa está cadastrado na lista e, depois, mostrará sua nota. Essa função receberá como parâmetro o nome do aluno:
Primeiramente, criaremos uma lógica para checar se conseguimos exibir uma mensagem ou não, a depender se o nome está presente ou não na lista.

Em exibeNomeENota(), acessaremos apenas a listaDeAlunosEMedias, para nos acostumarmos com a sintaxe de arrays de duas dimensões. Em cenários reais, nem sempre teremos acesso direto a essas listas "internas" como temos agora, então é importante estar familiarizado com essa sintaxe.

Dentro da função exibeNomeENota(), vamos desenvolver uma estrutura if:

Como condição, avaliaremos se o aluno está na lista ou não. Como a lista de alunos está na posição 0 da listaDeAlunosEMedias, usaremos a sintaxe listaDeAlunosEMedias[0] para nos referir a ela. Em seguida, usaremos o método includes() — que significa "incluir", em inglês. Como parâmetro dele, passaremos aluno:
Vamos incluir o else também. Caso o aluno não seja encontrado, exibiremos outra mensagem explicativa:

O método includes() verifica se o parâmetro passado para ele está incluso na lista. Quando está incluso, o retorno será o valor booleano true (verdadeiro). Do contrário, o retorno será false(falso). Por isso, podemos usar o includes() como condição da estrutura if.

Portanto, já criamos um código para definir se um nome está presente na lista. Vamos continuar complementando o código para sustentar o desafio.

*Exibindo a média*

Conforme o desafio, quando o aluno estiver incluso na lista, temos que procurar sua média e exibi-la. Sabemos que a média está no mesmo índice do aluno, porém em outra lista. Por exemplo, João está no índice 0 da lista alunos e sua média está no índice 0 da lista medias. Então, para descobrirmos a média de um aluno, precisamos saber seu índice.

Para encontrar o índice de um elemento em um array, podemos usar o método indexOf() — que significa "índice de", em inglês. Vamos utilizá-lo dentro do bloco if, após o console.log():

Como o objetivo é pesquisar no array alunos, referenciamos essa lista com listaDeAlunosEMedias[0]. Em seguida, usamos o método IndexOf(), que retornará o índice do aluno passado por parâmetro. Guardamos esse retorno na constante indice.

Sabemos que o índice de João é 0, então nosso código está funcionando e aplicamos o método indexOf() corretamente.

Agora que conseguimos selecionar o índice do aluno, vamos pesquisar sua média! A princípio, declararemos a constante mediaDoAluno. Para referenciar a lista medias, usaremos a sintaxe listaDeAlunosEMedias[1]. Em seguida, acessaremos o elemento no mesmo índice do aluno:

*Refinamentos* 

Por fim, vamos alterar a mensagem exibida no console para torná-la mais objetiva e remover alguns trechos desnecessários do nosso código.

Primeiro, vamos apagar o console.log() em que mostramos a mensagem de que o aluno está cadastrado. E, no console.log() que está dentro do bloco if, vamos utilizar uma template string com uma mensagem mais explicativa.


 ```
     function exibeNomeENota(aluno){
         if (listaDeAlunosEMedias[0].includes(aluno)) {
             const indice = listaDeAlunosEMedias[0].indexOf(aluno);
     
             const mediaDoAluno = listaDeAlunosEMedias[1][indice];
     
             console.log(`${aluno} tem a média ${mediaDoAluno}.`);
     
         } else {
             console.log("Aluno não encontrado!");
         }
     }
 
     exibeNomeENota("Juliana");
 ```


o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
o método indexOf() retorna o índice do elemento passado por parâmetro.

### Desestruturando uma lista

*Refatoração*

Tem algo no nosso código que podemos melhorar. Dentro do bloco if, escrevemos listaDeAlunosEMedias[0] para treinar a sintaxe de listas de duas dimensões. Porém, não fica intuitivo o que essa expressão significa, não fica claro que a posição 0 de listaDeAlunosEMedias se refere à lista de alunos. Vale lembrar que também estamos simulando um cenário em que apenas temos acesso à listaDeAlunosEMedias (e não diretamente à lista alunos).

Antes da constante indice, podemos declarar uma constante chamada alunos que receberá a listaDeAlunosEMédia na posição 0:
Então, na atribuição de indice, substituiremos listaDeAlunosEMedia[0] por alunos. Assim, fica mais claro a que estamos nos referindo e a linha fica mais legível:
Vamos realizar um processo semelhante para listaDeAlunosEMedias[1]. Também no início do bloco if, criaremos uma constante chamada medias que recebe listaDeAlunosEMedias[1]:
Em seguida, na atribuição de mediaDoAluno, trocaremos listaDeAlunosEMedias[1] por medias:
Mas temos como melhorar ainda mias o nosso código! Ao declarar alunos e medias, fizemos atribuições partindo da mesma lista. Desde o JavaScript 6, existe uma maneira mais concisa de fazer essa atribuição. De início, vamos comentar as constantes alunos e medias:
Abaixo do trecho comentado, declararemos uma constante com uma sintaxe diferente. Vamos escrever const e, em lugar do nome, colocaremos um par de colchetes. Dentro deles, colocaremos alunos e medias, separados por vírgula. Atribuiremos listaDeAlunosEMedias a essa constante:

```
const [alunos, medias] = listaDeAlunosEMedias;
```

Essa nova linha equivale às duas linhas que comentamos há pouco. Quando abrimos e fechamos colchetes logo após uma declaração, como const, nós estamos nomeando cada um dos elementos da lista no lado direito da atrubuição. Em outras palavras, criamos uma constante chamada alunos para a posição 0 de listaDeAlunosEMedias e também criamos uma constante chamada medias para a posição 1 de listaDeAlunosEMedias. Funciona exatamente como as duas linhas comentadas.

Essa sintaxe diferenciada e específica do JavaScript chama-se sintaxe de desestruturação de listas. Ela nos ajuda a tornar o código mais conciso e é bastante utilizada no mercado! A desestruturação serve para outros tipos de dados do JavaScript.


```
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");
```

*Para saber mais: desestruturação*

Você viu como utilizar o recurso de desestruturação (ou destructuring, em inglês) do JavaScript em arrays, que também pode ser utilizado em objetos (uma estrutura de dados que você ainda vai conhecer).

### For Clássico

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/60e20abe-ffcf-40f2-8f6a-2bd9b6f83270)

**Desafio 9: For**
Imprima o índice e a lista com os seguintes números:

100, 200, 300, 400, 500, 600

*Sintaxe e funcionamento do for*

O for é constituído por três expressões dentro dos parênteses, separadas por ponto e vírgula. A primeira expressão é executada uma única vez. No nosso caso, temos let indice = 0 — a declaração de uma variável, inicializada com o valor 0. Quando o JavaScript interpreta todo o código que escrevemos nesse arquivo, ao chegar na estrutura for, ele executará essa expressão uma vez.

A segunda expressão é a condição de execução do bloco for ** e a terceira expressão será executada sempre ao final do bloco**. Vamos inserir alguns comentários no código (antes do for) para não nos esquecermos da proposta de cada um das três expressões:

Assim, primeiramente o JavaScript executa a expressão let indice = 0. Em seguida, ele adentra no bloco contido entre as chaves. No caso, o console.log(). Terminado o bloco, o JavaScript executa a terceira expressão dentro dos parênteses, incrementando o valor da variável indice. Se antes era 0, agora temos 1.

Com o novo valor de indice, a segunda expressão será interpretada — a condição de execução. Caso a condição seja satisfeita, o bloco entre chaves será executado novamente. Esse ciclo será repetido, até que a condição deixe de ser satisfeita. Executamos o console.log(). Terminado o bloco, executamos indice++. Agora, indice é igual a 2. Verificamos a condição de execução: 2 é menor que 6? Sim, então continuamos a repetição. Em dado momento, indice terá valor 6 e a condição de execução não será mais satisfeita.

Ao construir uma estrutura for, é importantíssimo atentar à condição de execução. Se ela nunca for invalidada, entramos em um loop infinito! Você pode ler mais a respeito na próxima atividade deste curso.

Portanto, essa é a composição e o funcionamento de um for clássico, essa estrutura presente em quase todas as linguagens de programação.

Cada execução do loop chama-se iteração. Então, na primeira iteração, imprimimos o indice quando ele tinha o valor 0. Na segunda iteração, imprimimos o indice quando ele tinha o valor 1, e assim em diante até o valor 5. Houve 6 iterações.

Como um toque final pra melhorar nosso código, na condição de execução do bloco for, podemos substituir o número 6 por um valor dinâmico. Em vez de 6, usaremos o tamanho do array:

```bash
const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}
```

**Para saber mais: o loop infinito**


Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:

```
for (let indice = 0; indice <= 10; indice++) {
  console.log(indice);
}
```

O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:

```
for (let indice = 0; indice <= 10; ) {
  console.log(indice);
}
```

A mesma coisa acontecerá se o for for executado sem a segunda expressão, que é a condição de execução.

```
for (let indice = 0; ; indice++) {
  console.log(indice);
}
```

Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:

```
for (let indice = 0; indice < 10; indice++) {
  indice--;
  console.log(indice);
}
```

IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.

### Média com FOR

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/14013d6a-8465-4c4d-9a42-f0272899a9ae)

*Desafio 10: Média*
Calcule a média entre as seguintes notas, usando o for:

10
6.5
8
7.5


```
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
```


*Faça como eu fiz: loops em matrizes*


Vimos como usar os loops para percorrer um array utilizando ofor:


```
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
```


Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.


```
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0

```


Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.


```
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
```


Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.

Então ficamos com o seguinte código:


```
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
console.log(media)
```


No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 e dividir pela quantidade de arrays em notasGerais.


```
const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0
 
for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}
 
media = media/notasGerais.length
 
console.log(media)
```


Com isso usamos o for para passar por todos os elementos da matriz, e nesse caso, calcular a média dos valores deles.


### Media com FOR OF

*Desafio 11: Média com for of*

Calcule a média entre as seguintes notas usando o for of:

10
6.5
8
7.5

Diferentemente do for clássico, o for of é composto por uma única expressão. Além disso, essa estrutura é caracterizada pelo of, que incluímos após let elemento. O termo of significa "de", em inglês.

Portanto, com essa expressão, é como se estivéssemos dizendo: para cada elemento de notas, execute o código que está dentro das chaves. O for of é muito adequado para utilizarmos com arrays.

No for clássico, nós mesmos declaramos uma variável de controle, a incrementamos manualmente e indicamos a condição para a continuidade (ou não) do loop, que será avaliada a cada iteração. Já no for of, o JavaScript automatiza alguns desses processos.

Quando queremos percorrer um array, podemos usar o for of. Assim, o JavaScript já entende que temos que percorrer o array do início ao fim. A grande vantagem dessa estrutura é que podemos selecionar diretamente o valor de cada elemento da lista e, por exemplo, imprimi-lo com um console.log(), como fizemos.

Usamos a palavra "elemento", porque é um termo genérico. Vamos renomeá-lo para um nome mais específico para nosso caso. Posicionaremos o cursor sobre elemento, pressionaremos a tecla "F2" e o renomearemos de "elemento" para "nota". Assim, o código ficará mais semântico:

O for of é uma forma mais concisa de escrever o for tradicional, mas depende da situação. Ele funciona em casos que precisamos percorrer uma lista do início ao fim, passando por todos os elementos.

O for clássico pode ter uma sintaxe mais complicada, porém ele também é mais flexível para abordar contextos mais complexos. Por exemplo, conseguimos percorrer um array de trás para frente, fazer um decremento na variável de controle e ou até aumentar essa variável de dois em dois, de três em três, caso não seja necessário passar por todos os itens da lista.

O for of não tem toda essa flexibilidade, contudo ele fornece uma sintaxe mais sucinta que serve para a maioria dos casos, quando o objetivo é percorrer um array completo.


```
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
```


Para saber mais: possibilidades do for


A estrutura for tem uma sintaxe mais complexa que o for of, com mais expressões, mas por causa disso fornece um maior leque de possibilidades de acordo com a nossa necessidade.

Por exemplo, podemos percorrer um array do fim ao início:


```
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}
```


Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.

Ao executar o código, no terminal aparecerá:


```
600
500
400
300
200
100
```


Outra possibilidade é alterar a quantidade incrementada ou decrementada, utilizando o mesmo código acima, mas alterando o decremento para i -= 2. Então, teremos o seguinte:


```
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}
```


O valor de i será diminuído de 2 em 2 a cada iteração (lembrando que a expressão i -= 2 equivale a i = i - 2). Assim, os valores de i serão 5, 3 e 1, e no terminal aparecerá:


```
600
400
200
```


Também temos controle sobre a condição de execução, então se alterarmos esse último código para ter a condição numeros[i] > 300, teremos o seguinte:


```
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}
```


E no terminal aparecerá:


```
600
400
```


Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:


```
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);
```


No terminal aparecerá:


```
[
   0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
  22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
  44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
  66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
  88, 90, 92, 94, 96, 98, 100
]
```


Na maioria dos casos, você não precisará realizar repetições mais complexas como essas, mas nunca se sabe, certo? Por isso, conhecer os recursos de uma linguagem e suas possibilidades pode ser uma “mão na roda” no futuro.

Como vimos, para percorrer todos os elementos de um array e do início ao fim, o for of fornece uma sintaxe mais sucinta que o for.


### 4 - FUNÇÕES CALLBACK

### Média com FOR EACH

















