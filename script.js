// ===== แสดงซ่อนหน้า =====
function showSection(id) {
  document.querySelector(".menu-container").style.display = "none";
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function backToMenu() {
  document.querySelector(".menu-container").style.display = "block";
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
}

// ===== วันครบรอบ =====
const startDate = new Date(2025, 7, 10); // 10 สิงหาคม 2025

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.innerHTML = `
      เราอยู่ด้วยกันมาแล้ว 💖<br>
      ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที
    `;
  }
}
setInterval(updateTimer, 1000);
updateTimer();

// ===== แกลเลอรี่ =====
document.addEventListener("DOMContentLoaded", () => {
  const upload = document.getElementById("upload");
  if (upload) {
    upload.addEventListener("change", (e) => {
      const files = e.target.files;
      const gallery = document.getElementById("gallery-display");
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = document.createElement("img");
          img.src = ev.target.result;
          gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// ===== ของขวัญพิเศษ =====
function showHearts() {
  const container = document.getElementById("heart-container");
  container.innerHTML = "";
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heart.style.animation = `floatUp ${3 + Math.random() * 2}s linear infinite`;
    container.appendChild(heart);
  }
}

const style = document.createElement("style");
style.textContent = `
@keyframes floatUp {
  0% { transform: translateY(100%); opacity: 1; }
  100% { transform: translateY(-120%); opacity: 0; }
}`;
document.head.appendChild(style);
