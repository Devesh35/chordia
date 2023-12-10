const SvgTrinidadAndTobago = ({
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
    <g clipPath="url(#TrinidadAndTobago_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.389 18 0 .037v17.955L17.389 18ZM6.61 0 24 17.962V.007L6.611 0Z"
        fill="#E00000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.039.008h4.447L23.044 17.98h-4.587L1.04.008Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="TrinidadAndTobago_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrinidadAndTobago;
