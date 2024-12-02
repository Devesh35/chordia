'use client';

import { useMedia } from '@li/design/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import './Basket.css';

interface Product {
  id: number;
  image: string;
  description: string;
  quantity: string;
  amount: number;
  price: number;
}

const initialProducts: Product[] = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/61y4HOllrdL.jpg',
    description: '500ml Coca Cola Family Pack',
    quantity: '500ml',
    amount: 1,
    price: 50.0,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/100',
    description: 'Product 2',
    quantity: '1L',
    amount: 1,
    price: 15.0,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/100',
    description: 'Product 3',
    quantity: '250ml',
    amount: 1,
    price: 12.0,
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/100',
    description: 'Product 4',
    quantity: '750ml',
    amount: 1,
    price: 20.0,
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/100',
    description: 'Product 5',
    quantity: '2L',
    amount: 1,
    price: 30.0,
  },
];

export const Basket = () => {
  const isMobile = useMedia();

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [voucherCode, setVoucherCode] = useState('');

  const productDiscounts = [2.0, 3.0, 1.5, 5.0, 0.0]; // Example discounts for each product

  const totalPrice = products.reduce((total, product) => total + product.amount * product.price, 0);

  const totalDiscount = products.reduce(
    (discount, product, index) => discount + product.amount * productDiscounts[index],
    0,
  );

  const subtotal = totalPrice - totalDiscount;

  const hasProducts = products.some((product) => product.amount > 0);
  const deliveryCharge = hasProducts ? 25 : 0;

  const totalToPay = subtotal + deliveryCharge;

  return (
    <Container fluid className="mt-4">
      <Row>
        {/* Left Side: Product Basket */}
        <Col md={7}>
          <Card
            className="card-body"
            style={{
              border: '2px solid #6d741c',
              maxHeight: '500px',
              overflowY: 'auto',
            }}
          >
            <Row className="mb-3 sticky-top bg-white">
              <Col xs={8}>
                <Card.Title className="text-start text-danger">MY BASKET</Card.Title>
              </Col>
              <Col xs={4}>
                <Card.Text className="text-end ">
                  min order value: <span className="text-danger">500</span> <span className="fw-bold">(In Rs.)</span>
                </Card.Text>
              </Col>
            </Row>
            <Card.Body>
              {products.map((product) => (
                <Card key={product.id} className="mb-3">
                  <Row className="g-0">
                    <Col xs={3} md={2}>
                      <Card.Img
                        src={product.image}
                        className="img-fluid rounded-start"
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                        }}
                        alt={product.description}
                      />
                    </Col>
                    <Col md={3} xs={4}>
                      <Card.Body>{product.description}</Card.Body>
                    </Col>
                    {!isMobile && (
                      <>
                        <Col xs={2}>
                          <Card.Body className="fw-bold">{product.quantity}</Card.Body>
                        </Col>
                        <Col xs={3}>
                          <Card.Body>
                            <InputGroup
                              className="d-flex align-items-center"
                              style={{
                                width: 'fit-content',
                                padding: '0',
                                margin: '0',
                                border: '1px solid #ced4da',
                                borderRadius: '5px',
                                overflow: 'hidden',
                              }}
                              size="sm"
                            >
                              <Button
                                style={{
                                  backgroundColor: '#6d741c',
                                  color: 'white',
                                  padding: '0.25rem 0.5rem',
                                  border: 'none',
                                }}
                                variant="secondary"
                                onClick={() =>
                                  setProducts((prevProducts) =>
                                    prevProducts
                                      .map((p) => (p.id === product.id ? { ...p, amount: p.amount - 1 } : p))
                                      .filter((p) => p.amount > 0),
                                  )
                                }
                                size="sm"
                              >
                                -
                              </Button>
                              <Form.Control
                                value={product.amount}
                                readOnly
                                className="text-center"
                                style={{
                                  width: '40px',
                                  padding: '0.20rem',
                                  border: '1px solid #ced4da',
                                  textAlign: 'center',
                                }}
                              />
                              <Button
                                style={{
                                  backgroundColor: '#6d741c',
                                  color: 'white',
                                  padding: '0.25rem 0.5rem',
                                  border: 'none',
                                }}
                                variant="secondary"
                                onClick={() =>
                                  setProducts(
                                    products.map((p) => (p.id === product.id ? { ...p, amount: p.amount + 1 } : p)),
                                  )
                                }
                                size="sm"
                              >
                                +
                              </Button>
                            </InputGroup>
                          </Card.Body>
                        </Col>
                        <Col xs={2}>
                          <Card.Body>
                            <Card.Text className="fw-bold">{(product.price * product.amount).toFixed(2)}</Card.Text>
                          </Card.Body>
                        </Col>
                      </>
                    )}
                    {isMobile && (
                      <Col xs={5}>
                        <Row>
                          <div className="fw-bold">{product.quantity}</div>
                        </Row>
                        <Row>
                          <Card.Body>
                            <InputGroup
                              className="d-flex align-items-center"
                              style={{
                                width: 'fit-content',
                                padding: '0',
                                margin: '0',
                                border: '1px solid #ced4da',
                                borderRadius: '5px',
                                overflow: 'hidden',
                              }}
                              size="sm"
                            >
                              <Button
                                style={{
                                  backgroundColor: '#6d741c',
                                  color: 'white',
                                  padding: '0.25rem 0.5rem',
                                  border: 'none',
                                }}
                                variant="secondary"
                                onClick={() =>
                                  setProducts((prevProducts) =>
                                    prevProducts
                                      .map((p) => (p.id === product.id ? { ...p, amount: p.amount - 1 } : p))
                                      .filter((p) => p.amount > 0),
                                  )
                                }
                                size="sm"
                              >
                                -
                              </Button>
                              <Form.Control
                                value={product.amount}
                                readOnly
                                className="text-center"
                                style={{
                                  width: '40px',
                                  padding: '0.20rem',
                                  border: '1px solid #ced4da',
                                  textAlign: 'center',
                                }}
                              />
                              <Button
                                style={{
                                  backgroundColor: '#6d741c',
                                  color: 'white',
                                  padding: '0.25rem 0.5rem',
                                  border: 'none',
                                }}
                                variant="secondary"
                                onClick={() =>
                                  setProducts(
                                    products.map((p) => (p.id === product.id ? { ...p, amount: p.amount + 1 } : p)),
                                  )
                                }
                                size="sm"
                              >
                                +
                              </Button>
                            </InputGroup>
                          </Card.Body>
                        </Row>
                        <Row>
                          <div className="fw-bold">{(product.price * product.amount).toFixed(2)}</div>
                        </Row>
                      </Col>
                    )}
                  </Row>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Right Side: Order Summary */}
        <Col md={5}>
          <Card
            style={{
              border: '2px solid #6d741c',
              minHeight: '500px',
            }}
          >
            <Row className="mx-1 mt-3">
              <Col md={8}>
                <Card.Title className="text-start">
                  <span style={{ color: '#6d741c' }}>DETAILS</span>
                </Card.Title>
              </Col>
              <Col md={4} className="text-end">
                <span className="fw-bold">(In Rs.)</span>
              </Col>
            </Row>

            <Card.Body className="pt-0">
              <hr />
              <Row>
                <Col>MRP Value</Col>
                <Col className="text-end fw-bold">{totalPrice.toFixed(2)}</Col>
              </Row>
              <Row>
                <Col>Discount</Col>
                <Col className="text-end text-danger fw-bold">-{totalDiscount.toFixed(2)}</Col>
              </Row>
              <Row>
                <Col>Subtotal Value</Col>
                <Col className="text-end fw-bold">{subtotal.toFixed(2)}</Col>
              </Row>
              <Row className="my-3 align-items-center">
                <Col xs="auto">
                  <Form.Label className="mb-0">Voucher Code</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Enter code"
                  />
                </Col>
                <Col className="text-end fw-bold text-success">- 0.00</Col>
              </Row>

              <Row>
                <Col>Delivery Charge</Col>
                <Col className="text-end fw-bold text-success">{deliveryCharge.toFixed(2)}</Col>
              </Row>
              <Row>
                <Col>Portal Fees</Col>
                <Col className="text-end fw-bold">0.00</Col>
              </Row>
              <hr />
              <Row>
                <Col className="fw-bold" style={{ color: '#6d741c' }}>
                  Amount to be paid on COD
                </Col>
                <Col className="text-end fw-bold fs-5 text-primary">{totalToPay.toFixed(2)}</Col>
              </Row>
              <div className="text-center mt-5">
                <Button
                  size="lg"
                  style={{
                    backgroundColor: '#6d741c',
                    color: 'white',
                    fontWeight: 'bold',
                    border: 'none',
                  }}
                >
                  Checkout
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// export default Basket;
