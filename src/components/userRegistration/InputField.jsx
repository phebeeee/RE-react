import * as React from "react";

export function InputField({
  label,
  placeholder,
  type = "text",
  required = false,
  id,
}) {
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="gap-10 self-stretch w-full text-base leading-none text-slate-900"
      >
        {label}
      </label>
      <div className="flex overflow-hidden gap-2 items-center p-2 mt-2 w-full text-xs leading-6 text-right bg-white rounded-lg border border-solid border-stone-300 text-slate-900 text-opacity-40">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          className="flex-1 shrink self-stretch px-16 my-auto w-full min-w-[240px] text-right"
          aria-label={label}
        />
      </div>
    </div>
  );
}
