// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const conPassInput = document.querySelector("#password-confirm-input");

const inputs = document.querySelectorAll(`.form-control`);

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
};

// add callback function for firstNameInput.onkeyup event



firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid", "is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid", "is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid", "is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid", "is-invalid");
};

conPassInput.onkeyup = () => {
  conPassInput.classList.remove("is-valid", "is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  LastNameOk = false;
  emailOk = false;
  passwordOk = false;
  confirmPasswordOk = false;

  // validate first name
  firstNameInput.classList.remove("is-valid", "is-invalid");
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  lastNameInput.classList.remove("is-valid", "is-invalid");
  if (lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    LastNameOk = true;
  }

  // validate email
  emailInput.classList.remove("is-valid", "is-invalid");
  if (validateEmail(emailInput.value)){
    emailInput.classList.add("is-valid");
    emailOk = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  // validate password
  passwordInput.classList.remove("is-valid", "is-invalid");
  if (passwordInput.value.length >= 6){
    passwordInput.classList.add("is-valid");
    passwordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }

  // validate confirm password
  conPassInput.classList.remove("is-valid", "is-invalid");
  if (conPassInput.value === passwordInput.value && conPassInput.value !== ""){
    conPassInput.classList.add("is-valid");
    confirmPasswordOk = true;
  } else {
    conPassInput.classList.add("is-invalid");
  }

  if (isFirstNameOk && LastNameOk && emailOk && passwordOk && confirmPasswordOk){ 
    for (let i=0; i<inputs.length; i++){
    inputs[i].classList.remove("is-invalid");
  }
    alert("Registered successfully");
  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  
  for (let i=0; i<inputs.length; i++){
    inputs[i].value = "";
    inputs[i].classList.remove("is-valid","is-invalid");
  }
};