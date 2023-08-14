function toggleColumn(index) {
  const rows = document.querySelectorAll("#dataTable tr");

  rows.forEach((row) => {
    const cell = row.cells[index];

    if (cell.style.display === "none") {
      cell.style.display = "";
    } else {
      cell.style.display = "none";
    }
  });
}

function resetTable() {
  const rows = document.querySelectorAll("#dataTable tr");

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const cells = rows[rowIndex].cells;

    for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      cells[cellIndex].style.display = "";
    }
  }
}
