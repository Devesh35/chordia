const SvgSouthAfrica = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={18}
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g
      fillRule="evenodd"
      clipRule="evenodd"
      clipPath="url(#SouthAfrica_svg__a)"
    >
      <path d="M0 14.336V3.67L7.94 9.003l-7.945 5.333H0Z" fill="#000" />
      <path
        d="m5.417 18.003 8.916-5.998h12.663V18H5.417v.003Z"
        fill="#000C8A"
      />
      <path
        d="M4.848 0h22.148v6.004H14.329S4.964-.06 4.848 0Z"
        fill="#E1392D"
      />
      <path
        d="M0 2.25v1.42L7.94 9l-7.945 5.336v1.417l10.002-6.75L-.004 2.25H0Z"
        fill="#FFB915"
      />
      <path
        d="M0 2.25V0h3.34l10.588 7.172H27v3.663H13.93L3.335 18H0v-2.247l9.998-6.75L.003 2.25H0Z"
        fill="#007847"
      />
      <path
        d="M3.336 0h2.081L14.333 6h12.663v1.17H13.928L3.336.004V0Zm0 18.003h2.081l8.916-5.998h12.663v-1.167H13.928L3.336 18v.003Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="SouthAfrica_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSouthAfrica;
