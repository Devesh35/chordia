const SvgGuineaBissau = ({
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
    <g clipPath="url(#Guinea-Bissau_svg__a)">
      <path d="M0 0h8.25v18H0V0Z" fill="#CE1126" />
      <path d="M8.25 0H24v9H8.25V0Z" fill="#FCD116" />
      <path d="M8.25 9H24v9H8.25V9Z" fill="#009E49" />
      <g fill="#000">
        <path d="m4.125 6-.927 2.853 1.427.464" />
        <path d="m4.125 6 .927 2.853-1.427.464" />
      </g>
      <g fill="#000">
        <path d="M6.978 8.074h-3v1.5" />
        <path d="M6.978 8.074 4.551 9.837 3.67 8.624" />
      </g>
      <g fill="#000">
        <path d="m5.888 11.427-.927-2.853-1.426.463" />
        <path d="M5.888 11.427 3.461 9.664l.882-1.214" />
      </g>
      <g fill="#000">
        <path d="m2.362 11.427 2.427-1.763-.882-1.214" />
        <path d="m2.362 11.427.927-2.853 1.426.463" />
      </g>
      <g fill="#000">
        <path d="m1.272 8.073 2.427 1.763.882-1.213" />
        <path d="M1.272 8.073h3v1.5" />
      </g>
    </g>
    <defs>
      <clipPath id="Guinea-Bissau_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGuineaBissau;
