/** The function makeGrid that dynamically creates a grid
* that the user can interact with.*/
function makeGrid() {
  // Assign the height and width of the canvas as variables.
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('input#inputWidth').value;
  // Assign the canvas DOM as a variable table.
  const table = document.querySelector('#pixelCanvas');
  // Refresh the table when the makeGrid function is called.
  table.innerHTML = '';
  // Assign the value of the colorPicker as a variable color.
  let color = document.querySelector('#colorPicker').value;
  /** Use a nested for loop to construct the canvas
  * and attach an event listener in each cell of the canvas.*/
  for (var r = 0; r < height; r += 1) {
    // Create a new row and append the newly added row to the canvas.
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for (var c = 0; c < width; c += 1) {
      /** Create a new cell within each row
      * and attach an event listener in each newly added cell.*/
      const tableColumn = document.createElement('td');
      tableColumn.addEventListener('click', function setColor() {
        tableColumn.style.backgroundColor = color;
      });
      // Append the newly added cell to the row.
      tableRow.appendChild(tableColumn);
    }
  }
}

// When the submit button is clicked by the user, call makeGrid()
var submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', function (event) {
  event.preventDefault();
  makeGrid();
});
