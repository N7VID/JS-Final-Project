let isEmailValid = false;
let isPasswordValid = false;

export const emailValidation = function () {
  const emailInputValue = document.getElementById("email").value;
  const errorMessage1 = document.getElementById("error1");
  if (!emailInputValue.includes("@") && emailInputValue !== "") {
    errorMessage1.innerHTML = "Please include an '@' in the email address.";
    isEmailValid = false;
  } else if (!emailInputValue.includes(".com") && emailInputValue !== "") {
    errorMessage1.innerHTML =
      "Please enter correct email domain in the email address.";
    isEmailValid = false;
  } else {
    errorMessage1.innerHTML = "";
    isEmailValid = true;
  }
};

export const passwordValidation = function () {
  const passwordInputValue = document.getElementById("password").value;
  const errorMessage2 = document.getElementById("error2");
  if (passwordInputValue.length < 6 && passwordInputValue !== "") {
    errorMessage2.innerHTML =
      "Password is too short. It must be at least 6 characters long.";
    isPasswordValid = false;
  } else if (
    !/[a-zA-Z]/.test(passwordInputValue) &&
    passwordInputValue !== ""
  ) {
    errorMessage2.innerHTML =
      "Password must contain at least one letter (a-z or A-Z).";
    isPasswordValid = false;
  } else {
    errorMessage2.innerHTML = "";
    isPasswordValid = true;
  }
};

export const formIsValid = function () {
  const passwordInputValue = document.getElementById("password").value;
  const emailInputValue = document.getElementById("email").value;
  const submitBtn = document.getElementById("submit-btn");

  if (passwordInputValue && emailInputValue) {
    if (isEmailValid && isPasswordValid) {
      submitBtn.classList.remove("opacity-[.65]");
      submitBtn.disabled = false;
    } else {
      submitBtn.classList.add("opacity-[.65]");
      submitBtn.disabled = true;
    }
  }
};
