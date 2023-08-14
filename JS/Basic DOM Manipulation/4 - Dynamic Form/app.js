// Adding New Input Fields

const addField = () => {
  const newInput = document.createElement('input');
  const form = document.querySelector('#dynamicForm');
  form.appendChild(newInput);
};

//Submitting the Form

const submitForm = () => {
  const inputs = document.querySelectorAll('#dynamicForm input');
  let allFilled = true;
  let message = '';

  inputs.forEach((input) => {
    if (!input.value) {
      allFilled = false;
    } else {
      message += input.value;
    }
  });
  if (allFilled === false) {
    alert('Please fill all the fields!');
  } else {
    alert(message);
  }
};
