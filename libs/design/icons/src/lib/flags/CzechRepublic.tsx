const SvgCzechRepublic = ({
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
    <g clipPath="url(#CzechRepublic_svg__a)">
      <path d="M0 0h24v9H0V0Z" fill="#fff" />
      <path d="M0 9h24v9H0V9Z" fill="#D7141A" />
      <path d="M13.5 9 0 0v18l13.5-9Z" fill="#11457E" />
    </g>
    <defs>
      <clipPath id="CzechRepublic_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCzechRepublic;
