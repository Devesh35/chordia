const SvgTurkey = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Turkey_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#E30A17" />
      <path
        d="M15.262 9.281c0 2.483-2.047 4.497-4.575 4.497-2.527 0-4.575-2.014-4.575-4.5 0-2.487 2.048-4.493 4.575-4.493 2.528 0 4.575 2.014 4.575 4.496Z"
        fill="#fff"
      />
      <path
        d="M15.488 9.281c0 1.988-1.636 3.597-3.657 3.597s-3.66-1.613-3.66-3.6c0-1.988 1.639-3.593 3.66-3.593s3.66 1.609 3.66 3.596h-.003Z"
        fill="#E30A17"
      />
      <path
        d="m16.151 7.181-.037 1.662-1.549.42 1.53.543-.037 1.527.993-1.193 1.508.525-.87-1.279 1.061-1.27-1.631.45-.968-1.388v.003Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Turkey_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTurkey;
