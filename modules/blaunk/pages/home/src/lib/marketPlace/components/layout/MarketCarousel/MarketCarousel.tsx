import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './MarketCarousel.css';

interface CarouselItem {
  imageSrc: string;
  title: string;
}

interface MarketCarouselProps {
  items: CarouselItem[];
}

const MarketCarousel: React.FC<MarketCarouselProps> = ({ items }) => {
  return (
    <Carousel indicators={false} interval={3000} controls={true} slide={false} className='my-5'>
      {Array.from({ length: Math.ceil(items.length / 6) }, (_, i) => (
        <Carousel.Item key={i}>
          <Row>
            {items.slice(i * 6, i * 6 + 6).map((item, index) => (
              <Col key={index} xs={2} className="text-center">
                <div className="carousel-image-wrapper">
                  <img src={item.imageSrc} alt={item.title} className="carousel-image rounded-circle" />
                </div>
                <small className="carousel-title">{item.title}</small>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MarketCarousel;