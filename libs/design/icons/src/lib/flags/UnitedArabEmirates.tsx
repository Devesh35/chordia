const SvgUnitedArabEmirates = ({
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
    <g clipPath="url(#UnitedArabEmirates_svg__a)">
      <path d="M0 0h24v6H0V0Z" fill="#00732F" />
      <path d="M0 6h24v6H0V6Z" fill="#fff" />
      <path d="M0 12h24v6H0v-6Z" fill="#000" />
      <path d="M0 0h8.25v18H0V0Z" fill="red" />
    </g>
    <defs>
      <clipPath id="UnitedArabEmirates_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnitedArabEmirates;
