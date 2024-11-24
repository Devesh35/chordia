/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { getStaticImageSrc } from '@li/design/icons';
import { Search } from '@mui/icons-material';
import {
  Autocomplete,
  Backdrop,
  Box,
  Card,
  CardContent,
  Fade,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import GIF from './assets/GIFs/BlaunkGIF.gif';
import CustomCard from './components/layout/Card/CustomCard';
import CustomCarousel from './components/layout/CustomCarousel/CustomCarousel';
import './MarketPlace.css';
import { CustomerReviews } from '@md/blaunk/design';
import MarketCarousel from './components/layout/MarketCarousel/MarketCarousel';

interface FormState {
  sort: string;
  group: string;
  article: string;
}
interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
type ArticleGroup = 'clubAndResort' | 'property' | 'usedVehicle' | 'd2h' | 'electronics' | 'events' | 'hrVacancy';

const countries: readonly CountryType[] = [
  { code: 'IN', label: 'India', phone: '91' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'AE', label: 'United Arab Emirates', phone: '971' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'VN', label: 'Vietnam', phone: '84' },
];

const carouselItems = [
  { imageSrc: 'https://i.ibb.co/TMqqtXR/bike-mechanic.jpg', title: 'Mechanic' },
  { imageSrc: 'https://i.ibb.co/2dN0bK2/club-membership.jpg', title: 'Club' },
  { imageSrc: 'https://i.ibb.co/x1nwTnM/EVENTS.jpg', title: 'Event' },
  { imageSrc: 'https://i.ibb.co/txqjDf4/JOB-VACANCY.jpg', title: 'Vacancy' },
  { imageSrc: 'https://i.ibb.co/T1XmGWp/land-sale.jpg', title: 'Property' },
  { imageSrc: 'https://i.ibb.co/ctPZM3M/rent-house.jpg', title: 'Healthcare' },
  { imageSrc: 'https://i.ibb.co/hMqcfNd/USED-ELECTRONICS.jpg', title: 'Transport' },
  { imageSrc: 'https://placehold.co/600x400.png', title: 'Appliances' },
  { imageSrc: 'https://i.ibb.co/QDy3sqx/stock-broker.jpg', title: 'Used Vehicle' },
  { imageSrc: 'https://placehold.co/600x400.png', title: 'Artist' },
  { imageSrc: 'https://i.ibb.co/QDy3sqx/stock-broker.jpg', title: 'Prediction Forecast' },
  { imageSrc: 'https://placehold.co/600x400.png', title: 'Financial' },
];

export function App() {
  const [value, setValue] = useState<FormState>({
    sort: '',
    group: '',
    article: '',
  });
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const rows = 7;
  const columns = 4;
  const itemsPerPage = 24;

  const allItems = Array.from({ length: rows * columns }, (_, index) => ({
    id: index,
    title: `Item ${index + 1}`,
  }));

  const paginatedItems = allItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const groupOptions = [
    { value: 'clubAndResort', label: 'Club & Resort' },
    { value: 'property', label: 'Property' },
    { value: 'appliances', label: 'Appliances' },
    { value: 'usedVehicle', label: 'Used Vehicle' },
    { value: 'd2h', label: 'D2H' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'artists', label: 'Artists' },
    { value: 'prediction', label: 'Prediction Forecast' },
    { value: 'transport', label: 'Transport' },
    { value: 'mechanic', label: 'Mechanic' },
    { value: 'financial', label: 'Financial' },
    { value: 'repair', label: 'Repair' },
    { value: 'automobile', label: 'Automobile' },
    { value: 'itDevelopers', label: 'IT Developers' },
    { value: 'tour', label: 'Tour Operator' },
    { value: 'helper', label: 'Helper' },
    { value: 'event', label: 'Event' },
    { value: 'eventMgt', label: 'Event Management' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'events', label: 'Events' },
    { value: 'hrVacancy', label: 'HR-Vacancy' },
    { value: 'misc', label: 'Miscellaneous' },
  ];

  const articleOptions = {
    electronics: [
      { value: 'tvsVideoAudio', label: 'TVs, Video - Audio' },
      { value: 'kitchenAppliances', label: 'Kitchen & Other Appliances' },
      { value: 'computersLaptops', label: 'Computers & Laptops' },
      { value: 'camerasLenses', label: 'Cameras & Lenses' },
      { value: 'gamesEntertainment', label: 'Games & Entertainment' },
      { value: 'fridges', label: 'Fridges' },
      { value: 'computerAccessories', label: 'Computer Accessories' },
      { value: 'hardDisks', label: 'Hard Disks, Printers & Monitors' },
      { value: 'acs', label: 'ACs' },
      { value: 'washingMachines', label: 'Washing Machines' },
    ],
    events: [
      { value: 'exhibition', label: 'Exhibition' },
      { value: 'dandiya', label: 'Dandiya' },
      { value: 'musicalEvent', label: 'Musical Event' },
      { value: 'culturalEvent', label: 'Cultural Event' },
      { value: 'holiCelebration', label: 'Holi Celebration' },
      { value: 'newYearBlast', label: 'New Year Blast' },
      { value: 'xMas', label: 'X-Mas' },
    ],
    hrVacancy: [
      { value: 'hrSales', label: 'HR - Sales' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'ca', label: 'CA' },
      { value: 'cs', label: 'CS' },
      { value: 'reception', label: 'Reception' },
      { value: 'nurse', label: 'Nurse' },
      { value: 'salesExecutive', label: 'Sales Executive' },
      { value: 'officePeon', label: 'Office Peon' },
      { value: 'helper', label: 'Helper' },
      { value: 'fieldStaff', label: 'Field Staff' },
      { value: 'digitalMarketing', label: 'Digital Marketing' },
      { value: 'branchHead', label: 'Branch Head' },
      { value: 'valuer', label: 'Valuer' },
      { value: 'insuranceDSA', label: 'Insurance-DSA' },
      { value: 'mfDSA', label: 'MF - DSA' },
      { value: 'teacher', label: 'Teacher' },
    ],
    clubAndResort: [
      { value: 'usedMembership', label: 'Used Membership' },
      { value: 'newAgent', label: 'New (Agent)' },
    ],
    property: [
      { value: 'realEstateAgent', label: 'Real Estate Agent' },
      { value: 'propertyDealers', label: 'Property Dealers' },
      { value: 'propertyDevelopers', label: 'Property Developers' },
      { value: 'propertyConsultants', label: 'Property Consultants' },
      { value: 'propertyValuers', label: 'Property Valuers' },
      { value: 'propertyRegistrationConsultants', label: 'Property Registration Consultants' },
      { value: 'propertyLawyers', label: 'Property Lawyers' },
      { value: 'forSale', label: 'For Sale' },
      { value: 'onLeaseOffice', label: 'On Lease Office' },
      { value: 'onLeaseHouse', label: 'On Lease House' },
      { value: 'landCommercial', label: 'Land Commercial' },
      { value: 'landAgriculture', label: 'Land Agriculture' },
      { value: 'forRent', label: 'For Rent' },
      { value: 'fullyFurnishedHouse', label: 'Fully Furnished House' },
      { value: 'semiFurnishedHouse', label: 'Semi-Furnished House' },
      { value: 'pentHouse', label: 'Pent House' },
      { value: 'sharingOffice', label: 'Sharing Office' },
      { value: 'fullyFurnishedOffice', label: 'Fully Furnished Office' },
      { value: 'farmHouse', label: 'Farm House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'mallShopOnRent', label: 'Mall Shop On Rent' },
      { value: 'villa', label: 'Villa' },
      { value: 'independentHouse', label: 'Independent House' },
      { value: 'residentialPlot', label: 'Residential Plot' },
      { value: 'bungalow', label: 'Bungalow' },
      { value: 'payingGuest', label: 'Paying Guest' },
    ],
    appliances: [
      { value: 'kitchenAppliances', label: 'Kitchen Appliances' },
      { value: 'hotelAppliances', label: 'Hotel Appliances' },
      { value: 'officeAppliances', label: 'Office Appliances' },
      { value: 'electronicAppliances', label: 'Electronic Appliances' },
    ],
    usedVehicle: [
      { value: 'twoWheeler', label: '2 Wheeler' },
      { value: 'auto', label: 'Auto' },
      { value: 'car', label: 'Car' },
      { value: 'miniTruck', label: 'Mini Truck' },
      { value: 'ev', label: 'EV' },
      { value: 'spareParts', label: 'Spare Parts' },
    ],
    d2h: [
      { value: 'connection', label: 'Connection' },
      { value: 'service', label: 'Service' },
      { value: 'spares', label: 'Spares' },
    ],
    misc: [
      { value: 'books', label: 'Books' },
      { value: 'sports', label: 'Sports' },
      { value: 'music', label: 'Music' },
      { value: 'gym', label: 'Gym' },
      { value: 'musicalInstruments', label: 'Musical Instruments' },
    ],
    healthcare: [
      { value: 'hairSalon', label: 'Hair Salon' },
      { value: 'spa', label: 'Spa' },
      { value: 'ayurvedicSpa', label: 'Ayurvedic Spa' },
      { value: 'chemist', label: 'Chemist' },
      { value: 'physiotherapist', label: 'Physiotherapist' },
    ],
    artists: [
      { value: 'hennaArtist', label: 'Henna Artist' },
      { value: 'tattooArtist', label: 'Tattoo Artist' },
      { value: 'makeupArtist', label: 'Makeup Artist' },
      { value: 'nailArtist', label: 'Nail Artist' },
      { value: 'sareeDraper', label: 'Saree Draper' },
      { value: 'costumeDesigner', label: 'Costume Designer' },
      { value: 'sketchArtist', label: 'Sketch Artist' },
      { value: 'portrait', label: 'Portrait' },
      { value: 'sculptor', label: 'Sculptor' },
      { value: 'clayArtist', label: 'Clay Artist' },
    ],
    prediction: [
      { value: 'pandit', label: 'Pandit' },
      { value: 'priest', label: 'Priest' },
      { value: 'astrologer', label: 'Astrologer' },
      { value: 'palmistry', label: 'Palmistry' },
      { value: 'vastu', label: 'Vastu' },
      { value: 'tarotReader', label: 'Tarot Reader' },
      { value: 'numerologist', label: 'Numerologist' },
      { value: 'gemologist', label: 'Gemologist' },
    ],
    transport: [
      { value: 'packersMovers', label: 'Packers & Movers' },
      { value: 'driver', label: 'Driver' },
      { value: 'fleetAgent', label: 'Fleet Agent' },
      { value: 'transporters', label: 'Transporters' },
      { value: 'vehicleOnRent', label: 'Vehicle on Rent' },
      { value: 'customAgent', label: 'Custom Agent' },
      { value: 'courierServices', label: 'Courier Services' },
      { value: 'logistics', label: 'Logistics' },
      { value: 'cargoServices', label: 'Cargo Services' },
    ],
    mechanic: [
      { value: 'mechanicByNight', label: 'Mechanic by Night' },
      { value: 'allEngineService', label: 'All Engine Service' },
      { value: 'truckEcmRepair', label: 'Truck ECM Repair' },
      { value: 'breakdownServices', label: 'Breakdown Services' },
      { value: 'bikeRepairs', label: 'Bike Repairs' },
      { value: 'carRepairs', label: 'Car Repairs' },
      { value: 'carElectricalService', label: 'Car Electrical Service' },
      { value: 'carBatteryRepair', label: 'Car Battery Repair' },
      { value: 'accidentTowing', label: 'Accident Towing' },
    ],
    financial: [
      { value: 'advisor', label: 'Advisor' },
      { value: 'riskManagement', label: 'Risk Management' },
      { value: 'portfolioManagement', label: 'Portfolio Management' },
      { value: 'financialPlanning', label: 'Financial Planning' },
      { value: 'financialConsultation', label: 'Financial Consultation' },
      { value: 'insuranceAgent', label: 'Insurance Agent' },
    ],
    repair: [
      { value: 'commercial', label: 'Commercial' },
      { value: 'installation', label: 'Installation' },
      { value: 'repairAndMaintenance', label: 'Repair and Maintenance' },
      { value: 'cleaning', label: 'Cleaning' },
      { value: 'emergencyService', label: 'Emergency Service' },
      { value: 'applianceRepairService', label: 'Appliance Repair Service' },
    ],
    automobile: [
      { value: 'repairAndMaintenance', label: 'Repair and Maintenance' },
      { value: 'washingAndCleaning', label: 'Washing and Cleaning' },
      { value: 'vehicleReplacement', label: 'Vehicle Replacement' },
      { value: 'vehicleModification', label: 'Vehicle Modification' },
      { value: 'vehicleInspection', label: 'Vehicle Inspection' },
      { value: 'vehicleScrap', label: 'Vehicle Scrap' },
    ],
    itDevelopers: [
      { value: 'webDeveloper', label: 'Web Developer' },
      { value: 'wordpressDeveloper', label: 'WordPress Developer' },
      { value: 'softwareEngineer', label: 'Software Engineer' },
      { value: 'frontEndDeveloper', label: 'Front-End Developer' },
      { value: 'mobileApplicationDeveloper', label: 'Mobile Application Developer' },
      { value: 'gameDeveloper', label: 'Game Developer' },
      { value: 'backEndDeveloper', label: 'Back-End Developer' },
      { value: 'bigDataDeveloper', label: 'Big Data Developer' },
      { value: 'devOpsEngineer', label: 'Development Operations Engineer' },
      { value: 'dataScientist', label: 'Data Scientist' },
      { value: 'securityDeveloper', label: 'Security Developer' },
      { value: 'graphicsDeveloper', label: 'Graphics Developer' },
      { value: 'languageDeveloper', label: 'Language Developer' },
      { value: 'desktopDeveloper', label: 'Desktop Developer' },
      { value: 'softwareDeveloper', label: 'Software Developer' },
      { value: 'osDeveloper', label: 'Operating Systems Developer' },
      { value: 'embeddedSystemsDeveloper', label: 'Embedded Systems Developer' },
      { value: 'crmDeveloper', label: 'CRM Developer' },
      { value: 'fullStackDeveloper', label: 'Full Stack Developer' },
      { value: 'softwareTester', label: 'Software Tester' },
      { value: 'mernDeveloper', label: 'MERN Developer' },
      { value: 'uiUxDesigner', label: 'UI/UX Designer' },
    ],
    tour: [
      { value: 'flightBooking', label: 'Flight Booking' },
      { value: 'busBooking', label: 'Bus Booking' },
      { value: 'railwayBooking', label: 'Railway Booking' },
      { value: 'hotelBooking', label: 'Hotel Booking' },
      { value: 'domesticPackage', label: 'Domestic Package' },
      { value: 'internationalPackage', label: 'International Package' },
    ],
    helper: [
      { value: 'houseCook', label: 'House Cook' },
      { value: 'houseMaid', label: 'House Maid' },
      { value: 'gardener', label: 'Gardener' },
      { value: 'electrician', label: 'Electrician' },
      { value: 'plumber', label: 'Plumber' },
      { value: 'carpenter', label: 'Carpenter' },
    ],
    event: [
      { value: 'workshops', label: 'Workshops' },
      { value: 'comedyShows', label: 'Comedy Shows' },
      { value: 'screenings', label: 'Screenings' },
      { value: 'spirituality', label: 'Spirituality' },
      { value: 'exhibition', label: 'Exhibition' },
      { value: 'meetups', label: 'Meetups' },
      { value: 'kids', label: 'Kids' },
      { value: 'performances', label: 'Performances' },
      { value: 'talks', label: 'Talks' },
      { value: 'festivals', label: 'Festivals' },
      { value: 'conferences', label: 'Conferences' },
      { value: 'sports', label: 'Sports' },
      { value: 'competitions', label: 'Competitions' },
    ],
    eventMgt: [
      { value: 'inHouseDecorator', label: 'In-house Decorator' },
      { value: 'outdoorDecorator', label: 'Outdoor Decorator' },
      { value: 'weddingPlanner', label: 'Wedding Planner' },
      { value: 'orchestra', label: 'Orchestra' },
      { value: 'balloonArch', label: 'Balloon Arch' },
      { value: 'balloonBackdrop', label: 'Balloon Backdrop' },
      { value: 'soundSystems', label: 'Sound Systems' },
      { value: 'flowerDecorators', label: 'Flower Decorators' },
      { value: 'eventOrganizers', label: 'Event Organizers' },
      { value: 'birthdayPartyOrganizers', label: 'Birthday Party Organizers' },
      { value: 'tentHouse', label: 'Tent House' },
    ],
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget;
    input.value = input.value.replace(/[^0-9]/g, '');
  };

  return (
    <>
      <Card sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <img src={getStaticImageSrc(GIF)} title="giphy-embed" className="giphy-embed" alt="gif"></img>
          </Grid>
          <MarketCarousel items={carouselItems} />
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <InputLabel>Search</InputLabel>
            <TextField
              style={{ backgroundColor: '#fffbe6' }}
              id="search-input"
              fullWidth
              placeholder="Search article here"
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <CardContent>
          <Grid container spacing={2} mt={2} justifyContent={'flex-start'}>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel>Country</InputLabel>
              <Autocomplete
                style={{ backgroundColor: '#fffbe6' }}
                id="country-select-demo"
                fullWidth
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => {
                  const { key, ...optionProps } = props;
                  return (
                    <Box key={key} component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...optionProps}>
                      <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                      />
                      {option.label}
                    </Box>
                  );
                }}
                renderInput={(params) => {
                  const selectedOption = params.inputProps.value
                    ? countries.find((country) => country.label === params.inputProps.value)
                    : null;

                  return (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: selectedOption ? (
                          <InputAdornment position="start">
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${selectedOption.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${selectedOption.code.toLowerCase()}.png`}
                              alt=""
                            />
                          </InputAdornment>
                        ) : null,
                      }}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                      size="small"
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel id="demo-simple-select-label">Group</InputLabel>
              <Select
                style={{ backgroundColor: '#fffbe6' }}
                id="demo-simple-select"
                name="group"
                value={value.group}
                onChange={handleChange}
                size="small"
                fullWidth
              >
                {groupOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel>Article</InputLabel>
              <Select
                style={{ backgroundColor: '#fffbe6' }}
                id="demo-simple-select"
                name="article"
                value={value.article}
                onChange={handleChange}
                size="small"
                fullWidth
              >
                {(articleOptions[value.group as ArticleGroup] || []).map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel>Zip code/Pincode</InputLabel>
              <TextField
                style={{ backgroundColor: '#fffbe6' }}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
                inputProps={{
                  maxLength: 7,
                  pattern: '^[0-9]+$',
                  onInput: handleInput,
                }}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel>City</InputLabel>
              <TextField
                style={{ backgroundColor: '#fffbe6' }}
                id="outlined-basic"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel>Sort by</InputLabel>
              <Select
                style={{ backgroundColor: '#fffbe6' }}
                id="demo-simple-select"
                value={value.sort}
                name="sort"
                onChange={handleChange}
                size="small"
                fullWidth
              >
                <MenuItem value="new">New Listing</MenuItem>
                <MenuItem value="hp">Highest Price</MenuItem>
                <MenuItem value="lp">Lowest Price</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container mt={4} spacing={2}>
            {paginatedItems.map((item) => (
              <Grid item xs={6} sm={6} md={4} lg={2} key={item.id} mt={2}>
                <CustomCard onClick={handleOpen} />
              </Grid>
            ))}
          </Grid>
          <Box mt={2} mb={2} display="flex" justifyContent="center">
            <Pagination
              count={Math.ceil(allItems.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Grid container className="custom-modal">
            <CustomCarousel />
          </Grid>
        </Fade>
      </Modal>
      <CustomerReviews />
    </>
  );
}

export default App;
