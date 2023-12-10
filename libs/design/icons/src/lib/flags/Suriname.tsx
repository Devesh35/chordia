const SvgSuriname = ({
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
    <g clipPath="url(#Suriname_svg__a)">
      <path d="M.004 0h24v18h-24V0Z" fill="#377E3F" />
      <path d="M.004 3.6h24v10.8h-24V3.6Z" fill="#fff" />
      <path d="M.004 5.4h24v7.2h-24V5.4Z" fill="#B40A2D" />
      <path
        d="m12 5.745 2.115 6.51L8.576 8.23h6.848l-5.539 4.024L12 5.745Z"
        fill="#ECC81D"
      />
    </g>
    <defs>
      <clipPath id="Suriname_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSuriname;
