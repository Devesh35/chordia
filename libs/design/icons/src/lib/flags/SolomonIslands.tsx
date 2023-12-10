const SvgSolomonIslands = ({
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
      clipPath="url(#SolomonIslands_svg__a)"
    >
      <path d="M0 17.831 34.713 0H0v17.831Z" fill="#0000D6" />
      <path d="M36 0 .956 18H36V0Z" fill="#006000" />
      <path d="M36 0h-1.93L0 17.065V18h1.93L36 .97V0Z" fill="#FC0" />
      <path
        d="m2.51.32.415 1.213h1.354l-1.094.742.419 1.209-1.094-.742-1.093.746.418-1.21L.742 1.53h1.35L2.51.32Zm6.719 0 .418 1.213H11l-1.096.745.421 1.21-1.1-.746-1.09.749.419-1.21-1.097-.748H8.81L9.23.32Zm0 5.08.418 1.213H11l-1.096.745.421 1.21-1.096-.75-1.09.75.418-1.21L7.46 6.61h1.354L9.229 5.4Zm-3.34-2.51.418 1.21h1.35l-1.09.748.415 1.21-1.09-.75-1.097.75.422-1.21L4.12 4.1h1.354l.415-1.21ZM2.51 5.4l.415 1.213h1.354l-1.094.745.419 1.21-1.094-.75-1.093.75.422-1.21-1.1-.749h1.35L2.51 5.4Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="SolomonIslands_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSolomonIslands;
