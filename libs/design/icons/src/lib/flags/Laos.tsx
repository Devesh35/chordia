const SvgLaos = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Laos_svg__a)">
      <path d="M-1.5 0h27v18h-27V0Z" fill="#CE1126" />
      <path d="M-1.5 4.474h27v9.052h-27V4.474Z" fill="#002868" />
      <path
        d="M15.877 9a3.877 3.877 0 1 1-7.754 0 3.877 3.877 0 0 1 7.754 0Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Laos_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLaos;
