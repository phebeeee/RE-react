import * as React from "react";

export default function ContactInfo({ icon, text }) {
  return (
    <div className="flex gap-2.5 self-start mt-1.5 leading-4">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 aspect-[1.15] w-[23px]"
      />
      <div>{text}</div>
    </div>
  );
}
