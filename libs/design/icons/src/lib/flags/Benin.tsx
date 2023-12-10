const SvgBenin = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Benin_svg__a)">
      <path d="M-2.438 0H9.563v18h-12V0Z" fill="#319400" />
      <path d="M9.563 0h24.001v9H9.563V0Z" fill="#FFD600" />
      <path d="M9.563 9h24.001v9H9.563V9Z" fill="#DE2110" />
    </g>
    <defs>
      <clipPath id="Benin_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBenin;
