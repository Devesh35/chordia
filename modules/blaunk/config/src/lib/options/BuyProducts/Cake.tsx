import { optionsFromStrings } from '@li/config/utils';

const cakeShape = [
  'Oval',
  'Rectangle',
  'Square',
  'Heart',
  'Layer',
  'Round',
  'Half',
];
export const CakeShapeOptions = optionsFromStrings(cakeShape);

const flavour = [
  'Chocolate',
  'Truffle',
  'Black Forest',
  'Ras-malai',
  'Butterscotch',
  'Red Velvet',
  'Vanilla',
  'Pineapple',
  'Fruit',
  'Coffee',
  'Kit-kat',
  'All',
  'Blueberry',
];

export const CakeFlavourOptions = optionsFromStrings(flavour);

const cakeType = [
  'Egg-less Cakes',
  'Midnight Cakes',
  'Photo Cakes',
  'Heart Cakes',
  'Heart shaped Cakes',
  'Designer Cakes',
  'Fondant Cakes',
  'Dry Cakes',
  'Cupcakes',
  'Pastry',
  'Jar Cakes',
  'Theme Cakes',
  'Pinata Cakes',
  'Pull Me Up cakes',
  'Half Cakes',
  'Bomb Cakes',
  'Surprise Cake ',
  'Photo Pulling Cakes',
  'Rose Cakes',
  'Party Cakes',
  'Tea Cakes ',
  'Kids Cake',
  'All cakes',
  'Personalized Gifts',
  'Combos',
  'Flowers',
  'Chocolates',
  'Bento Cakes',
  'Fusion Cakes',
];

export const CakeTypeOptions = optionsFromStrings(cakeType);

const occupation = [
  'Republic Day',
  'Valentine Day',
  "Women's Day",
  'Holi Cake',
  "Mother's Day",
  "Father's Day",
  "Father's Day",
  "Doctors's Day",
  'Friendship Day',
  'Independence Day',
  'Teachers Day',
  'Ganesh Chaturthi ',
  'Grandparents Day',
  'Anniversary ',
  'Birthday',
  'Wedding',
  'House Warming',
  'New Born Baby',
  'Congratulations',
  'Get well Soon',
  'Raksha Bandhan ',
  'Diwali',
  'Christmas',
  'Bhai Dooj',
  'Appreciation',
  'All ',
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
