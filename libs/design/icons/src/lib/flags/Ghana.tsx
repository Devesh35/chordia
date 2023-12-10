const SvgGhana = ({
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
    <g clipPath="url(#Ghana_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#006B3F" />
      <path d="M0 0h24v12H0V0Z" fill="#FCD116" />
      <path d="M0 0h24v6H0V0Z" fill="#CE1126" />
      <path d="m12 6 1.95 6-5.104-3.709h6.304L10.05 12 12 6Z" fill="#000" />
    </g>
    <defs>
      <clipPath id="Ghana_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGhana;
