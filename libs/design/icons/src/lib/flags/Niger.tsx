const SvgNiger = ({
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
    <g clipPath="url(#Niger_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#0DB02B" />
      <path d="M0 0h24v12H0V0Z" fill="#fff" />
      <path
        d="M0 0h24v6H0V0ZM12 11.55a2.55 2.55 0 1 0 0-5.1 2.55 2.55 0 0 0 0 5.1Z"
        fill="#E05206"
      />
    </g>
    <defs>
      <clipPath id="Niger_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNiger;
