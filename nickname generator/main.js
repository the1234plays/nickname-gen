let firstName = document.getElementById("input1");
let lastName = document.getElementById("input2");
document.getElementById("random").addEventListener("click", randomBtn);
document.getElementById("all").addEventListener("click", allBtn);


let containerEl = document.getElementById("container");

let nick = [" the robot", " the weirdo", " the sickman", "the goat", "the best"];


function randomBtn() {


    containerEl.innerHTML = firstName.value + ' ' + nick[randomInt(0, 5)] + ' ' + lastName.value;
}


function allBtn() {
    let divStr = "";
    for (let i = 0; i < nick.length; i++) {
        divStr += `<div>${firstName.value + ' ' + nick[i] + " " + lastName.value}</div>`;
        
    }
    containerEl.innerHTML = divStr;
}