const SvgKuwait = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Kuwait_svg__a)">
      <path d="M0 5.998h36v6H0v-6Z" fill="#fff" />
      <path d="M0 11.999h36V18H0v-6.001Z" fill="#F31830" />
      <path d="M0 0h36v6.001H0V0Z" fill="#00D941" />
      <path d="M0 0v18l8.979-6.001L9 5.994 0 0Z" fill="#000" />
    </g>
    <defs>
      <clipPath id="Kuwait_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKuwait;
