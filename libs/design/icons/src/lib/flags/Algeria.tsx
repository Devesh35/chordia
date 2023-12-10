const SvgAlgeria = ({
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
    <g clipPath="url(#Algeria_svg__a)">
      <path d="M12 0h12v18.113H12V0Z" fill="#fff" />
      <path d="M0 0h12v18.113H0V0Z" fill="#006233" />
      <path
        d="M15.9 6.792a4.509 4.509 0 0 0-2.175-1.919 4.474 4.474 0 0 0-2.887-.19A4.499 4.499 0 0 0 8.433 6.3a4.547 4.547 0 0 0 0 5.513 4.499 4.499 0 0 0 2.405 1.618 4.473 4.473 0 0 0 2.887-.19 4.508 4.508 0 0 0 2.175-1.92 3.599 3.599 0 0 1-1.819 1.218 3.578 3.578 0 0 1-2.184-.064 3.603 3.603 0 0 1-1.744-1.323 3.638 3.638 0 0 1 0-4.19 3.603 3.603 0 0 1 1.744-1.324 3.579 3.579 0 0 1 2.184-.064A3.6 3.6 0 0 1 15.9 6.792Zm.15 2.265L12 7.728l2.52 3.472V6.913L12 10.385l4.05-1.328Z"
        fill="#D21034"
      />
    </g>
    <defs>
      <clipPath id="Algeria_svg__a">
        <path fill="#fff" d="M0 0h24v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlgeria;
