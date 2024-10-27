'use client';

import { CustomerReviews } from '@md/blaunk/design';
import { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { CertificateCarousel } from '../components/layout/CertificateCarousel';
import { CompanyCarousel } from '../components/layout/CompanyCarousel';
import HomeCarousel from '../components/layout/HomeCarousel';
import OrderEstimate from '../components/layout/OrderEstimate';
import { Overview } from '../components/layout/Overview';

export const BGTItem = () => {
  const [activeKey, setActiveKey] = useState<string>('link-1');

  const activeStyle = {
    color: 'palegoldenrod',
    backgroundColor: '#6d751d',
    marginRight: '10px',
  };

  const defaultStyle = {
    color: '#6d751d',
    backgroundColor: 'palegoldenrod',
    marginRight: '10px',
  };

  const handleSelect = (eventKey: string | null) => {
    setActiveKey(eventKey ?? '');
  };

  return (
    <Container>
      <Row>
        <Col lg={8} md={6} sm={12} xs={12}>
          <div className="fw-bold p-4">
            ASUS Vivobook 16 (2023)Thin & Light Laptop,Intel Core i9-13900H 13th Gen, 16" (40.64 cm) FHD+(16GB RAM/512GB
            SSD/Intel Iris Xe/Win 11/Office 2021/Backlit KB/Fingerprint/Black/1.88 kg){' '}
            <span className="text-primary float-end">18 days ago</span>
          </div>
          <HomeCarousel />
          <div className="my-3">
            <Nav variant="tabs" activeKey={activeKey} onSelect={handleSelect}>
              <Nav.Item>
                <Nav.Link eventKey="link-1" style={activeKey === 'link-1' ? activeStyle : defaultStyle}>
                  Product Description
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-2"
                  style={activeKey === 'link-2' ? activeStyle : { ...defaultStyle, marginRight: '0px' }}
                >
                  Company Description
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Col
            style={{
              border: '3px solid darkgrey',
              borderRadius: '12px',
              marginBlock: '10px',
              padding: '10px',
            }}
          >
            {activeKey === 'link-1' && (
              <div>
                {/* cspell:disable */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas repellat blanditiis
                  velit?Excepturi autem, ab dolores eos, animi voluptas quod labore non, commodi atque ad tempore aut
                  nostrum saepe. ASUS Vivobook 16 (2023)Thin & Light Laptop,Intel Core i9-13900H 13th Gen, 16" (40.64
                  cm) FHD+(16GB RAM/512GB SSD/Intel Iris Xe/Win 11/Office 2021/Backlit KB/Fingerprint/Black/1.88 kg)
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas repellat blanditiis
                  velit?Excepturi autem, ab dolores eos, animi voluptas quod labore non, commodi atque ad tempore aut
                  nostrum saepe.
                </p>
              </div>
            )}
            {activeKey === 'link-2' && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptas repellat blanditiis velit?
                  Luptas quod labore non, commodi atque ad tempore aut nostrum saepe.
                  {/* cspell:enable */}
                </p>
              </div>
            )}
          </Col>
          <Overview />
        </Col>
        <Col lg={4} md={6} sm={12} xs={12} className="sticky-top" style={{ top: '5px', height: '100%' }}>
          <OrderEstimate />
        </Col>
      </Row>
      <CompanyCarousel />
      <CertificateCarousel />
      <Row>
        <CustomerReviews />
      </Row>
    </Container>
  );
};
