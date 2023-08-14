function toggleColumn(index) {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    let cell = row.cells[index];
    cell.style.display = cell.style.display === "none" ? "" : "none";
  });
}
function resetTable() {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    const cellsArr = Array.from(row.cells);
    cellsArr.forEach((cell) => (cell.style.display = ""));
  });
}
