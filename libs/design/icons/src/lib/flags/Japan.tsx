const SvgJapan = ({
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
    <g clipPath="url(#Japan_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.5 0h27v18h-27V0Z"
        fill="#fff"
      />
      <path
        d="M12.002 14.596a5.595 5.595 0 1 0 0-11.19 5.595 5.595 0 0 0 0 11.19Z"
        fill="#BC002D"
      />
    </g>
    <defs>
      <clipPath id="Japan_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgJapan;
