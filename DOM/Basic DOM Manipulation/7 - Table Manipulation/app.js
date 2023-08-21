const toggleColumn = (index) => {
  let rows = document.querySelectorAll('#dataTable tr');
  rows.forEach((row) => {
    let cell = row.cells[index];
    if (cell.style.display === 'none') {
      cell.style.display = '';
    } else {
      cell.style.display = 'none';
    }
  });
};

const resetTable = () => {
  let rows = document.querySelectorAll('#dataTable tr');
  rows.forEach((row) => {
    let cellsArr = Array.from(row.cells);
    cellsArr.forEach((cell) => {
      cell.style.display = '';
    });
  });
};
