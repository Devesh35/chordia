'use client';

import { PaginationNumber } from '@li/design/elements';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './buy.module.css';
import ImageCard from './components/layout/ImageCard';

const imageCards = Array.from({ length: 8 }, (_, index) => <ImageCard key={index} />);
export function BuySection() {
  const [page, setPage] = useState<number>(0);

  return (
    <Container fluid>
      <Row>
        <Col>{imageCards}</Col>
      </Row>
      <Row>
        <div className={styles['pagination-wrapper']}>
          <PaginationNumber active={page} onChange={setPage} total={4} position="none" variant="light" />
        </div>
      </Row>
    </Container>
  );
}
