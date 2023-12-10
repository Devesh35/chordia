const SvgBulgaria = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Bulgaria_svg__a)">
      <path d="M0 12h24v6H0v-6Z" fill="#D62612" />
      <path d="M0 0h24v6H0V0Z" fill="#fff" />
      <path d="M0 6h24v6H0V6Z" fill="#00966E" />
    </g>
    <defs>
      <clipPath id="Bulgaria_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBulgaria;
