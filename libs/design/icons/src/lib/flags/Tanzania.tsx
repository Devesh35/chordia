const SvgTanzania = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Tanzania_svg__a)">
      <path d="M-1.5 0h27v18h-27V0Z" fill="#09F" />
      <path d="M-1.5 0h27l-27 18V0Z" fill="#090" />
      <path d="M-1.5 18h6l21-14.25V0h-6l-21 14.25V18Z" fill="#000" />
      <path
        d="M-1.5 13.725 19.08 0h2.025L-1.5 15.075v-1.35ZM2.895 18 25.5 2.925v1.35L4.92 18H2.895Z"
        fill="#FF0"
      />
    </g>
    <defs>
      <clipPath id="Tanzania_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTanzania;
