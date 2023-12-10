const SvgCoteDIvoire = ({
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
    <g
      fillRule="evenodd"
      clipRule="evenodd"
      clipPath="url(#CoteDIvoire_svg__a)"
    >
      <path d="M16.005 0H24v18h-7.995V0Z" fill="#00CD00" />
      <path d="M0 0h7.984v18H0V0Z" fill="#FF9A00" />
      <path d="M7.984 0h8.025v18H7.984V0Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="CoteDIvoire_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoteDIvoire;
