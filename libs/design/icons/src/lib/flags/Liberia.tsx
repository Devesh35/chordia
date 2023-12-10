const SvgLiberia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Liberia_svg__a)">
      <path d="M0 0h26.997v18H0V0Z" fill="#fff" />
      <path d="M0 0h8.18v8.184H0V0Z" fill="#006" />
      <path d="M0 16.344h26.996V18H0v-1.656Z" fill="#C00" />
      <path
        d="M0 16.362h26.997V18H0v-1.638Zm0-3.266h26.997v1.624H0v-1.624Zm0-3.277h26.93v1.642H0V9.819ZM8.18 0h18.813v1.635H8.181V0Zm0 6.54h18.813v1.644H8.181V6.54Zm0-3.26h18.813v1.635H8.181V3.28Z"
        fill="#C00"
      />
      <path
        d="M5.847 6.24 4.064 5.15l-1.772 1.1.658-1.789L1.18 3.357l2.19-.014.68-1.782.695 1.779h2.19l-1.76 1.114.67 1.786Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Liberia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLiberia;
