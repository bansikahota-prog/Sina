

// ---------------------------------
// 1. SECRET BIRTHDAY LETTER
// ---------------------------------

const envelopeButton =
    document.getElementById("envelopeButton");

const letterContent =
    document.getElementById("letterContent");

envelopeButton.addEventListener("click", function () {

    const isOpen = envelopeButton.classList.toggle("open");

    envelopeButton.setAttribute("aria-expanded", isOpen);

    letterContent.hidden = !isOpen;

    const label = envelopeButton.querySelector(".envelope-label");

    label.textContent = isOpen
        ? "Your special letter is open ♡"
        : "Tap to open your letter";

});


// ---------------------------------
// 2. BIRTHDAY CAKE AND CANDLES
// ---------------------------------

const wishButton =
    document.getElementById("wishButton");

const wishText =
    document.getElementById("wishText");

const candles =
    document.querySelector(".candles");

let candlesBlown = false;

wishButton.addEventListener("click", function () {

    if (candlesBlown) return;

    candles.classList.add("blown");

    wishText.textContent =
        "Your wish is on its way to the universe! 🌙💜";

    wishButton.textContent =
        "Wish Made! ♡";

    wishButton.disabled = true;

    candlesBlown = true;

    makeConfetti(35);

});


// ---------------------------------
// 3. CONFETTI ANIMATION
// ---------------------------------

function makeConfetti(amount) {

    const colors = [
        "#b99ae8",
        "#e5c8ff",
        "#ffffff",
        "#d6b8f2",
        "#f3d4ff"
    ];

    for (let i = 0; i < amount; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6500);

    }

}


// ---------------------------------
// 4. FINAL BIRTHDAY COUNTDOWN
// ---------------------------------

const celebrateButton =
    document.getElementById("celebrateButton");

const overlay =
    document.getElementById("celebrationOverlay");

const countdown =
    document.getElementById("finalCountdown");

const finalMessage =
    document.getElementById("finalMessage");

const closeButton =
    document.getElementById("closeCelebration");

let countdownTimer = null;

celebrateButton.addEventListener("click", function () {

    // Prevent multiple countdowns
    if (overlay.classList.contains("active")) return;

    overlay.classList.add("active");

    overlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    finalMessage.hidden = true;

    countdown.hidden = false;

    let number = 5;

    countdown.textContent = number;

    makeConfetti(60);

    countdownTimer = setInterval(function () {

        number--;

        if (number > 0) {

            countdown.textContent = number;

            makeConfetti(20);

        } else {

            clearInterval(countdownTimer);

            countdownTimer = null;

            countdown.hidden = true;

            finalMessage.hidden = false;

            makeConfetti(120);

        }

    }, 1000);

});


// ---------------------------------
// 5. CLOSE CELEBRATION
// ---------------------------------

closeButton.addEventListener("click", function () {

    if (countdownTimer !== null) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }

    overlay.classList.remove("active");

    overlay.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    countdown.hidden = false;

    finalMessage.hidden = true;

    countdown.textContent = "♡";

});

