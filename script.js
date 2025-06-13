function abrirEnvelope() {
  document.querySelector(".envelope").style.display = "none";
  document.getElementById("cartinha").style.display = "block";
}
function abrirEnvelope() {
  document.querySelector(".envelope").style.display = "none";
  document.getElementById("cartinha").style.display = "block";
  iniciarChuvaDeCoracoes(); // inicia os corações ao abrir a cartinha
}

function iniciarChuvaDeCoracoes() {
  const total = 20;

  for (let i = 0; i < total; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    heart.textContent = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    heart.style.fontSize = (18 + Math.random() * 12) + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }

  // repetir chuva a cada 3 segundos
  setInterval(() => iniciarChuvaDeCoracoes(), 3000);
}
function tocarMusica() {
  const musica = document.getElementById("musica");
  musica.play();
}