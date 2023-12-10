const SvgCuba = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Cuba_svg__a)">
      <path d="M-.003 0h27.072v18.048H-.003V0Z" fill="#0050F0" />
      <path
        d="M-.003 3.61h27.072v3.61H-.003V3.61Zm0 7.219h27.072v3.61H-.003v-3.61Z"
        fill="#fff"
      />
      <path d="m-.003 0 15.535 9.013-15.535 9V0Z" fill="#ED0000" />
      <path
        d="m6.828 11.474-1.674-1.252-1.664 1.263.62-2.049-1.663-1.269 2.055-.014.638-2.044.652 2.037 2.055.004-1.653 1.28.634 2.044Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Cuba_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCuba;
