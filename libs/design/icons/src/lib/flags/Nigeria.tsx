const SvgNigeria = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Nigeria_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path d="M15.998 0H24v18h-8.002V0ZM0 0h7.999v18H0V0Z" fill="#008753" />
    </g>
    <defs>
      <clipPath id="Nigeria_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNigeria;
