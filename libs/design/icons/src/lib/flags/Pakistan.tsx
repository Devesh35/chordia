const SvgPakistan = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Pakistan_svg__a)">
      <path d="M-1.502 0h27v18h-27V0Z" fill="#0C590B" />
      <path d="M-1.502 0h6.767v18h-6.767V0Z" fill="#fff" />
      <g fill="#fff">
        <path d="m16.03 7.924-1.097-.232-.576.96-.12-1.111-1.09-.253 1.02-.457-.095-1.115.752.83 1.03-.436-.559.97.739.844h-.004Z" />
        <path d="M16.442 10.758a4.261 4.261 0 0 1-5.671 2.088 4.293 4.293 0 0 1-2.092-5.699 4.17 4.17 0 0 1 2.51-2.26 5.5 5.5 0 0 0-.415.383 3.948 3.948 0 0 0 5.671 5.488h-.003Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Pakistan_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPakistan;
