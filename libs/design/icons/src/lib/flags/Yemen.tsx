const SvgYemen = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Yemen_svg__a)">
      <path d="M0 0h24v17.73H0V0Z" fill="#fff" />
      <path d="M0 0h24v5.902H0V0Z" fill="#F10600" />
      <path d="M0 12.098h24V18H0v-5.902Z" fill="#000" />
    </g>
    <defs>
      <clipPath id="Yemen_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYemen;
