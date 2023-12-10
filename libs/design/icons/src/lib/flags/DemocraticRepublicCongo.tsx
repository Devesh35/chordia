const SvgDemocraticRepublicCongo = ({
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
    <g clipPath="url(#DemocraticRepublicCongo_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#007FFF" />
      <path
        d="M1.08 3.6H3.6l.78-2.52.78 2.52h2.52L5.64 5.16l.78 2.52-2.04-1.56-2.04 1.56.78-2.52L1.08 3.6ZM22.5 0 0 13.5V18h1.5L24 4.5V0h-1.5Z"
        fill="#F7D618"
      />
      <path d="M24 0 0 14.4V18L24 3.6V0Z" fill="#CE1021" />
    </g>
    <defs>
      <clipPath id="DemocraticRepublicCongo_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDemocraticRepublicCongo;
