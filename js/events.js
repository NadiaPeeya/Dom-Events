//a way to setting onlick on button and give function 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
const buttonColor = document.getElementById('make-green');
//JUST write the function name only 
buttonColor.onclick = buttonGreen;//jokhon id dibo button e only tokhon ar function call () no need

function buttonGreen() {
    document.body.style.backgroundColor = 'green';
}

const makeBlue = document.getElementById('make-blue');
//anonymous function
makeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}
//another way with addEvenetListener.
const changeToPink = document.getElementById('make-hotPink');
changeToPink.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'hotpink';
}
// other way calling direct function and work on it
const changeToGolden = document.getElementById('make-goldenrod');
changeToGolden.addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

//another way without declaring variable //direct shortcut
document.getElementById('make-lightBlue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})
