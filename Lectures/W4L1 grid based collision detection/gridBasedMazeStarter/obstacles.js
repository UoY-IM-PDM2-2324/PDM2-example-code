class Obstacle extends GameObject {
    
    #solidness;
    #colour;


    /**
     * Creates a new generic obstacle
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     * @param {number} w The width of the obstacle
     * @param {number} h The height of the obstacle
     * @param {number} solidness A number between 0 and 1. 1 means completely solid. Lower numbers provide resistance but can be passed through.
     * @param {Color} colour The colour of the obstacle
     */
    constructor(x, y, w, h, solidness, colour) {
        super(x, y, w, h);
        this.#solidness = solidness;
        this.#colour = colour;
    }


    /**
     * Gets the solidness
     * @returns {number}
     */
    getSolidness() {
        return this.#solidness;
    }


    /**
     * Draw the obstacle
     * @override
     */
    draw() {
        noStroke();
        fill(this.#colour);
        rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
    }
}


class Wall extends Obstacle {


    /**
     * Creates a new wall
     * @param {number} x The x coordinate
     * @param {number} y The y coordinate
     * @param {number} w The width
     * @param {number} h The height
     */
    constructor(x, y, w, h) {
        super(x, y, w, h, 1, color(100));
    }
}