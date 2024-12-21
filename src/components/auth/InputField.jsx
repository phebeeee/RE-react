import * as React from "react";

export function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <label className="gap-10 self-stretch w-full text-base leading-none text-slate-900 max-md:max-w-full">
        {label}
      </label>
      <div className="flex overflow-hidden gap-2 items-center p-2 mt-2 w-full text-xs leading-6 text-right bg-white rounded-lg border border-solid border-stone-300 text-slate-900 text-opacity-40 max-md:max-w-full">
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 shrink self-stretch px-11 my-auto w-full min-w-[240px] max-md:max-w-full"
          aria-label={label}
        />
      </div>
    </div>
  );
}
