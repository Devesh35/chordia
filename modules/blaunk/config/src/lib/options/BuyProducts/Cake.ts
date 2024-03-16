import { optionsFromStrings } from '@li/config/utils';

const cakeShape = [
  'Half',
  'Heart',
  'Layer',
  'Oval',
  'Rectangle',
  'Round',
  'Square',
];
export const CakeShapeOptions = optionsFromStrings(cakeShape);

const flavour = [
  'All',
  'Black Forest',
  'Blueberry',
  'Butterscotch',
  'Chocolate',
  'Coffee',
  'Fruit',
  'Kit-kat',
  'Pineapple',
  'Ras-malai',
  'Red Velvet',
  'Truffle',
  'Vanilla',
];

export const CakeFlavourOptions = optionsFromStrings(flavour);

const cakeType = [
  'All cakes',
  'Bento Cakes',
  'Bomb Cakes',
  'Chocolates',
  'Combos',
  'Cupcakes',
  'Designer Cakes',
  'Dry Cakes',
  'Egg-less Cakes',
  'Flowers',
  'Fondant Cakes',
  'Fusion Cakes',
  'Half Cakes',
  'Heart Cakes',
  'Heart shaped Cakes',
  'Jar Cakes',
  'Kids Cake',
  'Midnight Cakes',
  'Party Cakes',
  'Pastry',
  'Personalized Gifts',
  'Photo Cakes',
  'Photo Pulling Cakes',
  'Pinata Cakes',
  'Pull Me Up cakes',
  'Rose Cakes',
  'Surprise Cake ',
  'Tea Cakes ',
  'Theme Cakes',
];

export const CakeTypeOptions = optionsFromStrings(cakeType);

const occupation = [
  'All ',
  'Anniversary ',
  'Appreciation',
  'Bhai Dooj',
  'Birthday',
  'Christmas',
  'Congratulations',
  'Diwali',
  "Doctors's Day",
  "Father's Day",
  'Friendship Day',
  'Ganesh Chaturthi ',
  'Get well Soon',
  'Grandparents Day',
  'Holi Cake',
  'House Warming',
  'Independence Day',
  "Mother's Day",
  'New Born Baby',
  'Raksha Bandhan ',
  'Republic Day',
  'Teachers Day',
  'Valentine Day',
  'Wedding',
  "Women's Day",
];

export const OccupationOptions = optionsFromStrings(occupation);

const deliveryTime = [
  '6 AM - 7 AM',
  '7 AM - 9 AM',
  '9 AM - 11 AM',
  '11 AM - 1 PM',
  '1 PM - 2 PM',
  '2 PM - 3 PM',
  '3 PM - 4 PM',
  '4 PM - 5 PM',
  '5 PM - 7 PM',
  '7 PM - 9 PM',
  '9 PM - 11 PM',
  '11 PM - 12 AM',
];

export const DeliveryTimeOptions = optionsFromStrings(deliveryTime);

const quantity = Array.from({ length: 5 }, (_, i) => String(i + 1));

export const QuantityOptions = optionsFromStrings(quantity);

const cakeWeight = ['500 Gms', '1 Kgs', '2 Kgs', '3 Kgs', '4 Kgs'];

export const CakeWeightOptions = optionsFromStrings(cakeWeight);
