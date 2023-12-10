const SvgGreece = ({
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
    <g clipPath="url(#Greece_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h24v1.999H0V0Z"
        fill="#0D5EAF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.999h24V4H0V2Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.001h24V6H0V4Z"
        fill="#0D5EAF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6h24v1.999H0V6Z"
        fill="#fff"
      />
      <path d="M0 0h10.001v10.001H0V0Z" fill="#0D5EAF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.999h24V10H0V8Z"
        fill="#0D5EAF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.001h24V12H0V10Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12h24v1.999H0V12Z"
        fill="#0D5EAF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 13.999h24V16H0V14Z"
        fill="#fff"
      />
      <g fillRule="evenodd" clipRule="evenodd" fill="#fff">
        <path d="M4.001 0H6v10.001H4.001V0Z" />
        <path d="M0 4.001h10.001V6H0V4Z" />
      </g>
      <path d="M0 16.001h24V18H0V16Z" fill="#0D5EAF" />
    </g>
    <defs>
      <clipPath id="Greece_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGreece;
