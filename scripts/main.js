var boundaries = document.querySelectorAll(".boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var statu = document.getElementById("status");
var won = false;
var lost = false;

var gameRunning = false;

start.addEventListener("mouseenter", function () {
  won = false;
  lost = false;

  gameRunning = true;
  statu.textContent = "The game has started";
  reset();
});

end.addEventListener("mouseenter", function () {
  if (won || lost) {
    return;
  }

  if (gameRunning) {
    win();
  }
});

boundaries.forEach(function (boundary) {
  boundary.addEventListener("mouseenter", function () {
    if (won || lost) {
      return;
    }

    if (gameRunning) {
      lose();
    }
  });
});

function lose() {
  gameRunning = false;
  boundaries.forEach(function (boundary) {
    boundary.classList.add("highlighted");
  });
  statu.textContent = "You Lost";
  lost = true;
}

function win() {
  gameRunning = false;
  statu.textContent = "You Won";
  won = true;
}

function reset() {
  boundaries.forEach(function (boundary) {
    boundary.classList.remove("highlighted");
  });
}
