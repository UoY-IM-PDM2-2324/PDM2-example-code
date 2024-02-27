const colours = new Map();

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    for (let i = 1; i <= 5; i++) {
        colours.set(i, getRandomColour());
    }
}

function draw() {
    if (touches.length === 0 || touches.length > 5) {
        background(0); // clear the canvas
    }
    else {
        fill(colours.get(touches.length));
        for (const t of touches) {
            circle(t.x, t.y, 50);
        }
    }
}

/**
 * p5.js event function that fires when the window changes size
 */
function windowResized() {
    // p5.js function to resize the canvas
    resizeCanvas(windowWidth, windowHeight);
}



/**
 * Gets a random colour
 * @returns {color}
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}