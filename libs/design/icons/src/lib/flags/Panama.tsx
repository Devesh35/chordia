const SvgPanama = ({
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
    <g clipPath="url(#Panama_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.469 0h17.895v18h-17.9L3.47 0Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.112.135h13.425v8.314H12.112V.135Z"
        fill="#DB0000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.12 8.449h11.996V18H.12V8.449Zm7.935-1.785L6.48 5.56l-1.564 1.11.581-1.8-1.56-1.121 1.935-.015.6-1.8.612 1.796h1.935L7.462 4.856l.597 1.8-.004.008Z"
        fill="#0000AB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.384 15.521-1.59-1.039-1.579 1.05.585-1.71-1.575-1.05 1.95-.018.607-1.703.616 1.699h1.95l-1.568 1.069.6 1.702h.004Z"
        fill="#D80000"
      />
    </g>
    <defs>
      <clipPath id="Panama_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPanama;
