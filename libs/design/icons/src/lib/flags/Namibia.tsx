const SvgNamibia = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Namibia_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path d="m-.99.007.03 12.96L19.219 0-.99.007Z" fill="#3662A2" />
      <path
        d="m24.99 17.985-.052-13.474L4.585 17.993l20.4-.008h.004Z"
        fill="#38A100"
      />
      <path
        d="M-.975 13.942-.96 18l4.406-.004L24.952 3.577 24.927.05 20.576.01-.975 13.94v.003Z"
        fill="#C70000"
      />
      <path
        d="m8.235 6.45-.817-.495-.473.829-.457-.833-.825.484.022-.953-.952.008.495-.818-.83-.468.833-.462-.48-.825.953.023-.004-.956.814.495.472-.829.458.832L8.269 2l-.023.952.953-.007-.495.817.829.469-.833.461.48.825-.952-.022.007.956Z"
        fill="#FFE700"
      />
      <path
        d="M8.715 4.215c0 .96-.784 1.736-1.747 1.736A1.742 1.742 0 0 1 5.22 4.215c0-.96.78-1.733 1.748-1.733.967 0 1.747.777 1.747 1.733Z"
        fill="#3662A2"
      />
      <path
        d="M8.336 4.215a1.369 1.369 0 1 1-2.737 0 1.369 1.369 0 0 1 2.737 0Z"
        fill="#FFE700"
      />
    </g>
    <defs>
      <clipPath id="Namibia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNamibia;
