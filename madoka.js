
function abrirMensagem() {
  alert('Eu te amo meu amor !!!!!!!!!!');
}

const mensagens = [
  'Você é meu milagre mágico ❤️',
  'Mesmo em infinitas timelines, eu escolheria você ✨',
  'Nosso amor supera qualquer universo 💖',
  'Você ilumina minha vida como uma garota mágica 🌸',
  'Nosso destino está conectado para sempre 🌙'
];

function trocarMensagem() {
  const texto = document.getElementById('textoMensagem');

  const random = Math.floor(Math.random() * mensagens.length);

  texto.innerText = mensagens[random];
}

const dataNamoro = new Date('2023-06-12 00:00:00');

function atualizarContador() {
  const agora = new Date();

  const diferenca = agora - dataNamoro;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;
}

setInterval(atualizarContador, 1000);

atualizarContador();
