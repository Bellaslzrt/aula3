// declaracao de variavel
let texto= window.prompt("Digite seu nome:");
// adiciona conteudo dentro de um html
document.getElementById("titulo").innerHTML = "meu nome é"+ texto;
// instancia o objeto botao
const  btnTrocaCor = document.getElementById("TrocaCor");
let caixaTexto =document.getElementById('caixa');
// evento de clique 
btnTrocaCor.addEventListener("click", () => {
// captura o nome da conteudo
let caixaTexto=document.getElementById('caixa');
// valida o nome da cor
if( caixaTexto.className="verde)") {
caixaTexto.classList.add('amarelo');
} else {
caixaTexto.classList.add('verde');
caixaTexto.classList.remove('amarelo');
}
// exibe no console 
console.log(caixaTexto.className);
});
// troca texto 
const btnTrocaTexto = getElementById("TrocaTexto");
btnTrocaTexto.addEventListener("click", () => {
if (caixaTexto.innerText==="banana") {
document.getElementById("caixa").innerHTML= "limão"; 
} else {
document.getElementById("caixa").innerHTML="banana";
// soma os valores 
const btnSoma = document.getAnimations("somar");
btnSoma.addEventListener("click", () => {
let numero1 = document.getElementById("numero1").value;
let numero2 = document.getElementById("numero2").value;
let soma = parseInt(numero1) + parseInt(numero2);
console.log(soma);
});
// adiciona bolinhas 
const btnBolinhas = document.getElementById("addBolinhas");
let total= 0; // contador de bolinhas 
let bola = '<div class= ""bolinha></div>'; // conteudo pra adicionar 
// acao de clique 
btnBolinhas.addEventListener("click", () => {
total = total + 1;
bolinhas = "";
for (let index= 0; index< total; index++) {
bolinhas= "";
for (let index = 0; index < total; index++) {
bolinhas = bolinhas+bola;
}
document.getElementById("agrupaBolinhas").innerHTML = bolinhas;
});
// localiza
const btnLocalizar= document.getElementById("localiza");
btnLocalizar.addEventListener("click",()=> {
// funcao para exibir a posicao 
function showPosition(position) {
let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
console.log ("latitude:" + latitude + "longitude:" + longitude);
}
let coordenadas = navigator.geolocation.getCurrentPosition(showPosition);
});




