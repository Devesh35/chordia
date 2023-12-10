const SvgIndonesia = ({
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
    <g clipPath="url(#Indonesia_svg__a)">
      <path d="M0 0h24v9H0V0Z" fill="#E70011" />
      <path d="M0 9h24v9H0V9Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="Indonesia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIndonesia;
