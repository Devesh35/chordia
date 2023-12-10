const SvgThailand = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Thailand_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#F4F5F8" />
      <path d="M0 6.094h24v6H0v-6Z" fill="#2D2A4A" />
      <path d="M0 0h24v3.094H0V0Zm0 15h24v3H0v-3Z" fill="#A51931" />
    </g>
    <defs>
      <clipPath id="Thailand_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThailand;
