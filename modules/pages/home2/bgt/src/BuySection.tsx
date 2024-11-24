'use client';

import { PaginationNumber } from '@li/design/elements';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './buy.module.css';
import ImageCard from './components/layout/ImageCard';

const imageCards = Array.from({ length: 8 }, (_, index) => <ImageCard key={Math.random()} />);
export function BuySection() {
  return (
    <Container fluid>
      <Row>
        <Col>{imageCards}</Col>
      </Row>
      <Row>
        <div className={styles['pagination-wrapper']}>
          <PaginationNumber active={1} total={4} position="none" variant="light" />
        </div>
      </Row>
    </Container>
  );
}
