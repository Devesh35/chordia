const SvgGambia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Gambia_svg__a)">
      <path d="M0-3h24v7.999H0V-3Z" fill="red" />
      <path d="M0 4.999h24v1.339H0v-1.34Z" fill="#fff" />
      <path d="M0 6.334h24v5.329H0v-5.33Z" fill="#009" />
      <path d="M0 11.666h24v1.335H0v-1.335Z" fill="#fff" />
      <path d="M0 13.001h24v8H0v-8Z" fill="#090" />
    </g>
    <defs>
      <clipPath id="Gambia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGambia;
