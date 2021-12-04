//Create sketch pad
const sketchPad = document.querySelector('.sketch-pad');
const defaultSize = 32

function createSketchPad(size) {
    for (let i = 0; i < size; i++) {
        let boxes = document.createElement('div')
        boxes.className = "boxes"
        sketchPad.append(boxes)
    }
}

createSketchPad(defaultSize * defaultSize);

//Change size of sketchPad
const sizeSlider = document.querySelector(".slider");
sizeSlider.addEventListener("change", changeSize);

function changeSize(event) {
    let size = event.target.value;
    removeOldSketchPad();
    sketchPad.setAttribute("style", "grid-template-columns: repeat(" + size + " ,1fr)");
    createSketchPad(size * size);
    assignPenColor();
    changeBackgroundColor();
}

function removeOldSketchPad () {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    };
}

//Assign pen color
window.addEventListener("load", assignPenColor, false)
const defaultPenColor = "#000000"
let penColor = defaultPenColor;

function assignPenColor() {
    boxes = document.querySelectorAll('.boxes');
    let color = "background-color: " + penColor;
    console.log(color)

    for (let i = 0; i < boxes.length; i++) {
        boxes.item(i).addEventListener('mouseover', () => {
            boxes.item(i).setAttribute('style', color)
        })
    }
}

//Change pen color
window.addEventListener("load", getPenColorFromPicker, false)
const colorFromPicker = document.querySelector(".color-picker");

function getPenColorFromPicker() {
    colorFromPicker.addEventListener("input", changePenColor, false);
    colorFromPicker.addEventListener("change", changePenColor, false);
}

function changePenColor (event) {
    penColor = event.target.value;
    assignPenColor();
}

//Change background color
const defaultBackgroundColor = "#ffffff"
let backgroundColor = defaultBackgroundColor;
let boxes = document.querySelectorAll('.boxes');
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
const eraserSwitch = document.querySelector(".eraser");
eraserSwitch.addEventListener("change", eraserCheck, false)

function eraserCheck (event) {
    if (event.target.checked) {
        eraser();
    } else {
        assignPenColor();
    }
}

function eraser () {
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
}


