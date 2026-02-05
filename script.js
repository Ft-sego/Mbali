const config = window.VALENTINE_CONFIG;

/* START SCREEN LOGIC */
const startScreen = document.getElementById("start-screen");
const startEnvelope = document.getElementById("start-envelope");
const mainContent = document.getElementById("main-content");

startEnvelope.addEventListener("click", () => {
    const rect = startEnvelope.getBoundingClientRect();
    explodeHearts(rect.left + rect.width / 2, rect.top + rect.height / 2);

    startScreen.style.opacity = "0";

    setTimeout(() => {
        startScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 800);
});

function explodeHearts(x, y) {
    const hearts = config.floatingEmojis.hearts;
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.className = "explosion-heart";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 250;

        heart.style.left = x + "px";
        heart.style.top = y + "px";
        heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
        heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
}

/* EXISTING APP LOGIC (unchanged essentials) */
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("valentineTitle").textContent = `${config.valentineName}, my love...`;
});

/* BUTTON MOVEMENT */
function moveButton(btn) {
    btn.style.position = "fixed";
    btn.style.left = Math.random() * (window.innerWidth - btn.offsetWidth) + "px";
    btn.style.top = Math.random() * (window.innerHeight - btn.offsetHeight) + "px";
}

/* QUESTION FLOW */
function showNextQuestion(n) {
    document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
    document.getElementById(`question${n}`).classList.remove("hidden");
}

/* CELEBRATION */
function celebrate() {
    document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
    document.getElementById("celebration").classList.remove("hidden");
}
