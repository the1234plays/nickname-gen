let firstName = document.getElementById("input1");
let lastName = document.getElementById("input2");
document.getElementById("random").addEventListener("click", randomBtn);


let containerEl = document.getElementById("container");

let nick = ["robot", "weirdo", "sickman"];


function randomBtn() {


    containerEl.innerHTML = firstName.value + ' ' + nick[randNum(0, 2)] + ' ' + lastName.value;
}

function randNum(low, high) {
    return Math.floor(Math.random * (high - low) + low);
}