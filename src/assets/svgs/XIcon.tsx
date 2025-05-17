import * as React from 'react';
import type { SVGProps } from 'react';
const SvgXIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g fill="#707070" clipPath="url(#x-icon_svg__a)">
      <path d="m8 6.847 2.305-2.304 1.152 1.152L9.153 8l2.304 2.305-1.152 1.152L8 9.153l-2.305 2.304-1.152-1.152L6.847 8 4.543 5.695l1.152-1.152z" />
      <path
        fillRule="evenodd"
        d="M2.815 2.815a7.333 7.333 0 1 1 10.37 10.37 7.333 7.333 0 0 1-10.37-10.37m.864.864a6.11 6.11 0 1 0 8.641 8.642 6.11 6.11 0 0 0-8.64-8.642"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="x-icon_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXIcon;
