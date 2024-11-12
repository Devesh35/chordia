'use client';
import { Card, Container, Row, Col } from 'react-bootstrap';

interface MetricCardProps {
  b2bClients: number;
  customers: number;
  countries: number;
  productsServices: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ b2bClients, customers, countries, productsServices }) => {
  return (
    <Card
      style={{
        color: 'yellow',
        backgroundColor: '#6EC207',
        border: 'none',
        height: '200px', 
        fontFamily: 'Montserrat',
      }}
    >
      <Card.Body>
        <Container fluid className="h-100">
          <Row className="h-100 align-items-center">
            {' '}
            {/* Center content vertically */}
            <Col
              className="text-center d-flex flex-column justify-content-center"
              style={{ borderRight: '2px solid yellow' }}
            >
              <h1>{b2bClients}+</h1>
              <p>B2B Clients Served</p>
            </Col>
            <Col
              className="text-center d-flex flex-column justify-content-center"
              style={{ borderRight: '2px solid yellow' }}
            >
              <h1>{customers}+</h1>
              <p>Customers Served</p>
            </Col>
            <Col
              className="text-center d-flex flex-column justify-content-center"
              style={{ borderRight: '2px solid yellow' }}
            >
              <h1>{countries}+</h1>
              <p>Countries</p>
            </Col>
            <Col className="text-center d-flex flex-column justify-content-center">
              <h1>{productsServices}+</h1>
              <p>Products & Services</p>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MetricCard;
