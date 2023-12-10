export const Alpha = {
  0: 0,
  20: 50,
  40: 100,
  60: 150,
  80: 200,
  100: 255,
};

// 0 means transparent 255
export const Transparent = (rgb: string, alpha: number): string => {
  if (alpha < 0) throw Error('Transparency alpha must be greater than 0');
  if (alpha > 255) throw Error('Transparency alpha must be less than 256');
  return `${rgb}${alpha.toString(16)}`;
};

const Primary = {
  Primary900: '#444913',
  Primary800: '#525816',
  Primary700: '#5F661A',
  Primary600: '#6D751D',
  Primary500: '#898D39',
  Primary400: '#A5A555',
  Primary300: '#C2BC70',
  Primary200: '#DED48C',
  Primary100: '#FAECA8',
  Primary075: '#FBF0B9',
  Primary050: '#FCF4CB',
  Primary025: '#FDF7DC',
};

const GrayColors = {
  Gray900: '#282828',
  Gray800: '#383838',
  Gray700: '#505050',
  Gray600: '#707070',
  Gray500: '#909090',
  Gray400: '#A9A9A9',
  Gray300: '#BEBEBE',
  Gray200: '#D0D0D0',
  Gray100: '#E6E6E6',
  Gray050: '#F2F2F2',
  Gray025: '#F9F9F9',
};

const SuccessColors = {
  Success800: '#075F24',
  Success400: '#1B9D46',
  Success300: '#41C36C',
  Success200: '#A3E8BA',
  Success100: '#C3F4D4',
  Success050: '#ECFDF2',
};

const WarningColors = {
  Warning800: '#652601',
  Warning400: '#FE5F00',
  Warning300: '#FE8740',
  Warning200: '#FEAF80',
  Warning100: '#FFD79D',
  Warning050: '#FFF9E3',
};

const ErrorColors = {
  Error800: '#5D091A',
  Error400: '#CF405C',
  Error300: '#E75E79',
  Error200: '#F394A7',
  Error100: '#FAC8D2',
  Error050: '#FDECEC',
};

const CommonColors = {
  Divider: GrayColors.Gray100,
  Interactive: '#244CFF',
  // StarActive: '#1f47f5',
  StarActive: Primary.Primary600,
  StarInactive: GrayColors.Gray200,
};

const NeutralColors = {
  White: '#FFFFFF',
  Black: '#000000',
  Red: '#EE0000',
  Green: '#00EE00',
  Blue: '#0000EE',
  OnWhite: GrayColors.Gray800,
  OnBlack: GrayColors.Gray050,
  Transparent: '#00000000',
};

const TransparentBlacks = {
  Transparent20: Transparent(NeutralColors.Black, Alpha[80]),
  Transparent40: Transparent(NeutralColors.Black, Alpha[60]),
  Transparent60: Transparent(NeutralColors.Black, Alpha[40]),
  Transparent80: Transparent(NeutralColors.Black, Alpha[20]),
};

const TextColors = {
  TextPrimary: GrayColors.Gray800,
  TextSecondary: GrayColors.Gray700,
  TextLight: GrayColors.Gray600,
  TextDisabled: GrayColors.Gray400,
  TextWhite: NeutralColors.White,
  TextInteractive: CommonColors.Interactive,
};
const BackgroundColors = {
  BackgroundPrimary: NeutralColors.White,
  BackgroundSecondary: Primary.Primary050,
  BackgroundHover: Primary.Primary100,
  BackgroundSelected: Primary.Primary200,
  BackgroundDisabled: GrayColors.Gray050,
  BackgroundDark: GrayColors.Gray800,
  BackgroundTransparent: NeutralColors.Transparent,
};

const Named = {
  Primary: Primary.Primary600,
  PrimaryDark: Primary.Primary900,
  Secondary: Primary.Primary100,
  SecondaryDark: Primary.Primary200,
  OnPrimaryAccent: Primary.Primary050,
  OnPrimaryDarkAccent: Primary.Primary025,
  OnSecondaryAccent: Primary.Primary800,
  OnPrimary: GrayColors.Gray100,
  OnPrimaryDark: GrayColors.Gray050,
  OnSecondary: GrayColors.Gray800,
};

export const Colors = {
  ...Primary,
  ...GrayColors,
  ...TextColors,
  ...ErrorColors,
  ...CommonColors,
  ...SuccessColors,
  ...WarningColors,
  ...NeutralColors,
  ...BackgroundColors,
  ...TransparentBlacks,
  ...Named,
};

export type ColorKeys = keyof typeof Colors;
