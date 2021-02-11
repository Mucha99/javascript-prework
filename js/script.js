function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyczki";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nożyczki") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "nożyczki" && argPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Komputer wygrał!");
    } else if (argComputerMove == "nożyczki" && argPlayerMove == "papier") {
      printMessage("Komputer wygrał!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyczki") {
      printMessage("Komputer wygrał!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    } else if (argComputerMove == "nożyczki" && argPlayerMove == "nożyczki") {
      printMessage("Remis!");
    } else if (argPlayerMove == "nieznany ruch") {
      printMessage("Wpisz 1, 2 lub 3 !");
    }
  }

  // ruch komuptera
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  // if (randomNumber == 1) {
  //   computerMove = "kamień";
  // } else if (randomNumber == 2) {
  //   computerMove = "papier";
  // } else if (randomNumber == 3) {
  //   computerMove = "nożyczki";
  // }

  printMessage("Mój ruch to: " + computerMove);

  // ruch gracza

  // let playerInput = prompt(
  //   "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  // );

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  // if (playerInput == "1") {
  //   playerMove = "kamień";
  // } else if (playerInput == "2") {
  //   playerMove = "papier";
  // } else if (playerInput == "3") {
  //   playerMove = "nożyczki";
  // }

  printMessage("Twój ruch to: " + playerMove);

  // wynik gry
  displayResult(computerMove, playerMove);
}

// listenery
document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
});

document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
});

document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
});
