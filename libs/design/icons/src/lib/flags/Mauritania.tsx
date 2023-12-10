const SvgMauritania = ({
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
    <g clipPath="url(#Mauritania_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#CD2A3E" />
      <path d="M0 2.7h24v12.6H0V2.7Z" fill="#006233" />
      <path
        d="M17.625 5.797a5.625 5.625 0 0 1-11.25 0 5.812 5.812 0 1 0 11.25 0Z"
        fill="#FFC400"
      />
      <path
        d="m12 3.517-.506 1.557H9.862l1.324.96-.506 1.552 1.324-.96 1.323.96-.506-1.552 1.324-.96H12.51L12 3.517Z"
        fill="#FFC400"
      />
    </g>
    <defs>
      <clipPath id="Mauritania_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMauritania;
