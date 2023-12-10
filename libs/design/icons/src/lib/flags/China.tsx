const SvgChina = ({
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
    <g clipPath="url(#China_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#EE1C25" />
      <path
        d="M2.88 6.66 4.5 1.8l1.62 4.86L1.8 3.69h5.4L2.88 6.66ZM9.906 1.893l-1.667.37L9.351.967 9.242 2.71l-.925-1.544 1.59.726ZM11.589 4.026l-1.68-.307 1.528-.763-.777 1.566-.254-1.782 1.183 1.286ZM11.344 7.017l-1.41-.964 1.707-.074-1.348 1.112.495-1.73.556 1.656ZM9.225 8.972l-.928-1.434 1.603.59-1.673.506 1.125-1.405-.127 1.743Z"
        fill="#FF0"
      />
    </g>
    <defs>
      <clipPath id="China_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChina;
