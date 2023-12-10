const SvgYouTube = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g clipPath="url(#YouTube_svg__a)">
      <path
        d="M23.522 6.185A3.016 3.016 0 0 0 21.4 4.05c-1.876-.505-9.376-.505-9.376-.505s-7.5 0-9.377.505A3.016 3.016 0 0 0 .526 6.185C.024 8.07.024 12 .024 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136c1.877.505 9.377.505 9.377.505s7.5 0 9.376-.505a3.017 3.017 0 0 0 2.122-2.136c.502-1.884.502-5.814.502-5.814s0-3.93-.502-5.815Z"
        fill="#FF0302"
      />
      <path d="M9.57 15.569V8.43L15.841 12 9.57 15.569Z" fill="#FEFEFE" />
    </g>
    <defs>
      <clipPath id="YouTube_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYouTube;
