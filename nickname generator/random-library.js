// Library of Random Functions

//Return a random decimal between low(inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high-low) + low;
}

//Return a random integer between low(inclusive) and high (exclusive)
function randomInt(low, high) {
    return Math.floor(Math.random() * (high-low) + low);
}

//Return a random rgb string
function randomRGB() {
    let r = randomInt(0, 256)
    let g = randomInt(0, 256)
    let b = randomInt(0, 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Return a random array
function randomElement (anArray) {
    return anArray[randomInt(0, anArray.length)]

}