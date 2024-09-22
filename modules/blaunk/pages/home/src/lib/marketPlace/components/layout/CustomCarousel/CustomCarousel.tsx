import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomCarousel: React.FC = () => {
  const images = [
    {
      imgURL: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      imgAlt: 'img-1',
    },
    {
      imgURL:
        'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      imgAlt: 'img-2',
    },
    {
      imgURL:
        'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      imgAlt: 'img-3',
    },
    {
      imgURL:
        'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      imgAlt: 'img-4',
    },
  ];

  return (
    <Box
      className="carousel-container"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: '100%',
      }}
    >
      <Box
        className="carousel-box"
        sx={{
          flex: 1,
          marginRight: { md: '1rem', xs: '0' },
          marginBottom: { xs: '1rem', md: '0' },
        }}
      >
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {images.map((imgURL, index) => (
            <Box
              key={index}
              component="img"
              src={imgURL.imgURL}
              alt={`Dining set image ${index + 1}`}
              sx={{ width: '100%' }}
            />
          ))}
        </Carousel>
      </Box>

      <Box
        className="text-content"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Dining Set
        </Typography>
        <Typography variant="h5">$300</Typography>

        <Stack direction="row" alignItems="center" className="location">
          <LocationOnIcon color="error" />
          <Typography>Kormangla</Typography>
        </Stack>
        <Typography variant="body2" color={'text.secondary'} sx={{ marginY: 1.5 }}>
          This dining set is perfect for family meals and small gatherings. Its elegant design fits any home decor.
        </Typography>
        <Typography>• Country: India</Typography>
        <Typography>• Condition: New</Typography>
        <Typography>• Negotiable</Typography>

        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            mt: 1,
            width: '70%',
            backgroundColor: '#25D366',
            '&:hover': {
              backgroundColor: '#25D366',
            },
          }}
        >
          Chat on WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default CustomCarousel;
