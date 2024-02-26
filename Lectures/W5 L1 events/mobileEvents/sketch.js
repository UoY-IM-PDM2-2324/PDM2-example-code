let shapeFunctions;
let currentIndex = 0;
let fillColour;

function setup() {
    createCanvas(windowWidth, windowHeight);
    shapeFunctions = [circle, square]
    fillColour = getRandomColour();
}

function draw() {
    background(0);
    fill(fillColour);
    shapeFunctions[currentIndex](width / 2, height / 2, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function deviceMoved() {
    fillColour = getRandomColour();
}

function deviceTurned() {
    // Change shape
    currentIndex = (currentIndex + 1) % shapeFunctions.length;
}


/**
 * Gets a random colour
 * @returns {color}
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}