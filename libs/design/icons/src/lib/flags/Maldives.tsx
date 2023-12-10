const SvgMaldives = ({
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
    <g clipPath="url(#Maldives_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#D21034" />
      <path d="M4.5 4.5h15v9h-15v-9Z" fill="#007E3A" />
      <path d="M13.125 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#fff" />
      <path d="M14.25 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="#007E3A" />
    </g>
    <defs>
      <clipPath id="Maldives_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMaldives;
