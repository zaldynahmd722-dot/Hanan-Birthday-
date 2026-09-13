const screens = document.querySelectorAll(".screen");

function nextScreen(number) {
  screens.forEach((screen) => screen.classList.remove("active"));

  const target = document.getElementById("screen" + number);

  if (target) {
    target.classList.add("active");
    burst();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function burst() {
  const emojis = ["❤️", "💖", "💕", "✨", "🌷"];

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = 16 + Math.random() * 22 + "px";
      heart.style.animationDuration = 3 + Math.random() * 3 + "s";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 6500);
    }, i * 90);
  }
}

function makeMagic() {
  const magic = document.getElementById("magic");

  if (!magic) return;

  magic.textContent = "🎉 عيد ميلاد سعيد يا حنان! ❤️";
  burst();

  setTimeout(() => {
    magic.textContent = "✨ ربنا يفرّح قلبك دايمًا ✨";
  }, 1800);
}

const starsContainer = document.querySelector(".stars");

if (starsContainer) {
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.opacity = 0.25 + Math.random() * 0.75;
    star.style.transform = `scale(${0.5 + Math.random() * 1.5})`;
    starsContainer.appendChild(star);
  }
}

setInterval(() => {
  if (Math.random() < 0.6) burst();
}, 3500);
