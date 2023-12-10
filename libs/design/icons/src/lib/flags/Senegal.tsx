const SvgSenegal = ({
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
    <g clipPath="url(#Senegal_svg__a)">
      <g fillRule="evenodd" clipRule="evenodd">
        <path d="M0 0h7.999v18h-8V0Z" fill="#0B7226" />
        <path d="M7.999 0h7.999v18h-8V0Z" fill="#FF0" />
        <path d="M15.998 0H24v18h-8.002V0Z" fill="#BC0000" />
      </g>
      <path
        d="M12.825 8.205h2.693L13.395 9.84l.776 2.599-2.122-1.635-2.123 1.56.777-2.524L8.58 8.205h2.617l.852-2.674.776 2.674Z"
        fill="#0B7226"
      />
    </g>
    <defs>
      <clipPath id="Senegal_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSenegal;
