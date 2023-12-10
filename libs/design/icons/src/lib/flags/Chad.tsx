const SvgChad = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Chad_svg__a)">
      <path d="M0 0h8.025v18H0V0Z" fill="#000067" />
      <path d="M15.975 0H24v18h-8.025V0Z" fill="red" />
      <path d="M8.025 0h7.95v18h-7.95V0Z" fill="#FF0" />
    </g>
    <defs>
      <clipPath id="Chad_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChad;
