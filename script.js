
function abrirMensagem() {
  alert('Eu te amo meu amor !!!!!!!!!!');
}

const mensagens = [
  '',
  '',
  '',
  '',
  ''
];

function trocarMensagem() {
  const texto = document.getElementById('textoMensagem');

  const random = Math.floor(Math.random() * mensagens.length);

  texto.innerText = mensagens[random];
}
// Desde o dia que te conheci, sabia que você era a pessoa certa para mim.
// Desde o dia que fizemos nosso primeiro contato visual, não pude deixar de me apaixonar pelo que vi em seus olhos. 
// Tanta pureza, que enxerga beleza até no que não é notado. 
// seu jeito unico de falar, agir, pensar, fez com que me apaixonasse completamente por voc. 
// me apaixonei completamente pela sua alma//
