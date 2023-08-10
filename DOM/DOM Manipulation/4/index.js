function addField() {
  const form = document.querySelector("#dynamicForm");
  const newInput = document.createElement("input");
  form.appendChild(newInput);
}
function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;
  let message = "";
  inputs.forEach((el) => {
    !el.value ? (allFilled = false) : (message += el.value);
  });
  !allFilled ? alert("Please fill all fields") : alert(message);
}
