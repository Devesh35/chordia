const SvgGuyana = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Guyana_svg__a)">
      <path d="M.09 0H24v18H.09V0Z" fill="#399408" />
      <path
        d="M.007 0c-.033 0 23.235 9.056 23.235 9.056L0 17.993.007 0Z"
        fill="#fff"
      />
      <path
        d="M.011.758c.128 0 20.963 8.17 20.846 8.25L.072 17.37.011.761V.758Z"
        fill="#FFDE08"
      />
      <path
        d="M.071.03C.14.03 10.98 9.064 10.98 9.064L.067 17.888V.03h.004Z"
        fill="#000"
      />
      <path
        d="M.011 1.271C.071.71 9.795 9.086 9.795 9.086L.008 16.94V1.27H.01Z"
        fill="#DE2110"
      />
    </g>
    <defs>
      <clipPath id="Guyana_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGuyana;
