const SvgGmail = ({
  color = 'inherit',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
  >
    <path
      d="M1.636 21h3.819v-9.273L0 7.637v11.727C0 20.269.734 21 1.636 21Z"
      fill="#4285F4"
    />
    <path
      d="M18.545 21h3.819c.905 0 1.636-.734 1.636-1.636V7.636l-5.455 4.091"
      fill="#34A853"
    />
    <path
      d="M18.545 4.636v7.091L24 7.637V5.454c0-2.024-2.31-3.178-3.927-1.964"
      fill="#FBBC04"
    />
    <path
      d="M5.455 11.727v-7.09L12 9.544l6.546-4.909v7.091L12 16.637"
      fill="#EA4335"
    />
    <path
      d="M0 5.455v2.181l5.455 4.091v-7.09L3.927 3.49C2.307 2.277 0 3.43 0 5.455Z"
      fill="#C5221F"
    />
  </svg>
);
export default SvgGmail;
