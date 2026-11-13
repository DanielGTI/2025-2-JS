/*
 * ARQUIVO JAVASCRIPT EXTERNO (aula 2)
 * Contém a função myFunction usada por 06.html (e por 07.html, se o endereço for corrigido).
 * Em um arquivo .js NÃO existem tags HTML: só código JavaScript (sem a tag script).
 * Para usar: script src="js/exemplos_1.js" dentro do HTML.
 * Como o código está fora do HTML, o mesmo arquivo pode ser reaproveitado por várias páginas.
 */
function myFunction() {

    // Procura o elemento com id="demo" na página que carregou este arquivo e troca o seu texto.
    // A página que usa este arquivo PRECISA ter um elemento com id="demo", senão ocorre erro
    // ("Cannot set properties of null") no Console.
    document.getElementById("demo").innerHTML = "Alterado.";

}