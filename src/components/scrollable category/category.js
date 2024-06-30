export function Category({ content, ...restProps }) {
  const attributesString = (props) => {
    return Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  };
  const div = document.createElement("div");
  div.classList =
    "scroll-hidden flex justify-evenly items-center gap-3 overflow-x-auto flex-nowrap whitespace-nowrap py-3 px-6";
  const categoryName = content;
  console.log(categoryName);
  categoryName.forEach((name) => {
    const inner = document.createElement("div");
    inner.innerHTML = `
    <div ${attributesString(
      restProps
    )} class="inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.3px] rounded-[25px] py-[3.5px] px-[16.5px] text-center text-[#343A40] font-semibold">${name}</div>
  `;
    div.appendChild(inner);
  });
  return div;
}
