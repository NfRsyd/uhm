function wrong(button) {
    button.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-7px)" },
            { transform: "translateX(7px)" },
            { transform: "translateX(-4px)" },
            { transform: "translateX(0)" }
        ],
        { duration: 350 }
    );

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}

function correct() {

    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;
        music.play();
    }

    document.getElementById("quiz").classList.remove("active");
    document.getElementById("surprise").classList.add("active");

    let number = 3;
    const countdown = document.getElementById("countdown");
    const ring = document.querySelector(".countdown-ring");

    countdown.textContent = number;

    const timer = setInterval(() => {
        number--;

        if (number > 0) {
            countdown.textContent = number;

            ring.style.background =
                `conic-gradient(
                    var(--pink) ${((3 - number) / 3) * 360}deg,
                    #ffd9e3 0deg
                )`;

        } else {
            clearInterval(timer);

            document.getElementById("surprise").classList.remove("active");
            document.getElementById("final").classList.add("active");

            createHearts();
        }
    }, 1000);
}

function createHearts() {
    const heartSymbols = ["❤️", "💕", "💗", "💖", "💓"];

    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            createHeart(heartSymbols);
        }, i * 120);
    }

    setInterval(() => {
        createHeart(heartSymbols);
    }, 450);
}

function createHeart(symbols) {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-40px";

    heart.style.fontSize =
        13 + Math.random() * 23 + "px";

    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8500);
}
