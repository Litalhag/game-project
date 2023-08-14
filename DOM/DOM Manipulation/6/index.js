function toggleColumn(index) {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    let cell = row.cells[index]; // CR - 'cell' can be const
    cell.style.display = cell.style.display === "none" ? "" : "none"; // CR - an even shorter way: 'cell.style.display ? "" : "none";', but in this case it may be less readable 
    /*
      This uses the fact that an empty string is a falsy value in JavaScript. If cell.style.display is an empty string, then it's falsified, and "none" is used; otherwise, an empty string is used.
    */
  });
}
function resetTable() {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    const cellsArr = Array.from(row.cells); // CR - This can be much shorter, no need to initialize a variable: 'Array.from(row.cells).forEach(cell => cell.style.display = '');'
    cellsArr.forEach((cell) => (cell.style.display = ""));
  });
}
