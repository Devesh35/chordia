const SvgQatar = ({
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
    <g clipPath="url(#Qatar_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#8D1B3D" />
      <path
        d="M0 0v18h5.94l3.667-1.001L5.94 16 9.604 15 5.94 13.999 9.604 13 5.94 12l3.667-1.001L5.94 10 9.604 9 5.94 7.999 9.604 7 5.94 6l3.667-1.001L5.94 4 9.604 3 5.94 1.999 9.607 1 5.938 0H0Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Qatar_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQatar;
