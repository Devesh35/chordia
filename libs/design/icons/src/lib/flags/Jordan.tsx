const SvgJordan = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Jordan_svg__a)">
      <path d="M.002 0h36v6.001h-36V0Z" fill="#000" />
      <path d="M.002 6.001h36V12h-36V6Z" fill="#fff" />
      <path d="M.002 11.999h36V18h-36V12Z" fill="#090" />
      <path d="m.002 18 18-9-18-9v18Z" fill="#ce1126" />
      <path
        d="m5.005 10.16.2-.875H4.31l.809-.387-.56-.7.81.387.196-.872.2.876.806-.39-.563.7.809.386h-.893l.2.875-.559-.703-.559.703Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Jordan_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJordan;
