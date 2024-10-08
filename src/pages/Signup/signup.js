import debounce from "lodash.debounce";
import { Toast } from "../../components/toast/toast";
import { router } from "../../main";
import {
  emailValidation,
  formIsValid,
  passwordValidation,
} from "../../utility/checkValidation";
import {
  emailInputHandler,
  nameInputHandler,
  passwordInputHandler,
  showPasswordHandler,
} from "../../utility/handleStyleLogin";
import { signupApi } from "./api/signup-api";

export function signupPage() {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="mx-auto w-[380px] h-full font-inter">
        <div class="bottom-64 flex flex-col justify-center items-center gap-10 laptop:bottom-44">

          <img src="./images/Vector 1.svg" alt="logo" class=" cursor-pointer mb-16 mt-32"/>

          <h2 class="font-semibold text-[32px] text-[#152536] tracking-wide cursor-default text-center">Create Your Account</h2>

          <form class="flex flex-col justify-center gap-2" id="signup-form">
            <div id="toast-container"></div>
              <div class="relative">
                <img src="/public/images/profile-1.svg" id="name-icon" alt="name-logo" class="w-5 absolute left-3 top-2">
                <input autocomplete="on" type="text" placeholder="Full Name" id="name" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] pl-10 placeholder:text-[#6C757D]"/>
                <p id="error" class="text-[12px] text-[#f71616] font-semibold mt-3"></p>
              </div>

              <div class="relative">
                <img src="./images/envelop-1.svg" id="mail-icon" alt="email-logo" class="w-5 absolute left-3 top-2">
                <input autocomplete="on" type="email" placeholder="Email" id="email" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] pl-10 placeholder:text-[#6C757D]"/>
                <p id="error1" class="text-[12px] text-[#f71616] font-semibold mt-3"></p>
              </div>

              <div class="relative">
                <img src="./images/Lock-1.svg" id="pass-icon" alt="lock-icon" class="w-5 absolute left-3 top-2">
                <input autocomplete="on" type="password" placeholder="Password" id="password" class="rounded-[4px] w-[380px] h-[37px] bg-[#FAFAFA] pl-10 placeholder:text-[#6C757D]"/>
                <p id="error2" class="text-[12px] text-[#f71616] font-semibold mt-3"></p>
                <img src="./images/eye-close-1.svg" alt="eye-logo" id="eye-icon" class="w-5 absolute right-3 top-2">
              </div> 

              <div class="flex justify-center items-center gap-3 mt-2">
                <input type="checkbox" id="rmbr" class="accent-black"/>
                <label for="rmbr">Remember me</label>
              </div>
              <div class="flex justify-center mt-1">
                <p>Already have an account? <a href="/login" data-navigo class="text-blue-700">Log in</a></p>
              </div>

              <button
                disabled
                type="submit"
                id="submit-btn"
                class="absolute bottom-10 bg-[#212529] text-white w-[380px] h-[47px] rounded-[30px] font-medium text-[14px] opacity-[.65] mt-24"
                >
                Sign Up
              </button>
          </form>
        </div>
    </div>    
    `;
  return div;
}

export function styleHandlerSignup() {
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");

  nameInput.addEventListener("keyup", nameInputHandler);
  emailInput.addEventListener("keyup", emailInputHandler);
  passwordInput.addEventListener("keyup", passwordInputHandler);
  eyeIcon.addEventListener("click", showPasswordHandler);
}

export function checkValidationSignUp() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  emailInput.addEventListener("keydown", debounce(emailValidation, 800));
  passwordInput.addEventListener("keydown", debounce(passwordValidation, 800));
  passwordInput.addEventListener("blur", debounce(formIsValid, 10));
  emailInput.addEventListener("blur", debounce(formIsValid, 10));
}

export function signup() {
  const form = document.getElementById("signup-form");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const newObj = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      };
      signupApi(newObj)
        .then((res) => {
          let user = {
            id: res.data.user.id,
            fullName: res.data.user.name,
          };
          localStorage.setItem("accessToken", res?.data?.accessToken);
          localStorage.setItem("user", JSON.stringify(user));
          router.navigate("/");
        })
        .catch((e) => {
          const toast = Toast({ content: e.response.data, variant: "error" });
          document.querySelector("#toast-container").appendChild(toast);
        });
    });
  }
}
