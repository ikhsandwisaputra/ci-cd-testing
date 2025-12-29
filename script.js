const statusEl = document.getElementById("status");
const deployTimeEl = document.getElementById("deployTime");
const checkBtn = document.getElementById("checkBtn");

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString("id-ID");
}

function checkStatus() {
  statusEl.textContent = "✅ Deployment berhasil!";
  statusEl.style.color = "green";
  deployTimeEl.textContent = getCurrentTime();
}

checkBtn.addEventListener("click", checkStatus);

// Auto check saat halaman dibuka
window.addEventListener("load", () => {
  statusEl.textContent = "🟡 Menunggu pengecekan...";
});
