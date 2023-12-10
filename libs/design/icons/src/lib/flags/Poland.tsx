const SvgPoland = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Poland_svg__a)">
      <path d="M24 18H0V0h24v18Z" fill="#fff" />
      <path d="M24 18H0V9h24v9Z" fill="#DC143C" />
    </g>
    <defs>
      <clipPath id="Poland_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPoland;
