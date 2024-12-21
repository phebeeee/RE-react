import * as React from "react";

export default function PaginationButton({ number, isActive }) {
  return (
    <div
      className={`self-stretch px-3 pt-1.5 pb-4 my-auto w-8 h-8 bg-white rounded border border-solid ${
        isActive ? "border-violet-700 text-violet-700" : "border-zinc-200"
      }`}
    >
      {number}
    </div>
  );
}
