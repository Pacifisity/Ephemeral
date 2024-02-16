// Variable Initialization
let name = localStorage.getItem('name') || "Your Name";
let days = parseInt(localStorage.getItem('days')) || 0;
let years = parseInt(localStorage.getItem('years')) || 0;

console.log(name, days, years)
var intro = document.getElementById('intro');

// Function Initialization
function incrementAge() {
    days++;
    if (days === 365) {
        days = 0;
        years++;
    }

    document.getElementById('age').innerText = `Age: ${years}y ${days}d`;
}

function createCharacter() {
    const nameInput = document.querySelector('input').value;

    var alphabetical = /^[a-zA-Z]+$/;

    if (alphabetical.test(nameInput)) {
        name = nameInput;

        localStorage.setItem('name', name);
        location.reload();
    } else {
        alert("Names should only contain letters.");
    }
}

// Main Game Loop
if (name !== "Your Name") {
    intro.remove();

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('days', days);
        localStorage.setItem('years', years);
    });
    
    document.getElementById('name').innerText = name;
    document.getElementById('age').innerText = `Age: ${years}y ${days}d`;
    
    setInterval(incrementAge, 1000); // Increment every second
}