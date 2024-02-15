let count = 1;
let count2 = 0;
let count3 = 0;

let numberButton = document.getElementById('numberButton');
let numberButton2 = document.getElementById('numberButton2');
let numberButton3 = document.getElementById('numberButton3');

let number = 0

console.log()

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

    console.log(number)

    if (isNaN(inputValue) || inputValue == "") {
        alert("UwU! Not a valid number nya~.");
    } else if (count < 100 || count2 < 100 || count3 < 100) {
        alert("Nya~! All 3 nyamber boxes must be higher than 100, purrr! UwU, make sure they reach that triple-digit milestone, nya!")
    } else {
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
