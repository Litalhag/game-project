function addField() {
  const form = document.getElementById("dynamicForm");
  const newInput = document.createElement("input");
  form.appendChild(newInput);
}
function submitForm() {
  const inputs = document.querySelectorAll("#dynamicForm input");
  let allFilled = true;
  let message = "Entered values: ";

  inputs.forEach((input) => {
    if (input.value === "") {
      allFilled = false;
    } else {
      message += input.value + ", ";
    }
  });

  if (!allFilled) {
    alert("Please fill in all fields.");
  } else {
    message = message.slice(0, -2);
    alert(message);
  }
}
