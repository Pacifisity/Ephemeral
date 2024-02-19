// Assuming you have a variable 'health' that represents the current health value
let health = 50; // Example health value (can be dynamic)

// Function to update the health bar
function updateHealthBar() {
    const healthBar = document.getElementById('healthBar');
    const healthFill = document.getElementById('healthFill');
    
    // Ensure health is within the valid range (0 to 100)
    health = Math.max(0, Math.min(health, 100));

    // Calculate the width percentage based on the health value
    const fillWidth = health + '%';

    // Update the fill width with a smooth transition
    healthFill.style.width = fillWidth;
}

// Example: Update health to see the health bar change
health = 50; // Update health value (can be dynamic)
updateHealthBar();
