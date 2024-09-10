function getData(form) {
  const formData = new FormData(form);

  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  const previousDataArray = [...JSON.parse(localStorage.getItem('formData'))];

  previousDataArray.push(jsonData)

  localStorage.setItem('formData', JSON.stringify(previousDataArray));

  console.log('Form Data:', jsonData);

  setTimeout(() => form.reset(), 5000)
}

const successMessage = document.getElementById("successMessage");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
  successMessage.classList.add('show');
  setTimeout(() => form.submit(), 2000);
});

function validateSelect(select) {
  if (select.value === "") {
    select.setCustomValidity("Please select an item");
  } else {
    select.setCustomValidity("");
  }
}

function validateNumberInput(input) {
  if (input.value === "" || isNaN(input.value) || Number(input.value) <= 0) {
    input.setCustomValidity("Please enter a valid sum greater than 0");
  } else {
    input.setCustomValidity("");
  }
}