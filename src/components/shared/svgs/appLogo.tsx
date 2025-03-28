import React, { SVGProps } from "react";

export default function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#004080"
        stroke-width="5"
        fill="none"
      />
      <circle cx="50" cy="50" r="25" fill="#004080" />

      <text
        x="80"
        y="55"
        font-family="Arial, sans-serif"
        font-size="24"
        font-weight="bold"
        fill="#004080"
      >
        DHEX
      </text>
      <text
        x="80"
        y="75"
        font-family="Arial, sans-serif"
        font-size="20"
        font-weight="bold"
        fill="#FF6600"
      >
        FOCUS
      </text>
    </svg>
  );
}
