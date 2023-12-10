const SvgCongo = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={16}
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g clipPath="url(#Congo_svg__a)">
      <path d="M0 0h24v16H0V0Z" fill="#FBDE4A" />
      <path d="M0 16V0h16L0 16Z" fill="#009543" />
      <path d="M24 0v16H8L24 0Z" fill="#DA1A35" />
    </g>
    <defs>
      <clipPath id="Congo_svg__a">
        <path fill="#fff" d="M0 0h24v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCongo;
