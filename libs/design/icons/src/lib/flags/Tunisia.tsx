const SvgTunisia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Tunisia_svg__a)">
      <path d="M-1.5 0h27v18h-27V0Z" fill="#E70013" />
      <path
        d="M16.563 8.993a4.539 4.539 0 1 1-9.078 0 4.539 4.539 0 0 1 9.078 0Z"
        fill="#fff"
      />
      <path
        d="M12.025 12.002a3.012 3.012 0 0 1 0-6.022c.415 0 .89.099 1.209.334-2.2.08-2.76 1.951-2.76 2.704 0 .752.355 2.429 2.76 2.678-.274.176-.794.306-1.21.306Z"
        fill="#E70013"
      />
      <path
        d="m14.675 10.259-1.367-.5-.904 1.14.053-1.453-1.364-.51 1.4-.4.059-1.452.816 1.206 1.399-.387-.897 1.143.805 1.213Z"
        fill="#E70013"
      />
    </g>
    <defs>
      <clipPath id="Tunisia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTunisia;
