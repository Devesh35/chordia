const SvgArmenia = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={19}
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g clipPath="url(#Armenia_svg__a)">
      <path d="M0 0h24v6.038H0V0Z" fill="#D90012" />
      <path d="M0 6.038h24v6.037H0V6.038Z" fill="#0033A0" />
      <path d="M0 12.075h24v6.038H0v-6.037Z" fill="#F2A800" />
    </g>
    <defs>
      <clipPath id="Armenia_svg__a">
        <path fill="#fff" d="M0 0h24v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArmenia;
