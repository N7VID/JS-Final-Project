export function Toast({ content, variant, additional, ...restProps }) {
  const variantClasses = {
    success: `
      <div id="toast" class="animate-fadeinfadeout min-w-64 shadow-md shadow-[#eee] border-2 border-[#00C000] mr-4 bg-white rounded-[20px] py-3 pl-2 pr-4 fixed z-10 top-8 right-[10px] flex flex-col text-left gap-1">
            <div class="flex gap-2 items-center">
                <img src="/public/images/done.svg" class="w-8">
                <span class="text-xl font-bold">Successful</span>
            </div>
            <div class="text-[#4d4d4d] pl-2">${content}</div>
        </div>
      `,
    info: `
        <div id="toast" class="animate-fadeinfadeout min-w-64 shadow-md shadow-[#eee] border-2 border-[#005ac0] mr-4 bg-white rounded-[20px] py-3 pl-2 pr-4 fixed z-10 top-8 right-[10px] flex flex-col text-left gap-1">
            <div class="flex gap-2 items-center">
                <img src="/public/images/info.svg" class="w-8">
                <span class="text-xl font-bold">Information</span>
            </div>
            <div class="text-[#4d4d4d] pl-2">${content}</div>
        </div>
      `,
    error: `
        <div id="toast" class="animate-fadeinfadeout min-w-64 shadow-md shadow-[#eee] border-2 border-[#c00000] mr-4 bg-white rounded-[20px] py-3 pl-2 pr-4 fixed z-10 top-8 right-[10px] flex flex-col text-left gap-1">
            <div class="flex gap-2 items-center">
                <img src="/public/images/error.svg" class="w-8">
                <span class="text-xl font-bold text-[#c00000]">Error</span>
            </div>
            <div class="text-[#4d4d4d] pl-2">${content}</div>
        </div>
      `,
  };
  const attributesString = (props) => {
    return Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  };
  const className = variantClasses[variant] || "";
  const div = document.createElement("div");
  div.innerHTML = `
        ${className}
      `;

  setTimeout(() => {
    div.querySelector("#toast").classList.add("invisible");
  }, 2900);
  return div;
}
