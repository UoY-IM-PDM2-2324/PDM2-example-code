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
        fill(0)
        rect(0, 20, 50, 20);
        fill(255);
        textSize(18);
        text(`Touch ids: ${touches.map(t => t.id).join(", ")}`, 2, 20);
        for (const t of touches) {
            fill(colours.get(t.id + 1));
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


function touchStarted() {
    // touches is a system variable storing an array of touch objects
    // each object has an x and y and a unique id that can be used to 
    // track a touch as it moves
    for (const touch of touches) {
        console.log(touch);
    }
}