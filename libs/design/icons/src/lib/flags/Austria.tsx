const SvgAustria = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Austria_svg__a)">
      <path d="M24 18.113H0V0h24v18.113Z" fill="#fff" />
      <path
        d="M24 18.113H0v-6.037h24v6.037Zm0-12.071H0V.004h24v6.038Z"
        fill="#C8102E"
      />
    </g>
    <defs>
      <clipPath id="Austria_svg__a">
        <path fill="#fff" d="M0 0h24v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAustria;
