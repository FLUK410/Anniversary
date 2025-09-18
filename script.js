// ⏳ Anniversary Timer
const anniversaryDate = new Date("2025-08-10T00:00:00");

function updateAnniversary() {
  const now = new Date();
  let diff = now - anniversaryDate; // ส่วนต่างเวลา (ms)

  if (diff < 0) diff = 0; // กันไม่ให้ติดลบถ้าวันยังไม่ถึง

  // แปลง ms → วัน ชั่วโมง นาที วินาที
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // แสดงผล
  document.getElementById("anniversary").innerText =
    `เราอยู่ด้วยกันมาแล้ว: ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที 💖`;
}

// อัปเดตทุกวินาที
setInterval(updateAnniversary, 1000);
updateAnniversary();

// 📸 Gallery
document.addEventListener("DOMContentLoaded", () => {
  let upload = document.getElementById("upload");
  if (upload) {
    upload.addEventListener("change", (e) => {
      let files = e.target.files;
      let gallery = document.getElementById("gallery");
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (ev) => {
          let img = document.createElement("img");
          img.src = ev.target.result;
          gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// 🎮 Mini Game
let score = 0, timer, gameInterval;
function startGame() {
  let gameArea = document.getElementById("gameArea");
  let scoreDisplay = document.getElementById("score");
  score = 0;
  scoreDisplay.innerText = "คะแนน: 0";
  gameArea.innerHTML = "";

  timer = 10;
  gameInterval = setInterval(() => {
    let heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "absolute";
    heart.style.top = Math.random() * 260 + "px";
    heart.style.left = Math.random() * 460 + "px";
    heart.style.cursor = "pointer";
    heart.style.fontSize = "24px";

    heart.onclick = () => {
      score++;
      scoreDisplay.innerText = "คะแนน: " + score;
      heart.remove();
    };

    gameArea.appendChild(heart);
  }, 500);

  setTimeout(() => {
    clearInterval(gameInterval);
    alert("หมดเวลา! คุณได้ " + score + " คะแนน 🎉");
  }, timer * 1000);
}

// 💌 Feelings
function saveFeeling() {
  let input = document.getElementById("feelingInput");
  let list = document.getElementById("feelingsList");
  if (input.value.trim() !== "") {
    let p = document.createElement("p");
    p.innerText = input.value;
    list.appendChild(p);
    input.value = "";
  }
}
