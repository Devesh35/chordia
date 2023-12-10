const SvgPalau = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Palau_svg__a)">
      <path d="M-3.866 0H27.87v18H-3.866V0Z" fill="#4AADD6" />
      <path
        d="M15.221 8.704c.019.651-.1 1.3-.347 1.907a4.86 4.86 0 0 1-1.095 1.628 5.11 5.11 0 0 1-1.67 1.092 5.293 5.293 0 0 1-3.964 0 5.11 5.11 0 0 1-1.67-1.092A4.86 4.86 0 0 1 5.38 10.61a4.693 4.693 0 0 1-.348-1.907c-.018-.652.1-1.3.348-1.908A4.86 4.86 0 0 1 6.475 5.17a5.11 5.11 0 0 1 1.67-1.092 5.293 5.293 0 0 1 3.964 0 5.11 5.11 0 0 1 1.67 1.092 4.86 4.86 0 0 1 1.095 1.627c.247.608.366 1.256.347 1.908Z"
        fill="#FFDE00"
      />
    </g>
    <defs>
      <clipPath id="Palau_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPalau;
