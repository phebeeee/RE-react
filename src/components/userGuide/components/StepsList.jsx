import * as React from "react";

export function StepsList({ steps }) {
  return (
    <ol>
      {steps.map((step) => (
        <li key={step.id}>
          <span className="text-base">{step.text}</span>
        </li>
      ))}
    </ol>
  );
}
