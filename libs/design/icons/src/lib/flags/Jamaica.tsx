const SvgJamaica = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Jamaica_svg__a)">
      <path d="m0 0 12 9-12 9V0Zm24 0L12 9l12 9V0Z" fill="#000" />
      <path d="m0 0 12 9 12-9H0Zm0 18 12-9 12 9H0Z" fill="#090" />
      <path d="M24 0h-2.235L0 16.324V18h2.235L24 1.676V0Z" fill="#FC0" />
      <path d="M0 0v1.676L21.765 18H24v-1.676L2.235 0H0Z" fill="#FC0" />
    </g>
    <defs>
      <clipPath id="Jamaica_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJamaica;
