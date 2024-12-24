'use client';

import { useMedia } from '@li/design/hooks';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';

export const BoutiqueSearch = () => {
  const isMobile = useMedia();
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

  const [value, setValue] = useState<FormState>({
    sort: '',
    group: '',
    article: '',
  });

  const handleChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = event.currentTarget;
    input.value = input.value.replace(/[^0-9]/g, '');
  };

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

  // const groupOptions = [
  //   { value: 'men', label: "Men's Collection" },
  //   { value: 'women', label: "Women's Collection" },
  //   { value: 'indian', label: 'Indian Designer' },
  //   { value: 'international', label: 'International Designer' },
  //   { value: 'onRent', label: 'Style on Rent' },
  // ];

  return (
    <Grid
      container
      spacing={1}
      justifyContent={'center'}
      style={{
        backgroundColor: '#fdf4ca',
        padding: '0 5px 10px 5px',
        borderRadius: 10,
      }}
    >
      <Grid item xs={6} sm={4} md={4} lg={2}>
        <InputLabel>Country</InputLabel>
        <Autocomplete
          style={{ backgroundColor: 'white' }}
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
      {/* <Grid item xs={6} sm={4} md={4} lg={2}>
        <InputLabel id="demo-simple-select-label">Collection</InputLabel>
        <Select id="demo-simple-select" name="group" value={value.group} onChange={handleChange} size="small" fullWidth  style={{ backgroundColor: 'white' }}>
          {groupOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid> */}
      <Grid item xs={6} sm={4} md={4} lg={2}>
        <InputLabel>Article</InputLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" style={{ backgroundColor: 'white' }} fullWidth />
      </Grid>
      <Grid item xs={6} sm={4} md={4} lg={1.5}>
        <InputLabel>Zip code/Pincode</InputLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          style={{ backgroundColor: 'white' }}
          fullWidth
          inputProps={{
            maxLength: 7,
            pattern: '^[0-9]+$',
            onInput: handleInput,
          }}
        />
      </Grid>
      {/* <Grid item xs={6} sm={4} md={4} lg={1.5}>
        <InputLabel>Area</InputLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" style={{ backgroundColor: 'white' }} fullWidth />
      </Grid> */}
      {isMobile ? (
        <Grid item xs={6} sm={4} md={4} lg={1.5}>
          <InputLabel>Search</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            style={{ backgroundColor: 'white' }}
            fullWidth
          />
        </Grid>
      ) : (
        <Grid item xs={6} sm={4} md={4} lg={1.5}>
          <InputLabel>Sort by</InputLabel>
          <Select
            id="demo-simple-select"
            value={value.sort}
            name="sort"
            onChange={handleChange}
            size="small"
            style={{ backgroundColor: 'white' }}
            fullWidth
          >
            <MenuItem value="new">New Listing</MenuItem>
            <MenuItem value="hp">Highest Price</MenuItem>
            <MenuItem value="lp">Lowest Price</MenuItem>
          </Select>
        </Grid>
      )}
      <Grid item xs={6} sm={4} md={4} lg={1.5} mt={2.6}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            cursor: 'pointer',
            backgroundColor: '#6c741d',
            '&:hover': {
              backgroundColor: '#6c741d',
              boxShadow: 'none',
            },
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};
