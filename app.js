let fspeed = [240, 240, 300, 300, 360, 360, 420, 420, 480, 480, 540, 540];
let sspeed = [300, 360, 360, 480, 540, 420, 480, 540, 540, 600, 600, 600];
let ftime = [1800, 1804, 1801, 1803, 1802, 1805, 1800, 1803, 1801, 1804, 1802, 1805];
let stime = [1807, 1809, 1805, 1806, 1810, 1811, 1804, 1806, 1804, 1806, 1804, 1808];
let fanswer = 0;
let sanswer = 0;
let tanswer = 0;

const newProblem = () => {
    document.querySelector("#fanswer").innerHTML = "";
    document.querySelector("#sanswer").innerHTML = "";
    document.querySelector("#tanswer").innerHTML = "";
    let index = Math.floor(Math.random() * 12);
    document.querySelector("#fspeed").innerHTML = fspeed[index];
    document.querySelector("#sspeed").innerHTML = sspeed[index];
    document.querySelector("#ftime").innerHTML = ftime[index];
    document.querySelector("#stime").innerHTML = stime[index];
    let timeDiff = stime[index] - ftime[index];
    let closure = (sspeed[index] - fspeed[index]) / 60;
    fanswer = (sspeed[index]/60) * timeDiff;
    sanswer = (fspeed[index]/60) * timeDiff;
    tanswer = Math.floor(ftime[index] + ((fanswer - 5) / closure));
}
const fcheckAnswer = () => {
    document.querySelector("#fanswer").innerHTML = fanswer; 
}
const scheckAnswer = () => {
    document.querySelector("#sanswer").innerHTML = sanswer;
}
const tcheckAnswer = () => {
    document.querySelector("#tanswer").innerHTML = tanswer;
}

document.querySelector("#new").addEventListener("click", newProblem)
document.querySelector("#fb").addEventListener("click", fcheckAnswer)
document.querySelector("#sb").addEventListener("click", scheckAnswer)
document.querySelector("#tb").addEventListener("click", tcheckAnswer)