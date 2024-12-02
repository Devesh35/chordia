import { Modal } from '@li/design/elements';
import { CircleClose } from '@li/design/icons';
import { getRandomImagesArray } from '@md/blaunk/config';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const images = getRandomImagesArray(6)(500).map((src, i) => (
  <Image key={src} src={src} width={400} height={600} alt="random" loading={i === 0 ? 'eager' : 'lazy'} />
));

export const SelectedItem2 = ({ isOpen, onClose }: Props) => {
  const textContentRef = useRef<HTMLDivElement>(null);

  const handleScrollToContent = () => {
    if (textContentRef.current) {
      textContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideHeader>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          maxHeight: '420px',
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
            {images}
          </Carousel>
          <IconButton
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'absolute',
              left: '50%',
              bottom: '10px',
              transform: 'translateX(-50%)',
              zIndex: 10,
              color: 'white',
            }}
            onClick={handleScrollToContent}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          ref={textContentRef}
          className="text-content"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingX: { xs: 2, md: 0 },
            maxWidth: { md: '60%', xs: '100%' },
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack
              direction={{ xs: 'column', md: 'column' }}
              justifyContent={{ xs: 'flex-start', md: 'flex-start' }}
              alignItems={{ xs: 'center ', md: 'center' }}
            >
              <Typography variant="h6" fontWeight="bold">
                Dining Set
              </Typography>
              <Typography variant="h6">$300</Typography>
            </Stack>
            <CircleClose className={'clickable'} fill="var(--gray300)" onClick={onClose} />
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ mt: { xs: 1, md: 0 } }}>
            <LocationOnIcon color="error" />
            <Typography>Kormangla</Typography>
          </Stack>

          <Typography
            variant="body2"
            color={'text.secondary'}
            sx={{ marginY: { xs: 1.5, md: 1.5 }, lineHeight: 1.5, textWrap: 'wrap' }}
          >
            This dining set is perfect for family meals and small gatherings. Its elegant design fits any home decor.
            This dining set is perfect for family meals and small gatherings. Its elegant design fits any home decor.
          </Typography>

          <Stack direction="column" spacing={1}>
            <Typography>• Country: India</Typography>
            <Typography>• Condition: New</Typography>
            <Typography>• Negotiable</Typography>
          </Stack>

          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              mt: { xs: 3, md: 2 },
              mb: { xs: 1, md: 4 },
              width: { xs: '100%', md: '70%' },
              backgroundColor: '#25D366',
              alignSelf: { xs: 'center', md: 'flex-start' },
              '&:hover': {
                backgroundColor: '#25D366',
              },
            }}
          >
            Chat on WhatsApp
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
