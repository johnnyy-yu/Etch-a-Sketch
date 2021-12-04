window.addEventListener("load", getColor, false)
window.addEventListener("load", sketchPad, false)

//Change size of drawing pad
function sizeOfDrawingPad(size) {
    const drawingPad = document.querySelector('.sketch-pad')

    for (let i = 0; i < size; i++) {
        let boxes = document.createElement('div')
        boxes.className = "boxes"
        boxes.id = "box" + i
        drawingPad.appendChild(boxes)
    }
}

sizeOfDrawingPad(256)

//addEventListener to boxes in the Sketch Pad
let coloring = '#000000';
const boxes = document.querySelectorAll('.boxes');

function sketchPad() {
    let color = "background-color: " + coloring;

    for (let i = 0; i < boxes.length; i++) {
        boxes.item(i).addEventListener('mouseover', () => {
            boxes.item(i).setAttribute('style', color)
        })
    }
}

//Changing colors
const colorFromPicker = document.querySelector(".color-picker");

function getColor() {
    colorFromPicker.value = coloring;
    colorFromPicker.addEventListener("input", changeColor, false);
    colorFromPicker.addEventListener("change", changeColor, false);
}

function changeColor (event) {
    coloring = event.target.value;
    sketchPad();
}

//Change background color
let backgroundColor = "#ffffff";
const backgroundColorPicker = document.querySelector(".background-color-picker");

backgroundColorPicker.addEventListener("input", getBackgroundColor, false);
backgroundColorPicker.addEventListener("change", getBackgroundColor, false);

function getBackgroundColor(event) {
    backgroundColor = event.target.value;
    changeBackgroundColor();
}

function changeBackgroundColor () {
    for (let i = 0; i < boxes.length; ++i) {
        boxes.item(i).setAttribute('style', "background-color: " + backgroundColor)
    }
}

//Eraser for Sketch Pad
const eraserButton = document.querySelector(".eraser");
eraserButton.addEventListener("change", erase, false)

function erase (event) {
    if (event.target.checked) {
        const boxes = document.querySelectorAll('.boxes');

        for (let i = 0; i < boxes.length; i++) {
            boxes.item(i).addEventListener('mouseover', () => {
                boxes.item(i).setAttribute('style', "background-color: white")
            })
        }

    } else {
        sketchPad();
    }
}

//Clear Sketch Pad
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear, false)

function clear () {
    for (let i = 0; i < boxes.length; ++i) {
        boxes.item(i).setAttribute('style', "background-color: white")
    }
}


