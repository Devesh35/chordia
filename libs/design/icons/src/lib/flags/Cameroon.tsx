const SvgCameroon = ({
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
    <g clipPath="url(#Cameroon_svg__a)">
      <path d="M0 0h7.999v18H0V0Z" fill="#007A5E" />
      <path d="M7.999 0H16v18H8V0Z" fill="#CE1126" />
      <path d="M16.001 0H24v18h-7.999V0Z" fill="#FCD116" />
      <g fill="#FCD116">
        <path d="m12 6.867-.667 2.026 1.014.347L12 6.867Z" />
        <path d="m12 6.867.667 2.026-1.014.347L12 6.867Z" />
        <path d="m14.029 8.34-2.134-.007-.016 1.07 2.15-1.062Z" />
        <path d="m14.029 8.34-1.722 1.261-.642-.857 2.364-.403Z" />
        <path d="m13.254 10.726-.652-2.031-1.024.315 1.676 1.716Z" />
        <path d="m13.254 10.726-1.73-1.248.615-.876 1.115 2.124Z" />
        <path d="m10.746 10.726 1.73-1.248-.615-.876-1.115 2.124Z" />
        <path d="m10.746 10.726.652-2.032 1.024.315-1.676 1.717Z" />
        <path d="m9.971 8.34 1.722 1.261.642-.857-2.364-.403Z" />
        <path d="m9.971 8.34 2.134-.007.016 1.07-2.15-1.062Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Cameroon_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCameroon;
