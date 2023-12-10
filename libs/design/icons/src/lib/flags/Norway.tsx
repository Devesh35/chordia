const SvgNorway = ({
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
    <g clipPath="url(#Norway_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#ED2939" />
      <path d="M6.75 0h4.5v18h-4.5V0Z" fill="#fff" />
      <path d="M0 6.75h24v4.5H0v-4.5Z" fill="#fff" />
      <path d="M7.875 0h2.25v18h-2.25V0Z" fill="#002664" />
      <path d="M0 7.875h24v2.25H0v-2.25Z" fill="#002664" />
    </g>
    <defs>
      <clipPath id="Norway_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNorway;
