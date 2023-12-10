const SvgMorocco = ({
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
    <g clipPath="url(#Morocco_svg__a)">
      <path d="M24 0H0v18h24V0Z" fill="#C1272D" />
      <path
        d="m12 6.727-1.335 4.11 3.495-2.535H9.84l3.495 2.536L12 6.728Z"
        stroke="#006233"
        strokeWidth={0.975}
      />
    </g>
    <defs>
      <clipPath id="Morocco_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMorocco;
