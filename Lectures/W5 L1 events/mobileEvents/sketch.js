
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    for (const t of touches) {
        circle(t.x, t.y, 50);
    }
    if (touches.length === 5) {
        background(0); // clear the canvas
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



/**
 * Gets a random colour
 * @returns {color}
 */
function getRandomColour() {
    return color(random(255), random(255), random(255));
}