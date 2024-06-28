export function login() {
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
              <div class="flex justify-center mt-1">
                <p>Don't have an account? <a href="#" class="text-blue-700">Sign Up</a></p>
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
}