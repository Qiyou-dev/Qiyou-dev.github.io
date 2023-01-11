let fAircraft = ["ACA123", "WJA456", "CGNDU", "BAW274", "DLH448"]
let sAircraft = ["WJA567", "CGNDV", "BAW278", "DLH258", "ACA1118"]
let fRandomSpeed = 0;
let sRandomSpeed = 0;
let fRandomTime = 0;
let sRandomTime = 0;
let index = 0;
let fAnswer = 0;
let sAnswer = 0;
let tAnswer = 0;

const newEasyProblem = () => {
    document.querySelector("#hardInstructions").innerHTML = "";
    clearAnswers();
    loadACID();
    loadEasySpeed();    
    computeAnswers();
}
const newHardProblem = () => {
    document.querySelector("#hardInstructions").innerHTML = "To match the answers, round miles/min to the nearest integer. Round closure to nearest 60 kts if +-10. Round time down"
    clearAnswers();
    loadACID();
    loadHardSpeed();   
    computeAnswers();
}
const clearAnswers = () => {
    document.querySelector("#fanswer").innerHTML = "";
    document.querySelector("#sanswer").innerHTML = "";
    document.querySelector("#tanswer").innerHTML = "";
}
const loadACID = () => {
    index = Math.floor(Math.random() * 5);
    document.querySelector("#fplane").innerHTML = fAircraft[index];
    document.querySelector("#splane").innerHTML = sAircraft[index];
    document.querySelector("#fquestion").innerHTML = fAircraft[index];
    document.querySelector("#squestion").innerHTML = sAircraft[index];
}
const loadEasySpeed = () => {
    fRandomSpeed = getRandomInt(4, 8) * 60;
    sRandomSpeed = fRandomSpeed + getRandomInt(1, 3) * 60;
    fRandomTime = getRandomInt(1800, 1805);
    sRandomTime = fRandomTime + getRandomInt(3, 7);
    document.querySelector("#fspeed").innerHTML = fRandomSpeed;
    document.querySelector("#sspeed").innerHTML = sRandomSpeed;
    document.querySelector("#ftime").innerHTML = fRandomTime;
    document.querySelector("#stime").innerHTML = sRandomTime;
}
const loadHardSpeed = () => {
    fRandomSpeed = getRandomInt(24, 54) * 10;
    sRandomSpeed = fRandomSpeed + getRandomInt(2, 12) * 10;
    fRandomTime = getRandomInt(1800, 1805);
    sRandomTime = fRandomTime + getRandomInt(3, 7);
    document.querySelector("#fspeed").innerHTML = fRandomSpeed;
    document.querySelector("#sspeed").innerHTML = sRandomSpeed;
    document.querySelector("#ftime").innerHTML = fRandomTime;
    document.querySelector("#stime").innerHTML = sRandomTime;
}
const computeAnswers = () => {
    let timeDiff = sRandomTime - fRandomTime;
    let speedDiff = (sRandomSpeed - fRandomSpeed);
    if ((speedDiff + 10) % 60 == 0) {
        speedDiff += 10;
    }
    else if ((speedDiff + 10) % 60 == 0) {
        speedDiff -= 10;
    }
    let closure = speedDiff / 60;
    fAnswer = Math.round(sRandomSpeed/60) * timeDiff;
    sAnswer = Math.round(fRandomSpeed/60) * timeDiff;
    tAnswer = Math.floor(fRandomTime + ((fAnswer - 5) / closure));
    if (tAnswer >= 1860) {
        tAnswer += 40;
    }
    if (tAnswer >= 1960) {
        tAnswer += 40;
    }
}
const fCheckAnswer = () => {
    document.querySelector("#fanswer").innerHTML = fAnswer; 
}
const sCheckAnswer = () => {
    document.querySelector("#sanswer").innerHTML = sAnswer;
}
const tCheckAnswer = () => {
    document.querySelector("#tanswer").innerHTML = tAnswer;
}

// helper functions

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector("#newEasy").addEventListener("click", newEasyProblem)
document.querySelector("#newHard").addEventListener("click", newHardProblem)
document.querySelector("#fbutton").addEventListener("click", fCheckAnswer)
document.querySelector("#sbutton").addEventListener("click", sCheckAnswer)
document.querySelector("#tbutton").addEventListener("click", tCheckAnswer)
addEventListener('DOMContentLoaded', () => {newEasyProblem()});