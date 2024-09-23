import { getStaticImageSrc } from '@li/design/icons';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import img from '../../../assets/images/sample-img.jpg';

interface CustomCardProps {
  onClick: () => void;
}
const CustomCard: React.FC<CustomCardProps> = ({ onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        maxWidth: 340,
        margin: 'auto',
        boxShadow: 3,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <CardMedia component="img" height="200" image={getStaticImageSrc(img)} alt="Dining Set" />
      <CardContent sx={{ padding: '.5rem', paddingBottom: '5px !important' }}>
        <Typography variant="h6" component="div">
          $300
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dining Set
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <LocationOnIcon sx={{ color: 'red' }} />
          <Typography variant="body2" color="text.secondary">
            Kormangla
          </Typography>
        </Box>
        <Typography textAlign={'right'} component="div" color="text.secondary" fontSize={12}>
          4 Days Ago
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
