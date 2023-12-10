const SvgSaintVincentAndTheGre = ({
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
    <g
      fillRule="evenodd"
      clipRule="evenodd"
      clipPath="url(#SaintVincentAndTheGre_svg__a)"
    >
      <path d="M0 0h24v18H0V0Z" fill="#F4F100" />
      <path d="M18.375 0H24v18h-5.625V0Z" fill="#199A00" />
      <path d="M0 0h5.625v18H0V0Z" fill="#0058AA" />
      <path
        d="m9.724 4.875-1.74 2.674 1.676 2.79 1.643-2.764-1.58-2.7Zm4.545 0-1.736 2.674 1.676 2.79 1.642-2.764-1.582-2.7Zm-2.295 3.649-1.74 2.677 1.68 2.79 1.642-2.764-1.582-2.7v-.003Z"
        fill="#199A00"
      />
    </g>
    <defs>
      <clipPath id="SaintVincentAndTheGre_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSaintVincentAndTheGre;
