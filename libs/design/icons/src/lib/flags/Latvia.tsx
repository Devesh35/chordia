const SvgLatvia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Latvia_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path d="M0 0h24v7.2H0V0Zm0 10.8h24V18H0v-7.2Z" fill="#981E32" />
    </g>
    <defs>
      <clipPath id="Latvia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLatvia;
