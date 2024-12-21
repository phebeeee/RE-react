import * as React from "react";

export default function SidebarItem({ text, isActive }) {
  return (
    <div
      className={`flex-1 shrink gap-2.5 self-stretch p-4 ${
        isActive ? "mt-2.5" : "mt-4"
      } leading-6 whitespace-nowrap bg-blue-900 rounded-lg`}
    >
      {text}
    </div>
  );
}
