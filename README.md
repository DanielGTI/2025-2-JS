# 2025-2-JS

**Frontend JS – Programação de Interfaces (JavaScript para iniciantes)**

Repositório: [Aula 1 a 12](https://github.com/DanielGTI/2025-2-JS)

Este material reúne os exemplos das aulas (arquivos `01.html` a `60.html`) e serve como **guia de estudo para a prova prática de JavaScript**. Cada arquivo de exemplo tem comentários explicando o conceito, com exemplos extras e armadilhas comuns. Este README organiza tudo por tópicos e indica **qual arquivo mostrar cada assunto**.

> Como estudar: leia o tópico aqui, abra o arquivo indicado, **rode no navegador**, altere os valores e veja o que muda. Só ler não basta: a prova é prática.

---

## Sumário

1. [Requisitos e como executar](#1-requisitos-e-como-executar)
2. [Mapa das aulas](#2-mapa-das-aulas)
3. [Onde colocar o JavaScript](#3-onde-colocar-o-javascript)
4. [Saída de dados: como "mostrar" resultados](#4-saída-de-dados-como-mostrar-resultados)
5. [Variáveis e tipos de dados](#5-variáveis-e-tipos-de-dados)
6. [Conversão de tipos e concatenação](#6-conversão-de-tipos-e-concatenação)
7. [Operadores](#7-operadores)
8. [Estruturas condicionais](#8-estruturas-condicionais)
9. [Estruturas de repetição](#9-estruturas-de-repetição)
10. [Arrays (vetores)](#10-arrays-vetores)
11. [Funções e recursão](#11-funções-e-recursão)
12. [Objetos](#12-objetos)
13. [Objetos nativos: Date, String e Math](#13-objetos-nativos-date-string-e-math)
14. [DOM e eventos](#14-dom-e-eventos)
15. [Selecionando elementos: querySelector](#15-selecionando-elementos-queryselector)
16. [O objeto window](#16-o-objeto-window)
17. [JSON, AJAX e fetch](#17-json-ajax-e-fetch)
18. [Formulários: projeto de cadastro de clientes](#18-formulários-projeto-de-cadastro-de-clientes)
19. [Orientação a objetos com protótipos](#19-orientação-a-objetos-com-protótipos)
20. [Armadilhas clássicas (o que mais derruba na prova)](#20-armadilhas-clássicas-o-que-mais-derruba-na-prova)
21. [Preparação para a prova prática](#21-preparação-para-a-prova-prática)
22. [Exercícios de treino com gabarito](#22-exercícios-de-treino-com-gabarito)
23. [Erros conhecidos nos exemplos das aulas](#23-erros-conhecidos-nos-exemplos-das-aulas)
24. [Cola rápida (cheat sheet)](#24-cola-rápida-cheat-sheet)

---

## 1. Requisitos e como executar

Você pode estudar de **duas formas**. Escolha a que preferir (ou use as duas):

### Opção A: VSCode (instalado no computador, recomendado)

- VSCode 1.105 (Link: [download](https://code.visualstudio.com/))
- vscode-preview-server (extensão do VSCode)

**Como abrir os exemplos**

1. Abra a pasta do projeto no VSCode.
2. Clique com o botão direito no arquivo `.html` e use o servidor de preview da extensão (o arquivo `.vscode/settings.json` define qual página abre por padrão).
3. Abra o **console do navegador** com `F12` (aba *Console*). Vários exemplos (`59.html`, `60.html`) mostram o resultado com `console.log`, e é lá que aparecem os **erros** do seu código (texto em vermelho).

> **Importante:** os exemplos de AJAX (`54.html` a `57.html`) leem arquivos (`.txt`, `.json`) e **só funcionam por um servidor** (o preview do VSCode). Abrir o arquivo com duplo clique (`file://`) faz o navegador bloquear a leitura.

### Opção B: editor online [OneCompiler](https://onecompiler.com) (sem instalar nada)

Útil para estudar em qualquer computador (ou celular) só com o navegador.

1. Acesse [onecompiler.com](https://onecompiler.com) e escolha a linguagem **HTML** (editor com visualização da página ao lado) ou **JavaScript**.
2. No modo **HTML**, cole o conteúdo de um arquivo de exemplo (por exemplo `19.html`) e execute: a página aparece no painel de resultado. Serve para quase todos os exemplos (`document.write`, DOM, eventos, `alert`).
3. No modo **JavaScript** (roda no Node.js, sem página), só funciona o que é lógica pura e `console.log`: troque os `document.write(...)` por `console.log(...)`. **Não existem** `document`, `window` nem `alert` nesse modo.
4. Os exemplos que dependem de **imagens e arquivos do projeto** (`43.html` a `45.html`, `54.html` a `57.html`) não funcionam colando só o HTML, pois `bau_aberto.png`, `json_dados.json` etc. não estão lá. Para estes, use o VSCode (Opção A) ou, no caso de AJAX/`fetch`, aponte para uma URL pública (como a API do ViaCEP em `36.html`).

> **Dica:** na prova, confirme com o professor qual editor é permitido. Treine no ambiente em que você vai fazer a prova.

---

## 2. Mapa das aulas

| Tema | Arquivos | Aula |
|---|---|---|
| Primeiro contato, operações básicas | `01.html` | 1 |
| Onde colocar o JS (head, body, externo, URL) | `02.html` a `08.html`, `js/exemplos_1.js` | 2 |
| Variáveis, tipos, conversão | `09.html` a `14.html` | 3 |
| Operadores | `15.html` a `18.html` | 4 |
| Condicionais (`if`, `switch`) | `19.html` a `23.html` | 5 |
| Repetição (`while`, `do...while`, `for`) | `24.html` a `29.html`, `27-1.html` | 6 |
| Arrays e funções | `30.html` a `34.html` | 7 |
| Recursão | `35.html` | 8 |
| Consumo de API (CEP) com `fetch` | `36.html` | – |
| Objetos | `37.html`, `38.html` | 10 |
| `Date`, `String`, `Math` | `39.html` a `42.html` | 11 |
| DOM e eventos | `43.html` a `49.html` | – |
| `querySelector` | `50.html`, `51.html` | – |
| Objeto `window` | `52.html`, `53.html` | – |
| AJAX e JSON | `54.html`, `55.html` | – |
| Formulário + AJAX (projeto) | `56.html`, `57.html`, `58.html` | – |
| POO com protótipos e herança | `59.html`, `60.html` | – |

Arquivos de apoio: `ajax_dados.txt`, `json_dados.json`, `dados_cliente.json` (dados lidos via AJAX), `bau_aberto.png`, `bau_fechado.png`, `pergunta.png` (imagens) e `teste.html` (modelo em branco para você testar).

---

## 3. Onde colocar o JavaScript

*Arquivos: `02.html`, `03.html`, `04.html`, `05.html`, `06.html`, `07.html`, `08.html`, `js/exemplos_1.js`*

Há **4 formas** de usar JS numa página:

| Forma | Como | Exemplo |
|---|---|---|
| No `<head>` | `<script>` dentro de `<head>` | `02.html`, `04.html` |
| No final do `<body>` | `<script>` depois dos elementos | `03.html`, `05.html` |
| Arquivo externo local | `<script src="js/arquivo.js"></script>` | `06.html` |
| Arquivo externo por URL | `<script src="https://site.com/arquivo.js"></script>` | `07.html` |

```html
<script>
    alert("Olá, mundo!");   // roda quando o navegador lê esta linha
</script>
```

**O que lembrar**

- O navegador lê a página **de cima para baixo**. Um script no `<head>` roda **antes** de os elementos do `<body>` existirem; por isso, para mexer em elementos, coloque o script **no final do `<body>`** ou chame uma função só depois de um evento (clique, por exemplo). Compare `04.html` (funções no head chamadas por botão: funciona) com um `document.getElementById(...)` solto no head (retorna `null`).
- Funções declaradas no `<head>` podem ser chamadas pelo `onclick` do botão, porque quando o clique acontece a página já carregou.
- Arquivo externo: o JS fica em um `.js` **sem as tags `<script>`**. Vantagem: reaproveitar em várias páginas. Cuidado com o **caminho** do `src`: o nome precisa ser exatamente o do arquivo (`js/exemplos_1.js` em `06.html`). Um caractere a mais (por exemplo `exemplos_1.1.js`) dá erro 404 no console e a função não carrega. O `07.html` faz o mesmo por **URL**: busca o mesmo arquivo na internet (via CDN jsDelivr), então precisa de conexão.

---

## 4. Saída de dados: como "mostrar" resultados

*Arquivos: `01.html`, `02.html`, `08.html`, `59.html`, `04.html`*

| Comando | O que faz | Quando usar |
|---|---|---|
| `alert("texto")` | Caixa de mensagem (bloqueia a página até clicar em OK) | Avisos rápidos |
| `document.write("texto")` | Escreve na página | Exercícios simples das primeiras aulas |
| `console.log(valor)` | Escreve no console (`F12`) | **Depurar** (testar valores) |
| `elemento.innerHTML = "texto"` | Troca o conteúdo de um elemento da página | Telas reais (DOM) |

```js
document.write("Soma = " + (2 + 3) + "<br>");   // "<br>" quebra a linha em HTML
console.log("Soma =", 2 + 3);                    // aparece no console
```

> `document.write` aceita tags HTML (`<br>`, `<b>`, `<table>`...). Ele serve para treinar lógica; em páginas reais prefira `innerHTML`/`textContent` (veja [DOM](#14-dom-e-eventos)). Depois que a página termina de carregar, um `document.write` **apaga a página inteira**.

---

## 5. Variáveis e tipos de dados

*Arquivos: `09.html`, `10.html`, `11.html`*

Uma variável é uma "caixa" com nome que guarda um valor.

```js
var nome = "Javascript";   // string (texto)
var valor = 10.50;         // number (decimal)
var idade = 20;            // number (inteiro): JS não separa int e float
var verificado = true;     // boolean (true ou false)
const profissao = "Piloto";// constante: não pode receber outro valor
```

**Tipos principais:** `string`, `number`, `boolean`, `object` (inclui arrays e `null`), `undefined`. Use `typeof` para descobrir: `typeof 10` → `"number"`, `typeof "oi"` → `"string"`.

**`var`, `let` e `const`**

| | Pode reatribuir? | Escopo | Observação |
|---|---|---|---|
| `var` | sim | função | Forma clássica (usada nas aulas) |
| `let` | sim | bloco `{ }` | Forma moderna, recomendada |
| `const` | **não** | bloco `{ }` | Para valores que não mudam |

**Regras de nomes:** começam com letra, `_` ou `$`; não podem ter espaço; **maiúscula é diferente de minúscula** (`Nome` ≠ `nome`).

**Concatenar texto com `+`** (`11.html`):

```js
var nome = "Ayrton", sobrenome = "Senna";
nome + sobrenome          // "AyrtonSenna"  (faltou o espaço!)
nome + " " + sobrenome    // "Ayrton Senna"
`Piloto: ${nome} ${sobrenome}`   // template literal (crase): forma moderna
```

---

## 6. Conversão de tipos e concatenação

*Arquivos: `12.html`, `13.html`, `17.html`*

Esta é a **fonte de erros nº 1**. O operador `+` **soma** números, mas **concatena** se um dos lados for texto.

```js
5 + 3          // 8
"5" + 3        // "53"   (texto!)
"5" - 3        // 2      (o "-" só sabe subtrair: converte para número)
```

**A ordem importa** (`13.html`), pois a expressão é lida da esquerda para a direita:

```js
var a = "5";
a + 1 + 2        // "512"  ("5"+1 vira "51", depois "51"+2 vira "512")
a + (1 + 2)      // "53"   (parênteses: 1+2 = 3 primeiro)
parseInt(a) + (1 + 2)   // 8
```

**Funções de conversão** (`12.html`):

| Função | Exemplo | Resultado |
|---|---|---|
| `parseInt("30.50 por mouse")` | lê o inteiro do início | `30` |
| `parseFloat("30.50 por mouse")` | lê o decimal do início | `30.5` |
| `parseInt("Mouse R$ 30")` | começa com letra | `NaN` (*Not a Number*) |
| `Number("12")` | converte o texto todo | `12` |
| `Number("12abc")` | texto inválido | `NaN` |
| `String(12)` ou `12 + ""` | número para texto | `"12"` |

> **Regra de ouro:** tudo que vem de uma caixa de texto (`input.value`) é **string**. Converta antes de calcular: `parseFloat(document.getElementById("preco").value)`.

`NaN` é contagioso: `NaN + 5` → `NaN`. Teste com `isNaN(valor)`.

---

## 7. Operadores

*Arquivos: `01.html`, `14.html`, `15.html`, `16.html`, `17.html`, `18.html`*

### 7.1 Aritméticos (`15.html`, `01.html`)

| Operador | Significado | Exemplo | Resultado |
|---|---|---|---|
| `+` | soma | `10 + 20` | `30` |
| `-` | subtração | `10 - 20` | `-10` |
| `*` | multiplicação | `10 * 20` | `200` |
| `/` | divisão | `10 / 20` | `0.5` |
| `%` | **resto** da divisão | `7 % 3` | `1` |

- Precedência igual à matemática: `*`, `/`, `%` antes de `+`, `-`; use **parênteses** para mandar em você: `(b*a)/(a+c)` (`01.html`).
- Aplicação (`14.html`): salário com 15% de comissão: `3000 + (10000.50 * 0.15)`.
- Divisão por zero **não dá erro**: `10 / 0` → `Infinity`.
- Decimais têm imprecisão: `0.1 + 0.2` → `0.30000000000000004`. Para exibir: `valor.toFixed(2)`.

### 7.2 Atribuição (`16.html`, `17.html`)

| Forma curta | Equivale a |
|---|---|
| `a += b` | `a = a + b` |
| `a -= b` | `a = a - b` |
| `a *= b` | `a = a * b` |
| `a /= b` | `a = a / b` |
| `a %= b` | `a = a % b` |

`a += "dia"` com texto **concatena** (`17.html`).

### 7.3 Incremento e decremento (`18.html`)

```js
var a = 5;
a++;     // a vale 6   (pós-incremento: usa o valor e depois soma 1)
++a;     // a vale 7   (pré-incremento: soma 1 e depois usa o valor)

var x = 5;
console.log(x++);   // mostra 5, depois x vale 6
console.log(++x);   // x vira 7, mostra 7
```

### 7.4 Par ou ímpar com `%` (`18.html`)

```js
n % 2 == 0   // verdadeiro se n é par
n % 2 == 1   // verdadeiro se n é ímpar (positivo)
n % 5 == 0   // verdadeiro se n é múltiplo de 5
```

### 7.5 Comparação e lógicos (`19.html`, `21.html`)

| Operador | Significado |
|---|---|
| `==` / `!=` | igual / diferente (**converte tipos**: `"5" == 5` é `true`) |
| `===` / `!==` | igual / diferente **sem converter tipos** (`"5" === 5` é `false`); **prefira este** |
| `>` `<` `>=` `<=` | maior, menor, maior ou igual, menor ou igual |
| `&&` | **E**: os dois lados verdadeiros |
| `\|\|` | **OU**: pelo menos um verdadeiro |
| `!` | **NÃO**: inverte |

**Precedência:** `&&` é resolvido **antes** de `||`. Em `21.html`:

```js
(a < b) && (c + d > 0) || (c % 2 == 0)
// = ((a < b) && (c + d > 0)) || (c % 2 == 0)
// com a=1, b=5, c=3, d=1:  (true && true) || false  →  true
```

---

## 8. Estruturas condicionais

*Arquivos: `19.html`, `20.html`, `21.html`, `22.html`, `23.html`*

### `if / else` (`19.html`)

```js
var x = 5;
if (x >= 0 && x <= 10) {
    // executa se a condição for verdadeira
} else {
    // executa se for falsa
}
```

### `if` aninhado / `else if` (`20.html`, `22.html`)

Para **mais de dois caminhos**:

```js
if (x > 0)        { document.write("positivo"); }
else if (x < 0)   { document.write("negativo"); }
else              { document.write("nulo"); }     // x == 0
```

(`20.html` com `x = 0` mostra "NULO"; `22.html` com `x = 5` mostra "positivo". Mesmo código, entradas diferentes: **teste sempre os casos limite**.)

### `switch` (`23.html`)

Bom quando você compara **uma variável com valores exatos**:

```js
switch (x) {
    case 1: document.write("DOMINGO"); break;
    case 5: document.write("QUINTA");  break;
    default: document.write("Dia inválido!");   // nenhum case serviu
}
```

> **Sem `break`**, a execução "cai" para o próximo `case` (efeito *fall-through*). Esquecer o `break` é erro clássico.

### Operador ternário (`27-1.html`)

Atalho para `if/else` que **devolve um valor**:

```js
var classe = (x % 2 === 0) ? "amarelo" : "verde";
//            condição         se true    se false
```

---

## 9. Estruturas de repetição

*Arquivos: `24.html`, `25.html`, `26.html`, `27.html`, `27-1.html`, `28.html`, `29.html`*

Todo laço tem **3 partes**: valor inicial, condição de continuação, e a **atualização** (se esquecer, vira laço infinito e trava a aba).

| Laço | Quando usar | Arquivo |
|---|---|---|
| `while` | Não sei quantas voltas; testa **antes** | `24.html`, `25.html` |
| `do...while` | Precisa rodar **pelo menos uma vez**; testa **depois** | `26.html` |
| `for` | Sei o início, o fim e o passo | `27.html`, `28.html` |

```js
// while: contagem de 1 a 10
var x = 1;
while (x <= 10) { document.write(x + " "); x++; }

// do...while: roda 1 vez mesmo com a condição falsa (26.html mostra 11)
var y = 11;
do { document.write(y + " "); y++; } while (y <= 10);

// for: inicialização; condição; atualização
for (var i = 1; i <= 10; i++) { document.write(i + " "); }
for (var i = 10; i > 0; i--)  { document.write(i + " "); }   // regressivo
```

**Padrões que aparecem em prova**

```js
// Soma acumulada
var soma = 0;
for (var i = 1; i <= 5; i++) { soma += i; }      // 15

// Filtrar com if dentro do laço (28.html: múltiplos de 2 e de 5 = múltiplos de 10)
for (var x = 1; x <= 50; x++) {
    if (x % 2 == 0 && x % 5 == 0) { /* destaca */ }
}
```

**Laços aninhados** (`29.html`): o laço de fora percorre **linhas**, o de dentro percorre **colunas**. Em cada linha, o de dentro faz *todas* as suas voltas.

```js
for (var L = 1; L <= 3; L++) {
    for (var C = 1; C <= 5; C++) { document.write("X"); }
    document.write("<br>");   // fim da linha
}
```

Em `29.html` esse esquema desenha uma **pirâmide** de X: um `if` dentro do laço de colunas decide entre "X" e espaço (`(C >= N - L + 1) && (C <= N + L - 1)`). Troque `N` para ver a figura crescer.

**Gerando HTML com laço** (`27-1.html`): monta uma `<table>` com linhas alternadas de cor, usando classes CSS e o operador ternário. Uma ótima receita para a prova: *laço + `document.write` de `<tr>`/`<td>`*.

---

## 10. Arrays (vetores)

*Arquivos: `30.html`, `31.html`, `32.html`, `33.html`*

Array é uma lista ordenada; as posições (**índices**) começam em **0**.

```js
var x1 = [1, 2, 3, 4, 5];            // forma recomendada
var x2 = new Array(1, 2, 3, 4, 5);   // equivalente
x1[0]          // 1 (primeiro)
x1[4]          // 5 (último)
x1.length      // 5
x1[x1.length - 1]   // último elemento, sempre
```

**Preencher e percorrer** (`31.html`, `32.html`):

```js
var x = [];
for (var i = 0; i < 10; i++) { x[i] = i + 1; }          // preenche
for (var i = 0; i < x.length; i++) { console.log(x[i]); }   // percorre (use length!)
```

**Métodos principais** (`33.html`)

| Método | O que faz | Modifica o array? |
|---|---|---|
| `push(v)` | adiciona no **final** | sim |
| `pop()` | remove do **final** | sim |
| `unshift(v)` | adiciona no **início** | sim |
| `shift()` | remove do **início** | sim |
| `slice(i, f)` | copia do índice `i` até **antes** de `f` | não |
| `join(" - ")` | junta tudo em um texto | não |
| `concat(...)` | junta arrays/valores | não (devolve novo) |
| `sort()` | ordena | **sim** |
| `reverse()` | inverte a ordem | **sim** |
| `indexOf(v)` | posição de `v` (ou `-1`) | não |

```js
var dias = ["Seg", "Ter", "Qua"];
dias.push("Qui");        // ["Seg","Ter","Qua","Qui"]
dias.shift();            // ["Ter","Qua","Qui"]
dias.slice(1, 3);        // ["Qua","Qui"]   (índices 1 e 2)
dias.join(" - ");        // "Ter - Qua - Qui"
```

> **Armadilha:** `sort()` ordena como **texto**. `[10, 9, 1, 100].sort()` → `[1, 10, 100, 9]`. Para números: `arr.sort(function(a, b){ return a - b; })` (crescente).

**Formas modernas** (bom conhecer): `arr.forEach(...)`, `arr.map(...)`, `arr.filter(...)`, `arr.includes(v)`, `for (var v of arr)`.

---

## 11. Funções e recursão

*Arquivos: `34.html`, `35.html`*

Função = bloco de código com **nome**, que você chama quantas vezes quiser. Recebe **parâmetros** e pode **devolver** um valor com `return`.

```js
function somar(a, b) {      // a e b: parâmetros
    return a + b;           // return devolve e encerra a função
}
var r = somar(2, 8);        // 2 e 8: argumentos → r vale 10
```

Exemplos do `34.html`: `dobro(x)`, `somar(a, b)`, `nPar(n)` (devolve `true`/`false`), `somaIntervalo(x, y)` (usa `for` com acumulador).

**Dica:** uma função que só calcula e devolve (`return`) é mais reutilizável do que uma que escreve na tela. Quem chama decide o que fazer com o resultado.

> `return` sem chamar nada não faz nada: precisa **chamar** a função (`somar(2, 8)`) e **usar** o resultado.

**Recursão** (`35.html`): a função **chama a si mesma**. Precisa de:

1. **Caso base**: quando parar (`n == 0` ou `n == 1`).
2. **Passo recursivo**: reduzir o problema (`n - 1`).

```js
function fatorial(n) {
    if (n == 0 || n == 1) return 1;      // caso base
    return n * fatorial(n - 1);          // passo recursivo
}
// fatorial(3) = 3 * fatorial(2)
//             = 3 * (2 * fatorial(1))
//             = 3 * (2 * 1) = 6
```

Sem caso base, a função chama a si mesma para sempre e o navegador gera erro de pilha (*Maximum call stack size exceeded*).

**Escopo:** variável criada **dentro** da função (com `var`/`let`) só existe ali.

---

## 12. Objetos

*Arquivos: `37.html`, `38.html`*

Objeto agrupa **propriedades** (dados) e **métodos** (funções) de uma "coisa": um carro, um aluno, um cliente.

```js
var carro = {
    modelo: "Camaro",
    cor: "Amarelo",
    preco: 200000,
    modeloMarca: function () {           // método
        return this.modelo + " da marca " + this.marca;
    }
};
carro.cor             // "Amarelo"   (notação de ponto)
carro["cor"]          // "Amarelo"   (notação de colchetes)
carro.preco = 190000; // altera
carro.ano = 2024;     // cria nova propriedade
carro.modeloMarca();  // chamar método usa parênteses
```

- `this` dentro de um método = **o próprio objeto** que chamou (`38.html`).
- O formato `{ chave: valor, ... }` é a base do **JSON** (seção 17).
- Objetos dentro de arrays são muito comuns: `[{nome:"Ana"}, {nome:"Beto"}]`; acessar: `lista[0].nome`.

---

## 13. Objetos nativos: Date, String e Math

*Arquivos: `39.html`, `40.html`, `41.html`, `42.html`*

### Date (`39.html`, `40.html`)

```js
var hoje = new Date();                        // data e hora de agora
var fim  = new Date(2017, 11, 31, 23, 59, 59, 999);   // ano, mês, dia, h, min, s, ms
fim.getTime()          // milissegundos desde 1970 → permite subtrair datas
(fim.getTime() - hoje.getTime()) / 1000       // diferença em segundos
```

- **Meses começam em 0**: janeiro = `0`, dezembro = `11`.
- `getDay()` → dia da semana: `0` = domingo ... `6` = sábado.
- Outros: `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`.
- Conversões: dias = segundos / 60 / 60 / 24. Em `39.html` e `40.html` o ano vem de `hoje.getFullYear()`, então o cálculo é sempre "quanto falta para o fim do ano atual". Se você usar uma data que **já passou** (ex.: 2017), o resultado fica **negativo**.

### String (`41.html`)

| Método | Exemplo (`"Olá Mundo"`) | Resultado |
|---|---|---|
| `length` | `.length` | `9` |
| `toUpperCase()` / `toLowerCase()` | `.toUpperCase()` | `"OLÁ MUNDO"` |
| `indexOf("M")` | posição da 1ª ocorrência (`-1` se não achar) | `4` |
| `lastIndexOf("o")` | posição da última ocorrência | `8` |
| `slice(0, 3)` | do índice 0 até antes do 3 | `"Olá"` |
| `replace("Mundo", "JS")` | troca a **primeira** ocorrência | `"Olá JS"` |
| `replace(/o/g, "0")` | com `/g`, troca **todas** | `"Olá Mund0"` |

Aspas dentro de texto: escape com `\"` (`41.html`) ou misture `'` e `"`.

### Math (`42.html`)

| Função | Resultado |
|---|---|
| `Math.PI` | `3.14159...` |
| `Math.round(3.6)` | `4` (arredonda normal) |
| `Math.ceil(4.3)` | `5` (sempre para cima) |
| `Math.floor(4.8)` | `4` (sempre para baixo) |
| `Math.pow(3, 2)` | `9` |
| `Math.sqrt(9)` | `3` |
| `Math.abs(-56)` | `56` |
| `Math.min(2, 8, 1)` / `Math.max(...)` | `1` / `8` |
| `Math.random()` | real entre 0 e menor que 1 |

```js
Math.floor(Math.random() * 10) + 1     // inteiro de 1 a 10
Math.floor(Math.random() * 6) + 1      // dado de 6 lados
```

---

## 14. DOM e eventos

*Arquivos: `04.html`, `05.html`, `43.html` a `49.html`, `58.html`*

**DOM** (*Document Object Model*) é a página representada como objetos. Com JS você **encontra** um elemento e **altera** seu conteúdo, seus atributos ou seu estilo.

### Encontrar e alterar

```js
var el = document.getElementById("demo");   // acha pelo atributo id
el.innerHTML = "Alterado.";                  // troca o conteúdo (aceita HTML)
el.textContent = "Texto puro";               // troca só o texto (mais seguro)
img.src = "bau_aberto.png";                  // troca um atributo (43.html)
el.style.backgroundColor = "yellow";         // muda o CSS (48.html)
el.style.borderWidth = 20 + "px";            // número + unidade! (58.html)
```

- CSS em JS usa **camelCase**: `background-color` → `backgroundColor`; `font-size` → `fontSize`.
- Valores com unidade precisam de texto: `"20px"`.
- Campos de formulário: use `.value` (`input`, `select`, `textarea`) e lembre que é **string**.
- `getElementById` devolve `null` se o `id` não existe ou o script rodou antes do elemento existir → erro *Cannot set properties of null*.

### Eventos

Evento = algo que acontece (clique, mouse, foco...). Você liga uma função ao evento:

| Atributo | Quando dispara | Arquivo |
|---|---|---|
| `onclick` | clique | `04.html`, `05.html`, `45.html`, `50.html` |
| `onmouseover` / `onmouseout` | mouse entra / sai | `43.html`, `44.html` |
| `onmousedown` / `onmouseup` | botão do mouse pressionado / solto | `46.html` |
| `onfocus` | campo recebe o cursor | `47.html`, `48.html` |
| `onchange` | valor de um `select`/`input` mudou | `49.html` |
| `onload` (no `<body>`) | página terminou de carregar | `46.html` a `48.html` |

```html
<p id="msg">Início</p>
<button onclick="mudar()">Clique</button>
<script>
    function mudar() {
        document.getElementById("msg").innerHTML = "Alterado!";
    }
</script>
```

**O que cada arquivo ensina**

- `04.html`/`05.html`: botão que troca o texto de um parágrafo (JS no head e no body).
- `43.html`: efeito *hover*: passa o mouse → baú abre; tira → fecha.
- `44.html`: **uma só função** com **parâmetro** (`alterar_Bau(1)` abre, qualquer outro valor fecha).
- `45.html`: **variável de estado** (`magica`): após o clique o baú some e os outros eventos deixam de ter efeito. Estado = variável global que lembra o que já aconteceu.
- `46.html`–`48.html`: vários eventos; `48.html` usa uma **flag** (`aviso`) para o `alert` aparecer **uma vez só**, e muda a cor de fundo de outro campo.
- `49.html`: `select` + `onchange` + `.value` → mostra a opção escolhida.
- `58.html`: mudar a borda da imagem passando um **valor** para a função (`alterarBordas(20)`).

**Forma moderna** (recomendada fora da sala de aula): separar o HTML do JS.

```js
document.getElementById("botao").addEventListener("click", function () {
    alert("Clicou!");
});
```

---

## 15. Selecionando elementos: querySelector

*Arquivos: `50.html`, `51.html`*

| Método | Devolve |
|---|---|
| `document.querySelector("seletor")` | **o primeiro** elemento que combina |
| `document.querySelectorAll("seletor")` | **lista** com todos que combinam |

O seletor é o mesmo do CSS: `"p"` (tag), `"#id"`, `".classe"`, `"div p"`.

```js
document.querySelector("p").style.backgroundColor = "green";   // só o 1º <p> (50.html)

var itens = document.querySelectorAll("p");     // todos os <p> (51.html)
for (var i = 0; i < itens.length; i++) {        // use i < length
    itens[i].style.backgroundColor = (i % 2 == 0) ? "green" : "blue";   // alterna
}
```

- Para **limpar** um estilo, atribua texto vazio: `style.backgroundColor = ""`.
- Armadilha clássica (`51.html`): escrever `for (var i = 0; x.length; i++)` (sem o `i <`). Como `x.length` é sempre verdadeiro, o laço passa do último item e gera `TypeError` no console. O correto é `i < x.length`.

---

## 16. O objeto window

*Arquivos: `52.html`, `53.html`*

`window` representa a janela do navegador.

| Comando | O que faz |
|---|---|
| `window.innerWidth` / `window.innerHeight` | largura / altura da área visível |
| `window.print()` | abre a caixa de impressão |
| `history.back()` | volta à página anterior (como o botão "voltar") |
| `window.open(url, nome, recursos)` | abre nova janela/guia |

```js
window.open("http://uninove.br/", "UNINOVE", "menubar=no,location=no,resizable=no");
```

Os navegadores podem **bloquear pop-ups** abertos sem clique do usuário (por isso o `window.open` está dentro de um botão).

---

## 17. JSON, AJAX e fetch

*Arquivos: `54.html`, `55.html`, `36.html` (+ `ajax_dados.txt`, `json_dados.json`)*

### 17.1 JSON

Formato de texto para trocar dados. Parece um objeto JS, mas **as chaves ficam entre aspas duplas** e não aceita comentários. (`json_dados.json`)

```json
{
  "filme": [
    { "titulo": "Filme 1", "ano": "2015", "genero": "Terror" },
    { "titulo": "Filme 2", "ano": "2016", "genero": "Comédia" }
  ]
}
```

- `JSON.parse(texto)` → transforma o **texto** em **objeto JS**.
- `JSON.stringify(objeto)` → faz o caminho inverso.
- Acesso: `dados.filme[0].titulo` → `"Filme 1"`; `dados.filme.length` → `2`.

### 17.2 AJAX com XMLHttpRequest (`54.html`, `55.html`)

AJAX = buscar dados no servidor **sem recarregar a página**. É **assíncrono**: o código não espera a resposta; ele avisa quando chegou.

```js
var ajax = new XMLHttpRequest();                 // 1. cria o objeto
ajax.onreadystatechange = function () {          // 2. diz o que fazer quando mudar o estado
    if (this.readyState == 4 && this.status == 200) {   // 4 = concluído, 200 = OK
        document.getElementById("retorno").innerHTML = this.responseText;
    }
};
ajax.open("GET", "ajax_dados.txt", true);        // 3. método, arquivo, assíncrono
ajax.send();                                     // 4. envia
```

- `54.html`: lê um **texto** (`ajax_dados.txt`) e exibe como veio.
- `55.html`: lê um **JSON**, converte com `JSON.parse` e percorre o array montando HTML:

```js
var obj = JSON.parse(this.responseText);
for (var i in obj.filme) {     // for...in percorre os ÍNDICES (0, 1, 2...)
    valor += obj.filme[i].titulo + " (" + obj.filme[i].ano + ")<br>";
}
```

- `status`: `200` ok, `404` não encontrado, `500` erro no servidor.

### 17.3 Forma moderna: `fetch` + `async/await` (`36.html`)

`36.html` consulta a **API ViaCEP**: o usuário digita o CEP e o JS busca o endereço.

```js
async function buscarCEP() {
    var cep = document.getElementById("cep").value.replace(/\D/g, "");  // só dígitos
    if (cep.length !== 8) { /* mensagem de erro */ return; }            // validação
    try {
        var resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
        var dados = await resposta.json();                               // já converte o JSON
        if (dados.erro) { /* CEP não existe */ }
        else { /* mostra dados.logradouro, dados.bairro, dados.localidade, dados.uf */ }
    } catch (erro) {
        console.error(erro);                 // falha de rede
    }
}
```

| Peça | Para que serve |
|---|---|
| `async` | marca a função como assíncrona (permite `await`) |
| `await` | "espera" o resultado da requisição sem travar a página |
| `fetch(url)` | faz a requisição (devolve uma *Promise*) |
| `resposta.json()` | converte o corpo em objeto (substitui o `JSON.parse`) |
| `try / catch` | trata erros (internet caiu, API fora do ar) |
| `/\D/g` | expressão regular: `\D` = "não dígito", `g` = todas as ocorrências |
| `` `...${var}...` `` | *template literal*: texto com variáveis embutidas |

> Todo código AJAX tem o **mesmo roteiro**: (1) pedir os dados, (2) esperar a resposta, (3) converter (JSON), (4) **usar** os dados na tela. O código que **usa** os dados precisa ficar **dentro** do callback (ou depois do `await`).

---

## 18. Formulários: projeto de cadastro de clientes

*Arquivos: `56.html`, `57.html`, `dados_cliente.json`*

Junta tudo: **formulário + eventos + DOM + AJAX + JSON**. Digita-se um nome, clica-se na imagem de interrogação (`pergunta.png`) e o JS busca o cliente em `dados_cliente.json` e **preenche os outros campos**.

Fluxo da função `procurarCliente()`:

1. Cria o `XMLHttpRequest` e pede `dados_cliente.json`.
2. Ao terminar (`readyState == 4` e `status == 200`), converte com `JSON.parse`.
3. Percorre `myObj.cliente` comparando `nome` com o texto digitado.
4. Se achou: `document.getElementById("idCPF").value = ...` (e assim para endereço, CEP, bairro, e-mail) e `idPlano.focus()` leva o cursor ao campo seguinte.
5. Se não achou: `alert("Cliente não encontrado!")`.

```js
document.getElementById("idCPF").value = cliente.cpf;   // escreve no campo
var nome = document.getElementById("idNome").value;     // lê do campo
```

- `56.html`: HTML puro (sem estilo), para ver só a lógica.
- `57.html`: o **mesmo** script com **Bootstrap 3** (classes `col-md-*`, `form-group`, `form-control`, `btn btn-primary`) para um visual profissional e `required` nos campos.
- Atributos úteis de formulário: `id` (para o JS), `name`, `type="email"`, `placeholder`, `required`, `<select>` com `<option value="...">`.

---

## 19. Orientação a objetos com protótipos

*Arquivos: `59.html`, `60.html`*

### 19.1 Classe clássica: função construtora (`59.html`)

Quando você precisa de **vários objetos do mesmo tipo** (vários carros, vários alunos), cria-se um "molde":

```js
function Carro(cor, ano, portas, modelo) {   // função construtora (nome com maiúscula)
    this.cor = cor;                          // this = o objeto que está sendo criado
    this.ano = ano;
    this.portas = portas;
    this.modelo = modelo;
    this.velocidadeAtual = 0;
    this.ligado = false;
}

// Métodos no prototype: compartilhados por todos os carros (economiza memória)
Carro.prototype.acelerar = function () {
    this.velocidadeAtual += 10;
};

var veiculo1 = new Carro("preto", 2017, 5, "SUV");   // new cria o objeto
veiculo1.acelerar();
console.log(veiculo1.velocidadeAtual);               // 10
```

**Sem `new`, o `this` aponta para o lugar errado!** Sempre use `new` com construtoras.

Em `59.html` o objeto guarda **estado** (ligado, velocidadeAtual) e os métodos (`passear`, `parar`, `estacionar`, `acelerar`, `informacao`) **mudam esse estado**. Acompanhe os `console.log` no `F12`.

### 19.2 Herança (`60.html`)

`Aluno` e `Funcionario` **herdam** de `Pessoa` (um aluno **é uma** pessoa):

```js
function Pessoa(nome, idade) { this.nome = nome; this.idade = idade; }

function Aluno(nome, idade, ra, curso) {
    Pessoa.call(this, nome, idade);     // reaproveita o construtor do "pai"
    this.ra = ra;
    this.curso = curso;
}
Aluno.prototype = Object.create(Pessoa.prototype);   // liga a herança (forma recomendada)
Aluno.prototype.constructor = Aluno;
```

| Conceito | Onde ver em `60.html` |
|---|---|
| **Herança** | `Aluno` e `Funcionario` herdam de `Pessoa` |
| **Encapsulamento por métodos** | `getNome`, `setIdade`... (ler/alterar via métodos) |
| **Sobrescrita (override)** | `Aluno.prototype.exibirDados` refaz o método do pai e usa `Pessoa.prototype.exibirDados.call(this)` para reaproveitá-lo |
| **Polimorfismo** | o laço chama `exibirDados()` em cada pessoa, e cada tipo responde do seu jeito |
| **`for...of`** | percorre os **valores** do array (diferente do `for...in`, que dá os índices) |
| **`constructor.name`** | descobre o "tipo" do objeto (`"Aluno"`) |

**Forma moderna equivalente (ES6, a mesma coisa com sintaxe mais clara):**

```js
class Pessoa {
    constructor(nome, idade) { this.nome = nome; this.idade = idade; }
    exibirDados() { return `Nome = ${this.nome}, idade = ${this.idade}`; }
}
class Aluno extends Pessoa {
    constructor(nome, idade, ra) { super(nome, idade); this.ra = ra; }
    exibirDados() { return super.exibirDados() + `, RA = ${this.ra}`; }
}
var a = new Aluno("Pedro", 19, "123456");
```

---

## 20. Armadilhas clássicas (o que mais derruba na prova)

| # | Erro | Exemplo | Correto |
|---|---|---|---|
| 1 | Somar texto em vez de número | `"5" + 1` → `"51"` | `parseInt("5") + 1` → `6` |
| 2 | Valor de `input` é texto | `idA.value + idB.value` → `"23"` | `parseFloat(a) + parseFloat(b)` |
| 3 | `=` no lugar de `==` / `===` | `if (x = 5)` atribui! | `if (x === 5)` |
| 4 | Índice começa em 0 | `arr[arr.length]` é `undefined` | `arr[arr.length - 1]` |
| 5 | Laço sem atualização | `while(x<10){...}` sem `x++` | sempre atualize o contador |
| 6 | Laço com `<=` e `length` | `for(i=0;i<=arr.length;i++)` | `i < arr.length` |
| 7 | `sort()` em números | `[10,9,1].sort()` → `[1,10,9]` | `sort(function(a,b){return a-b})` |
| 8 | Esquecer `break` no `switch` | executa o próximo `case` | `break;` em cada `case` |
| 9 | Maiúscula/minúscula | `getElementByID` | `getElementById` |
| 10 | `id` errado | `getElementById("nome")` com `id="Nome"` | mesmo texto exato |
| 11 | Script antes do elemento | `getElementById` → `null` | script no fim do `<body>` |
| 12 | Esquecer a **unidade** | `style.width = 20` (ignorado) | `style.width = "20px"` |
| 13 | Propriedade CSS com hífen | `style.background-color` | `style.backgroundColor` |
| 14 | Função declarada mas **não chamada** | `function f(){...}` | `f();` |
| 15 | Usar o resultado AJAX **fora** do callback | variável ainda vazia | usar **dentro** do `onreadystatechange` / depois do `await` |
| 16 | Esquecer `new` | `Carro("preto")` | `new Carro("preto")` |
| 17 | Mexer nos dados de um array achando que `slice` altera | `arr.slice(1)` não muda `arr` | atribua o resultado: `var c = arr.slice(1)` |
| 18 | Variável sem `var/let/const` | `x = 5` vira **global** sem querer | `var x = 5` |
| 19 | AJAX abrindo o arquivo com duplo clique | erro de CORS | usar servidor (preview do VSCode) |
| 20 | `parseInt("30.50")` esperando 30.5 | resulta em `30` | `parseFloat("30.50")` |

---

## 21. Preparação para a prova prática

### 21.1 Checklist: o que você precisa saber fazer **sem consulta**

- [ ] Criar uma página HTML5 com `<script>` (no fim do `<body>`) ou com arquivo externo.
- [ ] Declarar variáveis e usar `+ - * / %` com precedência e parênteses.
- [ ] Converter texto em número (`parseInt`, `parseFloat`, `Number`) e número em texto.
- [ ] Escrever `if / else if / else`, `switch`, e combinar condições com `&&`, `||`, `!`.
- [ ] Usar `for`, `while` e `do...while` (contagem, soma, contador, filtro com `if`).
- [ ] Criar, preencher e percorrer arrays; usar `push`, `pop`, `shift`, `unshift`, `slice`, `join`, `sort`, `length`.
- [ ] Escrever funções com parâmetros e `return`; fazer uma função recursiva simples (fatorial).
- [ ] Criar objetos com propriedades e métodos (`this`); acessar `obj.prop`.
- [ ] Usar `Date`, `Math` (`round`, `floor`, `ceil`, `random`, `max`, `min`) e métodos de `String`.
- [ ] Ler um campo (`.value`), alterar `innerHTML`, `src`, `style` e reagir a eventos (`onclick`, `onchange`, `onmouseover`...).
- [ ] Usar `querySelector` e `querySelectorAll` com um laço.
- [ ] Ler um arquivo JSON via AJAX (`XMLHttpRequest` ou `fetch`) e mostrar os dados na página.
- [ ] Criar uma função construtora com métodos no `prototype` e (se pedido) uma herança.

### 21.2 Roteiro para resolver um exercício prático

1. **Leia o enunciado 2 vezes** e liste: *entradas*, *processamento*, *saída*.
2. **Monte o HTML** com os elementos pedidos (campos com `id`, botões, área de resultado).
3. **Escreva a função** do botão **por partes** e teste a cada parte com `console.log`.
4. Lembre de **converter** os valores de `input` para número.
5. **Teste com valores limite** (zero, negativo, vazio, o maior/menor possível).
6. Abra o **console (F12)**: um erro em vermelho mostra o arquivo e a linha do problema.
7. Revise: nomes (maiúsculas!), `;`, fechamento de `{ }` e `( )`, aspas.

### 21.3 Esqueleto pronto (comece sempre por ele)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Prova</title>
</head>
<body>
    <input type="text" id="valor">
    <button onclick="calcular()">Calcular</button>
    <p id="resultado"></p>

    <script>
        function calcular() {
            var v = parseFloat(document.getElementById("valor").value);
            if (isNaN(v)) {
                document.getElementById("resultado").innerHTML = "Digite um número!";
                return;
            }
            document.getElementById("resultado").innerHTML = "Dobro: " + (v * 2);
        }
    </script>
</body>
</html>
```

### 21.4 Dicas finais

- Prefira **simples e funcionando** a "esperto e quebrado".
- Use nomes claros (`salarioFinal`, não `x1`).
- **Comente** o que não ficou óbvio (o professor lê!).
- Se travar, **teste um pedaço isolado** no console (`F12`) antes de mexer no resto.
- Releia o enunciado no fim: confira se **todos** os itens foram atendidos.

---

## 22. Exercícios de treino com gabarito

Tente resolver **antes** de abrir a resposta. Execute no navegador (cole dentro de um `<script>`).

**1. (Operadores/Condicionais)** Dadas as notas `n1`, `n2`, `n3`, calcule a média e mostre "Aprovado" se for maior ou igual a 6, senão "Reprovado".

<details><summary>Resposta</summary>

```js
var n1 = 7, n2 = 5, n3 = 6;
var media = (n1 + n2 + n3) / 3;                // 6
if (media >= 6) document.write("Aprovado (" + media.toFixed(1) + ")");
else            document.write("Reprovado (" + media.toFixed(1) + ")");
```
</details>

**2. (Laço)** Mostre a tabuada do 7 (de 1 a 10) no formato `7 x 3 = 21`.

<details><summary>Resposta</summary>

```js
for (var i = 1; i <= 10; i++) {
    document.write("7 x " + i + " = " + (7 * i) + "<br>");
}
```
</details>

**3. (Laço + condição)** Some só os números pares de 1 a 100 (resposta: `2550`).

<details><summary>Resposta</summary>

```js
var soma = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) soma += i;
}
document.write(soma);   // 2550
```
</details>

**4. (Funções)** Crie `maior(a, b)` que devolve o maior valor, e `ehPrimo(n)` que devolve `true`/`false`.

<details><summary>Resposta</summary>

```js
function maior(a, b) { return (a > b) ? a : b; }

function ehPrimo(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) return false;     // achou divisor: não é primo
    }
    return true;
}
// maior(3, 9) -> 9 | ehPrimo(7) -> true | ehPrimo(9) -> false
```
</details>

**5. (Arrays)** Dado `var v = [4, 18, 7, 25, 3]`, mostre o maior valor, a soma e a média.

<details><summary>Resposta</summary>

```js
var v = [4, 18, 7, 25, 3];
var maior = v[0], soma = 0;
for (var i = 0; i < v.length; i++) {
    if (v[i] > maior) maior = v[i];
    soma += v[i];
}
document.write("Maior: " + maior + " | Soma: " + soma + " | Média: " + (soma / v.length));
// Maior: 25 | Soma: 57 | Média: 11.4
```
</details>

**6. (String)** Conte quantas vogais existem em `"Programação de Interfaces"`.

<details><summary>Resposta</summary>

```js
var texto = "Programação de Interfaces".toLowerCase();
var vogais = "aeiou", cont = 0;
for (var i = 0; i < texto.length; i++) {
    if (vogais.indexOf(texto[i]) != -1) cont++;    // indexOf devolve -1 se não achar
}
document.write(cont);   // 9  (o "ã" não está em "aeiou", então não é contado)
```
</details>

**7. (Prevendo resultados)** Qual o resultado de cada linha?

```js
"10" + 5          // (a)
"10" - 5          // (b)
5 + 3 + "px"      // (c)
"px" + 5 + 3      // (d)
parseInt("42abc") // (e)
parseInt("abc42") // (f)
"5" == 5          // (g)
"5" === 5         // (h)
7 % 3             // (i)
```

<details><summary>Resposta</summary>

(a) `"105"` · (b) `5` · (c) `"8px"` · (d) `"px53"` · (e) `42` · (f) `NaN` · (g) `true` · (h) `false` · (i) `1`
</details>

**8. (DOM + eventos)** Crie dois campos numéricos e um botão "Somar" que mostre a soma em um parágrafo.

<details><summary>Resposta</summary>

```html
<input type="text" id="a"> + <input type="text" id="b">
<button onclick="somar()">Somar</button>
<p id="res"></p>
<script>
    function somar() {
        var a = parseFloat(document.getElementById("a").value);
        var b = parseFloat(document.getElementById("b").value);
        document.getElementById("res").innerHTML = "Soma = " + (a + b);
    }
</script>
```
</details>

**9. (DOM + select)** Crie um `<select>` de cores (Vermelho, Verde, Azul). Ao trocar, mude a cor de fundo da página.

<details><summary>Resposta</summary>

```html
<select id="cor" onchange="trocar()">
    <option value="red">Vermelho</option>
    <option value="green">Verde</option>
    <option value="blue">Azul</option>
</select>
<script>
    function trocar() {
        document.body.style.backgroundColor = document.getElementById("cor").value;
    }
</script>
```
</details>

**10. (Objetos)** Crie um objeto `aluno` com `nome`, `nota1`, `nota2` e um método `media()`. Mostre "Ana: 7.5".

<details><summary>Resposta</summary>

```js
var aluno = {
    nome: "Ana", nota1: 8, nota2: 7,
    media: function () { return (this.nota1 + this.nota2) / 2; }
};
document.write(aluno.nome + ": " + aluno.media());   // Ana: 7.5
```
</details>

**11. (Recursão)** Escreva `somaAte(n)` recursiva que some `1 + 2 + ... + n`.

<details><summary>Resposta</summary>

```js
function somaAte(n) {
    if (n <= 1) return 1;            // caso base
    return n + somaAte(n - 1);       // passo recursivo
}
// somaAte(4) = 4 + 3 + 2 + 1 = 10
```
</details>

**12. (Tabela com laço)** Gere uma tabela com a tabuada do 5 (de 1 a 10) com linhas alternando duas cores (baseie-se em `27-1.html`).

<details><summary>Resposta</summary>

```html
<style>
    td { border: 1px solid black; padding: 4px; }
    .a { background: yellow; } .b { background: lightgreen; }
</style>
<script>
    document.write("<table>");
    for (var i = 1; i <= 10; i++) {
        var classe = (i % 2 == 0) ? "a" : "b";
        document.write("<tr class='" + classe + "'><td>5 x " + i + "</td><td>" + (5 * i) + "</td></tr>");
    }
    document.write("</table>");
</script>
```
</details>

**13. (AJAX + JSON)** Usando `json_dados.json`, liste os filmes em uma `<ul>` (título e ano).

<details><summary>Resposta</summary>

```html
<ul id="lista"></ul>
<script>
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var html = "";
            for (var i = 0; i < obj.filme.length; i++) {
                html += "<li>" + obj.filme[i].titulo + " (" + obj.filme[i].ano + ")</li>";
            }
            document.getElementById("lista").innerHTML = html;
        }
    };
    ajax.open("GET", "json_dados.json", true);
    ajax.send();
</script>
```
</details>

**14. (Protótipos)** Crie a construtora `Conta(titular, saldo)` com os métodos `depositar(v)`, `sacar(v)` (não pode ficar negativo) e `extrato()`.

<details><summary>Resposta</summary>

```js
function Conta(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
}
Conta.prototype.depositar = function (v) { this.saldo += v; };
Conta.prototype.sacar = function (v) {
    if (v <= this.saldo) this.saldo -= v;
    else console.log("Saldo insuficiente");
};
Conta.prototype.extrato = function () {
    return this.titular + ": R$ " + this.saldo.toFixed(2);
};
var c = new Conta("Maria", 100);
c.depositar(50); c.sacar(500); c.sacar(30);
console.log(c.extrato());   // Maria: R$ 120.00  (após "Saldo insuficiente")
```
</details>

**15. (Herança)** Crie `Professor` herdando de `Pessoa` (veja `60.html`), com o atributo `disciplina` e o método `exibirDados` sobrescrito.

<details><summary>Resposta</summary>

```js
function Pessoa(nome, idade) { this.nome = nome; this.idade = idade; }
Pessoa.prototype.exibirDados = function () {
    return "Nome = " + this.nome + ", idade = " + this.idade;
};

function Professor(nome, idade, disciplina) {
    Pessoa.call(this, nome, idade);
    this.disciplina = disciplina;
}
Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.exibirDados = function () {
    return Pessoa.prototype.exibirDados.call(this) + ", disciplina = " + this.disciplina;
};
console.log(new Professor("Carlos", 40, "JS").exibirDados());
// Nome = Carlos, idade = 40, disciplina = JS
```
</details>

---

## 23. Erros conhecidos nos exemplos das aulas

Os exemplos tinham alguns erros que valem como **estudo de depuração**. Todos já foram **corrigidos**: a tabela mostra o que estava errado e por quê, para você reconhecer o mesmo erro no seu código. Dica: abra o arquivo, **reintroduza o erro de propósito** e observe o que acontece no navegador e no console (`F12`).

| Arquivo | O que estava errado | Como ficou |
|---|---|---|
| `06.html` | O `src` apontava para `/js/exemplos_1.1.js`, mas o arquivo se chama `js/exemplos_1.js`: o botão não funcionava (erro 404 no console). | `src="js/exemplos_1.js"` |
| `07.html` | A URL era fictícia (`site.com.br`): o script nunca carregava. | Usa o mesmo arquivo `js/exemplos_1.js` publicado no GitHub, via CDN jsDelivr (precisa de internet) |
| `13.html` | `var y` declarado duas vezes. | A segunda vez só reatribui: `y = parseInt(a) + (1 + 2);` |
| `16.html`, `18.html` | `var a = b = c = 10;` declarava só `a` com `var`; `b` e `c` viravam variáveis globais implícitas. | `var a = 10, b = 10, c = 10;` |
| `19.html` | A condição testava o intervalo 0 a 10, mas o texto dizia "positivo"/"negativo". | Texto "dentro do intervalo (0 a 10)" / "fora do intervalo" |
| `29.html` | A condição `(L+C) >= (N-1)` era sempre verdadeira, então saía um retângulo cheio de X (não uma figura). | `(C >= N - L + 1) && (C <= N + L - 1)`: pirâmide com 1, 3 e 5 X |
| `30.html` | `var x3 = Array = [1,2,3,4,5];` **sobrescrevia** o `Array` do JavaScript (depois disso `new Array(...)` dava erro). | `var x3 = [1,2,3,4,5];` |
| `39.html`, `40.html` | A data final era 2017, então os resultados saíam negativos. | `new Date(hoje.getFullYear(), 11, 31, ...)`: sempre o fim do ano atual |
| `51.html` | Laços `for (var i = 0; x.length; i++)` sem `i <`: depois do último item acessava `x[6]` (indefinido) e gerava `TypeError` no console. | `for (var i = 0; i < x.length; i++)` |
| `52.html`, `53.html` | `doc` usada sem `var` (global implícita). | `var doc = ...` |
| `55.html` | `myObj` e `i` sem declaração (globais implícitas). | `var myObj = ...` e `for (var i in ...)` |
| `56.html`, `57.html` | Variáveis `myObj`, `nomeProcura` e `i` sem declaração; laço sem `break`. No `56.html`, os botões sem `type` recarregavam a página; no `57.html`, o Bootstrap vinha por `http://`. | Declaração com `var`, `break` ao achar o cliente, `type="button"` / `type="reset"` no `56.html` e `https://` no `57.html` |
| `60.html` | Herança com `new Pessoa.prototype.constructor()`; `idPessoa` dava `TypeError` se não houvesse aluno; "Ciênca" no texto. | `Object.create(Pessoa.prototype)`, `idPessoa` iniciado com `null` e verificado no final, "Ciência" |

---

## 24. Cola rápida (cheat sheet)

```js
// ---------- Saída ----------
alert("msg");  console.log(x);  document.write("<b>x</b>");
el.innerHTML = "...";  el.textContent = "...";

// ---------- Variáveis ----------
var a = 1;  let b = 2;  const c = 3;
typeof a;   parseInt("10");  parseFloat("1.5");  Number("7");  String(7);  isNaN(x);

// ---------- Operadores ----------
+ - * / %   ++ --   += -= *= /= %=   == === != !==   > < >= <=   && || !
cond ? valorSeVerdadeiro : valorSeFalso

// ---------- Decisão ----------
if (c) { } else if (c2) { } else { }
switch (x) { case 1: ...; break;  default: ...; }

// ---------- Repetição ----------
for (var i = 0; i < n; i++) { }
while (cond) { }
do { } while (cond);

// ---------- Arrays ----------
var v = [1, 2, 3];  v.length;  v[0];  v.push(4);  v.pop();  v.shift();  v.unshift(0);
v.slice(1, 3);  v.join("-");  v.concat([9]);  v.sort();  v.reverse();  v.indexOf(2);

// ---------- Funções ----------
function nome(p1, p2) { return p1 + p2; }

// ---------- Objetos ----------
var o = { prop: 1, metodo: function () { return this.prop; } };
o.prop;  o["prop"];  o.metodo();

// ---------- Date / Math / String ----------
new Date();  d.getFullYear();  d.getMonth();  d.getDate();  d.getDay();  d.getTime();
Math.round(x); Math.floor(x); Math.ceil(x); Math.max(a,b); Math.min(a,b); Math.sqrt(x); Math.pow(x,y); Math.random();
s.length; s.toUpperCase(); s.toLowerCase(); s.indexOf("a"); s.slice(i, f); s.replace("a", "b");

// ---------- DOM ----------
document.getElementById("id");   document.querySelector("p");   document.querySelectorAll("p");
el.value;  el.innerHTML;  el.src;  el.style.backgroundColor = "red";  el.focus();

// ---------- Eventos (atributos HTML) ----------
onclick  onchange  onmouseover  onmouseout  onmousedown  onmouseup  onfocus  onload

// ---------- window ----------
window.innerWidth;  window.innerHeight;  window.print();  history.back();  window.open(url, nome, recursos);

// ---------- AJAX / JSON ----------
var x = new XMLHttpRequest();
x.onreadystatechange = function () { if (this.readyState == 4 && this.status == 200) { /* this.responseText */ } };
x.open("GET", "arquivo.json", true);  x.send();
JSON.parse(texto);  JSON.stringify(obj);

async function f() { var r = await fetch(url); var d = await r.json(); }

// ---------- Protótipos ----------
function Tipo(a) { this.a = a; }
Tipo.prototype.metodo = function () { return this.a; };
var t = new Tipo(1);
// Herança: Filho.prototype = Object.create(Pai.prototype);  Pai.call(this, ...) no construtor do filho
```

---

*Bons estudos! Dica final: pegue um arquivo de exemplo, **apague o código** e tente reescrevê-lo de memória. Se conseguir, você domina o assunto.*
