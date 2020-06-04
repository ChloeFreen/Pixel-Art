/**
 * Take height and width 
 * Loop and add coloums and rows to grid
 * append to table
 *
 * @param {*} height
 * @param {*} width
 */
function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop over each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // inject grid into table
    table.innerHTML = grid;


    cellClickEventListner();
}

/**
 * Add Click event listner to all cells
 *
 */
function cellClickEventListner() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

/**
 * get user inpuit height width
 * invoke makeGrid()
 *
 */
function submitForm() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

/**
 * redraw canvas to clear colour values
 *
 */
function resetCanvas() {
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);


}

// attach onSubmit to submit button
document.getElementById('sizePicker').onsubmit = function () {
    submitForm();
};

// attach onclick top button
document.getElementById('resetButton').onclick = function () {
    resetCanvas();
};

makeGrid(15, 15);