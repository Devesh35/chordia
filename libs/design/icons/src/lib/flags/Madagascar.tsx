const SvgMadagascar = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Madagascar_svg__a)">
      <path d="M8 0h16v9H8V0Z" fill="#FC3D32" />
      <path d="M8 9h16v9H8V9Z" fill="#007E3A" />
      <path d="M0 0H8v18H0V0Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="Madagascar_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMadagascar;
