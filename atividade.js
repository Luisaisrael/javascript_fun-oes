// enxurrada
function multiplicaçao (n1, n2) {
    multiplicaçao = n1 * n2
    return multiplicaçao;
   }
   let n1 = parseInt ( prompt ('Digite um numeros:') )
   let n2 = parseInt ( prompt ('Digite um numeros:') )

   alert(`A multiplicaçao dos números é ${multiplicaçao(n1, n2)}`);

//potencia

function potencia (base, expoente) {
 
    potencia = Math.pow(base,expoente );
    return potencia;
}
let base = parseInt ( prompt ( 'Digite um numero para base') )
let expoente = parseInt ( prompt ( 'Digite um numero para ser o expoente') )

alert (`A potencia do numero é ${potencia(base, expoente)}`);

// aula 7
function informaçoes (anoAtual, ano){
    informaçoes = anoAtual - ano;
   return informaçoes;
   }
   const anoAtual = 2021;
   let nome = prompt ('Digite seu nome: ');
   let ano = parseInt ( prompt ('Digite o ano que você nasceu:'));
    alert(`Olá, seu nome é ${nome} e você  tem  ${informaçoes(anoAtual, ano)}`);

//aula 8 saldo Atual

 function saldo2 (saldo1, compra){
    saldo2 = saldo1 - compra;
    return saldo2;
 }
    let saldo1 = parseInt (prompt ('Digite seu saldo atual:'))
    let compra = parseInt (prompt ('Digite o valor da compra que deseja realizar:'))

if (compra <= saldo1) {
    alert(`Sua compra foi concluída, seu saldo atual agora é ${saldo2(saldo1, compra)}`);
}
else {
    alert('saldo insuficiente');
}

// aula 8 calculadora

function soma (x, y){
    soma = x + y;
    return soma;
}
function subtraçao (x, y){
    subtraçao = x - y;
    return subtraçao;
}
function multiplicaçao (x, y){
    multiplicaçao = x * y;
    return multiplicaçao;
}
function divisao (x, y){
    divisao = x / y;
    return divisao;
}
let x = parseInt ( prompt ('Digite um numero:') )
let y = parseInt ( prompt ('Digite outro numero'))
let simbolo = prompt ( 'digite um Operador matemático:')

if ( simbolo === '+')  {
    alert (`O resultado é ${soma(x, y)}`);
}
if ( simbolo === '-')  {
    alert (`O resultado é ${subtraçao(x, y)}`);
}
if ( simbolo === '*')  {
    alert (`O resultado é ${multiplicaçao(x, y)}`);
}
if ( simbolo === '/')  {
    alert (`O resultado é ${divisao(x, y)}`);
}
