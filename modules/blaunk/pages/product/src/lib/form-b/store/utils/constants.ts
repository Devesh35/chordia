//cspell:disable
const plans = [
  {
    label: 'Gold - 6M Validity',
    value: '999',
    duration: { months: 6 },
  },
  {
    label: 'Platinum - 1Y Validity',
    value: '1499',
    duration: { years: 1 },
  },
  {
    label: 'Premium - 1Y Validity',
    value: '1999',
    duration: { years: 1 },
  },
];

const stores: { value: string; label: string }[] = [
  { value: 'automobileSpares', label: 'Automobile Spares Shop' },
  { value: 'bicycleShop', label: 'Bicycle Shop' },
  { value: 'bookShop', label: 'Book Shop' },
  { value: 'sweetsShop', label: 'Sweets Shop' },
  { value: 'customShop', label: 'Custom Shop' },
  { value: 'emporium', label: 'Emporium' },
  { value: 'flowersShop', label: 'Flowers Shop' },
  { value: 'giftShop', label: 'Gift Shop' },
  { value: 'groceryMart', label: 'Grocery Mart' },
  { value: 'handmade', label: 'Handmade' },
  { value: 'jewelShop', label: 'Jewel Shop' },
  { value: 'musicShop', label: 'Music Shop' },
  { value: 'paintShop', label: 'Paint Shop' },
  { value: 'petShop', label: 'Pet Shop' },
  { value: 'plasticWorld', label: 'Plastic World' },
  { value: 'hardwareShop', label: 'Hardware Shop' },
  { value: 'garments', label: 'Garments' },
  { value: 'iceCreamParlour', label: 'Ice Cream Parlour' },
  { value: 'boutique', label: 'Boutique' },
  { value: 'chemist', label: 'Chemist-(OTC)' },
  { value: 'mobileShop', label: 'Mobile Shop' },
  { value: 'vehicleShowroom', label: 'Vehicle Showroom' },
  { value: 'officefurniture', label: 'Office Furniture' },
  { value: 'homefurniture', label: 'Home Furniture' },
  { value: 'homeinterior', label: 'Home Interior' },
];

const countries: { value: string; label: string }[] = [
  { value: 'india', label: 'India' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'bhutan', label: 'Bhutan' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'jordan', label: 'Jordan' },
  { value: 'malaysia', label: 'Malaysia' },
  { value: 'maldives', label: 'Maldives' },
  { value: 'nepal', label: 'Nepal' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'sri lanka', label: 'Sri Lanka' },
  { value: 'thailand', label: 'Thailand' },
  { value: 'uae-dubai', label: 'UAE-Dubai' },
  { value: 'vietnam', label: 'Vietnam' },
  { value: 'qatar', label: 'Qatar' },
];

const offerCodes: { value: string; label: string }[] = [
  { value: 'FESTIVEOFF', label: 'FESTIVEOFF' },
  { value: 'BLAUNKNEW', label: 'BLAUNKNEW' },
  { value: 'SPECIALOFF', label: 'SPECIALOFF' },
  { value: 'SAVEMORE', label: 'SAVEMORE' },
  { value: 'HELLO', label: 'HELLO' },
  { value: 'WELCOME', label: 'WELCOME' },
  { value: 'FIRSTBUY', label: 'FIRSTBUY' },
  { value: 'WEEKLYDEAL', label: 'WEEKLYDEAL' },
  { value: 'FLASHOFF', label: 'FLASHOFF' },
  { value: 'CELEBRATION', label: 'CELEBRATION' },
];

const deliveryByOptions: { value: string; label: string }[] = [
  { value: 'swiggy', label: 'Swiggy' },
  { value: 'vendor', label: 'Vendor Self' },
  { value: 'zomato', label: 'Zomato' },
  { value: 'porter', label: 'Porter' },
  { value: 'ola', label: 'Ola' },
  { value: 'uberEats', label: 'Uber Eats' },
  { value: 'passion', label: 'Passion' },
  { value: 'foodPickMe', label: 'Food PickMe' },
  { value: 'earEasy', label: 'Ear Easy' },
  { value: 'grabFood', label: 'Grab Food' },
  { value: 'talabat', label: 'Talabat' },
  { value: 'pickupp', label: 'Pickupp' },
  { value: 'delHero', label: 'Delivery Hero' },
  { value: 'getCari', label: 'Get Cari' },
  { value: 'grabHoldings', label: 'Grab Holdings' },
  { value: 'dunzo', label: 'DUNZO' },
  { value: 'ondc', label: 'ONDC' },
  { value: '3pl', label: '3PL' },
  { value: 'rafeeq', label: 'Rafeeq' },
  { value: 'statista', label: 'Statista' },
  { value: 'foodpanda', label: 'Food Panda' },
  { value: 'kareem', label: 'Kareem' },
  { value: 'mojeed', label: 'Mojeed' },
  { value: 'akeed', label: 'Akeed' },
  { value: 'geeb', label: 'Geeb' },
  { value: 'tmDone', label: 'T M Done' },
  { value: 'snoonu', label: 'Snoonu' },
  { value: 'takeaway', label: 'Takeaway' },
  { value: 'other', label: 'Other' },
];

const distanceOptions: { value: string; label: string }[] = [
  { value: 'oneKm', label: '1 km' },
  { value: 'twoKm', label: '2 km' },
  { value: 'twoFiveKm', label: '2.5 km' },
  { value: 'threeKm', label: '3 km' },
  { value: 'fourKm', label: '4 km' },
];

const complimentaryOptions: { value: string; label: string }[] = [
  { value: 'giftWrap', label: 'Gift Wrap' },
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const cancellationTimeOptions: { value: string; label: string }[] = [
  { value: 'fifteenMins', label: 'Within 15 minutes' },
  { value: 'thirtyMins', label: 'Within 30 minutes' },
  { value: 'oneHour', label: 'Within 1 hour' },
  { value: 'twoHours', label: 'Within 2 hours' },
  { value: 'sameDay', label: 'Same Day' },
  { value: 'fourHours', label: 'Within 4 Hours' },
  { value: 'noCancellation', label: 'No Cancellation' },
  { value: 'oneDayPrior', label: 'One Day Prior' },
];

const responseOptions: { value: string; label: string }[] = [
  { value: 'imm', label: 'Immediate' },
  { value: 'oneHour', label: 'Within 1 Hour' },
  { value: 'twoHours', label: 'Within 2 Hours' },
  { value: 'tenHours', label: 'Within 10 Hours' },
  { value: 'twoFourHours', label: 'Within 24 Hours' },
  { value: 'fourEightHours', label: 'Within 48 Hours' },
];

const statusOptions: { value: string; label: string }[] = [
  { value: 'soldOut', label: 'Sold out' },
  { value: 'limitedStock', label: 'Limited stock' },
  { value: 'fewLeft', label: 'Few left' },
  { value: 'closed', label: 'Closed' },
  { value: 'offerPrice', label: 'Offer price' },
  { value: 'surpriseGiftOffer', label: 'Surprise gift offer' },
];

const dispatchTimeOptions: { value: string; label: string }[] = [
  { value: 'imm', label: 'Immediate' },
  { value: 'oneHour', label: 'Within 1 Hour' },
  { value: 'twoHours', label: 'Within 2 Hours' },
  { value: 'tenHours', label: 'Within 10 Hours' },
  { value: 'twoFourHours', label: 'Within 24 Hours' },
  { value: 'fourEightHours', label: 'Within 48 Hours' },
];

export {
  cancellationTimeOptions,
  complimentaryOptions,
  countries,
  deliveryByOptions,
  dispatchTimeOptions,
  distanceOptions,
  offerCodes,
  plans,
  responseOptions,
  statusOptions,
  stores,
};
