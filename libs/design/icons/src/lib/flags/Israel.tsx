const SvgIsrael = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Israel_svg__a)">
      <path d="M24.913 18.048H-.87V0h25.782v18.048Z" fill="#fff" />
      <path
        d="M24.913 4.06H-.87V1.693h25.782v2.369Zm0 12.356H-.87v-2.369h25.782v2.369ZM7.887 6.722l3.88 6.754 3.966-6.722-7.846-.028v-.004Z"
        fill="#0038B8"
      />
      <path
        d="m11.038 11.203.737 1.25.754-1.243-1.494-.008h.003Z"
        fill="#fff"
      />
      <path
        d="m7.873 11.301 3.884-6.754 3.962 6.726-7.846.028Z"
        fill="#0038B8"
      />
      <path
        d="m11.038 6.754.737-1.251.754 1.247-1.494.004h.003ZM9.494 9.556l-.765 1.27 1.446-.004-.68-1.27v.004Zm-.75-2.344 1.452.01-.698 1.28-.755-1.29Zm5.33 2.362.736 1.251-1.47-.017.733-1.234Zm.722-2.362-1.452.01.697 1.28.755-1.29Zm-4.03 0-1 1.812 1.015 1.773 1.861.042 1.128-1.815-1.043-1.833-1.96.018v.003Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Israel_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIsrael;
