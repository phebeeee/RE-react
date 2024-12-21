import * as React from "react";

export function Button({ children, variant = "primary", onClick }) {
  const baseClasses =
    "overflow-hidden gap-5 self-stretch px-5 py-2 w-full text-sm leading-6 text-center rounded-xl min-h-[40px] max-md:max-w-full";
  const variantClasses = {
    primary: "text-white bg-blue-900",
    secondary: "text-blue-900 bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
