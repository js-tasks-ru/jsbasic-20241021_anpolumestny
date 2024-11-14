function highlight(table) {
  let AgeColIdx = 1;
  let GenderColIdx = 2;
  let StatusColIdx = 3;

  let tableRows = table.querySelectorAll('tbody tr');
  for (let row of tableRows) {
    for (let cell of row.cells) {
      if (cell.cellIndex === AgeColIdx && Number(cell.innerText) < 18) {
        row.style = "text-decoration: line-through";
      }

      if (cell.cellIndex === GenderColIdx && cell.innerText === 'm') {
        row.classList.add('male');
      } else if (cell.cellIndex === GenderColIdx && cell.innerText === 'f') {
        row.classList.add('female');
      }

      if (cell.cellIndex === StatusColIdx && cell.getAttribute('data-available') === 'true') {
        row.classList.add('available');
      } else if (cell.cellIndex === StatusColIdx && cell.getAttribute('data-available') === 'false') {
        row.classList.add('unavailable');
      } else if (cell.cellIndex === StatusColIdx && cell.getAttribute('data-available') === null) {
        row.hidden = 'true';
      }
    }
  }
}
