const SvgUk = ({
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
    <rect x={2} y={2} width={20} height={20} rx={9} fill="#D8D8D8" />
    <mask
      id="Uk_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <rect x={2} y={2} width={20} height={20} rx={10} fill="#fff" />
    </mask>
    <g mask="url(#Uk_svg__a)">
      <path fill="#00247D" d="M0 0h24v24H0z" />
      <path
        d="M10.155 12-1.562 4.349l.861-2.69 12.697 8.29 13.77-8.142.861 1.84L13.836 12l12.791 8.352-.861 1.84-13.77-8.14-12.697 8.29-.861-2.691L10.155 12Z"
        fill="#fff"
      />
      <path
        d="M11.768 12-.116 20.378l.28.65 12.204-8.605 13.255 9.345.281-.648L12.97 12l12.935-9.12-.281-.648-13.255 9.345L.165 2.973l-.281.649L11.768 12Z"
        fill="#CF142B"
      />
      <path
        d="M9.2 8.643V.5h5.6v8.143H32v6H14.8V24.5H9.2v-9.857H-8v-6H9.2Z"
        fill="#fff"
      />
      <path
        d="M10.425 9.98H-6.5v3.36h16.925V23h3.15v-9.66H30.5V9.98H13.575V2h-3.15v7.98Z"
        fill="#CF142B"
      />
    </g>
  </svg>
);
export default SvgUk;
