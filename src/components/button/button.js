export function Button({ content, variant, additional, ...restProps }) {
  const variantClasses = {
    type1:
      "bg-[#212529] w-[380px] h-[47px] rounded-[30px] font-medium text-[14px]",
  };
  const attributesString = (props) => {
    return Object.entries(props)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
  };
  const className = variantClasses[variant] || "";
  const div = document.createElement("div");
  div.innerHTML = `
      <button 
      class="text-white ${className} ${additional}"
      ${attributesString(restProps)}
      >
      ${content}
      </button>
    `;
  return div;
}
