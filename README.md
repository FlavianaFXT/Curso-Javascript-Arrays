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
PRÓXIMA ATIVIDADE

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

'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'COPIAR CÓDIGO
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









