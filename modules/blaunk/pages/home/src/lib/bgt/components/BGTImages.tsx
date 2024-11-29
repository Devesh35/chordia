'use client';
import { Col, Row } from 'react-bootstrap';

const BGTImages: React.FC = () => {
  const images = [
    'https://i.ibb.co/YXGK5Zp/image1.jpg',
    'https://i.ibb.co/tz4JY2z/image2.jpg',
    'https://i.ibb.co/xJhhRxg/image3.jpg',
    'https://i.ibb.co/jz6PQb5/image4.jpg',
    'https://i.ibb.co/BgDrLRr/image5.jpg',
    'https://i.ibb.co/Rv8fHj9/image6.jpg',
  ];

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="w-100">
        <Row className="mb-5 justify-content-center">
          {images.slice(0, 3).map((src, index) => (
            <Col md={4} key={index} className="mb-3 d-flex justify-content-center">
              <img src={src} alt={`BGTImage ${index + 1}`} className="img-fluid" width={450} height={200} />
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center">
          {images.slice(3, 6).map((src, index) => (
            <Col md={4} key={index + 3} className="mb-3 d-flex justify-content-center">
              <img src={src} alt={`BGTImage ${index + 4}`} className="img-fluid" width={450} height={200} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BGTImages;
