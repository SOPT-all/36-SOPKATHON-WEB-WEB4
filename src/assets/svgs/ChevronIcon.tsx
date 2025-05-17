import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 4 7"
    {...props}
  >
    <path fill="#1E1E1E" d="M0 0h4v7H0z" />
    <path
      fill="#fff"
      d="M-559-2530c0-1.1.895-2 2-2h1916c1.1 0 2 .9 2 2V118c0 1.105-.9 2-2 2H-557a2 2 0 0 1-2-2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.1}
      d="M-557-2532v1h1916v-2H-557zm1918 2h-1V118h2v-2648zm-2 2650v-1H-557v2h1916zm-1918-2h1v-2648h-2V118zm2 2v-1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm1918-2h-1c0 .552-.45 1-1 1v2c1.66 0 3-1.343 3-3zm-2-2650v1c.55 0 1 .45 1 1h2c0-1.66-1.34-3-3-3zm-1916 0v-1c-1.657 0-3 1.34-3 3h2c0-.55.448-1 1-1z"
    />
    <rect width={338} height={159} x={-117.5} y={-104.5} fill="#fff" rx={7.5} />
    <rect
      width={338}
      height={159}
      x={-117.5}
      y={-104.5}
      stroke="#FDA68B"
      rx={7.5}
    />
    <path
      fill="#000"
      d="M.196.362c.26-.26.682-.26.942 0l2.667 2.667.043.047.001.002h.001q.047.059.079.123l.018.037a.7.7 0 0 1 .053.23v.064a.67.67 0 0 1-.15.39l-.045.05-2.667 2.666a.667.667 0 0 1-.942-.943L2.39 3.5.196 1.305a.667.667 0 0 1 0-.943"
    />
  </svg>
);
export default SvgChevronIcon;
