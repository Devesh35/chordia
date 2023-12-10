const SvgSamoa = ({
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
    <g fillRule="evenodd" clipRule="evenodd" clipPath="url(#Samoa_svg__a)">
      <path d="M0 0h24v18H0V0Z" fill="#CE1126" />
      <path d="M0 0h12v9H0V0Z" fill="#002B7F" />
      <path
        d="m6.75 8.599-.776-.525-.747.528.244-.933-.712-.57.918-.057.304-.885.33.9.9.027-.712.61.251.905Zm-.135-6.21-.623-.402-.6.39.165-.75-.547-.476.728-.06.27-.697.277.7.716.065-.551.502.165.728Zm-2.738 2.23-.6-.412-.626.413.195-.728-.566-.48.72-.037.263-.713.255.71.735.04-.563.47.188.738Zm5.498-.494-.578-.375-.562.375.165-.686-.525-.443.686-.056.236-.645.263.652.664.038-.514.461.165.679ZM7.759 5.752l-.387-.24-.386.248.102-.461-.346-.312.45-.037.173-.435.184.435.446.037-.341.312.105.453Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Samoa_svg__a">
        <path fill="#fff" d="M0 0h24v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSamoa;
