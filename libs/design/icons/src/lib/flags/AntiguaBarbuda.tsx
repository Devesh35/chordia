const SvgAntiguaBarbuda = ({
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
    <g
      fillRule="evenodd"
      clipRule="evenodd"
      clipPath="url(#AntiguaBarbuda_svg__a)"
    >
      <path d="M-1.418 0h26.835v18.096H-1.418V0Z" fill="#fff" />
      <path d="M-1.358.021h26.75v7.645H-1.36l.003-7.645Z" fill="#000" />
      <path d="M3.55 7.189h17.754v4.026H3.55V7.189Z" fill="#0061FF" />
      <path
        d="M25.4.064v18.05H12.012L25.4.06v.004Zm-26.772 0v18.05h13.384L-1.372.06v.004Z"
        fill="#E20000"
      />
      <path
        d="m18.284 7.192-2.686-.683 2.282-1.733-2.802.403 1.441-2.458-2.485 1.45.45-2.862L12.8 3.566 12.12.948l-.763 2.7-1.68-2.3.481 2.943L7.67 2.76l1.442 2.46-2.721-.443 2.243 1.691-2.81.725H18.285Z"
        fill="#FFD600"
      />
    </g>
    <defs>
      <clipPath id="AntiguaBarbuda_svg__a">
        <path fill="#fff" d="M0 0h24v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAntiguaBarbuda;
