const SvgBahrain = ({
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
    <g clipPath="url(#Bahrain_svg__a)">
      <path d="M0 0h24v18H0" fill="#fff" />
      <path
        d="M24 0H3.6l4.151 1.8L3.6 3.6l4.151 1.8L3.6 7.2 7.751 9 3.6 10.8l4.151 1.8L3.6 14.4l4.151 1.8L3.6 18H24"
        fill="#CE1126"
      />
    </g>
    <defs>
      <clipPath id="Bahrain_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBahrain;
