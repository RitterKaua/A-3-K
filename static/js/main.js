// Data do início do relacionamento - 4 de setembro de 2025
const relationshipStart = new Date("2025-09-04T00:00:00");

// Mensagens de amor românticas
const loveMessages = [
  "Cada segundo ao seu lado vale uma eternidade de felicidade! 💖",
  "Você é a razão do meu sorriso todos os dias! 😊",
  "Nosso amor cresce a cada batimento do coração! 💓",
  "Com você, descobri que o amor verdadeiro existe! 🌹",
  "Você é meu sol em dias nublados e minha estrela nas noites escuras! ⭐",
  "Nossos corações batem no mesmo ritmo, como uma linda sinfonia! 🎵",
  "A cada dia que passa, me apaixono mais por você! 💕",
  "Você faz minha vida mais colorida e cheia de magia! 🌈",
  "Nosso amor é como o infinito: não tem fim! ∞",
  "Você é a melhor escolha que já fiz na minha vida! 💝",
  "Com você aprendi que o amor pode ser ainda mais lindo! 🦋",
  "Cada momento ao seu lado é um presente precioso! 🎁",
  "Você é minha pessoa favorita no mundo inteiro! 🌍",
  "Nosso amor é a prova de que contos de fadas existem! 👑",
  "Você transformou minha vida em uma história de amor! 📖",
];

// Mensagens das estrelas
const starMessages = [
  "Você é meu brilho! ⭐",
  "Como as estrelas, nosso amor é eterno! ✨",
  "Você ilumina minha vida! 🌟",
  "Juntos somos infinitos como o universo! 💫",
  "Você é minha estrela guia! 🌠",
];

let currentMessageIndex = 0;

let map = null;

// Função para atualizar o contador de tempo
function updateCounter() {
  const now = new Date();
  const timeDiff = now - relationshipStart;

  // Calcular anos, meses, dias, horas, minutos e segundos
  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const days = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Atualizar os elementos no HTML
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  // Atualizar relógio de amor
  updateLoveClock(timeDiff);
}

// Função para atualizar o relógio de amor
function updateLoveClock(timeDiff) {
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
  const totalMinutes = Math.floor(timeDiff / (1000 * 60));

  if (document.getElementById("totalDays")) {
    document.getElementById("totalDays").textContent =
      totalDays.toLocaleString();
  }
  if (document.getElementById("totalHours")) {
    document.getElementById("totalHours").textContent =
      totalHours.toLocaleString();
  }
  if (document.getElementById("totalMinutes")) {
    document.getElementById("totalMinutes").textContent =
      totalMinutes.toLocaleString();
  }
}

// Função para mostrar nova mensagem de amor
function showNewMessage() {
  currentMessageIndex = (currentMessageIndex + 1) % loveMessages.length;
  const messageElement = document.getElementById("messageText");

  // Animação de fade out
  messageElement.style.opacity = "0";

  setTimeout(() => {
    messageElement.textContent = loveMessages[currentMessageIndex];
    messageElement.style.opacity = "1";

    // Adicionar efeito de coração
    createFloatingHeart();
  }, 300);
}

// Função para criar corações flutuantes
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.className = "floating-heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.position = "fixed";
  heart.style.zIndex = "1000";
  heart.style.pointerEvents = "none";
  heart.style.animation = "floatUp 3s ease-out forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Função para explosão de corações
function createHeartExplosion() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createFloatingHeart();
    }, i * 100);
  }

  // Vibração no mobile (desabilitada para evitar erros)
  // if (navigator.vibrate) {
  //   navigator.vibrate(200);
  // }
}

// Função para criar animação de corações no fundo
function createBackgroundHearts() {
  const heartsContainer = document.querySelector(".hearts-container");

  setInterval(() => {
    if (document.querySelectorAll(".bg-heart").length < 8) {
      const heart = document.createElement("div");
      heart.className = "bg-heart";
      heart.innerHTML = Math.random() > 0.5 ? "💕" : "💖";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 15 + 10 + "px";
      heart.style.animationDuration = Math.random() * 10 + 8 + "s";
      heart.style.opacity = Math.random() * 0.7 + 0.3;

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        if (heart.parentNode) {
          heart.remove();
        }
      }, 15000);
    }
  }, 2000);
}

// Funções para o modal de fotos
function openModal(photoId) {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImage");
  const img = document.getElementById(photoId);

  modal.style.display = "block";
  modalImg.src = img.src;
  modalImg.alt = img.alt;

  // Adicionar efeito de coração quando abrir foto
  createFloatingHeart();
}

function closeModal() {
  const modal = document.getElementById("photoModal");
  modal.style.display = "none";
}

// Função para inicializar música automaticamente
function initAutoMusic() {
  const music = document.getElementById("customMusic");

  // Tentar iniciar a música automaticamente após interação do usuário
  document.addEventListener(
    "click",
    function startMusicOnFirstClick() {
      music.muted = false; // Desmuta a música
      music.play().catch((e) => {
        console.log("Música personalizada não encontrada ou erro ao tocar:", e);
      });
      // Remove o listener após o primeiro clique
      document.removeEventListener("click", startMusicOnFirstClick);
    },
    { once: true }
  );
}

// Função para efeitos ao rolar a página
function handleScroll() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      section.classList.add("visible");
    }
  });
}

// Função para gesture de swipe em mobile
let startY = 0;
let startX = 0;

function handleTouchStart(e) {
  startY = e.touches[0].clientY;
  startX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  if (!startY || !startX) return;

  const endY = e.changedTouches[0].clientY;
  const endX = e.changedTouches[0].clientX;
  const diffY = startY - endY;
  const diffX = startX - endX;

  // Swipe para baixo - criar corações
  if (Math.abs(diffY) > Math.abs(diffX) && diffY < -50) {
    createHeartExplosion();
  }

  // Swipe para direita - nova mensagem
  if (Math.abs(diffX) > Math.abs(diffY) && diffX < -50) {
    showNewMessage();
  }

  startY = 0;
  startX = 0;
}

// Inicialização quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
  // Iniciar contador
  updateCounter();
  setInterval(updateCounter, 1000);

  // Mostrar primeira mensagem
  document.getElementById("messageText").textContent = loveMessages[0];

  // Iniciar animação de corações de fundo
  createBackgroundHearts();

  // Efeito de digitação removido - frase agora é fixa

  // Criar céu estrelado
  createStarrySky();

  // Cursor personalizado removido

  // Criar pétalas caindo
  createFallingPetals();

  // Mensagens privadas removidas

  // Inicializar música automática
  initAutoMusic();

  // Inicializar eventos do vídeo
  initVideoEvents();

  // Inicializar mapa (com delay para garantir que o container esteja visível)
  setTimeout(() => {
    if (document.getElementById("specialPlacesMap")) {
      initSpecialPlacesMap();
    }
  }, 2000);

  // Adicionar listener para scroll
  window.addEventListener("scroll", handleScroll);

  // Adicionar listeners para touch gestures
  document.addEventListener("touchstart", handleTouchStart, { passive: true });
  document.addEventListener("touchend", handleTouchEnd, { passive: true });

  // Fechar modal ao clicar fora da imagem
  document.getElementById("photoModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // Criar alguns corações iniciais
  setTimeout(() => {
    createHeartExplosion();
  }, 3000);

  // Adicionar efeito de entrada suave
  document.body.classList.add("loaded");

  // Listener do textarea de mensagens privadas removido
});

// Adicionar listener para tecla ESC fechar modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Função para compartilhar (se suportado pelo navegador)
function shareOurLove() {
  if (navigator.share) {
    navigator.share({
      title: "Kaua ❤️ Anie Julie",
      text: "Veja nosso contador de amor!",
      url: window.location.href,
    });
  }
}

// ======= NOVAS FUNCIONALIDADES =======

// Função de digitação animada (removida - agora usa frase fixa)
/*
function typeWriter() {
  const element = document.getElementById("typingText");
  if (typingIndex < initialPhrase.length) {
    element.innerHTML += initialPhrase.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      document.getElementById("initialPhrase").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("initialPhrase").style.display = "none";
      }, 1000);
    }, 3000);
  }
}
*/

// Função para animação surpresa
function surpriseAnimation() {
  const overlay = document.getElementById("surpriseOverlay");
  overlay.style.display = "flex";

  // Criar explosão de corações
  createHeartExplosion();

  // Vibração no mobile (desabilitada para evitar erros)
  // if (navigator.vibrate) {
  //   navigator.vibrate([200, 100, 200, 100, 500]);
  // }

  // Tocar som de beijo (simulado com vibração)
  setTimeout(() => {
    createHeartExplosion();
  }, 500);

  // Auto-fechar depois de 5 segundos
  setTimeout(() => {
    closeSurprise();
  }, 5000);
}

// Função para fechar animação surpresa
function closeSurprise() {
  document.getElementById("surpriseOverlay").style.display = "none";
}

// Função para criar céu estrelado
function createStarrySky() {
  const starryContainer = document.getElementById("starrySky");

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.fontSize = Math.random() * 10 + 5 + "px";

    star.addEventListener("click", function () {
      showStarMessage(star);
    });

    starryContainer.appendChild(star);
  }
}

// Função para mostrar mensagem da estrela
function showStarMessage(star) {
  const messageDiv = document.getElementById("starMessage");
  const randomMessage =
    starMessages[Math.floor(Math.random() * starMessages.length)];

  messageDiv.querySelector("p").textContent = randomMessage;
  messageDiv.style.left = star.offsetLeft + "px";
  messageDiv.style.top = star.offsetTop + "px";
  messageDiv.style.display = "block";

  createFloatingHeart();

  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 2000);
}

// Função para criar pétalas caindo
function createFallingPetals() {
  setInterval(() => {
    if (document.querySelectorAll(".petal").length < 15) {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.innerHTML = Math.random() > 0.5 ? "🌸" : "🌺";
      petal.style.left = Math.random() * 100 + "%";
      petal.style.animationDuration = Math.random() * 5 + 5 + "s";
      petal.style.fontSize = Math.random() * 10 + 15 + "px";

      document.getElementById("petalsContainer").appendChild(petal);

      setTimeout(() => {
        if (petal.parentNode) {
          petal.remove();
        }
      }, 10000);
    }
  }, 1000);
}

// Função para cursor personalizado (removida)
/*
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    // Criar rastro ocasional
    if (Math.random() > 0.95) {
      const trail = document.createElement("div");
      trail.className = "cursor-trail-dot";
      trail.style.left = e.clientX + "px";
      trail.style.top = e.clientY + "px";
      document.body.appendChild(trail);

      setTimeout(() => {
        trail.remove();
      }, 1000);
    }
  });
}
*/

// Função para inicializar mapa
function initSpecialPlacesMap() {
  // Coordenadas fornecidas
  const places = [
    {
      lat: -30.110272,
      lng: -51.316427,
      name: "Onde nos conhecemos",
      icon: "💕",
    },
    { lat: -30.110239, lng: -51.313384, name: "Primeiro beijo", icon: "💋" },
    { lat: -30.113682, lng: -51.367225, name: "Encontro especial", icon: "🌟" },
    {
      lat: -30.10808,
      lng: -51.321567,
      name: "Nosso lugar favorito",
      icon: "❤️",
    },
    {
      lat: -30.112689,
      lng: -51.324731,
      name: "Nossa Futura Casa",
      icon: "🏠",
    },
  ];

  // Centro do mapa (média das coordenadas)
  const centerLat =
    places.reduce((sum, place) => sum + place.lat, 0) / places.length;
  const centerLng =
    places.reduce((sum, place) => sum + place.lng, 0) / places.length;

  map = L.map("specialPlacesMap").setView([centerLat, centerLng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Adicionar marcadores
  places.forEach((place, index) => {
    const customIcon = L.divIcon({
      html: `<div class="custom-marker">${place.icon}</div>`,
      className: "custom-marker-container",
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    L.marker([place.lat, place.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<strong>${place.name}</strong><br>Lugar especial do nosso amor 💕`
      )
      .on("click", function () {
        createHeartExplosion();
      });
  });
}

// ======= FUNÇÕES DE VÍDEO =======

// Função para play/pause do vídeo
function playPauseVideo() {
  const video = document.getElementById("loveVideo");
  const playIcon = document.getElementById("playIcon");

  if (video.paused) {
    video.play();
    playIcon.className = "fas fa-pause";
    createFloatingHeart();
  } else {
    video.pause();
    playIcon.className = "fas fa-play";
  }
}

// Função para mutar/desmutar vídeo
function muteUnmuteVideo() {
  const video = document.getElementById("loveVideo");
  const volumeIcon = document.getElementById("volumeIcon");

  if (video.muted) {
    video.muted = false;
    volumeIcon.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeIcon.className = "fas fa-volume-mute";
  }
}

// Função para fullscreen do vídeo
function fullscreenVideo() {
  const video = document.getElementById("loveVideo");

  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }

  createHeartExplosion();
}

// Eventos do vídeo
function initVideoEvents() {
  const video = document.getElementById("loveVideo");
  const playIcon = document.getElementById("playIcon");

  if (video) {
    // Quando o vídeo terminar
    video.addEventListener("ended", function () {
      playIcon.className = "fas fa-play";
      createHeartExplosion();

      // Mostrar mensagem romântica
      const messages = [
        "Que lindo nosso vídeo! 💕",
        "Revivendo nossos momentos especiais! 🎬",
        "Cada segundo vale ouro! ⭐",
        "Nosso filme de amor! 🎭",
      ];

      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      // Criar notificação temporária
      const notification = document.createElement("div");
      notification.className = "video-notification";
      notification.textContent = randomMessage;
      document.body.appendChild(notification);

      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 3000);
    });

    // Quando começar a tocar
    video.addEventListener("play", function () {
      playIcon.className = "fas fa-pause";
    });

    // Quando pausar
    video.addEventListener("pause", function () {
      playIcon.className = "fas fa-play";
    });

    // Ao clicar no vídeo
    video.addEventListener("click", function () {
      playPauseVideo();
    });

    // Gesto de duplo toque para fullscreen no mobile
    let lastTap = 0;
    video.addEventListener("touchend", function (e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 500 && tapLength > 0) {
        fullscreenVideo();
        e.preventDefault();
      }

      lastTap = currentTime;
    });
  }
}
