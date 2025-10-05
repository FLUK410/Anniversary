// วันครบรอบ
const anniversaryDate = new Date("2025-08-10T00:00:00");

function updateAnniversary() {
  const now = new Date();
  let diff = now - anniversaryDate;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const timerEl = document.getElementById("anniversary");
  if (timerEl) {
    timerEl.innerText = `เราอยู่ด้วยกันมาแล้ว: ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที 💖`;
  }
}

setInterval(updateAnniversary, 1000);
updateAnniversary();
