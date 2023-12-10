const SvgChile = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Chile_svg__a)">
      <path d="M9 0h18v9H9V0Z" fill="#fff" />
      <path d="M0 0h9v9H0V0Z" fill="#0039A6" />
      <path
        d="M5.9 6.74 4.506 5.694 3.118 6.75l.517-1.716L2.25 3.976l1.712-.017.531-1.709.545 1.705 1.712.004-1.378 1.068.527 1.712Z"
        fill="#fff"
      />
      <path d="M0 9h27v9H0V9Z" fill="#D52B1E" />
    </g>
    <defs>
      <clipPath id="Chile_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChile;
