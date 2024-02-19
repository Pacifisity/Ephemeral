// Variable Initialization
let name = localStorage.getItem('name') || "Your Name";
let days = parseInt(localStorage.getItem('days')) || 0;
let years = parseInt(localStorage.getItem('years')) || 0;
let health = parseInt(localStorage.getItem('health')) || 100;
let sanity = parseInt(localStorage.getItem('health')) || 100;
let happiness = parseInt(localStorage.getItem('health')) || 100;

const intro = document.getElementById('intro');
const healthBar = document.getElementById('health-bar');
const sanityBar = document.getElementById('sanity-bar');
const happinessBar = document.getElementById('happiness-bar');

// Function Initialization
function incrementAge() {
    days++;
    if (days === 365) {
        days = 0;
        years++;
    }

    document.getElementById('age').innerText = `Age: ${years}y ${days}d`;

    if (years > 80) {
        updateStatus(-1, 'health');
    } else if (years > 50) {
        updateStatus(-0.3, 'health')
    } else if (years > 30) {
        updateStatus(0.1, 'health')
    } else if (years > 18) {
        updateStatus(0.3, 'health')
    } else {
        updateStatus(1, 'health')
    }

    updateStatus(1, 'sanity')
    
    updateStatus(1, 'happiness')
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

function updateStatus(change, status) {
    if (status == "health") {
        health = Math.max(0, Math.min(health + change, 100)) ;
        healthBar.style.width = health + '%';
    } else if (status == "sanity") {
        sanity = Math.max(0, Math.min(sanity + change, 100)) ;
        sanityBar.style.width = sanity + '%';
    } else if (status == "happiness") {
        happiness = Math.max(0, Math.min(happiness + change, 100)) ;
        happinessBar.style.width = happiness + '%';
    }
}

// Main Game Loop
if (name !== "Your Name") {
    intro.remove();

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('days', days);
        localStorage.setItem('years', years);
        localStorage.setItem('health', health);
        localStorage.setItem('sanity', sanity);
        localStorage.setItem('happiness', happiness);
    });
    
    document.getElementById('name').innerText = name;
    document.getElementById('age').innerText = `Age: ${years}y ${days}d`;
    
    setInterval(incrementAge, 1000); // Increment every second
}