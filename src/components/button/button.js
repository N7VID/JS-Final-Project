var variantClasses = {
  type1:
    "bg-[#212529] w-[380px] h-[47px] rounded-[30px] font-medium text-[14px]",
};

export const Button = function ({
  content,
  variant,
  additional,
  ...restProps
}) {
  const className = variantClasses[variant];
  const div = document.createElement("div");
  div.innerHTML = `
      <button 
      class="text-white ${className} ${additional}"
      ${{ ...restProps }}
      >
      ${content}
      </button>
    `;
  return div;
};
