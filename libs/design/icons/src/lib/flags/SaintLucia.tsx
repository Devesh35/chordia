const SvgSaintLucia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#SaintLucia_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#65CFFF" />
      <path
        d="m11.959 1.575 6.101 14.824-12.097.034 5.996-14.858Z"
        fill="#fff"
      />
      <path d="m11.963 3.619 5.28 12.75-10.463.03 5.183-12.78Z" fill="#000" />
      <path
        d="m11.959 9.004 6.101 7.41-12.097.018 5.996-7.428Z"
        fill="#FFCE00"
      />
    </g>
    <defs>
      <clipPath id="SaintLucia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSaintLucia;
