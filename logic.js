// Variable Initialization
let name = initializeVariable('name', null)
let days = initializeVariable('days', 0)
let years = initializeVariable('years', 0)
let health = initializeVariable('health', 100)
let sanity = initializeVariable('sanity', 100)
let happiness = initializeVariable('happiness', 100)

const intro = document.getElementById('intro');
const healthBar = document.getElementById('health-bar');
const sanityBar = document.getElementById('sanity-bar');
const happinessBar = document.getElementById('happiness-bar');

function saveVariableData() {
    localStorage.setItem('days', days);
    localStorage.setItem('years', years);
    localStorage.setItem('health', health);
    localStorage.setItem('sanity', sanity);
    localStorage.setItem('happiness', happiness);
}

// Other Functions
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

// Function that I half understand, basically just makes initializing variables easier
function initializeVariable(name, defaultValue) {
    if (typeof defaultValue === 'number') {
        return localStorage.getItem(name) ? parseInt(localStorage.getItem(name)) : defaultValue;
    } else {
        return localStorage.getItem(name) ? localStorage.getItem(name) : defaultValue;
    }
}


// Status Functions
function updateHealth(change) {
    health = Math.max(0, Math.min(health + change, 100)) ;
    healthBar.style.width = health + '%';
}

function updateSanity(change) {
    sanity = Math.max(0, Math.min(sanity + change, 100)) ;
    sanityBar.style.width = sanity + '%';
}

function updateHappiness(change) {
    happiness = Math.max(0, Math.min(happiness + change, 100)) ;
    happinessBar.style.width = happiness + '%';
}

// Game Init
if (name !== null) {
    intro.remove();

    window.addEventListener('beforeunload', saveVariableData);
    
    document.getElementById('name').innerText = name;
    document.getElementById('age').innerText = `Age: ${years}y ${days}d`;
    
    healthBar.style.width = health + '%';
    sanityBar.style.width = sanity + '%';
    happinessBar.style.width = happiness + '%';
    
    gameLoop = setInterval(incrementAge, 1); // Increment every second
}

// Game Loop
function incrementAge() {
    days++;
    if (days === 365) {
        days = 0;
        years++;
    }

    document.getElementById('age').innerText = `Age: ${years}y ${days}d`;

    updateHealth(1 - (years/30))

    console.log("Health: " + health)

    if (health <= 0) {
        let itemsToReset = [
            'name', 
            'days', 
            'years', 
            'health', 
            'sanity', 
            'happiness'
        ];

        for (let item of itemsToReset) {
            localStorage.removeItem(item);
        }

        clearInterval(gameLoop);
        window.removeEventListener('beforeunload', saveVariableData);
        location.reload();
    } 
}