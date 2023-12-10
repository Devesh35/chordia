const SvgTogo = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Togo_svg__a)">
      <path d="M0 0h26.986v18H0V0Z" fill="#FFE300" />
      <path
        d="M0 7.316h26.986v3.618H0V7.316ZM0 .007h26.986v3.618H0V.007Z"
        fill="#118600"
      />
      <path d="M0 .01h10.775v10.92H0V.01Z" fill="#D80000" />
      <path
        d="M4.725 4.514c0-.028.664-1.863.664-1.863l.598 1.835s2.018.06 2.018.028S6.413 5.72 6.413 5.72s.752 2.11.72 2.046C7.105 7.706 5.39 6.5 5.39 6.5S3.642 7.706 3.674 7.706c.028 0 .66-1.986.66-1.986L2.77 4.546l1.955-.032Z"
        fill="#fff"
      />
      <path d="M0 14.386h26.986V18H0v-3.614Z" fill="#118600" />
    </g>
    <defs>
      <clipPath id="Togo_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTogo;
