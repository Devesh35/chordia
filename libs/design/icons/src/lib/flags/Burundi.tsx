const SvgBurundi = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Burundi_svg__a)">
      <path
        d="m-3 0 15.075 9L-3 18V0Zm30.15 0L12.075 9l15.075 9V0Z"
        fill="#18B637"
      />
      <path
        d="m-3 0 15.075 9L27.15 0H-3Zm0 18 15.075-9 15.075 9H-3Z"
        fill="#CF0921"
      />
      <path d="M27.15 0h-2.809L-3 16.323V18h2.809L27.15 1.677V0Z" fill="#fff" />
      <path
        d="M17.282 9a5.205 5.205 0 1 1-5.207-5.203A5.203 5.203 0 0 1 17.278 9h.004Z"
        fill="#fff"
      />
      <path d="M-3 0v1.677L24.341 18h2.809v-1.677L-.191 0H-3Z" fill="#fff" />
      <path
        d="m13.102 7.038-.679.01-.351.577-.349-.576-.675-.014.327-.594-.323-.591.675-.014.351-.577.349.58.675.015-.327.59.327.594Zm-2.271 3.924-.675.01-.352.577-.348-.577-.675-.014.327-.594-.324-.59.675-.015.352-.576.348.58.675.014-.327.59.324.595Zm4.59 0-.674.01-.352.577-.351-.577-.672-.014.327-.594-.327-.59.675-.015.352-.576.351.58.675.014-.33.59.327.595Z"
        fill="#CF0921"
        stroke="#18B637"
        strokeWidth={0.308}
      />
    </g>
    <defs>
      <clipPath id="Burundi_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBurundi;
