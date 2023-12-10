const SvgHungary = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Hungary_svg__a)">
      <path d="M24 18H0V0h24v18Z" fill="#fff" />
      <path d="M24 18H0v-6h24v6Z" fill="#388D00" />
      <path d="M24 6.004H0v-6h24v6Z" fill="#D43516" />
    </g>
    <defs>
      <clipPath id="Hungary_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHungary;
