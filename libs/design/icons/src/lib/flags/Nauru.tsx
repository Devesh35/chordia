const SvgNauru = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Nauru_svg__a)">
      <path d="M-2.998 0h36v18h-36V0Z" fill="#002170" />
      <path d="M-2.998 8.23h36v1.543h-36V8.23Z" fill="#FFB20D" />
      <path
        d="m7.612 15.399-1.16-1.16-.37 1.595-.421-1.582-1.122 1.196.426-1.582-1.565.474 1.16-1.16-1.596-.373 1.582-.421-1.195-1.118 1.582.421-.478-1.564 1.16 1.16.373-1.596.422 1.582 1.118-1.195-.422 1.582 1.564-.475-1.16 1.16 1.596.37-1.582.421L8.72 14.26l-1.582-.428.475 1.568Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Nauru_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNauru;
