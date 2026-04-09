const targetDate = new Date("April 30, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = d.toString().padStart(2, '0');
  document.getElementById("hours").innerText = h.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = s.toString().padStart(2, '0');

}, 1000);
