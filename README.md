# Curso-Javascript-Arrays

Pasta dedicada aos conteúdos e exercícios do curso de Javascript - Arrays da ![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/3ee31c74-35e6-4778-800d-f46dc7ea2a71).


## INDICE

- [APRESENTAÇÃO](#APRESENTAÇÃO)
- [TECNOLOGIAS EXPLORADAS NO CURSO](#TECNOLOGIAS-EXPLORADAS-NO-CURSO)
- [DESCRIÇÃO DO CURSO](#DESCRIÇÃO-DO-CURSO)
- [CONTEUDO](#CONTEUDO)
  - [1 Preparando o ambiente](#1-Preparando-o-ambiente)
    - [NodeJS](#NodeJS)
    - [Visual Studio Code](#Visual-Studio-Code)
  - [2 Introdução a Arrays](#2-Introdução-a-Arrays)
    - [Como funcionam os arrays](#Como-funcionam-os-arrays)
    - [Adicionando Elementos](#Adicionando-Elementos)
    - [Deletando Elementos](#Deletando-Elementos)
  - [3 Alterando Arrays](#3-Alterando-Arrays)
    - [Dividindo com slice()](#Dividindo-com-slice())
    - [Alterando com splice()](#Alterando-com-splice())
    - [Concatenando Arrays](#Concatenando-Arrays)
    - [Lista com 2 Dimensões](#Lista-com-2-Dimensões)
    - [Listas dentro de listas](#Listas-dentro-de-listas)
    - [Acessando elementos](#Acessando-elementos)
  - [4 Laços de Repetição](#4-Laços-de-Repetição)
    - [Desestruturando uma lista](#Desestruturando-uma-lista)
    - [For Clássico](#For-Clássico)
    - [Média com FOR](#Média-com-FOR)
    - [Media com FOR OF](#Media-com-FOR-OF)
  - [5 FUNÇÕES CALLBACK](#5-FUNÇÕES-CALLBACK)
    - [Média com FOR EACH](#Média-com-FOR-EACH)
    - [REVISANDO CALLBACKS](#REVISANDO-CALLBACKS)
    - [Método map()](#Método-map())
    - [Alterando Strings com map()](#Alterando-Strings-com-map())
    - [map() e forEach](#map()-e-forEach)
  - [6 Avançando em arrays](#6-Avançando-em-arrays)
    - [Filtrando Elementos](#Filtrando-Elementos)
    - [Retorno do filter](#Retorno-do-filter)
    - [Somando com Reduce](#Somando-com-Reduce)
    - [Clonando com spread operator](#Clonando-com-spread-operator)
    - [Removendo Elementos Repetidos](#Removendo-Elementos-Repetidos)

# APRESENTAÇÃO


## Quem é Flaviana?


![image](https://github.com/FlavianaFXT/ProjetoFinal-reprograma/assets/113718720/1e13d5e7-b1b4-4701-a689-ec293ec77ea1)

Flaviana Ferraz é uma sertaneja de Pernambuco morando no sertão da Paraiba, formada em Gestão Ambiental e Mestre em Recursos Hídricos. Após mais de 10 anos de formada, aos 34 anos, decidiu fazer transição de carreira. Hoje trilhando persistentemente os caminhos que levam à carreira de FrontEnd Developer.


### Contatos

- [E-mail](flaviferraz@yahoo.com.br)
- [LinkedIn](https://www.linkedin.com/in/flaviana-ferraz-frontend)
- [GitHub](https://github.com/flavianafxt)


# TECNOLOGIAS EXPLORADAS NO CURSO

| Ferramenta | Descrição |
| --- | --- |
| `Javascript` | linguagem de programação |
| `VS Code` | editor de código-fonte |
| `Node.js` | software para execução de código fora do navegador |
| `Git` | Gerenciador de versionamento|
| `Github` | Hospedagem do código fonte integrado com gerenciador de versionamento|


# DESCRIÇÃO DO CURSO

### 🧠 Contexto


Este curso é parte da continuidade dos estudos em FrontEnd pela {Reprograma}, que, através de parceria com a Alura conseguiu acesso a uma trilha de estudos feita especialmente para nós.

Nele vimos os seguintes assuntos:

▶️ **Conceitos básicos de arrays:** como declará-los, acessá-los e consultar suas propriedades. Também estudaremos métodos de arrays, explorando como melhor lidar com eles, alterando-os conforme os desafios.
            
▶️ **loops**, também chamados de laços de repetição. Esse recurso é importante para percorrer e manipular arrays, lidando com vários dados simultaneamente.
            
▶️ **funções callback:** o que são e para que servem. Elas serão bastante úteis para tratar arrays juntamente de métodos mais modernos do JavaScript, como map, filter e reduce.


### 🧠 Estrutura 

Como subtópicos temos:

↪️ As características principais de arrays
            
↪️ Os conceitos de elemento e índice
            
↪️ Como utilizar a propriedade .length
            
↪️ Como utilizar os métodos .push() e .pop()
   
↪️ Separar um array em partes com slice() (utilizamos para obter dois novos arrays a partir de um).
   
↪️ Remover e incluir novos elementos em um array com splice(); sendo que esse método permite remover elementos de qualquer posição do array. Além disso, podemos incluir um novo elemento no local dos removidos.
            
↪️ Concatenar elementos em um único array com concat(); sendo que essa é uma forma facilitada de juntar dois arrays.
            
↪️ Trabalhar com arrays de duas dimensões. Vimos que uma lista também pode guardar outras listas! Para acessar elementos das listas mais internas, devemos informar primeiro os índices das mais externas e depois os das mais internas, como por exemplo com funcionarios[0][2].

↪️ Utilizar os métodos includes() e indexOf(): O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array. O indexOf() retorna a posição no array do valor passado como parâmetro. Utilizamos esses dois métodos em conjunto para primeiro verificar se um aluno estava presente em uma lista, e depois obter sua posição para buscar sua nota em outra lista.

↪️ Desestruturar um array: Você aprendeu a sintaxe de desestruturação, disponível desde o ES6 (EcmaScript 6), que nos permite criar várias novas variáveis ao mesmo tempo a partir dos elementos de um array.

↪️ Utilizar a estrutura for e entender seu funcionamento: O for é constituído de três expressões: criação da variável de controle; condição de execução; modificação da variável de controle. Essas três expressões juntas definem quantas vezes o bloco do for será executado.

↪️ Utilizar a estrutura for of e entender a diferença em relação ao for: O for of sempre é utilizado para percorrer todos os elementos de um array, do início ao fim. Para esses casos, o for of é mais conciso que o for.

↪️ Como utilizar o forEach: Aprendemos mais uma forma de iterar sobre arrays, dessa vez com um método próprio deles. O forEach recebe uma função callback que será executada para cada item do array.

↪️ Diferentes formas de utilizar funções callback: Podemos utilizar funções anônimas (como arrow functions) diretamente como funções callback, ou então criar funções de forma externa e utilizá-las no parâmetro.

↪️ Como utilizar o map: O map também aceita funções callback, assim como o forEach, e é adequado para quando queremos "reescrever" os valores de um array, sem modificar o array original. Um novo array é criado com os valores reescritos.

↪️ Como utilizar o filter e o reduce: Aprendemos mais métodos modernos do JavaScript que nos ajudam em situações mais específicas. Utilizamos o filter para criar um array filtrado a partir de um existente e o reduce para acumular valores de um array em um só.

↪️ Como clonar arrays com o spread operator ...: Entendemos o problema de referência do JavaScript ao tentar atribuir um array a um novo. Para resolver esse problema, utilizamos o spread operator para espalhar todos os valores de um array em um novo, realizando a clonagem com sucesso.

↪️ Como utilizar a estrutura Set: Vimos como criar um Set a partir de um array existente, a fim de remover todas as suas duplicatas. Em seguida, utilizamos o spread operator para converter o Set de volta em um lista.


# CONTEUDO 


## 1 Preparando o ambiente

JavaScript é conhecida como a “linguagem da web”. Embora tenha se desenvolvido no front-end, atualmente cada vez mais a utilizamos no chamado back-end, ou server side (lado do servidor) das aplicações web. Este curso foca no uso do JavaScript para back-end.

Assim, precisaremos instalar duas ferramentas: o NodeJS, necessário para executar código JavaScript sem precisar do navegador, e o Visual Studio Code ou VSC, editor que usamos para escrever código.


### **NodeJS**


Caso já tenha feito algum curso anterior de JavaScript para back-end, o NodeJS pode já estar instalado. Se não tiver certeza, é possível conferir com os seguintes passos:

1) Abra uma janela do terminal em seu computador. Isso pode ser feito da seguinte forma:
2) 
 Windows: Você pode acessar a busca no menu inicial e procurar por Prompt de Comando, ou acessar via Menu Iniciar > Sistema do Windows > Prompt de Comando.

 MacOs: O Terminal está disponível no menu de Aplicações, dentro da pasta de Utilitários.

Linux (Ubuntu): O Terminal está disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.

No terminal, digite `node --version ou node -v` - caso retorne um número de versão, como por exemplo, v14.16.0, o NodeJS já está instalado.

Caso precise instalar, siga as instruções para cada sistema operacional que estão na página inicial do NodeJS. Este curso foi desenvolvido usando a versão 16.17.0.

O site do NodeJS oferece duas opções para download, a LTS e a "current" (atual). Você pode escolher a versão LTS (Long Term Support, ou Suporte a Longo Prazo) e clicar no botão correspondente para baixar e instalar normalmente como qualquer outro programa.


### **Visual Studio Code**


O Visual Studio Code é o editor que escolhemos utilizar para escrever nossos códigos durante este curso. Os links para baixar e instalar de acordo com o seu sistema operacional estão na página inicial do VSC.


## 2 Introdução a Arrays


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/fa089fef-beb9-4afb-8d4d-d222d50764ef)


### **Como funcionam os arrays**


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


**### Para saber mais: O que são Arrays?**


Como vimos na aula, vamos trabalhar com array, que é um tipo de estrutura de dados. Ao contrário de uma variável, que guarda somente um valor por vez, um array (ou lista) pode armazenar diversos valores. Pode ser usada, por exemplo, para agrupar diversos dados que têm relação entre si.


```bash
const numero1 = 50;
const numero2 = 43;
const numero3 = 12;
```


```bash
// utilizando array
const numeros = [50, 43, 12];
```


Um array pode ser definido como uma lista ordenada de valores enumerados em que cada valor é chamado de elemento ou item, e cada elemento se localiza numa posição na lista chamada de índice. Vamos destrinchar essa explicação.

Uma lista ordenada de valores enumerados:

Quando falamos de valores, estamos nos referindo a dados de algum tipo: string (texto), number (número), booleano (true ou false) ou outros dados reconhecidos pelo JavaScript.


```bash
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
```


Como uma lista ordenada, entende-se que os dados no array estão em uma ordem definida e se manterão nessa ordem. Eles estão enumerados, ou seja, cada um está associado a um identificador numérico que diz qual é a sua posição na lista (mais sobre isso abaixo!). Caso não seja feita nenhuma alteração no array, seus valores sempre aparecerão na mesma ordem: [50, 43, 12], por exemplo.

Cada valor é chamado de elemento ou item:

Em programação é importante sempre sabermos os nomes dos itens, para facilitar na hora de tirar dúvidas, procurar soluções e ler documentação. Quando trabalhamos com arrays, chamamos de elemento ou item cada um dos valores da lista.


```bash
// array com 1 elemento
const numero = [5];

// array com 3 elementos
const nums = [50, 43, 12];
```


Lembrando que cada elemento corresponde a um dado, separados por vírgula. O espaço é opcional, mas facilita a leitura.

Cada elemento está localizado em uma posição na lista, chamada de índice:

Se um array é uma lista ordenada, então é possível acessar cada um dos dados (ou valores) nele se soubermos a posição dele na lista. Por exemplo:


```bash
const nums = [50, 43, 12];
// o número 43 está na posição de número 1 (segunda posição) nessa lista de três números.
```


Em programação, chamamos de índice (em inglês, index) o número que identifica a posição de um valor em um array.

Porém um detalhe muito importante para trabalharmos bem com arrays é que em JavaScript (e na maior parte das linguagens de programação) a contagem dos índices não começa no número 1, e sim no número 0. Então, se quisermos acessar determinado valor pelo número do índice temos que levar isso em consideração:


```bash
// índice     0   1   2   3
const nums = [50, 43, 12, 98];
```


Sendo assim, o elemento de valor 43 está localizado no índice de número 1.

A imagem abaixo mostra um diagrama da representação de um array, nomeando seus recursos:

Diagrama representando um array. Há um texto “notas” e ao lado direito do texto há 4 retângulos lado a lado. Cada retângulo contém um número dentro, que representa uma nota. Ao lado direito da fileira de retângulos, há um seta apontando para eles, com o texto “elementos / itens / valores”. Abaixo de cada retângulo, há um número, que começa à esquerda, do zero no primeiro retângulo e vai até o número três, mais à direita, no último retângulo. Ao lado dessa fileira de números, há uma seta apontando para eles, com o texto “índices / posições”.

A propriedade length: Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo:


```bash
// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //
```


Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.

A propriedade length é muito útil para trabalharmos com arrays, pois não é preciso saber o número de elementos de antemão e nem tentar contá-los, o que seria impraticável em um programa de computador real.


### **Adicionando Elementos**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/3234d56e-1541-4b56-b340-f2b8819f8070)


*Desafio 2: Adicionando elementos*

Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:

10
6
8

Para corrigir, precisamos adicionar a nota 7 e fazer o cálculo da média corretamente.

*Alterando constantes?*

Ao longo desse processo, você pode ter percebido um ponto curioso: como conseguimos alterar o array de notas se ele é uma constante? Se você percebeu isso, você é uma pessoa bastante atenta!

Esse é um comportamento específico do JavaScript. Por mais que declaremos um array como constante, conseguimos alterá-lo de acordo com alguns métodos do próprio array. Quando criamos uma constante no JavaScript, somos somente impedidos de fazer uma nova atribuição para a constante.


### **Deletando Elementos**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/c57fe0ad-37d7-4f0f-9c24-0626efd0b8ce)


*Desafio 3: Deletando elementos*

Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno:


```
10
6
8
5.5
10
```


Para corrigir, precisamos que remover a última nota e fazer o cálculo da média corretamente.

Para remover a última nota, usaremos outro método dos arrays do JavaScript — o pop().

Aprimorando a mensagem impressa

Em vez de simplesmente imprimir o valor numérico da média, vamos exibir uma mensagem mais explicativa. No console.log(), em vez de passar apenas a constante media, vamos incluir um texto também.

Usaremos duas crases para escrever uma template string. Entre as crases, escreveremos a mensagem "A média é ", seguida do símbolo de cifrão ($) e um par de chaves, dentro dos quais passaremos a constante media. Finalizaremos com um ponto final:


```bash
console.log(`A média é ${media}.`);
```


### **Para saber mais: métodos de array**


Já utilizamos alguns métodos dos arrays nessa aula, e ainda existem muitos métodos que não vimos. Porém, pode ainda ter ficado a dúvida: o que são os métodos?

Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles:


`concat()` - Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.


`filter()` - Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.


`find()`- Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.


`findIndex()`- Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.


`lastIndexOf()`- É igual o findIndex() porém começa do último elemento, não no primeiro.


`forEach()`- Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.


`pop()`- Retira o último elemento do array.
Altera o array original removendo o elemento.


`shift()`-  Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.


`push()`- Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.


`unshift()`- Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.


`reduce()`- Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.


`reduceRight()`- Funciona igual o reduce() porém começa do final do array e segue até o início.


`reverse()`- Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.


`slice()`- Copia uma parte do array para outro array.


`sort()`-  Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.


`splice()`- Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.


## 3 Alterando Arrays


### **Dividindo com slice()**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/aeb6b29e-b5c7-4882-a06b-5f031d504a47)


*Desafio 4: Sala dividida*

Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'

Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

Informaremos dois parâmetro para o método slice(), separados por vírgula. O primeiro indicará a posição do elemento em que começaremos a "fatiar" a lista original. No caso, começaremos por João, que está na posição 0. O segundo parâmetro indicará onde terminaremos de "fatiar". No caso, colocaremos o valor 10, que se refere ao índice do 11° estudante, André.

Existe uma peculiaridade do método slice() que devemos nos atentar! No segundo parâmetro, informamos o índice de um elemento e esse elemento não será incluído no novo array! Ou seja, ao colocar os parâmetro 0 e 10, estamos selecionando os alunos do índice 0 ao 9.


*Melhorias*

Atualmente, nosso código funciona para uma lista de 20 estudantes. Mas e se tivéssemos uma lista de 30, 40 ou 100 alunos? É interessante que o nosso código seja o mais dinâmico possível. Em vez de escrever valores estáticos (como o 10, que sabemos que é a metade da lista), podemos inserir valores dinâmicos.

Para encontrar a metade do nosso array, em lugar de 10, vamos colocar o tamanho da lista dividido por 2. Faremos isso tanto na atribuição da constante sala1 como em sala2.

 - [documentação do JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)


 ### **Para saber mais: consultando a documentação**


Em caso de dúvidas sobre como funciona um método de array, você sempre pode consultá-lo na - [documentação oficial da MDN]( https://developer.mozilla.org/pt-BR/), como por exemplo os métodos push e slice.

Por exemplo, na página do método push, vemos a seguinte descrição:

O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

Exatamente como vimos em aula, a documentação diz que o método push altera o array original, além de informar seu valor de retorno (que não foi necessário para nós no desafio).

Na página do método slice, vemos a seguinte descrição:

O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

Novamente, podemos consultar rapidamente o que o método faz, seu valor de retorno e se ele altera o array original.

A documentação também fornece informações bastante detalhadas sobre cada recurso da linguagem; você não precisa entender tudo que é mencionado em cada página (e no início de desenvolvimento, você provavelmente irá se deparar com muitos termos novos), mas ela é uma excelente fonte de consultas. Além disso, ela fornece vários exemplos práticos onde um método pode ser útil. A documentação será muito importante na sua jornada de desenvolvimento!


### **Alterando com splice()**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/d243d406-2efb-4a45-89fc-f075a1d723f7)


Em inglês, o termo splice significa "emendar" ou "juntar". Cuidado para não confundi-lo com o método slice() que abordamos na última aula, já que seus nomes são parecidos. Até o funcionamento deles é semelhante e pode causar confusão!

O primeiro parâmetro do método splice() é o índice do elemento que queremos remover. Portanto, para remover o nome de Ana, passamos o índice 1. 
O segundo parâmetro é a quantidade de itens que queremos remover a partir desse índice. Logo, para remover o nome de Ana e de Caio, informaremos o valor 2.
O método splice() aceita um terceiro parâmetro. Então, vamos colocar a string "Rodrigo".


### **Concatenando Arrays**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/aa7a5c1e-94d4-4006-8e23-b148662390ed)


Mais uma vez, teremos um método para nos auxiliar na junção dessas listas: o concat(), que vem da palavra "concatenar". Em programação, isso significa "juntar".
Dentro dos parênteses desse método, passaremos como parâmetro outra lista. No caso, salaPython.

O método concat() não alterará nenhum dos arrays, ele retornará uma nova lista. Sabendo disso, vamos guardar o resultado numa constante chamada salasUnificadas.
Como resultado, temos um novo array com todos os nomes — primeiro com estudantes de JavaScript e, depois, os de Python. 

Vale lembrar que a ordem em que informamos os arrays afeta a ordem em que os nomes aparecerão na lista final. Para demonstrar essa diferença, vamos inverter as referências na linha em que atribuímos o valor da constante salasUnificadas. Em vez de salaJS, colocaremos salaPython e, em lugar de salaPython, usaremos salaJS.


### **Lista com 2 Dimensões**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/1fff1b43-ab46-4069-bba8-44e5f25379dd)


*Desafio 7: Lista com 2 dimensões*

Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9

Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.


*Listas dentro de listas*

No VS Code, vamos criar um arquivo chamado lista-duas-dimensoes.js. Começaremos declarando duas listas, uma com os nomes das pessoas estudantes e outra com suas notas:

Em seguida, vamos declarar uma lista chamada listaDeAlunosEMedias, que conterá as listas alunos e medias. O primeiro elemento será a lista de estudantes e o segundo será a lista de médias:

O retorno pode parecer um pouco estranho, mas está correto. Trata-se de uma lista cujo conteúdo são duas listas. Nas extremidades, abrimos e fechamos os colchetes do array "externo". Dentro dele, temos a lista de estudantes na primeira posição e a lista de médias na segunda posição.


*Acessando elementos*

Conseguimos criar uma lista que contém outras duas listas, mas como faremos para acessar elementos dentro delas? Por exemplo, como podemos selecionar Juliana, que está na posição 1 da lista alunos? Vamos descobrir, a seguir.


bash```

    console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0]}.`
    );
```


```
Portanto, listadeAlunosEMedias[0] representa a lista de alunos. Na sequência, vamos acessar a posição 1 da lista de alunos, pois sabemos que é onde está Juliana. Após [0], basta abrir e fechar outros colchetes e inserir o valor 1 entre eles:


```bash

     console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.`
     );
```



Digamos que agora também precisamos indicar a média da Juliana.
Uma vez dentro da lista de médias, vamos acessar a nota de Juliana, que está na posição 1 também. 


```bash

    console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.
    `
    );
    
 ```


### **Para saber mais: matrizes**


Durante a aula vimos as listas com duas dimensões, ou seja, arrays que contêm arrays, podendo ter um único array ou vários dentro do principal.


```bash
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];
```


O array funcionarios é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:


`
0 -> nomes
1 -> idades
2 -> faculdade
`


O segundo colchete será usado para acessar a informação dentro do array escolhido.

Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos a ter problemas para fazer a manutenção do código.

vamos ver o que acontece se um dos parâmetros for um array com dois elementos, um número e um array:


```bash
const arrayOriginal = [50, 60, 70]
const arrayConcat = arrayOriginal.concat([80, [90, 100]])

console.log(arrayConcat)
console.log(arrayOriginal)
```


O resultado no terminal agora é:


```bash
[ 50, 60, 70, 80, [ 90, 100 ] ]
[ 50, 60, 70 ]
```` 


Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.


## 4 Laços de Repetição


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/2bce8028-6631-4112-af0e-6f3a86cf2e03)


*Desafio 8: Procurando na lista* 


Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
Para este desafio, usaremos as mesmas listas da aula anterior:

`
'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9
`

*Checando nomes cadastrados*

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


 ```bash
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


### **Desestruturando uma lista**


*Refatoração*


Tem algo no nosso código que podemos melhorar. Dentro do bloco if, escrevemos listaDeAlunosEMedias[0] para treinar a sintaxe de listas de duas dimensões. Porém, não fica intuitivo o que essa expressão significa, não fica claro que a posição 0 de listaDeAlunosEMedias se refere à lista de alunos. Vale lembrar que também estamos simulando um cenário em que apenas temos acesso à listaDeAlunosEMedias (e não diretamente à lista alunos).

Antes da constante indice, podemos declarar uma constante chamada alunos que receberá a listaDeAlunosEMédia na posição 0:
Então, na atribuição de indice, substituiremos listaDeAlunosEMedia[0] por alunos. Assim, fica mais claro a que estamos nos referindo e a linha fica mais legível:
Vamos realizar um processo semelhante para listaDeAlunosEMedias[1]. Também no início do bloco if, criaremos uma constante chamada medias que recebe listaDeAlunosEMedias[1]:
Em seguida, na atribuição de mediaDoAluno, trocaremos listaDeAlunosEMedias[1] por medias:
Mas temos como melhorar ainda mias o nosso código! Ao declarar alunos e medias, fizemos atribuições partindo da mesma lista. Desde o JavaScript 6, existe uma maneira mais concisa de fazer essa atribuição. De início, vamos comentar as constantes alunos e medias:
Abaixo do trecho comentado, declararemos uma constante com uma sintaxe diferente. Vamos escrever const e, em lugar do nome, colocaremos um par de colchetes. Dentro deles, colocaremos alunos e medias, separados por vírgula. Atribuiremos listaDeAlunosEMedias a essa constante:


```bash
const [alunos, medias] = listaDeAlunosEMedias;
```


Essa nova linha equivale às duas linhas que comentamos há pouco. Quando abrimos e fechamos colchetes logo após uma declaração, como const, nós estamos nomeando cada um dos elementos da lista no lado direito da atrubuição. Em outras palavras, criamos uma constante chamada alunos para a posição 0 de listaDeAlunosEMedias e também criamos uma constante chamada medias para a posição 1 de listaDeAlunosEMedias. Funciona exatamente como as duas linhas comentadas.

Essa sintaxe diferenciada e específica do JavaScript chama-se sintaxe de desestruturação de listas. Ela nos ajuda a tornar o código mais conciso e é bastante utilizada no mercado! A desestruturação serve para outros tipos de dados do JavaScript.


```bash
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


### **Para saber mais: desestruturação**


Você viu como utilizar o recurso de desestruturação (ou destructuring, em inglês) do JavaScript em arrays, que também pode ser utilizado em objetos (uma estrutura de dados que você ainda vai conhecer).


### **For Clássico**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/60e20abe-ffcf-40f2-8f6a-2bd9b6f83270)


*Desafio 9: For*

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


### **Para saber mais: o loop infinito**


Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de execução do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:


```bash
for (let indice = 0; indice <= 10; indice++) {
  console.log(indice);
}
```


O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de execução indice <= 10 está correta, a variável indice que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (indice++). Quando o valor da variável de controle indice chega a 11, depois de imprimir o número 10 no terminal, a comparação indice <= 10 se torna false e isso encerra o loop.

O loop infinito pode acontecer caso alguma das expressões seja passada de forma incorreta ou esteja faltando. Por exemplo a terceira, responsável por alterar indice após o bloco de código dentro do for ter sido executado:


```bash
for (let indice = 0; indice <= 10; ) {
  console.log(indice);
}
```


A mesma coisa acontecerá se o for for executado sem a segunda expressão, que é a condição de execução.


```bash
for (let indice = 0; ; indice++) {
  console.log(indice);
}
```


Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:


```bash
for (let indice = 0; indice < 10; indice++) {
  indice--;
  console.log(indice);
}
```


IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”.


### **Média com FOR**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/14013d6a-8465-4c4d-9a42-f0272899a9ae)


*Desafio 10: Média*


Calcule a média entre as seguintes notas, usando o for:

10
6.5
8
7.5


```bash
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


```bash
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
```


Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.


```bash
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]
 
const notasGerais = [notas1,notas2,notas3]
 
let media = 0

```


Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.


```bash
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


```bash
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


```bash
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


### **Media com FOR OF**


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


```bash
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
```


### **Para saber mais: possibilidades do for**


A estrutura for tem uma sintaxe mais complexa que o for of, com mais expressões, mas por causa disso fornece um maior leque de possibilidades de acordo com a nossa necessidade.

Por exemplo, podemos percorrer um array do fim ao início:


```bash
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}
```


Declaramos o valor inicial da variável de controle como o valor da última posição do array `(numeros.length - 1)`; realizamos um decremento `(i--)` ao invés de um incremento e a condição de execução é `i >= 0`. Ou seja, nesse caso, a variável `i` começará do valor 5 e irá até 0.

Ao executar o código, no terminal aparecerá:


``` bash
600
500
400
300
200
100
```


Outra possibilidade é alterar a quantidade incrementada ou decrementada, utilizando o mesmo código acima, mas alterando o decremento para i -= 2. Então, teremos o seguinte:


```bash
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}
```


O valor de i será diminuído de 2 em 2 a cada iteração (lembrando que a expressão `i -= 2` equivale a `i = i - 2`). Assim, os valores de i serão 5, 3 e 1, e no terminal aparecerá:


```bash
600
400
200
```


Também temos controle sobre a condição de execução, então se alterarmos esse último código para ter a condição `numeros[i] > 300`, teremos o seguinte:


```bash
const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}
```


E no terminal aparecerá:


```bash
600
400
```


Por fim, até agora utilizamos a estrutura for apenas para percorrer arrays, mas ela pode ser utilizada para repetir qualquer instrução conforme a necessidade. Por exemplo, podemos criar dinamicamente um array com todos os números pares de 0 a 100:


```bash
const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);
```


No terminal aparecerá:


```bash
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


## 5 FUNÇÕES CALLBACK


### **Média com FOR EACH**


*Desafio 12: Média com forEach*

Calcule a média entre as seguintes notas usando o forEach:

10
6.5
8
7.5

o forEach também é uma estrutura de repetição. 
Quando uma função é parâmetro de outra, chamamos a função passada como callback. Ou seja, essa função anônima também é callback nesse caso.
Em português, callback significa "chamar de volta". tem esse nome porque é uma função que estamos guardando de alguma forma na lógica interna do forEach e ela vai ser chamada de volta em determinados momentos.
Podemos perceber que o forEach tem uma lógica parecida com o for of, ele fornece diretamente o valor do elemento do array, que nesse caso nomeamos de nota, e ele também sempre vai do início ao fim do array.

Mas o forEach tem uma vantagem em relação ao for of. Nos parâmetros da função callback, podemos passar mais um parâmetro, usando uma vírgula entre os parâmetros.

Provavelmente, no mercado, você verá o forEach sendo bastante utilizado, até mais do que o for of.

```bash
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);
```

### **REVISANDO CALLBACKS**

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/ce0a133c-fbce-40d2-b386-725fed93f8ee)


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/49994f85-bc49-4ce8-930f-e583294555fd)


Você já deve ter visto que em uma função anônima também podemos usar a sintaxe de arrow funtion (=>), em português seria algo como "função flecha". 

Por fim, temos uma terceira forma de utilizar funções callback. Podemos criar a função callback de forma externa. 


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/5411273e-ab5e-4ee7-be36-d27b8d3bcb2f)


A arrow function é uma sintaxe mais moderna e mais sucinta, que você vai ver bastante no mercado. Para saber mais sobre arrow functions leia o artigo - [Conhecendo Arrow Functions](https://www.alura.com.br/artigos/conhecendo-arrow-functions?_gl=1*1gij91k*_ga*MTAyMjIzNjI2OC4xNzAxODc3NTU5*_ga_1EPWSW3PCS*MTcwNTMzODQ1OC4xNi4xLjE3MDUzMzg5MzQuMC4wLjA.*_fplc*dW9uU0VaVkprRURiWDduU043TzUwWE4zNllKUFczMG4lMkJyM2FsMVdJUW1sNzhVbENibDZ0VFRYUGtFdG1ZR29COHdXNG5CYURnQTJKMUtnZVRuaU56TElPbldVakxyMHp5MzE3MW9uY2YxNGZEUEx2cHMlMkJGaWtqZWlJZXRKZyUzRCUzRA..) no site da Alura. 


### **Para saber mais: for...of vs callbacks**


Até agora vimos várias formas de fazer o que parece ser a mesma coisa: for, for…of, forEach()... Com tantas opções, como posso escolher qual usar no meu código?

Antes, vamos dar uma olhada em cada um deles:

`for` - A forma mais “clássica” de se efetuar um loop em JavaScript e em várias outras linguagens, o for é muito conveniente pois pode ser utilizado com qualquer tipo de iterável e é construído de uma forma que deixa muito claro quais são todas as “fases” de cada loop - também chamamos um loop de laço de repetição ou de iteração.

`O que é um “iterável”?` Além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste artigo; o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando ferramentas próprias para isso. É importante fazer uma distinção entre array e iterável, pois nem todo método que funciona em um array vai funcionar em outros iteráveis - veremos isso em seguida.


```bash
const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log(lista[indice]); 
}
```


O que queremos dizer com “deixar claro as fases da iteração” pode ser visto no exemplo acima: a expressão entre parênteses () após a palavra-chave for. Dentro da expressão temos:

uma variável contadora, que é criada antes do início do laço (let indice);
uma expressão de teste (indice < lista.length), que é executada antes de cada iteração e que verifica se o código dentro do bloco {} deve ou não ser executado;
por último, uma expressão que é executada ao final de cada laço, normalmente um incremento (++) ou decremento (--) da variável contadora.
Ou seja: como as fases de cada laço são declaradas de forma explícita, elas também podem ser alteradas conforme a necessidade do código, o que faz com que o for seja muito versátil e possa ser utilizado em casos específicos, quando os outras formas de sintaxe mais reduzida (como os que vamos ver em seguida) não atendem. O laço pode ser decremental ao invés de incremental (percorrer um array de trás para frente), a variável contadora pode receber outro valor como let indice = 2 ou let indice = outraVariavel + 1 (desde que esse valor seja avaliado como número), a condição de teste pode ser o tamanho do array como no exemplo, ou outro (indice < lista.length - 1) e o incremento ou decremento ao final do laço pode receber qualquer operador aritmético ou ser o resultado de uma operação, como indice = indice + 2 ou indice *= 2.


É possível, inclusive, usar o for para executar algoritmos mais complexos, que também não seriam possíveis com outros métodos, por exemplo:


```bash
const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}

//1
//3
//5
//7
//9
```


Ainda há outras formas de se trabalhar com as condições do for, que você pode conferir na - [documentação sobre for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for) no MDN. 

`for…of` Adicionado às funcionalidades do JavaScript na versão ES6, é um tipo de laço de repetição diferente do for tradicional, embora utilize a mesma palavra-chave:


```bash
const lista = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista) {
 soma += elemento;
}

console.log(soma)
```


O for…of pode ser executado utilizando qualquer tipo de iterável: além de arrays, strings, sets (conjuntos) e maps (mapas ou dicionários) são considerados objetos iteráveis. Não vamos falar dos dois últimos tipos neste curso, mas se você tiver interesse em saber mais sobre conjuntos, dicionários e outras estruturas de dados, pode dar uma olhada neste artigo; o que precisamos saber agora é que um iterável, aqui, representa uma sequência de elementos que pode ser percorrida (ou seja, iterada) utilizando o for…of. É importante fazer esta distinção entre array e iterável, pois nem todo método ou declaração que funciona em um array vai funcionar em outros iteráveis.


Olhando assim, o for…of se parece bastante com o for: temos a declaração de uma variável (let elemento) seguida da palavra-chave of e um identificador do iterável que será percorrido (no caso acima é um array mesmo, lista).


A diferença principal e mais visível entre o for e o for…of é que o anterior dá muito mais controle sobre de que forma o laço de repetição ocorre. Por exemplo, vimos que no for é possível manipular de forma mais fina todas as condicionais; já no for…of as condições são mais “fixas”: elemento se refere a cada elemento (ou item) do array e o loop sempre ocorre de forma sequencial, do primeiro elemento até o último.


Em contrapartida, a sintaxe simplificada e mais “legível” para pessoas faz com que o uso do for…of seja mais prático do que o for, pois laços de repetição mais simplificados, que percorrem um iterável do primeiro ao último elemento e executam o código do bloco a cada iteração, são muito mais corriqueiros.


`forEach()`


Ao contrário de for e for…of, o forEach() é um método do objeto Array.


O que é um -[método](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Method_definitions)? Em programação, chamamos de método uma função que é propriedade de um objeto. A documentação do MDN traz alguns exemplos de métodos, mas você vai poder conferir com mais detalhes o que são objetos e suas propriedades quando fizer o curso de fundamentos do JavaScript: Objetos. Por agora, basta saber que quando dizemos que determinada função - por exemplo, forEach() é um método de array, significa que esta função foi desenvolvida para trabalhar apenas com esse tipo de dado - no caso, com arrays.


O forEach(), assim como outros métodos de array que vimos ou ainda vamos ver durante esta aula, também cumprem o papel de iterar arrays, porém com funcionalidades e retornos bem definidos. No caso do forEach(), apesar da sintaxe bem diferente, podemos utilizar este método como o for ou o for…of, pois ele vai executar as instruções que forem passadas para cada elemento iterado, sem retornar nenhum dado.


O - [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), assim como alguns outros métodos de array do JavaScript que estamos vendo no curso, utiliza a abordagem funcional de funções callback para executar o código necessário a cada elemento iterado no laço:


```bash
const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach(numero => soma += numero);
console.log(soma)
```


Como visto acima, o método forEach() recebe uma função como parâmetro, e esta função por sua vez utiliza como parâmetro cada um dos elementos do array. A lógica interna do forEach() vai manejar a iteração do primeiro ao último item do array e fazer com que o código definido dentro da função callback (no caso, apenas um incremento soma += numero) seja executado a cada iteração.


O mesmo código também poderia ser escrito da seguinte forma, um pouco mais extensa porém mais legível:


```bash
lista.forEach(numero => {
 soma += numero
});
```


Ou ainda, utilizando a palavra-chave function ao invés de arrow functions; essa forma de escrita não é usual, pois quando usamos funções callback o padrão adotado é o de arrow functions, mas serve para o propósito de legibilidade:


```bash
lista.forEach(function (numero) {
 soma += numero
});
```


Assim, vemos que o forEach() não retorna nenhum tipo de valor, apenas executa o que está dentro do bloco da função callback, assim como for e for…of. Porém também não é possível modificar a forma que a iteração será feita (é sempre do primeiro elemento do array ao último) e não há forma de interromper o laço dada alguma condição, como o break funcionaria para um for normal.

O forEach() também não pode ser utilizado com qualquer iterável, apenas com arrays e também não pode ser utilizado de forma assíncrona - um tema um pouco mais avançado e que não trabalharemos nesse curso, mas que você pode conferir - [neste artigo](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?_gl=1*1hxko04*_ga*MTAyMjIzNjI2OC4xNzAxODc3NTU5*_ga_1EPWSW3PCS*MTcwNTMzODQ1OC4xNi4xLjE3MDUzNDA0OTYuMC4wLjA.*_fplc*dW9uU0VaVkprRURiWDduU043TzUwWE4zNllKUFczMG4lMkJyM2FsMVdJUW1sNzhVbENibDZ0VFRYUGtFdG1ZR29COHdXNG5CYURnQTJKMUtnZVRuaU56TElPbldVakxyMHp5MzE3MW9uY2YxNGZEUEx2cHMlMkJGaWtqZWlJZXRKZyUzRCUzRA..) se tiver curiosidade pra começar a aprender.

E quando devo utilizar um ou outro?
A resposta, como em muitas coisas na programação, é depende!

Atualmente, em termos de performance - ou seja, qual código é executado de forma mais rápida pelo computador e consumindo menos recursos de memória - tanto os laços com for como o forEach() não tem diferenças significativas, embora ainda possam ocorrer exceções, como no caso de versões muito antigas de navegadores e/ou manipulação de arrays muito longos. Mas no momento em que desenvolvemos este curso a questão de performance não é tão definidora na maior parte dos casos, pois os interpretadores do JavaScript já evoluíram para trabalhar tão bem com funções callbacks quanto com iteradores.

O forEach() utiliza callbacks assim como map(), filter() e alguns outros métodos de array, o que facilita a utilização desses métodos em conjunto ou a troca de um para outro dependendo da necessidade do código ou de uma refatoração. Alguns guias de estilo de código desenvolvidos pela comunidade, como o famoso - [guia do AirBNB](https://github.com/airbnb/javascript#iterators-and-generators), indica preferencialmente o uso do forEach() no lugar do for…of para manter a consistência no estilo do código.

O for…of, mais recente que o forEach(), não é um método de array e sim um iterador, assim como o for. Ou seja, vai trabalhar com outros tipos de dados iteráveis além de arrays, com uma sintaxe mais simplificada que a do for.

Como em ambos os casos não há retorno, somente a execução do código que está dentro do bloco - os colchetes {} do for…of ou a função callback do forEach(), você pode utilizar as ferramentas da seguinte forma:

forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;
for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).

### **Método map()**

![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/a44bd41c-e51c-471d-9488-869cae9f9115)


*Desafio 13: ponto extra*

Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:

10
9.5
8
7
6

O map() também é uma estrutura de repetição do JS, ele vai executar essa função callback para cada uma das notas e para cada uma vai atribuir um novo valor.

O map() é muito apropriado para reescrever arrays, que é justamente o que queremos neste desafio.

o map() não altera o array original.

O map() não substitui o forEach(), ele não consegue abranger todas as situações do forEach(). Porém, ele é muito útil nos casos em que queremos reescrever um array e alterar todos os valores de alguma forma.


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/f60945d3-cdc8-4fed-8550-569a6f32551b)


### **Alterando Strings com map()**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/07aa89a6-f45d-4ba1-ae27-0492b1d3f1be)


Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.


`
ana Julia
Caio vinicius
BIA silva
`


Temos uma lista de strings em que os nomes não estão padronizados, alguns nomes estão com maiúsculas e outros estão com minúsculas. Vamos padronizar para ter maior consistência nos nossos dados.

Como pegar uma string e deixar todas as letras maiúsculas? Usaremos o método toUpperCase(). Mas para utilizar esse método em cada uma das strings da lista, precisamos percorrer o array inteiro, por isso usaremos o map().

Para finalizar, uma particularidade das arrow functions é que quando tudo o que fazemos dentro da arrow function é retornar um valor, podemos simplesmente omitir a palavra-chave return, vamos apagá-la, e podemos tirar as chaves de abertura e chave de fechamento da função. Então tudo o que ficou como callback foi `(nome) => nome.toUpperCase());`.


```bash
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);
```


### **Para saber mais: strings são arrays?**


Durante essa aula, utilizamos um método específico para strings, o toUpperCase(), para alterar todos os caracteres de cada string do array para letras maiúsculas. Mas e se quisermos acessar somente uma letra? Poderíamos usar um loop para percorrer todas as letras de um string?

“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

“Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:


```bash
const nome = "Alura";
// ["A", "l", "u", "r", "a"]
```


Ou seja, é possível utilizar alguns métodos de array e laços de repetição para acessar e alterar strings:


```bash
const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURACOPIAR CÓDIGO
const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura
```


Você pode conferir a lista completa de métodos de string na - [documentação do MDN]( https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#methods) . Confira na lista de links na seção à esquerda da tela e veja se consegue identificar alguns que já utilizamos nas aulas para trabalhar com arrays.


### **map() e forEach**


Agora já vimos mais sobre as funções callback e o método map() que utiliza essas funções, também vimos anteriormente sobre o método forEach().

Qual a principal diferença entre os métodos map() e forEach()?


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/7efcda38-08b1-4740-a015-bb81e24ee1f6)



### **Faça como eu fiz: métodos callback**


Nesta aula introduzimos um novo conceito, o de funções callback.

O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento do ES6 (também conhecido como EcmaScript 2015) o uso desse tipo de método foi se consolidando, então é importante entender como utilizá-lo.

O JavaScript moderno traz vários métodos e funções callback diversos, não apenas para uso com arrays. Porém a estrutura da função se mantém similar.

Crie um novo arquivo index.js e crie uma array de números:


```bash
const arrayNums = [1, 2, 3, 4]
```

Vamos utilizar o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Antes de escrevermos o map() para isso, vamos criar a função callback; ou seja, a função que vamos chamar (call) de volta quando executarmos o método map():


```bash
function multiplicaPorDez(num) {
 return num * 10
}
```


Agora podemos chamar o map() para fazer a operação:


```bash
const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)
```


O resultado no terminal deve ser `[ 10, 20, 30, 40 ]`.

IMPORTANTE: Observe a função multiplicaPorDez. Quando criamos esta função, especificamos que ela precisa receber o parâmetro (num) para ser executada corretamente. No entanto, quando ela está sendo chamada dentro de arrayNums.map(), não passamos nenhum parâmetro e mesmo assim funcionou. O que aconteceu aqui?

Para entender melhor, vamos reescrever o código, passando a função multiplicaPorDez(num) direto como parâmetro do map():


```bash
const arraySomada = arrayNums.map(num => num * 10)

console.log(arraySomada)
```


No código acima, substituímos uma função externa e nomeada (a função multiplicaPorDez), por uma arrow function anônima que existe somente dentro do map(). Mas esta função anônima também tem um parâmetro, num, que representa cada um dos elementos do array que será iterado pelo map().

Por isso, quando utilizamos uma função externa como callback de um map(), não foi necessário passar um parâmetro. O map() executa automaticamente o bloco de código da função (nesse caso, num * 10) para cada elemento do array.

Ambos os casos de uso são válidos; as funções externas permitem reaproveitamento de código, mas há vários momentos em que isso não será necessário.

Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos. Você pode ver outros exemplos no [MDN](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function).


## 6 Avançando em arrays

### **Filtrando Elementos**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/32d89e5f-d4b7-4d52-a549-6e97c2335967)


*Desafio 15: filtrando por nota*

Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:


```
Ana: 7
Marcos: 4.5
Maria: 8
Mauro: 7,5
```


Poderíamos, por exemplo, usar o forEach(), dentro do forEach() usar o slice() para modificar o array e mostrar as pessoas reprovadas.

Porém, nesta situação específica podemos usar um método moderno que se chama filter(), que em português significa "filtrar". Queremos realmente filtrar essa lista pelos alunos reprovados.

O filter() retorna um novo array. Então vamos escrever que const reprovados recebe alunos.filter(). Queremos filtrar a lista de alunos, por isso aplicamos o filter() em alunos.

não estamos usando o parâmetro aluno, porque dessa vez estávamos interessados apenas no índice. Quando não utilizamos o primeiro parâmetro, uma convenção que você pode encontrar é o uso do underline (_) em vez de nomear o parâmetro, então em vez de alunos.filter(aluno, indice) fica alunos.filter(_, indice). Só de fazer isso o JS vai saber que não estamos utilizando esse parâmetro.

É apenas uma convenção da linguagem, não é obrigatório fazer isso. Mas é obrigatório nomear o primeiro parâmetro de alguma forma para podermos acessar o segundo parâmetro, o índice.


```
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);

```


### **Retorno do filter**


Vimos como utilizar o método filter para retornar um array com apenas alguns elementos do array principal através de uma função callback.

O que deve ser retornado da função callback para que o método filter funcione?


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/6e1713d1-1e81-465b-80b6-d17ea1eb3f94)


### **Somando com Reduce**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/7bce3347-3494-43a6-9f6d-b5e2719759ad)


*Desafio 16: médias das turmas*

Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:


```bash
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];
```


Já vimos como calcular média antes com o forEach(), mas essa lógica de ter uma variável que começa em zero e vai incrementando aos poucos, tem um método que vai nos ajudar nesse caso de somar vários números de uma lista.

O reduce não altera o array original, então precisaremos retornar o valor de reduce para uma nova variável.

Num primeiro momento o reduce pode parecer um pouco mais complicado, ele tem uma lógica bem interna, abstrai bastante coisa. Mas, resumindo, usamos o acumulador, informamos o valor inicial dele no segundo parâmetro do reduce e vamos atualizando o valor do acumulador a cada iteração que fazemos na lista.

Por fim, o parâmetro acumulador também é muito chamado de acc, que é uma abreviação do nome dele em inglês. E também podemos usar diretamente o retorno da função arrow function, em vez de usar a palavra return, vamos fazer essas modificações no nosso código:


```bash
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
```


### **Faça como eu fiz: estrutura do reduce()**


Durante a aula trabalhamos com o método reduce() para “reduzir” uma lista de números para um único valor. Este método trabalha com parâmetros um pouco diferentes dos outros que vimos durante o curso. Por isso, vamos destrinchar o exemplo da aula para entender melhor as partes do código.

Em seu editor, crie um arquivo index.js e execute o seguinte código:


```bash
const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma)
```


O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual.
A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.
Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

Vamos reescrever o reduce() de uma forma um pouco mais extensa para separar melhor as partes do código:


```
const soma = numeros.reduce(function (acc, atual) {
 return atual + acc
}, 0)
```


Vendo o código acima, percebe-se melhor onde começam e terminam cada um dos parâmetros do reduce(): o primeiro parâmetro, uma função e o segundo, um número.

Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():


```
function operacaoNumerica(acc, atual) {
 return atual + acc
}

const soma = numeros.reduce(operacaoNumerica, 0)
```


O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.

No dia a dia, a forma que utilizamos no vídeo é a mais usual. Porém, durante seus estudos, você pode praticar da forma que achar mais clara.

É importante lembrar que cada método pode aceitar receber parâmetros diferentes! Alguns são obrigatórios, outros opcionais. Consulte sempre a documentação da linguagem.


### **Clonando com spread operator**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/2f43d3cd-c237-4142-b40d-878a324e3d68)


Se queremos criar um novo array, sem alterar o original – que realmente é uma situação que acontece muito no dia a dia, às vezes queremos pegar o array original e fazer uma modificação para outros propósitos e sem alterar o original.

A primeira coisa que pensamos em fazer é escrever, por exemplo, const novasNotas = notas e fazer um push para adicionar o 10 no final do array.


Ao fazer uma atribuição direta como essa, usando o sinal de igual, o JavaScript entende que a partir desse momento, é como se esses dois arrays fossem o mesmo, como se eles apontassem para o mesmo endereço da memória.

Então, qualquer alteração que fizermos em novasNotas será feita no array original e vice-versa. É como se, para o JavaScript, eles fossem o mesmo array. E não é isso que queremos.

Nós queremos fazer uma cópia do array, mas sem que eles estejam tão interligados assim. Para resolver isso, na linha da atribuição coloremos notas dentro de colchetes e acompanhado de três pontos (...), como reticências.


```bash
const novasNotas = [...notas];
```


Esse é um operador do JavaScript que se chama spread operator, ou "operador de espalhamento". Ao utilizá-lo junto com uma lista, ele pega todo o conteúdo desse array e espalhar seus valores no local que estamos indicando. É como se copiássemos o conteúdo da lista, "7, 7, 8, 9", e colássemos no lugar do [...notas]. É isso que estamos dizendo para o JavaScript.

Então, o spread operator é um operador que podemos usar para clonar arrays sem ter problemas de referências do JavaScript.


```bash
const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
```


### **Para saber mais: valor ou referência?**

No vídeo anterior, você viu como clonar um array de forma apropriada no JavaScript. Atribuir diretamente um array para outro com o sinal = faz com o que o JavaScript entenda que é como se eles fossem o mesmo array. Para evitar esse comportamento, devemos criar um array totalmente novo, com a ajuda do spread operator ... (ou operador de espalhamento).

Porém, esse comportamento não acontece com strings, números e booleanos, que são tipos primitivos do JavaScript.

Considere o seguinte código:


```bash
let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);
```


Ao executar o código, teremos a frase “Num1 é 11. Num2 é 15”. Ou seja, com o código let num2 = num1, o JavaScript entende que queremos criar uma cópia de num1, e cria uma nova variável, com seu próprio espaço na memória guardando seu valor. Então, ao modificar uma das variáveis, a outra não é alterada.

Esse comportamento de copiar um valor primitivo, o atribuindo a uma nova variável, é chamado de atribuição por valor e acontece somente com os tipos primitivos do JavaScript.

O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o seguinte exemplo:


```bash
let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);
```


Executando o código, teremos a frase “numero do parâmetro é 50. numeroOriginal é 10”. Ao chamar a função passando numeroOriginal como parâmetro, foi feita uma cópia de seu valor para ser utilizada como o parâmetro numero dentro da função. Dessa forma, mesmo alterando numero dentro da função, numeroOriginal permanece inalterado.

Mas como você viu, com arrays não funciona bem dessa forma, afinal, eles não são um tipo primitivo. Considere o exemplo utilizado no vídeo passado:


```bash
const notas = [7, 7, 8, 9];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
```


A partir do código const novasNotas = notas, o JavaScript entende que novasNotas e notas passam a ser o mesmo array, e agora eles apontam para o mesmo espaço na memória. Como estamos lidando com dados mais complexos, o JavaScript faz isso por padrão para otimizar memória e performance, em vez de realizar uma cópia do array em toda nova atribuição.

Uma atribuição de um array é chamada de atribuição por referência, pois nela é passada a referência do array em si, e não uma cópia de seu valor.

O mesmo comportamento ocorre quando trabalhamos com parâmetros de funções. Veja o código abaixo:


```bash
const arrayOriginal = [7, 7, 8, 9];

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray(arrayOriginal);
```


Executando o código, teremos essa saída:


```bash
array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9,10
```


Após passar arrayOriginal como parâmetro de alteraArray, o utilizamos como o parâmetro array. O código array.push(10) alterou ambos os arrays, assim como o que houve no exemplo que fizemos a atribuição. Ou seja, novamente, foi passada a referência do array em si, e não uma cópia dele.

De forma análoga à solução do vídeo, caso queiramos passar uma cópia do array e não sua referência, trocamos o código alteraArray(arrayOriginal) por alteraArray([...arrayOriginal]). Assim, a saída será:


```bash
array do parâmetro é 7,7,8,9,10
arrayOriginal é 7,7,8,9
```


### **Removendo Elementos Repetidos**


![image](https://github.com/FlavianaFXT/Curso-Javascript-Arrays/assets/113718720/4582aa7f-f016-4f3c-9c2c-e9732d06f477)


Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

```
Ana
Clara
Maria
Maria
João
João
João
```

Remova os nomes repetidos, deixando apenas um de cada.

Vou mostrar uma forma mais facilitada que o JS oferece com uma estrutura chamada Set, que em português significa "conjunto".
Para criar um novo Set vamos escrever const meuSet = new Set().

A palavra "new" em português significa "novo", é como se tivéssemos escrito "quero criar um novo Set".

Esse Set é uma classe do JavaScript, usaremos uma classe porque ela já vem com algumas lógicas internas.

O Set bem parecido com as listas que trabalhamos até agora, mas tem algumas regras a mais. Uma delas é que os elementos de um Set não podem se repetir. O que é ótimo para nos ajudar nesse desafio.

Para criar um Set com valores iniciais podemos passar uma lista dentro do parênteses de Set(). Vamos testar colocando alguns números e alguns deles reeptidos: "1, 1, 2, 3, 4, 4". e um console.log(meuSet) para vermos o que vai acontecer no meuSet.

Para finalizar, existe uma forma mais concisa de escrevermos esse código. Em vez de fazer [...meuSet] poderíamos colocar diretamente um new Set(nomes): [...new Set(nomes)] e apagar a linha em que declaramos o meuSet.


```bash
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
```


Usando o `[...new Set(nomes)]` fazemos duas coisas ao mesmo tempo: passamos os nomes como valor de entrada do Set e os espalhamos para um novo array.


### **Para saber mais: estrutura Set**


Você viu que a estrutura Set é muito semelhante aos arrays, mas possui diferentes métodos e a interessante regra de que seus elementos não podem se repetir. Utilizamos essa regra ao nosso favor para eliminar as duplicatas de um array, convertendo-o para um Set e de volta para um array.

Você pode explorar mais seus conhecimentos sobre o Set na - [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set).
