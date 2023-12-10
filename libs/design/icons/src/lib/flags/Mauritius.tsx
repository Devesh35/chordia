const SvgMauritius = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Mauritius_svg__a)">
      <path d="M0 13.5h24V18H0v-4.5Z" fill="#00A04D" />
      <path d="M0 4.5h24V9H0V4.5Z" fill="#151F6D" />
      <path d="M0 0h24v4.5H0V0Z" fill="#EE2737" />
      <path d="M0 9h24v4.5H0V9Z" fill="#FFCD00" />
    </g>
    <defs>
      <clipPath id="Mauritius_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMauritius;
