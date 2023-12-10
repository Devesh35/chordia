const SvgSweden = ({
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
    <g clipPath="url(#Sweden_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#005293" />
      <path
        d="M6.6 0v7.2H0v3.6h6.6V18h3.6v-7.2H24V7.2H10.2V0H6.6Z"
        fill="#FECB00"
      />
    </g>
    <defs>
      <clipPath id="Sweden_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSweden;
