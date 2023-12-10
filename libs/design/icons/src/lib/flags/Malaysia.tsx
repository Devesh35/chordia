const SvgMalaysia = ({
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
    <g clipPath="url(#Malaysia_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#C00" />
      <path
        d="M.019 1.496H23.98v1.44H.02v-1.44Zm0 2.951H23.98v1.44H.02v-1.44Zm0 2.955H23.98v1.44H.02v-1.44Z"
        fill="#fff"
      />
      <path d="M0 .019h12v10.5H0V.019Z" fill="#006" />
      <path
        d="m7.781 2.767.225 1.527.863-1.275-.465 1.47 1.33-.78-1.053 1.125 1.538-.12-1.437.555 1.437.555-1.538-.12 1.054 1.125-1.331-.78.46 1.473-.862-1.278-.225 1.526-.22-1.526-.863 1.275.465-1.47-1.332.78 1.05-1.125-1.537.12 1.44-.555-1.436-.555 1.537.12-1.054-1.125 1.332.78-.465-1.474.862 1.279.225-1.527Zm-1.249.064a2.666 2.666 0 1 0 0 4.875 3 3 0 1 1 0-4.875Z"
        fill="#FC0"
      />
      <path
        d="M.019 10.357H23.98v1.44H.02v-1.44Zm0 2.933H23.98v1.44H.02v-1.44Zm-.02 3.27h23.963V18H0v-1.44Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Malaysia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMalaysia;
