const SvgNorthMacedonia = ({
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
    <g clipPath="url(#NorthMacedonia_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#D20000" />
      <path
        d="M0 0h3.6L12 8.677 20.4 0H24L0 18h3.6L12 9.322 20.4 18H24L0 0Zm24 7.2v3.6L0 7.2v3.6l24-3.6ZM10.5 0 12 7.714 13.5 0h-3Zm0 18 1.5-7.714L13.5 18h-3Z"
        fill="#FFE600"
      />
      <path
        d="M12 11.891a2.891 2.891 0 1 0 0-5.782 2.891 2.891 0 0 0 0 5.782Z"
        fill="#FFE600"
        stroke="#D20000"
        strokeWidth={1.426}
      />
    </g>
    <defs>
      <clipPath id="NorthMacedonia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNorthMacedonia;
