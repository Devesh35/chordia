const SvgMali = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Mali_svg__a)">
      <path d="M15.967 0H24v18h-8.036l.003-18Z" fill="red" />
      <path d="M0 0h7.984v18H0V0Z" fill="#009A00" />
      <path d="M7.984 0h8.025v18H7.984V0Z" fill="#FF0" />
    </g>
    <defs>
      <clipPath id="Mali_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMali;
