const SvgCostaRica = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#CostaRica_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#0000B4" />
      <path d="M0 2.827h24v12.087H0V2.827Z" fill="#fff" />
      <path d="M0 5.914h24v5.914H0V5.914Z" fill="#D90000" />
    </g>
    <defs>
      <clipPath id="CostaRica_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCostaRica;
