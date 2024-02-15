let count = 1;
let count2 = 0;
let count3 = 0;

let numberButton = document.getElementById('numberButton');
let numberButton2 = document.getElementById('numberButton2');
let numberButton3 = document.getElementById('numberButton3');

let number = 0;
let numberNotChecked = true;

let hints = 0;
let hintButton = document.getElementById('hintButton');

function incrementNumber() {
    count = count + count2 + Math.random();
    numberButton.innerText = Math.floor(count);
}

function incrementNumber2() {
    count2 = count + count2 + count3 + Math.random()
    numberButton2.innerText = Math.floor(count2);

    count = 0
    numberButton.innerText = 0;
}

function incrementNumber3() {
    count3 = count2 + count3 + Math.random()
    numberButton3.innerText = Math.floor(count3);

    count = 0
    numberButton.innerText = 0;

    count2 = 0
    numberButton2.innerText = 0;
}

function checkForNumber() {
    number = (count * count3 / count2) * 1000000000

    const inputElement = document.querySelector('input');
    const inputValue = inputElement.value;

    if (isNaN(inputValue) || inputValue == "") {
        alert("UwU! Not a valid number nya~.");
    } else if (count < 100 || count2 < 100 || count3 < 100) {
        alert("Nya~! All 3 nyamber boxes must be higher than 100, purrr! UwU, make sure they reach that triple-digit milestone, nya!")
    } else {
        numberNotChecked = false;
        if (inputValue != number) {
            if (inputValue > number) {
                alert("That's not correct, lower! :<")
            } else{
                alert("That's not correct, higher! :<")
            }
        } else {
            alert("Purrr~! That's correct!");
        }
    }
}

function giveHint() {
    if (numberNotChecked) {
        alert("Atleast make an attempt first! Come back after you've used the number checker.")
    } else {
        if (hints == 0) {
            alert("The number changes based on the 3 number boxes")
        } else if (hints == 1) {
            alert("The number to guess is calculated with an equation from the three boxes")
        } else if (hints == 2) {
            alert("Equation: (1*3)/2")
        } else if (hints == 3) {
            alert("Calculating it will not make this easier :)")
        } else if (hints == 4) {
            alert("I'm literally telling you whether or not it's too low or too high >,<")
        } else if (hints == 5) {
            alert("The number is " + number + ", how many hints do you need?!")
        } else {
            alert("I've already given you the answer! What more do you want from me... :<")
        }
        hints++;
        hintButton.innerText = "Hint: " + hints + "/5";
    }

}