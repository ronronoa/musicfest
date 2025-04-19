const menuToggle = document.getElementById("mobilenav");
const mobileNav = document.getElementById("nav");


menuToggle.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")){
    mobileNav.classList.add('opacity-100', 'translate-y-0');
    mobileNav.classList.remove('hidden');
    setTimeout(() => {
      mobileNav.classList.add('opacity-100', 'translate-y-0');
      mobileNav.classList.remove('opacity-0', '-translate-y-2');
    }, 10);
  } else {
    mobileNav.classList.add('opacity-0', '-translate-y-2');
    mobileNav.classList.remove('opacity-100', 'translate-y-0');
    setTimeout(() => {
      mobileNav.classList.add('hidden');
    }, 300);
  }
});

// Optional: Close menu when a link is clicked
mobileNav.querySelectorAll("a, button").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
});

// Rico Blanco
const ricoaudio = document.getElementById("ricoAudio");
const pauseIcon = document.getElementById("pauseIcon");
const playIcon = document.getElementById("playIcon");

const togglePlayPause =() => {
  if (ricoaudio.paused) {
    ricoaudio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  } else {
    ricoaudio.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  }
}

const playStop =() => {
  if (ricoaudio.played) {
    ricoaudio.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  }
}

// Cup Of Joe

const coj = document.getElementById("cupofjoe");
const pauseCOJ = document.getElementById("pauseCOJ");
const playCOJ = document.getElementById("playCOJ");

const togglecupofjoe = () => {
if (coj.paused) {
  coj.play();
  playCOJ.style.display = 'none';
  pauseCOJ.style.display = 'inline';
} else {
  coj.pause();
  playCOJ.style.display = 'inline';
  pauseCOJ.style.display = 'none';
}
}
const playStopCOJ = () => {
  if (coj.played) {
    coj.pause();
    coj.currentTime = 0;
    playCOJ.style.display = 'inline';
    pauseCOJ.style.display = 'none';
  }
  }

  // Parokya Ni Edgar

const pne = document.getElementById("parokya");
const pausePNE = document.getElementById("pausePNE");
const playPNE = document.getElementById("playPNE");

const togglePNE = () => {
if (pne.paused) {
  pne.play();
  playPNE.style.display = 'none';
  pausePNE.style.display = 'inline';
} else {
  pne.pause();
  playPNE.style.display = 'inline';
  pausePNE.style.display = 'none';
}
}
const playStopPNE = () => {
  if (pne.played) {
    pne.pause();
    pne.currentTime = 0;
    playPNE.style.display = 'inline';
    pausePNE.style.display = 'none';
  }
  }

  // Earl Agustin

const earl = document.getElementById("earl");
const pauseEarl = document.getElementById("pauseEarl");
const playEarl = document.getElementById("playEarl");

const toggleEarl = () => {
if (earl.paused) {
  earl.play();
  playEarl.style.display = 'none';
  pauseEarl.style.display = 'inline';
} else {
  earl.pause();
  playEarl.style.display = 'inline';
  pauseEarl.style.display = 'none';
}
}
const playStopEarl = () => {
  if (earl.played) {
    earl.pause();
    earl.currentTime = 0;
    playEarl.style.display = 'inline';
    pauseEarl.style.display = 'none';
  }
  }

  // Eraserheads

const eheads = document.getElementById("eHeads");
const pauseEheads = document.getElementById("pauseEheads");
const playEheads = document.getElementById("playEheads");

const toggleEheads = () => {
if (eheads.paused) {
  eheads.play();
  playEheads.style.display = 'none';
  pauseEheads.style.display = 'inline';
} else {
  eheads.pause();
  playEheads.style.display = 'inline';
  pauseEheads.style.display = 'none';
}
}
const playStopEheads =() => {
  if (eheads.played) {
    eheads.pause();
    eheads.currentTime = 0;
    playEheads.style.display = 'inline';
    pauseEheads.style.display = 'none';
  }
  }

  // SupaFly

const supafly = document.getElementById("supafly");
const pauseSupafly = document.getElementById("pauseSupafly");
const playSupafly = document.getElementById("playSupafly");

const toggleSupafly = () => {
if (supafly.paused) {
  supafly.play();
  playSupafly.style.display = 'none';
  pauseSupafly.style.display = 'inline';
} else {
  supafly.pause();
  playSupafly.style.display = 'inline';
  pauseSupafly.style.display = 'none';
}
}
const playStopSupafly =() => {
  if (supafly.played) {
    supafly.pause();
    supafly.currentTime = 0;
    playSupafly.style.display = 'inline';
    pauseSupafly.style.display = 'none';
  }
  }