const SvgFinland = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <rect x={2} y={2} width={20} height={20} rx={10} fill="#D8D8D8" />
    <mask
      id="Finland_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <rect x={2} y={2} width={20} height={20} rx={9} fill="#fff" />
    </mask>
    <g mask="url(#Finland_svg__a)">
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path fill="#3D9BE0" d="M0 10h24v4H0z" />
      <path fill="#3D9BE0" d="M7 24V0h4v24z" />
    </g>
  </svg>
);
export default SvgFinland;
