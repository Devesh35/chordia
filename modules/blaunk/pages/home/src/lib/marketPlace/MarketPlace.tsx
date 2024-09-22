/* eslint-disable import/no-extraneous-dependencies */

'use client';

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
import CustomCard from './components/layout/Card/CustomCard';
import './MarketPlace.css';
import GIF from './assets/GIFs/BlaunkGIF.gif';
import { Search } from '@mui/icons-material';
import CustomCarousel from './components/layout/CustomCarousel/CustomCarousel';

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
    { value: 'usedVehicle', label: 'Used Vehicle' },
    { value: 'd2h', label: 'D2H' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'events', label: 'Events' },
    { value: 'hrVacancy', label: 'HR-Vacancy' },
  ];

  const articleOptions = {
    clubAndResort: [
      { value: 'usedMembership', label: 'Used Membership' },
      { value: 'newAgent', label: 'New (Agent)' },
    ],
    property: [
      { value: 'sale', label: 'Sale' },
      { value: 'onLeaseOffice', label: 'On Lease Office' },
      { value: 'onLeaseHouse', label: 'On Lease House' },
      { value: 'landCommercial', label: 'Land Commercial' },
      { value: 'landAgriculture', label: 'Land Agriculture' },
      { value: 'onRent', label: 'On Rent' },
    ],
    usedVehicle: [
      { value: 'twoWheeler', label: '2 Wheeler' },
      { value: 'auto', label: 'Auto' },
      { value: 'car', label: 'Car' },
      { value: 'miniTruck', label: 'Mini Truck' },
      { value: 'ev', label: 'EV' },
    ],
    d2h: [
      { value: 'connection', label: 'Connection' },
      { value: 'service', label: 'Service' },
      { value: 'spares', label: 'Spares' },
    ],
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
      { value: 'others', label: 'Others' },
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
            <img src={GIF} title="giphy-embed" className="giphy-embed" alt="gif"></img>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <InputLabel>Search</InputLabel>
            <TextField
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
              <InputLabel>Area</InputLabel>
              <TextField id="outlined-basic" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={2}>
              <InputLabel>Sort by</InputLabel>
              <Select
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
    </>
  );
}

export default App;
