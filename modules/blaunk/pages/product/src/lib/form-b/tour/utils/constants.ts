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

const tours: { value: string; label: string }[] = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'banquetHall', label: 'Banquet Hall' },
  { value: 'buffetLunch', label: 'Buffet Lunch' },
  { value: 'cottage', label: 'Cottage' },
  { value: 'event', label: 'Event' },
  { value: 'guestHouse', label: 'Guest House' },
  { value: 'holidayHome', label: 'Holiday Home' },
  { value: 'holidayClub', label: 'Holiday Club' },
  { value: 'homeStay', label: 'Home Stay' },
  { value: 'hostel', label: 'Hostel' },
  { value: 'lodge', label: 'Lodge' },
  { value: 'marriageHall', label: 'Marriage Hall' },
  { value: 'motel', label: 'Motel' },
  { value: 'pgMen', label: 'PG - Men' },
  { value: 'pgWomen', label: 'PG - Women' },
  { value: 'resort', label: 'Resort' },
  { value: 'serviceApartment', label: 'Service Apartment' },
  { value: 'studio', label: 'Studio' },
  { value: 'villa', label: 'Villa' },
  { value: 'tentHouse', label: 'Tent House' },
  { value: 'dayOutPackage', label: 'Day-out Package' },
  { value: 'nationalTour', label: 'National Tour' },
  { value: 'internationalTour', label: 'International Tour' },
  { value: 'honeymoonPackage', label: 'Honeymoon Package' },
  { value: 'royalRajasthan', label: 'Royal Rajasthan' },
  { value: 'trekking', label: 'Trekking' },
  { value: 'safari', label: 'Safari' },
  { value: 'northIndiaTour', label: 'North India Tour' },
  { value: 'southTempleTour', label: 'South Temple Tour' },
  { value: 'religiousTour', label: 'Religious Tour' },
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

const taxesAndLevies: { value: string; label: string }[] = [
  { value: 'additionalLocalTax', label: 'Additional Local Tax' },
  { value: 'taxFree', label: 'Tax Free' },
  { value: 'inclusiveOfTaxes', label: 'Inclusive of Taxes' },
  { value: 'extraTaxesFees', label: 'Extra Taxes & Fees' },
];

const landmarkOptions: { value: string; label: string }[] = [
  { value: 'airport', label: 'Airport' },
  { value: 'amusementPark', label: 'Amusement Park' },
  { value: 'busStand', label: 'Bus stand' },
  { value: 'churches', label: 'Church' },
  { value: 'college', label: 'College' },
  { value: 'hospital', label: 'Hospital' },
  { value: 'lake', label: 'Lake' },
  { value: 'metro', label: 'Metro' },
  { value: 'railwayStation', label: 'Railway station' },
  { value: 'school', label: 'School' },
  { value: 'sea', label: 'Sea' },
  { value: 'shoppingMall', label: 'Shopping Mall' },
  { value: 'taxiStand', label: 'Taxi stand' },
];

const complimentaryOptions: { value: string; label: string }[] = [
  { value: 'na', label: 'NA' },
  { value: 'surpriseGift', label: 'Surprise Gift' },
  { value: 'emiOffer', label: 'EMI Offer' },
  { value: 'addOnFree', label: 'Add-On Free' },
  { value: 'cardOffer', label: 'Card Offer' },
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

const highlightOptions = [
  'EMI Bank Offer',
  'Debit Card Offer',
  'Book with zero advance',
  'Hygiene',
  'Lunch & High Tea',
  '100% Vegan Restaurant',
  '100% Veg Restaurant',
  'Free Gifts',
  'Full Refund',
  'Pet Friendly',
  'Veg & Non-Veg Foods',
  'Fruit Basket',
  'Women Friendly',
  'Couple Friendly',
  'EV Charge Point',
];

const paymentOptions: { value: string; label: string }[] = [
  { value: 'cash', label: 'Cash' },
  { value: 'cashDebit', label: 'Cash/Debit Card' },
  { value: 'cashDebitUpi', label: 'Cash/Debit Card/UPI' },
  { value: 'cashDebitUpiCredit', label: 'Cash/Debit Card/UPI/Credit Card' },
  {
    value: 'cashDebitUpiCreditIntl',
    label: 'Cash/Debit Card/UPI/Credit Card/International Card',
  },
  { value: 'cashCredit', label: 'Cash/Credit Card' },
  { value: 'cashEmi', label: 'Cash/EMI Offer' },
  { value: 'cashUSD', label: 'Cash/USD' },
];

const currencyOptions: { value: string; label: string }[] = [
  { value: 'available', label: 'Available' },
  { value: 'limited', label: 'Limited Currency' },
  { value: 'local', label: 'Local Currency' },
  { value: 'NA', label: 'NA' },
];

const responseOptions: { value: string; label: string }[] = [
  { value: 'imm', label: 'Immediate' },
  { value: 'oneHour', label: 'Within 1 Hour' },
  { value: 'twoHours', label: 'Within 2 Hours' },
  { value: 'tenHours', label: 'Within 10 Hours' },
  { value: 'twoFourHours', label: 'Within 24 Hours' },
  { value: 'fourEightHours', label: 'Within 48 Hours' },
];

const roomOptions: { value: string; label: string }[] = [
  { value: 'singleRoom', label: 'Single Room' },
  { value: 'standardRoom', label: 'Standard Room' },
  { value: 'deluxeRoom', label: 'Deluxe Room' },
  { value: 'doubleDeluxeRoom', label: 'Double Deluxe Room' },
  { value: 'doubleRoom', label: 'Double Room' },
  { value: 'budgetRoom', label: 'Budget Room' },
  { value: 'classicRoom', label: 'Classic Room' },
  { value: 'kingBedRoom', label: 'King Bedroom' },
  { value: 'superiorRoom', label: 'Superior Room' },
  { value: 'suiteRoom', label: 'Suite Room' },
  { value: 'juniorSuiteRoom', label: 'Junior Suite Room' },
  { value: 'primeRoom', label: 'Prime Room' },
  { value: 'premiumRoom', label: 'Premium Room' },
  { value: 'luxuryRoom', label: 'Luxury Room' },
  { value: 'largeKingBedRoom', label: 'Large King Bed Room' },
  { value: 'auditorium', label: 'Auditorium' },
  { value: 'banquetHall', label: 'Banquet Hall' },
  { value: 'conventionHall', label: 'Convention Hall' },
  { value: 'ballonRoom', label: 'Ballon Room' },
  { value: 'openPark', label: 'Open Park' },
  { value: 'acPartyHall', label: 'AC Party Hall' },
  { value: 'commonHall', label: 'Common Hall' },
  { value: 'commonHallAC', label: 'Common Hall-AC' },
  { value: 'marriageHall', label: 'Marriage Hall' },
  { value: 'presidentialSuite', label: 'Presidential Suite' },
  { value: 'twinRoom', label: 'Twin Room' },
  { value: 'dormitoryRoom', label: 'Dormitory Room' },
  { value: 'bunkBedDermotoryRoom', label: 'Bunk Bed Dermotory Room' },
  { value: 'others', label: 'Others' },
];

const viewOptions: { value: string; label: string }[] = [
  { value: 'gardenView', label: 'Garden View' },
  { value: 'poolView', label: 'Pool View' },
  { value: 'smokingArea', label: 'Smoking Area' },
  { value: 'nonSmokingArea', label: 'Non-Smoking Area' },
  { value: 'lakeView', label: 'Lake View' },
  { value: 'seaView', label: 'Sea View' },
  { value: 'mountView', label: 'Mount View' },
  { value: 'twoSingleBeds', label: '2 Single Beds' },
  { value: 'oneKingBed', label: '1 King Bed' },
  { value: 'extraLongKingBed', label: 'Extra Long King Bed' },
  { value: 'noNoiseRoom', label: 'No Noise Room' },
  { value: 'cityView', label: 'City View' },
  { value: 'kitchenArea', label: 'Kitchen Area' },
  { value: 'balconyView', label: 'Balcony View' },
  { value: 'spaciousEventArea', label: 'Spacious Event Area' },
  { value: 'freeDecoration', label: 'Free Decoration' },
  { value: 'separateKitchen', label: 'Separate Kitchen' },
];

const statusOptions: { value: string; label: string }[] = [
  { value: 'soldOut', label: 'Sold out' },
  { value: 'limitedStock', label: 'Limited stock' },
  { value: 'fewLeft', label: 'Few left' },
  { value: 'closed', label: 'Closed' },
  { value: 'offerPrice', label: 'Offer price' },
  { value: 'surpriseGiftOffer', label: 'Surprise gift offer' },
];

const guestOptions: { value: string; label: string }[] = [
  { value: 'single', label: 'Single' },
  { value: 'couple', label: 'Couple' },
  { value: 'twoAdults', label: '2 Adults' },
  { value: 'twoAdultsKid', label: '2 Adults + Kid' },
  { value: 'threeAdults', label: '3 Adults' },
  { value: 'threeAdultsKid', label: '3 Adults + Kid' },
  { value: 'fourAdults', label: '4 Adults' },
  { value: 'fourAdultsKid', label: '4 Adults + Kid' },
  { value: 'fiveAdults', label: '5 Adults' },
  { value: 'coupleInfant', label: 'Couple + Infant' },
];

const facilities: { value: string; label: string }[] = [
  { value: 'oneStar', label: '1 Star' },
  { value: 'twoStar', label: '2 Star' },
  { value: 'threeStar', label: '3 Star' },
  { value: 'fourStar', label: '4 Star' },
  { value: 'fiveStar', label: '5 Star' },
  { value: 'sixStar', label: '6 Star' },
  { value: 'sevenStar', label: '7 Star' },
];

const discountOptions: { value: string; label: string }[] = [
  { value: 'five', label: '5% OFF' },
  { value: 'ten', label: '10% OFF' },
  { value: 'twentyFive', label: '25% OFF' },
  { value: 'forty', label: '40% OFF' },
  { value: 'fifty', label: '50% OFF' },
  { value: 'sixtyFive', label: '65% OFF' },
];

export {
  cancellationTimeOptions,
  complimentaryOptions,
  countries,
  currencyOptions,
  discountOptions,
  facilities,
  guestOptions,
  highlightOptions,
  landmarkOptions,
  offerCodes,
  paymentOptions,
  plans,
  responseOptions,
  roomOptions,
  statusOptions,
  taxesAndLevies,
  tours,
  viewOptions,
};
