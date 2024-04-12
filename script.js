function play(playerChoice) {
    clearResult(); // Clear result text before starting the game again
    disableButtons(); // Disable buttons while timer is running
    startTimer(playerChoice);
}


function startTimer(playerChoice) {
    let timeLeft = 3; // 3 seconds
    const timerElement = document.getElementById('timer');
    const timerInterval = setInterval(() => {
        timerElement.innerText = `${timeLeft}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            enableButtons();
            revealWinner(playerChoice);
        }
    }, 1000);
}

function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function revealWinner(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = getResult(playerChoice, computerChoice);

    document.getElementById('timer').innerText = result;
}

function clearResult() {
    document.getElementById('timer').innerText = '';
}

function startGame() {
    document.getElementById('game').style.display = 'flex'; 
    document.querySelector('.play-btn').style.display = 'none'; 
}


function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}
