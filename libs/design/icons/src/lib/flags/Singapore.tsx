const SvgSingapore = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Singapore_svg__a)">
      <path d="M-.75 0h27v18h-27V0Z" fill="#fff" />
      <path d="M-.75 0h27v9h-27V0Z" fill="#DF0000" />
      <path
        d="M5.475 1.508a3.165 3.165 0 0 0 .03 6.195A3.225 3.225 0 0 1 1.508 5.49 3.225 3.225 0 0 1 3.72 1.515a3.085 3.085 0 0 1 1.759-.007h-.004Z"
        fill="#fff"
      />
      <path
        d="m4.988 4.125.183.563-.487-.345-.48.352.176-.57-.48-.349.596-.007.188-.563.187.563h.593l-.476.356Zm.656 1.95.187.566-.487-.345-.484.349.18-.566-.48-.353.596-.003.184-.567.188.563h.6l-.484.356Zm2.194-.015.183.57-.487-.349-.48.349.176-.566-.48-.349.596-.007.188-.563.187.563h.593l-.476.352Zm.652-1.935.184.566-.488-.345-.48.349.18-.566-.483-.353.6-.003.18-.567.187.563h.6l-.48.356ZM6.754 2.839l.187.57-.487-.349-.484.353.18-.57-.48-.353.593-.004.187-.566.188.563h.6l-.484.356Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Singapore_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSingapore;
