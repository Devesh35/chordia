const SvgIreland = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Ireland_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path d="M0 0h7.999v18H0V0Z" fill="#009A49" />
      <path d="M16.001 0H24v18h-7.999V0Z" fill="#FF7900" />
    </g>
    <defs>
      <clipPath id="Ireland_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIreland;
