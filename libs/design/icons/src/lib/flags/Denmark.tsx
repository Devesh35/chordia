const SvgDenmark = ({
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
    <g clipPath="url(#Denmark_svg__a)">
      <path d="M0 0h24.004v18H0V0Z" fill="#C8102E" />
      <path d="M7.714 0h2.572v18H7.714V0Z" fill="#fff" />
      <path d="M0 7.714h24.004v2.572H0V7.714Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="Denmark_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDenmark;
