'use client';

import { Col, Container, Row } from 'react-bootstrap';
import ImageCard from './components/layout/ImageCard';

const imageCards = Array.from({ length: 8 }, (_, index) => <ImageCard key={index} />);
export function BuySection() {
  return (
    <Container fluid>
      <Row>
        <Col>{imageCards}</Col>
      </Row>
    </Container>
  );
}
