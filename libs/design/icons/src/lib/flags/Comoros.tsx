const SvgComoros = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Comoros_svg__a)">
      <path d="M0 0h27.028v4.5H0V0Z" fill="#FF0" />
      <path d="M0 4.5h27.028V9H0V4.5Z" fill="#fff" />
      <path d="M0 9h27.028v4.5H0V9Z" fill="#BE0027" />
      <path d="M0 13.5h27.028V18H0v-4.5Z" fill="#3B5AA3" />
      <path d="M0 0v18l13.426-8.975L0 0Z" fill="#239E46" />
      <path
        d="M5.527 4.971C2.538 4.82 1.17 7.203 1.174 9.046c-.007 2.18 2.06 3.972 3.966 3.867-1.027-.485-2.285-1.853-2.292-3.878-.01-1.832 1.037-3.428 2.682-4.064h-.003Z"
        fill="#fff"
      />
      <path
        d="m5.484 6.926-.421-.327-.514.162.183-.507-.31-.436.535.021.316-.432.152.517.506.169-.443.298-.004.535Zm-.01 1.831-.422-.33-.513.162.186-.503-.313-.436.538.018.316-.43.148.514.51.172-.447.3-.003.533Zm.007 1.85-.422-.33-.51.16.183-.502-.31-.436.535.018.316-.43.152.514.506.169-.443.302-.007.535Zm-.007 1.863-.422-.327-.517.162.186-.506-.312-.436.537.02.317-.432.148.517.51.169-.447.299v.534Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Comoros_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComoros;
