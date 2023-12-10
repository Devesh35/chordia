const SvgMarshallIslands = ({
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
    <g
      fillRule="evenodd"
      clipRule="evenodd"
      clipPath="url(#MarshallIslands_svg__a)"
    >
      <path d="M0 0h23.997v18H0V0Z" fill="#3B5AA3" />
      <path d="M0 17.512 23.997 0v3.263L0 18v-.488Z" fill="#E2AE57" />
      <path
        d="M.84 18 24 6.72l-.003-3.581L0 18h.84ZM6.578.57l-.24 3.855-1.013-2.46.39 2.618-1.57-2.115 1.03 2.41-2.062-1.597 1.605 2.01-2.329-1.035 2.04 1.545-2.539-.337 2.4.952-3.765.345 3.773.252-2.389.982 2.513-.337-2.037 1.5 2.363-1.035-1.613 2.025 2.048-1.55-1.013 2.36 1.635-2.052-.442 2.554 1.031-2.389.233 3.777.363-3.765.89 2.4-.338-2.588 1.627 2.055-1.072-2.4 2.047 1.65-1.627-2.059 2.433 1.013-2.152-1.571 2.621.442-2.512-.964 3.903-.243-3.9-.364 2.57-.855-2.663.337L11.014 4.4l-2.475.994 1.71-2.074-2.085 1.627 1.001-2.49L7.55 4.571l.349-2.64-.964 2.494L6.574.57h.004Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="MarshallIslands_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMarshallIslands;
