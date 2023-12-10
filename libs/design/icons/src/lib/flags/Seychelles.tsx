const SvgSeychelles = ({
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
    <g clipPath="url(#Seychelles_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
      <path d="M0 18V0h24v6L0 18Z" fill="#D92223" />
      <path d="M0 18V0h16.001L0 18Z" fill="#FCD955" />
      <path d="M0 18V0h7.999L0 18Z" fill="#003D88" />
      <path d="m0 18 24-6v6H0Z" fill="#007A39" />
    </g>
    <defs>
      <clipPath id="Seychelles_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSeychelles;
