const SvgBangladesh = ({
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
    <g clipPath="url(#Bangladesh_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#006A4E" />
      <path d="M10.5 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" fill="#F42A41" />
    </g>
    <defs>
      <clipPath id="Bangladesh_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBangladesh;
