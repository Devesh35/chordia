const SvgSomalia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Somalia_svg__a)">
      <path d="M-1.5 0h27v18h-27V0Z" fill="#40A6FF" />
      <path
        d="m14.83 13.402-2.9-1.881-2.887 1.898 1.073-3.083-2.883-1.905 3.572-.029 1.104-3.076 1.128 3.07 3.565.003-2.865 1.923 1.097 3.08h-.004Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Somalia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSomalia;
