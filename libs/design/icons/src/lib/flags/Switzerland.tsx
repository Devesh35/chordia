const SvgSwitzerland = ({
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
      clipPath="url(#Switzerland_svg__a)"
    >
      <path d="M0 0h24v18H0V0Z" fill="red" />
      <g fill="#fff">
        <path d="M6.375 7.313h11.25v3.375H6.375V7.313Z" />
        <path d="M10.313 3.375h3.374v11.25h-3.374V3.375Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Switzerland_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwitzerland;
