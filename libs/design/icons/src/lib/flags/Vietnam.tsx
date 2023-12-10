const SvgVietnam = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Vietnam_svg__a)">
      <path d="M-1.5 0h27v18h-27V0Z" fill="#DA251D" />
      <path
        d="m15.29 13.395-3.15-2.345-3.128 2.366 1.16-3.854-3.13-2.38 3.872-.035 1.202-3.846 1.22 3.836 3.87.003-3.11 2.405 1.191 3.853.004-.003Z"
        fill="#FF0"
      />
    </g>
    <defs>
      <clipPath id="Vietnam_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVietnam;
