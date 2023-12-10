const SvgSouthSudan = ({
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
    <g clipPath="url(#SouthSudan_svg__a)">
      <path d="M0 12.6h24V18H0v-5.4Z" fill="#078930" />
      <path d="M0 5.4h24v7.2H0V5.4Z" fill="#fff" />
      <path d="M0 0h24v5.4H0V0Z" fill="#000" />
      <path d="M0 6.3h24v5.4H0V6.3Z" fill="#DA121A" />
      <path d="m0 0 15.589 9L0 18V0Z" fill="#0F47AF" />
      <path
        d="M7.526 7.305 2.314 9l5.212 1.691L4.31 6.263v5.475l3.217-4.433Z"
        fill="#FCDD09"
      />
    </g>
    <defs>
      <clipPath id="SouthSudan_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSouthSudan;
