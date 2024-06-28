export const emailInputHandler = function () {
  const mailIcon = document.getElementById("mail-icon");
  const emailInput = document.getElementById("email");
  if (emailInput.value !== "") {
    mailIcon.src = "/images/envelop-2.svg";
  } else {
    mailIcon.src = "/images/envelop-1.svg";
  }
};
export const passwordInputHandler = function () {
  const passInput = document.getElementById("password");
  const passIcon = document.getElementById("pass-icon");
  const eyeIcon = document.getElementById("eye-icon");
  if (passInput.value !== "") {
    passIcon.src = "/images/Lock-2.svg";
    if (passInput.type == "password") {
      eyeIcon.src = "/images/eye-close-2.svg";
    } else {
      eyeIcon.src = "/images/eye-open-2.svg";
    }
  } else {
    passIcon.src = "/images/Lock-1.svg";
    if (passInput.type == "password") {
      eyeIcon.src = "/images/eye-close-1.svg";
    } else {
      eyeIcon.src = "/images/eye-open-1.svg";
    }
  }
};

export const showPasswordHandler = function () {
  const passInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");

  if (passInput.type === "password") {
    passInput.type = "text";
    eyeIcon.src =
      passInput.value !== ""
        ? "/images/eye-open-2.svg"
        : "/images/eye-open-1.svg";
  } else {
    passInput.type = "password";
    eyeIcon.src =
      passInput.value !== ""
        ? "/images/eye-close-2.svg"
        : "/images/eye-close-1.svg";
  }
};
