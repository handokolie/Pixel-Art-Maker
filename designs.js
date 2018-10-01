/** The function makeGrid that dynamically creates a grid
* that the user can interact with.*/
function makeGrid() {
  // Assign the height and width of the canvas as variables.
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('input#inputWidth').value;
  // Assign the canvas DOM as a variable table.
  const table = document.querySelector('#pixelCanvas');
  // Refresh the table when the makeGrid function is called.
  table.innerHTML = '';
  // Assign the value of the colorPicker as a variable color.
  const color = document.querySelector('#colorPicker').value;
  /** Use a nested for loop to construct the canvas
  * and attach an event listener in each cell of the canvas.*/
  for (var r = 0; r < height; r += 1) {
    // Create a new row and append the newly added row to the canvas.
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for (var c = 0; c < width; c += 1) {
      // Create a new cell within each row.      
      const tableColumn = document.createElement('td');
      /** Attach an event listener in each newly added cell,
      * so the grids could still be coloured
      * even before the user 'Pick A Color'.*/
      tableColumn.addEventListener('click', function () {
        tableColumn.style.backgroundColor = color;
      });
      // Append the newly added cell to the row.
      tableRow.appendChild(tableColumn);
    }
  }
}

// Function that changes the colour of each grid.
function changeColor() {
  const cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (event) {
      const color = document.querySelector('#colorPicker').value;
      event.target.style.backgroundColor = color;
    });
  }
}

// When the submit button is clicked by the user, call makeGrid()
const submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', function (event) {
  event.preventDefault();
  makeGrid();
});

// When the Pick A Color button is clicked by the user, call changeColor().
const pickColor = document.querySelector('input[type="color"]');

pickColor.addEventListener('click', function () {
  changeColor();
});
