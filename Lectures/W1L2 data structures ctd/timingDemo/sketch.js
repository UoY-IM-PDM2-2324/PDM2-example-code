/**
 * To run these experiments, open your browser console and enter:
 * runExperiment(arrayName, functionName);
 * where arrayName should be one of the four array variables below
 * and functionName should be either findMax or printArray.
 * 
 * For example:
 * runExperiment(arr10000000, findMax);
 * 
 * This will show how long it takes to find the largest value in an array of
 * 10,000,000 positive numbers.
 */
let experimentRunning = false;
/**
 * Explanation of the following syntax:
 * Array(length) creates an array of the given length with no elements e.g. the item at index 0 will be undefined
 * The array keys() method returns a special object (an Iterator) containing each index
 * ... is known as the "spread operator". It breaks apart the contents of an object / array
 * [...someObject] copies the contents of someObject into an new array
 */
const arr10 = [...Array(10).keys()];
const arr1000 = [...Array(1000).keys()];
const arr100000 = [...Array(100000).keys()];
const arr10000000 = [...Array(10000000).keys()];

function setup() {
    createCanvas(400, 400);
    fill(255, 0, 0);
}

function draw() {
    background(0);
    circle(width / 2, height / 2, frameCount % 100);
}

/**
 * Runs a function that expects an array and prints how long the function took
 * to run.
 * @param {any[]} arr The array to pass to the function to be timed.
 * @param {Function} func The function to times.
 */
function runExperiment(arr, func) {
    fill(255);
    const start = Date.now();
    const response = func(arr);
    const end = Date.now();
    fill(255, 0, 0);
    console.log(`Running ${func.name} on an array of length ${arr.length} took: ${end - start} milliseconds. Response =`, response);
}

/**
 * Finds the largest number in an array of positive integers. Assumes the array 
 * is unsorted.
 * @param {number[]} arr An array of positive integers
 * @returns {number} The largest number in the array, or -1 if the array is empty.
 */
function findMax(arr) {
    let max = -1;
    for (const item of arr) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}


/**
 * Finds the largest number in an array of positive integers. Assumes the array 
 * is sorted.
 * @param {number[]} arr A sorted array of positive integers
 * @returns {number} The largest number in the array, or -1 if the array is empty
 */
function findMaxSorted(arr) {
    if (arr.length === 0) {
        return -1;
    }
    return arr[arr.length - 1];
}


/**
 * Prints each item in an array.
 * @param {any[]} arr Any array
 * @returns {String} The message "Done"
 */
function printArray(arr) {
    for (const item of arr) {
        console.log(item);
    }
    return "Done";
}
