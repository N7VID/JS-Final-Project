export function Category({ content }) {
  const div = document.createElement("div");
  div.classList =
    "scroll-hidden flex justify-evenly items-center gap-3 overflow-x-auto flex-nowrap whitespace-nowrap py-3 px-6";
  const categoryName = content;
  categoryName.forEach((name) => {
    const inner = document.createElement("div");
    let defaultStyle;
    if (name == "All") {
      defaultStyle = "text-white bg-[#343A40]";
    } else {
      defaultStyle = "font-semibold text-[#343A40]";
    }
    inner.innerHTML = `
    <div id="${name}" class="category inline-block whitespace-nowrap cursor-pointer h-[35px] border-[#343A40] border-[2.3px] rounded-[25px] py-[3.5px] px-[16.5px] text-center ${defaultStyle}">${name}</div>
  `;
    div.appendChild(inner);
  });
  return div;
}
