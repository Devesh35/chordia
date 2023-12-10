const SvgAzerbaijan = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={19}
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <g clipPath="url(#Azerbaijan_svg__a)">
      <path d="M.004 0h24v18.113h-24V0Z" fill="#3F9C35" />
      <path d="M.004 0h24v12.075h-24V0Z" fill="#ED2939" />
      <path d="M.004 0h24v6.038h-24V0Z" fill="#00B9E4" />
      <path
        d="M11.4 11.774c1.491 0 2.7-1.217 2.7-2.717 0-1.501-1.209-2.717-2.7-2.717a2.709 2.709 0 0 0-2.7 2.717c0 1.5 1.209 2.717 2.7 2.717Z"
        fill="#fff"
      />
      <path
        d="M12 11.32a2.257 2.257 0 0 0 2.25-2.263A2.257 2.257 0 0 0 12 6.792a2.257 2.257 0 0 0-2.25 2.265A2.257 2.257 0 0 0 12 11.32Z"
        fill="#ED2939"
      />
      <path
        d="m14.4 7.547.289.811.772-.37-.367.782.806.287-.806.29.367.777-.772-.37-.289.812-.289-.811-.772.37.367-.778-.806-.29.806-.291-.367-.777.772.37.289-.812Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Azerbaijan_svg__a">
        <path fill="#fff" d="M0 0h24v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAzerbaijan;
