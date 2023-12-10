const SvgDjibouti = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Djibouti_svg__a)">
      <path d="M-.004 0h27.072v18.048H-.004V0Z" fill="#0C0" />
      <path d="M-.004 0h27.072v9.024H-.004V0Z" fill="#69F" />
      <path d="m-.004 0 13.49 9.013-13.49 9V0Z" fill="#FFFEFE" />
      <path
        d="m5.63 10.293-1.087-.776-1.082.79.402-1.283-1.078-.793 1.335-.01.413-1.28.423 1.276h1.336l-1.075.8.412 1.283v-.007Z"
        fill="red"
      />
    </g>
    <defs>
      <clipPath id="Djibouti_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDjibouti;
