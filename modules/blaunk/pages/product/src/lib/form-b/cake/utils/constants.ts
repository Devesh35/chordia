//cspell:disable

const plans = [
  {
    label: 'Silver - 3M Validity',
    value: '300',
    duration: { months: 3 },
  },
  {
    label: 'Gold - 6M Validity',
    value: '500',
    duration: { months: 6 },
  },
  {
    label: 'Platinum - 1Y Validity',
    value: '800',
    duration: { years: 1 },
  },
  {
    label: 'Premium - 1Y Validity',
    value: '1999',
    duration: { years: 1 },
  },
];

const occasions: { value: string; label: string }[] = [
  { value: 'republicDay', label: 'Republic Day' },
  { value: 'valentinesDay', label: "Valentine's Day" },
  { value: 'womenDay', label: "Women's Day" },
  { value: 'mothersDay', label: "Mother's Day" },
  { value: 'fathersDay', label: "Father's Day" },
  { value: 'doctorsDay', label: "Doctor's Day" },
  { value: 'holi', label: 'Holi' },
  { value: 'friendshipDay', label: 'Friendship Day' },
  { value: 'independenceDay', label: 'Independence Day' },
  { value: 'teachersDay', label: "Teacher's Day" },
  { value: 'ganeshChaturthi', label: 'Ganesh Chaturthi' },
  { value: 'grandparentsDay', label: "Grandparent's Day" },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'houseWarming', label: 'House Warming' },
  { value: 'newBornBaby', label: 'New Born Baby' },
  { value: 'congratulations', label: 'Congratulations' },
  { value: 'getWellSoon', label: 'Get Well Soon' },
  { value: 'rakshaBandhan', label: 'Raksha Bandhan' },
  { value: 'diwali', label: 'Diwali' },
  { value: 'christmas', label: 'Christmas' },
  { value: 'bhaiDooj', label: 'Bhai Dooj' },
  { value: 'appreciation', label: 'Appreciation' },
  { value: 'all', label: 'All' },
];

const flavours: { value: string; label: string }[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'truffle', label: 'Truffle' },
  { value: 'blackForest', label: 'Black Forest' },
  { value: 'rasmalai', label: 'Rasmalai' },
  { value: 'butterscotch', label: 'Butterscotch' },
  { value: 'redVelvet', label: 'Red Velvet' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'fruit', label: 'Fruit' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'kitkat', label: 'Kitkat' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'mango', label: 'Mango' },
  { value: 'cheese', label: 'Cheese' },
  { value: 'caramel', label: 'Caramel' },
  { value: 'lime', label: 'Lime' },
  { value: 'carrot', label: 'Carrot' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'dryFruit', label: 'Dry Fruit' },
  { value: 'blackcurrant', label: 'Blackcurrant' },
  { value: 'beer', label: 'Beer' },
  { value: 'rum', label: 'Rum' },
  { value: 'raspberry', label: 'Raspberry' },
  { value: 'hazelnut', label: 'Hazelnut' },
  { value: 'honey', label: 'Honey ' },
  { value: 'walnut', label: 'Walnut' },
  { value: 'ferreroRocher', label: 'Ferrero Rocher' },
  { value: 'freshBakes', label: 'Fresh Bakes' },
  { value: 'ovenBakes', label: 'Oven Bakes' },
  { value: 'all', label: 'All' },
];

const cakeTypes: { value: string; label: string }[] = [
  { value: 'eggless', label: 'Eggless Cake' },
  { value: 'midnight', label: 'Midnight Cake' },
  { value: 'photo', label: 'Photo Cake' },
  { value: 'heart', label: 'Heart Shaped Cake' },
  { value: 'designer', label: 'Designer Cake' },
  { value: 'fondant', label: 'Fondant Cake' },
  { value: 'dry', label: 'Dry Cake' },
  { value: 'cupcake', label: 'Cupcake' },
  { value: 'lavacake', label: 'Lava Cake' },
  { value: 'donut', label: 'Donut' },
  { value: 'brownie', label: 'Brownie' },
  { value: 'desserts', label: 'Desserts' },
  { value: 'muffins', label: 'Muffins' },
  { value: 'spongeCake', label: 'Sponge Cake' },
  { value: 'sandwichBread', label: 'Sandwich Bread' },
  { value: 'fruitBread', label: 'Fruit Bread' },
  { value: 'milkBread', label: 'Milk Bread' },
  { value: 'wheatBread', label: 'Wheat Bread' },
  { value: 'brownBread', label: 'Brown Bread' },
  { value: 'cookie', label: 'Cookie' },
  { value: 'pastry', label: 'Pastry' },
  { value: 'jar', label: 'Jar Cake' },
  { value: 'theme', label: 'Theme Cake' },
  { value: 'pinata', label: 'Pinata Cake' },
  { value: 'pullMeUp', label: 'Pull Me Up Cake' },
  { value: 'half', label: 'Half Cake' },
  { value: 'bomb', label: 'Bomb Cake' },
  { value: 'surprise', label: 'Surprise Cake' },
  { value: 'photoPulling', label: 'Photo Pulling Cake' },
  { value: 'rose', label: 'Rose Cake' },
  { value: 'party', label: 'Party Cake' },
  { value: 'tea', label: 'Tea Cake' },
  { value: 'kids', label: 'Kids Cake' },
  { value: 'personalised', label: 'Personalised Gift' },
  { value: 'combos', label: 'Combos' },
  { value: 'chocolate', label: 'Chocolate Cake' },
  { value: 'bento', label: 'Bento Cake' },
  { value: 'fusion', label: 'Fusion Cake' },
  { value: 'stack', label: 'Stack' },
  { value: 'pie', label: 'Pie' },
  { value: 'roll', label: 'Roll' },
  { value: 'layer', label: 'Layer' },
  { value: 'sweetBread', label: 'Sweet Bread' },
  { value: 'sheet', label: 'Sheet' },
  { value: 'pudding', label: 'Pudding' },
  { value: 'all', label: 'All' },
];

const cakeShapes: { value: string; label: string }[] = [
  { value: 'oval', label: 'Oval' },
  { value: 'rectangle', label: 'Rectangle' },
  { value: 'square', label: 'Square' },
  { value: 'heart', label: 'Heart' },
  { value: 'layer', label: 'Layer' },
  { value: 'round', label: 'Round' },
  { value: 'half', label: 'Half' },
  { value: 'slice', label: 'Slice' },
];

const supplySourceOptions: { value: string; label: string }[] = [
  { value: 'cloudKitchen', label: 'Cloud kitchen' },
  { value: 'shop', label: 'Shop' },
  { value: 'factory', label: 'Factory' },
  { value: 'homeMaker', label: 'Home maker' },
  { value: 'outlet', label: 'Outlet' },
  { value: 'store', label: 'Store' },
  { value: 'cafe', label: 'Cafe' },
  { value: 'bakery', label: 'Bakery' },
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
];

const distanceOptions: { value: string; label: string }[] = [
  { value: 'oneKm', label: '1 km' },
  { value: 'twoKm', label: '2 km' },
  { value: 'twoFiveKm', label: '2.5 km' },
  { value: 'threeKm', label: '3 km' },
  { value: 'threeFiveKm', label: '3.5 km' },
  { value: 'fourKm', label: '4 km' },
];

const complimentaryOptions: { value: string; label: string }[] = [
  { value: 'kc', label: 'Knife, Candle' },
  { value: 'kcc', label: 'Knife, Candle, Card' },
  { value: 'kccf', label: 'Knife, Candle, Card, Flower' },
  { value: 'ktp', label: 'Knife, Tissue, Paper plate' },
  { value: 'kcp', label: 'Knife, Candle, Paper plate' },
  { value: 'kcfp', label: 'Knife, Candle, Flower, Paper plate' },
  { value: 'kcg', label: 'Knife, Candle, Gift Wrap' },
];

const cancellationPolicyOptions: { value: string; label: string }[] = [
  { value: 'fifteenMins', label: 'Within 15 minutes' },
  { value: 'thirtyMins', label: 'Within 30 minutes' },
  { value: 'twoHours', label: 'Within 2 hours' },
  { value: 'sameDay', label: 'Same Day' },
  { value: 'oneDayPrior', label: 'One Day Prior' },
  { value: 'fourHours', label: 'Within 4 Hours' },
  { value: 'twentyFourHours', label: 'Within 24 Hours' },
  { value: 'noCancellation', label: 'No Cancellation' },
];

const responseOptions: { value: string; label: string }[] = [
  { value: 'imm', label: 'Immediate' },
  { value: 'shopTiming', label: 'Shop Timing only' },
  { value: 'oneHour', label: 'Within 1 Hour' },
  { value: 'twoHours', label: 'Within 2 Hours' },
  { value: 'tenHours', label: 'Within 10 Hours' },
  { value: 'twoFourHours', label: 'Within 24 Hours' },
  { value: 'fourEightHours', label: 'Within 48 Hours' },
];

const prepTimeOptions: { value: string; label: string }[] = [
  { value: 'imm', label: 'Immediate' },
  { value: 'oneHour', label: 'Within 1 Hour' },
  { value: 'twoHours', label: 'Within 2 Hours' },
  { value: 'tenHours', label: 'Within 10 Hours' },
  { value: 'twoFourHours', label: 'Within 24 Hours' },
  { value: 'fourEightHours', label: 'Within 48 Hours' },
];

const weightOptions: { value: string; label: string }[] = [
  { value: 'Party/Customized Order', label: 'Party / Customized Order' },
  { value: 'MixGiftBox', label: 'Mix Gift Box' },
  { value: 'Slice(1 pc)', label: 'Slice(1 pc)' },
  { value: '250gms', label: '250gms' },
  { value: '500gms', label: '500gms' },
  { value: '1kg', label: '1kg' },
  { value: '1.5kg', label: '1.5kg' },
  { value: '2kg', label: '2kg' },
  { value: '2.5kg', label: '2.5kg' },
  { value: '3kg', label: '3kg' },
  { value: '3.5kg', label: '3.5kg' },
  { value: '4kg', label: '4kg' },
  { value: '4.5kg', label: '4.5kg' },
  { value: '5kg', label: '5kg' },
];

const statusOptions: { value: string; label: string }[] = [
  { value: 'soldOut', label: 'Sold out' },
  { value: 'limitedStock', label: 'Limited stock' },
  { value: 'fewLeft', label: 'Few left' },
  { value: 'closed', label: 'Closed' },
  { value: 'offerPrice', label: 'Offer price' },
  { value: 'surpriseGiftOffer', label: 'Surprise gift offer' },
];

export {
  cakeShapes,
  cakeTypes,
  cancellationPolicyOptions,
  complimentaryOptions,
  deliveryByOptions,
  distanceOptions,
  flavours,
  occasions,
  offerCodes,
  plans,
  prepTimeOptions,
  responseOptions,
  statusOptions,
  supplySourceOptions,
  weightOptions,
};
