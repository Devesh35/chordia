const SvgBahamas = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Bahamas_svg__a)">
      <path d="M36.769 18H.056V.068H36.77V18Z" fill="#fff" />
      <path d="M36.769 12.919H.056V5.374H36.77v7.545Z" fill="#FFE900" />
      <path
        d="M36.769 18H.056v-5.977H36.77V18Zm0-11.951H.056V.075H36.77v5.974Z"
        fill="#08CED6"
      />
      <path
        d="M.037 0C.124 0 14.73 8.88 14.73 8.88L0 17.97.041 0H.037Z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="Bahamas_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBahamas;
