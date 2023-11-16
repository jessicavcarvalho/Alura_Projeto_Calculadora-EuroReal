//Adicionar outras moedas para converter;

var cotacaoEmEuro = 50;
var cotacaoDoEuro = 5.28;

var valorEmReal = cotacaoEmEuro * cotacaoDoEuro;
valorEmReal = valorEmReal.toFixed(2);

alert("Olá, o euro convertido representa R$ " + valorEmReal);