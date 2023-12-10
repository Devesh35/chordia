const SvgTonga = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Tonga_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#C10000" />
      <path d="M0 0h9.375v7.512H0V0Z" fill="#fff" />
      <g fill="#C10000">
        <path d="M3.855 1.17h1.496v5.235H3.86L3.855 1.17Z" />
        <path d="M7.222 3.038v1.5H1.987v-1.5h5.235Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Tonga_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTonga;
