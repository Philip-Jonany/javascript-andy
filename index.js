const R = "🗿"
const P = "📄"
const S = "✂️"
let choicesArray = [R, P, S];
let choice = "";
let messageEl = document.getElementById("message-id");
let result = document.createElement('div');
result.className = ("result");

function newGame() {
    messageEl.innerText = "CHOOSE AN OPTION";
    choice = "";
}

function setChoice(newChoice) {
    choice = choicesArray[newChoice];
    messageEl.innerText = "YOU CHOSE: " + choice;
    result.remove();
}
function chooseRandom() {
    return choicesArray[Math.floor(Math.random() * 3)];
}

function confirm() {
    if (choice == "") {
        alert("YOU HAVE NOT CHOSEN AN OPTION YET!");
    }
    else {
        let botChoice;
        for (let i = 0; i < 10; i++) {
            botChoice = chooseRandom();
        }

        resultString = choice + botChoice

        if (choice == botChoice) {
            tie(choice, botChoice);
        }
        else if (resultString == R + S || resultString == P + R || resultString == S + P) {
            win(choice, botChoice);
        }
        else {
            lose(choice,botChoice);
        }
    }
}
function tie(s1, s2) {
    result.innerText = "COMPUTER CHOSE: " + s2 + " \n ";
    result.innerText += s1 + "   YOU TIED   " + s2;
    document.body.append(result);
}
function win(s1, s2) {
    result.innerText = "COMPUTER CHOSE: " + s2 + " \n ";
    result.innerText += s1 + "   YOU WON!!!   " + s2;
    document.body.append(result);
}
function lose(s1, s2) {
    result.innerText = "COMPUTER CHOSE: " + s2 + " \n ";
    result.innerText += s1 + "   YOU LOST   " + s2;
    document.body.append(result);
}
