const SvgLithuania = ({
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
    <g clipPath="url(#Lithuania_svg__a)">
      <path d="M24 0H0v17.922h24V0Z" fill="#006A44" />
      <path d="M24 12.027H0v5.974h24v-5.974Z" fill="#C1272D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h24v5.973H0V0Z"
        fill="#FDB913"
      />
    </g>
    <defs>
      <clipPath id="Lithuania_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLithuania;
