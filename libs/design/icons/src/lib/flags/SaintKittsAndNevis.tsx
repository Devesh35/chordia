const SvgSaintKittsAndNevis = ({
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
      clipPath="url(#SaintKittsAndNevis_svg__a)"
    >
      <path d="M-.974.007h25.932v17.976H-.974V.007Z" fill="#FFE900" />
      <path d="m-.988.007.028 12.959L19.22 0-.988.007Z" fill="#35A100" />
      <path
        d="M24.99 17.983 24.94 4.51 4.585 17.993l20.404-.01Z"
        fill="#C70000"
      />
      <path
        d="M-.977 13.943-.96 18l4.406-.007L24.95 3.576 24.93.049 20.577.007-.973 13.943h-.004Z"
        fill="#000"
      />
      <path
        d="m16.19 5.506-.345-1.484 1.17.95 1.337-.866-.612 1.452 1.174.95-1.554-.053-.608 1.452-.348-1.484-1.55-.053 1.336-.864Zm-9.675 6.293-.348-1.488 1.17.95 1.336-.865-.611 1.452 1.174.949-1.55-.053-.612 1.452-.345-1.483-1.55-.053 1.336-.861Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="SaintKittsAndNevis_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSaintKittsAndNevis;
