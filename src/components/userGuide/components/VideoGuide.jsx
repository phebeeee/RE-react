import * as React from "react";

export function VideoGuide({ text }) {
  return (
    <div className="overflow-hidden gap-3 self-stretch px-5 py-3 bg-gray-200 rounded-md">
      {text}
    </div>
  );
}
