const SvgBelgium = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Belgium_svg__a)">
      <path d="M0 0h7.999v18H0V0Z" fill="#000" />
      <path d="M7.999 0H16v18H8V0Z" fill="#FFD90C" />
      <path d="M16.001 0H24v18h-7.999V0Z" fill="#F31830" />
    </g>
    <defs>
      <clipPath id="Belgium_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBelgium;
