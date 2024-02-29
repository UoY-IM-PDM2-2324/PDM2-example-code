let inventoryMenu;


function setup() {
    createCanvas(600, 400);
    const menuOptions = createMenuOptions();
    inventoryMenu = new PieMenu(menuOptions);
}

function draw() {
    background(0);
    inventoryMenu.draw();
}

function mouseClicked() {
    inventoryMenu.tryActivate(mouseX, mouseY);
    inventoryMenu.checkClick(mouseX, mouseY);
}

/**
 * Creates an array of pie menu options
 * @returns {MenuButton[]}
 */
function createMenuOptions() {
    // Images from https://nookipedia.com/wiki/Category:Animal_Crossing_inventory_icons
    const options = [];
    options.push(new MenuButton("assets/apple.png", color(99, 99, 255), () => menuOptionClicked("apple")));
    options.push(new MenuButton("assets/axe.png", color(99, 99, 255), () => menuOptionClicked("axe")));
    options.push(new MenuButton("assets/book.png", color(99, 99, 255), () => menuOptionClicked("book")));
    options.push(new MenuButton("assets/camera.png", color(99, 99, 255), () => menuOptionClicked("camera")));
    options.push(new MenuButton("assets/orange.png", color(99, 99, 255), () => menuOptionClicked("orange")));
    options.push(new MenuButton("assets/pear.png", color(99, 99, 255), () => menuOptionClicked("pear")));
    options.push(new MenuButton("assets/wallpaper.png", color(99, 99, 255), () => menuOptionClicked("wallpaper")));
    return options;
}

/**
 * Click event handler for all menu buttons.
 * @param {string} msg The message to print.
 */
function menuOptionClicked(msg) {
    console.log(msg);
}