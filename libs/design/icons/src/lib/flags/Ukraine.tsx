const SvgUkraine = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Ukraine_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="gold" />
      <path d="M0 0h24v9H0V0Z" fill="#0057B8" />
    </g>
    <defs>
      <clipPath id="Ukraine_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUkraine;
