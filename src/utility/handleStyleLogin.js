export function emailInputHandler() {
  const mailIcon = document.getElementById("mail-icon");
  const emailInput = document.getElementById("email");
  if (emailInput.value !== "") {
    mailIcon.src = "/images/envelop-2.svg";
  } else {
    mailIcon.src = "/images/envelop-1.svg";
  }
}

export function nameInputHandler() {
  const nameIcon = document.getElementById("name-icon");
  const nameInput = document.getElementById("name");
  if (nameInput.value !== "") {
    nameIcon.src = "/public/images/profile-solid.svg";
  } else {
    nameIcon.src = "/public/images/profile-1.svg";
  }
}

export function passwordInputHandler() {
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
}

export function showPasswordHandler() {
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
}
