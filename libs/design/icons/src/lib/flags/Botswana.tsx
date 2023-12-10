const SvgBotswana = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Botswana_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#00CBFF" />
      <path d="M0 6h24v6H0V6Z" fill="#fff" />
      <path d="M0 6.975h24v4.05H0v-4.05Z" fill="#000" />
    </g>
    <defs>
      <clipPath id="Botswana_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBotswana;
