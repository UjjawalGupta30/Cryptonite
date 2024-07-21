import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24} // Increase the width to make the icon bigger
    height={24} // Increase the height to make the icon bigger
    fill="none"
    stroke="#FFF"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-currency"
    transform={`scale(1.5)`} // Scale the content by a factor of 2
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3" />
  </svg>
);

export default SvgComponent;
