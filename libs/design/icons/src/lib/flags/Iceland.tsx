const SvgIceland = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Iceland_svg__a)">
      <path d="M0 0h25.001v18H0V0Z" fill="#003897" />
      <path
        d="M0 7.001h7.001V0H11v7.001H25V11H11V18H7v-7.001H0V7Z"
        fill="#fff"
      />
      <path
        d="M0 7.999h7.999V0H10v7.999h15V10h-15V18H8v-7.999H0V8Z"
        fill="#D72828"
      />
    </g>
    <defs>
      <clipPath id="Iceland_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIceland;
