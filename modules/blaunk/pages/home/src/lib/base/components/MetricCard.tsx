'use client';
import { useMedia } from '@li/design/hooks';
import clsx from 'clsx';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface MetricCardProps {
  b2bClients: number;
  customers: number;
  countries: number;
  productsServices: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ b2bClients, customers, countries, productsServices }) => {
  const isMobile = useMedia();

  return (
    <Card
      style={{
        color: 'yellow',
        backgroundColor: '#6EC207',
        border: 'none',
        height: isMobile ? '120px' : '200px',
        fontFamily: 'Montserrat',
      }}
    >
      <Card.Body>
        <Container
          fluid
          className="h-100"
          style={
            isMobile
              ? {
                  height: '60px',
                  maxHeight: '60px',
                }
              : {}
          }
        >
          <Row
            className={clsx('h-100 no-pad', {
              'align-items-center': !isMobile,
            })}
          >
            {' '}
            {/* Center content vertically */}
            <Col
              className={clsx('text-center d-flex flex-column no-pad', {
                'justify-content-center': !isMobile,
              })}
              style={{ borderRight: '2px solid yellow' }}
            >
              {isMobile ? <h3>{b2bClients}+</h3> : <h1>{b2bClients}+</h1>}
              <p style={isMobile ? { fontSize: '10px' } : { fontSize: '20px' }}>B2B Clients Served</p>
            </Col>
            <Col
              className={clsx('text-center d-flex flex-column no-pad', {
                'justify-content-center': !isMobile,
              })}
              style={{ borderRight: '2px solid yellow' }}
            >
              {isMobile ? <h3>{customers}+</h3> : <h1>{customers}+</h1>}
              <p style={isMobile ? { fontSize: '10px' } : { fontSize: '20px' }}>Customers Served</p>
            </Col>
            <Col
              className={clsx('text-center d-flex flex-column no-pad', {
                'justify-content-center': !isMobile,
              })}
              style={{ borderRight: '2px solid yellow' }}
            >
              {isMobile ? <h3>{countries}+</h3> : <h1>{countries}+</h1>}
              <p style={isMobile ? { fontSize: '10px' } : { fontSize: '20px' }}>Countries</p>
            </Col>
            <Col
              className={clsx('text-center d-flex flex-column no-pad', {
                'justify-content-center': !isMobile,
              })}
            >
              {isMobile ? <h3>{productsServices}+</h3> : <h1>{productsServices}+</h1>}
              <p style={isMobile ? { fontSize: '10px' } : { fontSize: '20px' }}>Products & Services</p>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MetricCard;
