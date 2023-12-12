import { SVGProps } from '../types';

export const Microphone = (props: SVGProps) => {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} stroke="#000000" {...props}>
      <g id="microphone_iconCarrier">
        <g clip-path="url(#clip_microphone)">
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="9.5"
            y="3.5"
            width="5"
            height="12"
            rx="2.5"
            stroke="inherit"
            stroke-linejoin="round"
          ></rect>
          <path
            d="M17 12V13C17 15.7614 14.7614 18 12 18V18C9.23858 18 7 15.7614 7 13V12"
            stroke="inherit"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12 18V21M12 21H9M12 21H15"
            stroke="inherit"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
        <defs>
          <clipPath id="clip_microphone">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};
