const SvgMyanmar = ({
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
    <g clipPath="url(#Myanmar_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#FECB00" />
      <path d="M0 6h24v12H0V6Z" fill="#34B233" />
      <path d="M0 12h24v6H0v-6Z" fill="#EA2839" />
      <g fill="#fff">
        <path d="m12 3 1.99 6.634h-3.98L12 3Z" />
        <path d="m8.101 15 2.29-6.536 3.22 2.34L8.1 15Z" />
        <path d="m5.692 7.584 6.923.157-1.23 3.785-5.693-3.942Z" />
        <path d="m18.309 7.584-5.694 3.942-1.23-3.785 6.924-.157Z" />
        <path d="m15.9 15-5.51-4.197 3.22-2.339L15.9 15Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Myanmar_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMyanmar;
