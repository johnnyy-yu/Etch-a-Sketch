window.addEventListener("load", getColor, false)
window.addEventListener("load", sketchPad, false)

//Change size of drawing pad
const drawingPad = document.querySelector('.sketch-pad');

function sizeOfDrawingPad(size) {
    for (let i = 0; i < size; i++) {
        let boxes = document.createElement('div')
        boxes.className = "boxes"
        boxes.id = "box" + i
        drawingPad.append(boxes)
    }
}

sizeOfDrawingPad(1024);

const sizeSlider = document.querySelector(".slider");

sizeSlider.addEventListener("change", changeSize);
var size;

function changeSize(event) {
    size = event.target.value;
    clearDivBlocks();
    drawingPad.setAttribute("style", "grid-template-columns: repeat(" + size + " ,1fr)");
    sizeOfDrawingPad(size * size);
    sketchPad();
    changeBackgroundColor();
}

function clearDivBlocks () {
    while (drawingPad.firstChild) {
        drawingPad.removeChild(drawingPad.firstChild);
    };
}

//addEventListener to boxes in the Sketch Pad
let coloring = '#000000';

function sketchPad() {
    boxes = document.querySelectorAll('.boxes');
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
    // colorFromPicker.value = coloring;
    colorFromPicker.addEventListener("input", changeColor, false);
    colorFromPicker.addEventListener("change", changeColor, false);
}

function changeColor (event) {
    coloring = event.target.value;
    sketchPad();
}

//Change background color
let backgroundColor = "#ffffff";
let boxes = document.querySelectorAll('.boxes');
const backgroundColorPicker = document.querySelector(".background-color-picker");

backgroundColorPicker.addEventListener("input", getBackgroundColor, false);
backgroundColorPicker.addEventListener("change", getBackgroundColor, false);

function getBackgroundColor(event) {
    backgroundColor = event.target.value;
    changeBackgroundColor();
}

function changeBackgroundColor () {
    console.log(backgroundColor)
    console.log(boxes)
    for (let i = 0; i < boxes.length; ++i) {
        boxes.item(i).setAttribute('style', "background-color: " + backgroundColor)
    }
}

//Eraser for Sketch Pad
const eraserButton = document.querySelector(".eraser");
eraserButton.addEventListener("change", erase, false)

function erase (event) {
    if (event.target.checked) {
        erasing();
    } else {
        sketchPad();
    }
}

function erasing () {
    const boxes = document.querySelectorAll('.boxes');

        for (let i = 0; i < boxes.length; i++) {
            boxes.item(i).addEventListener('mouseover', () => {
                boxes.item(i).setAttribute('style', "background-color: " + backgroundColor)
            })
        }
}

//Clear Sketch Pad
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear, false)

function clear () {
    for (let i = 0; i < boxes.length; ++i) {
        boxes.item(i).setAttribute('style', "background-color: white")
    }
    erasing()
}


