import * as React from "react";

export function PhoneInput({ label, placeholder, id }) {
  return (
    <div className="flex gap-1 items-center w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/bd6ea1ec780e47e38741d359bb1fedea/0186a7b72a343e0af0f8a8642adb458452d141120f5ded973f2a23a2bd58445f?apiKey=bd6ea1ec780e47e38741d359bb1fedea&"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-[1.75]"
      />
      <div className="gap-2 self-stretch p-1 my-auto text-xs leading-none text-right whitespace-nowrap bg-gray-100 rounded text-slate-900">
        +20
      </div>
      <div className="flex flex-col self-stretch min-h-[96px]">
        <div className="flex flex-col w-full">
          <label
            htmlFor={id}
            className="gap-10 self-stretch w-full text-base leading-none text-slate-900"
          >
            {label}
          </label>
          <div className="flex overflow-hidden gap-2 items-center p-2 mt-2 w-full text-xs leading-6 text-right bg-white rounded-lg border border-solid border-stone-300 text-slate-900 text-opacity-40">
            <input
              type="tel"
              id={id}
              placeholder={placeholder}
              className="flex-1 shrink self-stretch px-16 my-auto w-full min-w-[240px] text-right"
              aria-label={label}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
