// Score tracking
var score1 = 0;
var score2 = 0;

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1–6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1–6

  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");

  // Shake animation
  img1.classList.remove("rolling");
  img2.classList.remove("rolling");
  void img1.offsetWidth; // reflow trick to restart animation
  void img2.offsetWidth;
  img1.classList.add("rolling");
  img2.classList.add("rolling");

  // Update dice images
  img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Update result heading
  var h1 = document.querySelector("h1");
  h1.classList.remove("win", "draw");

  if (randomNumber1 > randomNumber2) {
    h1.textContent = "🚩 Player 1 Wins!";
    h1.classList.add("win");
    score1++;
  } else if (randomNumber2 > randomNumber1) {
    h1.textContent = "Player 2 Wins! 🚩";
    h1.classList.add("win");
    score2++;
  } else {
    h1.textContent = "✨ It's a Draw!";
    h1.classList.add("draw");
  }

  // Update score display
  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;
}

function resetScores() {
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").textContent = 0;
  document.getElementById("score2").textContent = 0;
  document.querySelector("h1").textContent = "Roll the Dice!";
  document.querySelector("h1").classList.remove("win", "draw");
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
