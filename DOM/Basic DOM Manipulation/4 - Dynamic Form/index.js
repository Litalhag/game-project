function addField() {
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter Your Name";
  const formContainer = document.getElementById("dynamicForm");
  formContainer.append(input);
}

function submitForm() {}
