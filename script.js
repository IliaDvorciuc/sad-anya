const sky = document.querySelector("#sky");
const magicButton = document.querySelector("#magicButton");

if (!sky || !magicButton) {
  throw new Error("Missing required elements");
}

const starSymbols = ["✨", "⭐", "💫", "🌟", "💖", "🌸"];
const confettiColors = ["#ffd166", "#ff69b4", "#7bdff2", "#b8f7d4", "#ffffff"];
const kittyImages = [
  "./images/clipart227928.png",
  "./images/clipart24320.png",
  "./images/clipart22873.png",
  "./images/clipart210696.png",
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];

  star.style.left = `${random(0, 100)}vw`;
  star.style.fontSize = `${random(14, 30)}px`;
  star.style.animationDuration = `${random(5, 11)}s`;
  star.style.animationDelay = `${random(-10, 0)}s`;

  sky.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 12000);
}

function createConfettiBurst(amount = 80) {
  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti";

    piece.style.left = `${random(0, 100)}vw`;
    piece.style.top = `${random(-20, 5)}vh`;
    piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.width = `${random(7, 13)}px`;
    piece.style.height = `${random(10, 20)}px`;
    piece.style.animationDuration = `${random(2.5, 5.5)}s`;
    piece.style.transform = `rotate(${random(0, 360)}deg)`;

    sky.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6500);
  }
}

function createFloatingMessage() {
  const message = document.createElement("div");
  message.className = "star";
  message.textContent = "Аня, улыбнись :)";

  message.style.left = `${random(8, 72)}vw`;
  message.style.fontSize = `${random(18, 28)}px`;
  message.style.animationDuration = `${random(4, 7)}s`;
  message.style.color = "#ffd166";

  sky.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 8000);
}

function createKittyPop() {
  const kitty = document.createElement("img");
  kitty.src = kittyImages[Math.floor(Math.random() * kittyImages.length)];
  kitty.alt = "";
  kitty.className = "kitty-pop";

  kitty.style.left = `${random(8, 82)}vw`;
  kitty.style.top = `${random(8, 75)}vh`;
  kitty.style.width = `${random(54, 96)}px`;

  sky.appendChild(kitty);

  setTimeout(() => {
    kitty.remove();
  }, 3200);
}

setInterval(createStar, 350);

magicButton.addEventListener("click", () => {
  createConfettiBurst(120);
  createFloatingMessage();

  for (let i = 0; i < 6; i += 1) {
    setTimeout(createKittyPop, i * 160);
  }

  magicButton.textContent = "ещё радости ✨";
});
