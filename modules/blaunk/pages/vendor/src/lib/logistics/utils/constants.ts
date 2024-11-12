//cspell:disable
const plans = [
  // {
  //   label: 'Gold - 6M Validity',
  //   value: '999',
  //   duration: { months: 6 },
  // },
  // {
  //   label: 'Platinum - 1Y Validity',
  //   value: '1499',
  //   duration: { years: 1 },
  // },
  {
    label: '1Y Validity',
    value: '1999',
    duration: { years: 1 },
  },
];

const stores: { value: string; label: string }[] = [
  { value: 'cab', label: 'Cab' },
  { value: 'moversAndPackers', label: 'Movers & Packers' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'driver', label: 'Driver' },
  
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



const groupOptions: { value: string; label: string }[] = [
  { value: 'cab', label: 'Cab' },
  { value: 'moversAndPackers', label: 'Movers & Packers' },
  { value: 'logistics', label: 'Logistics' },
  { value: 'driver', label: 'Driver' },
  
];






const vehicleTypeOptions: { value: string; label: string }[] = [
  { value: '4s', label: '4 seater' },
  { value: '5s', label: '5 seater' },
  
];

export {
  countries,
  groupOptions,
  vehicleTypeOptions,
  plans,
  stores,
};
