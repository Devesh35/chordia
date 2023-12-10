const SvgEthiopia = ({
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
    <g clipPath="url(#Ethiopia_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-6.233.123h36.59v17.555h-36.59V.123Z"
        fill="#FFC621"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-6.304 12.073h36.636v5.975H-6.304v-5.975Z"
        fill="#EF2118"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-6.233 0h36.59v6.345h-36.59V0Z"
        fill="#298C08"
      />
      <path
        d="M11.415 13.13a3.801 3.801 0 1 0 0-7.603 3.801 3.801 0 0 0 0 7.602Z"
        fill="#006BC6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.71 6.634-.229.159.829 1.163.222-.141-.825-1.181h.003Zm1.037 2.75-.342-.24.14-.448-1.695.025-.493-.377 2.316-.025.43-1.3.232.528-.588 1.833v.004Zm2.696-2.493-.222-.169-.856 1.142.197.166.881-1.139Zm-2.305 1.816.123-.395h.47l-.537-1.615.212-.581.723 2.2 1.367.017-.43.377-1.928-.007v.004Zm3.194 1.804.095-.26-1.35-.47-.099.248 1.354.482Zm-2.436-1.635.412-.004.145.445 1.367-1.005.62.021-1.87 1.364.405 1.312-.494-.296-.585-1.837Zm-.698 3.595.278.008.01-1.428-.26-.018-.028 1.442v-.004Zm.775-2.83.134.391-.377.282 1.389.977.176.592-1.89-1.34-1.11.8.124-.564 1.55-1.138h.004Zm-3.641.458.081.264 1.364-.43-.07-.253-1.375.42Zm2.933-.14-.332.25-.38-.272-.5 1.622-.508.352.687-2.21-1.107-.811.575-.056 1.565 1.124Z"
        fill="#FFC621"
      />
    </g>
    <defs>
      <clipPath id="Ethiopia_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEthiopia;
