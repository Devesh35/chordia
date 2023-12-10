const SvgBurkinaFaso = ({
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
      clipPath="url(#BurkinaFaso_svg__a)"
    >
      <path d="M24 17.985H.015V0H24v17.985Z" fill="#DE0000" />
      <path d="M23.985 18H0V9.007h23.985V18Z" fill="#35A100" />
      <path
        d="M9.547 10.357 5.572 7.643h4.913L12 3.248l1.515 4.402 4.912-.004-3.974 2.715 1.518 4.399-3.975-2.723-3.971 2.715"
        fill="#FFF300"
      />
    </g>
    <defs>
      <clipPath id="BurkinaFaso_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBurkinaFaso;
