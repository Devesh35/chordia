'use client';
import { CustomerReviews } from '@md/blaunk/design';
import { HomeCarousel } from '@md/pages/home2/bgt3';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Amenities } from '../Amenities';
import { Details } from '../Details';
import { HotelBanner } from '../HotelBanner';
import ImageCard from '../ImageCard';
import styles from '../tour.module.css';

const badges = [
  { text: 'Non AC', variant: 'primary' },
  { text: 'Full Refund', variant: 'secondary' },
  { text: 'Free Breakfast', variant: 'success' },
  { text: 'Free Delivery', variant: 'danger' },
  { text: 'Free Wifi', variant: 'warning' },
];

export const TourItem = () => {
  return (
    <Container fluid className="my-3">
      <HotelBanner hotelName="Sunset Resort" location="Miami Beach, FL" discount={30} />
      <Row>
        <Col>
          <HomeCarousel />
          <div style={{ backgroundColor: '#FFFBE6', padding: '20px', marginTop: '20px' }}>
            <div className="my-5">
              <h2 className="fw-bold mb-3 ">Description</h2>
              <div>
                <p className="bg-light p-2 fs-5">
                  Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining, and a
                  rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a
                  memorable stay in the heart of the city. Hotel Serenity combines modern comfort with superb service.
                  Enjoy plush rooms, fine dining, and a rooftop bar with stunning city views. Perfect for both leisure
                  and business travelers seeking a memorable stay in the heart of the city. Hotel Serenity combines
                  modern comfort with superb service. Enjoy plush rooms, fine dining, and a rooftop bar with stunning
                  city views. Perfect for both leisure and business travelers seeking a memorable stay in the heart of
                  the city. Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining,
                  and a rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a
                  memorable stay in the heart of the city.
                </p>
              </div>
            </div>
            <div className="my-5">
              <h2 className="fw-bold mb-4">Highlights</h2>
              <Col className="d-flex flex-wrap mb-4">
                {badges.map((badge, index) => (
                  <Badge key={index} pill bg={badge.variant} className={`${styles['custom-badge']} me-2`}>
                    {badge.text}
                  </Badge>
                ))}
              </Col>
            </div>
            <div className="my-5">
              <h2 className="fw-bold mb-4">Amenities</h2>
              <Amenities isReadOnly />
            </div>
          </div>

          <Details />
        </Col>
      </Row>
      <Row className="my-5">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </Row>
      <Row className="my-5">
        <CustomerReviews />
      </Row>
    </Container>
  );
};
