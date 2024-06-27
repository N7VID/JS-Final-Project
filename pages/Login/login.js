let isEmailValid = false;
let isPasswordValid = false;

export const login = function () {
  const div = document.createElement("div");
  div.innerHTML = `
      <div class="mx-auto w-[380px] h-full font-inter">
        <div class="bottom-64 flex flex-col justify-center items-center gap-10 laptop:bottom-44">

          <img src="./images/Vector 1.svg" alt="logo" class=" cursor-pointer mb-16 mt-32"/>

          <h2 class="font-semibold text-[32px] text-[#152536] tracking-wide cursor-default">Login to Your Account</h2>

          <form class="flex flex-col justify-center gap-2 ">

              <div class="relative">
                <img src="./images/envelop-1.svg" id="mail-icon" alt="email-logo" class="w-5 absolute left-3 top-2">
                <input type="email" placeholder="Email" id="email" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] pl-10 placeholder:text-[#6C757D]"/>
                <p id="error1" class="text-[12px] text-[#f71616] font-semibold mt-3"></p>
              </div>

              <div class="relative">
                <img src="./images/Lock-1.svg" id="pass-icon" alt="lock-icon" class="w-5 absolute left-3 top-2">
                <input type="password" placeholder="Password" id="password" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] pl-10 placeholder:text-[#6C757D]"/>
                <p id="error2" class="text-[12px] text-[#f71616] font-semibold mt-3"></p>
                <img src="./images/eye-close-1.svg" alt="eye-logo" id="eye-icon" class="w-5 absolute right-3 top-2">
              </div> 

              <div class="flex justify-center items-center gap-3 mt-2">
                <input type="checkbox" id="rmbr" class="accent-black"/>
                <label for="rmbr">Remember me</label>
              </div>

              <button
                disabled
                type="submit"
                id="submit-btn"
                class="absolute bottom-10 bg-[#212529] text-white w-[380px] h-[47px] rounded-[30px] font-medium text-[14px] opacity-[.65] mt-24"
                >
                Sign In
              </button>
          </form>
        </div>
      </div>
    `;
  return div;
};

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
