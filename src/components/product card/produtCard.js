export function Card({
  content,
  price,
  imgSrc,
  variant = "",
  additional = "",
  ...restProps
}) {
  const variantClasses = {
    homePage: "",
  };
  const attributesString = (props) => {
    Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  };
  const className = variantClasses[variant] || "";
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="${className}" ${attributesString(restProps)}>
        <div class="bg-[#F3F3F3] rounded-[24px] h-[180px] w-[180px] flex justify-center items-center">
          <img src=${imgSrc} alt="shoe picture" class="w-[142px] object-contain">
        </div>
        <div class="flex flex-col gap-1">
          <span class="font-bold text-[20px] text-[#152536] pt-2 text-nowrap overflow-hidden text-ellipsis leading-6 tracking-tight">${content}</span>
          <span class="font-semibold text-[#152536] leading-5">$ ${price}</span>
        </div>
    </div>
  `;
  return div;
}
