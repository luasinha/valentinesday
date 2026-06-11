/* mensagens */

function abrirMensagem() {
alert("Eu te amo meu amor !!!!!!!!!!");
}


let mensagens = [
  "Eu te amo. Soube disso no minuto em que te conheci. ♡",
  "Eu amo como você faz eu me sentir como se tudo fosse possível, ou como se tudo valesse a pena. ♡",
  "Em cada pedaço de mim, sempre haverá um pedaço de você. ♡",
  "Obrigada por me amar. ♡"
];

let i = 0;

function mensagemSurpresa(){

if (i < mensagens.length){
document.getElementById("mensagemFofa").innerHTML = mensagens[i];
  i++;
 }
}


/* trocar de paginas */

const limparPagina = document.querySelectorAll("section")
function inicio(){
limparPagina.forEach(function(paginas){
  paginas.classList.remove("ativa")
})

document.getElementById("inicio").classList.add("ativa")

}
function sobre(){
limparPagina.forEach(function(paginas){
  paginas.classList.remove("ativa")
})

document.getElementById("sobre").classList.add("ativa")

}
function nos(){
limparPagina.forEach(function(paginas){
  paginas.classList.remove("ativa")
})

document.getElementById("nos").classList.add("ativa")

}
function galeria(){
limparPagina.forEach(function(paginas){
  paginas.classList.remove("ativa")
})

document.getElementById("galeria").classList.add("ativa")

}
function mensagem(){
limparPagina.forEach(function(paginas){
  paginas.classList.remove("ativa")
})

document.getElementById("mensagem").classList.add("ativa")
}


/* musica*/

const musica = document.getElementById("music");
musica.volume = 0.15;
let tocando = false;

function tocarMusica(){
const botao = document.getElementById("musicBtn");

if(!tocando){
  musica.play();
  botao.innerHTML = "pausar!!";
  tocando = true;
}else{
  musica.pause();
  botao.innerHTML = "tocar!!";
  tocando = false;
 }
}


/* estrelas de fundo */

const starsContainer = document.getElementById("estrelas")

for(let i = 0; i < 250; i++){

const estrela = document.createElement("div");
estrela.classList.add("estrela");

estrela.style.left = Math.random() * 100 + "vw";

estrela.style.top = Math.random() * 100 + "vh";

estrela.style.animationDelay = Math.random() * 5 + "s";

starsContainer.appendChild(estrela);
}


/* brilho do mouse */

document.addEventListener("mousemove", (mouse) => {for (let i = 0; i < 3; i++) {

const brilho = document.createElement("div");

brilho.className = "sparkle";

brilho.style.left =
mouse.clientX + (Math.random() * 20 - 10) + "px";

brilho.style.top =
mouse.clientY + (Math.random() * 20 - 10) + "px";

document.body.appendChild(brilho);

setTimeout(() => {brilho.remove();}, 1000);
}

});