import React, { useState } from 'react';
import { Table, Form, Card, Button, Row, Col } from 'react-bootstrap';

const OrderEstimate: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  const data = [
    { moqQuantity: '1 (Sample)', priceInRupees: 100, priceInDollars: 1 },
    { moqQuantity: 10, priceInRupees: 90, priceInDollars: 0.9 },
    { moqQuantity: 100, priceInRupees: 80, priceInDollars: 0.8 },
    { moqQuantity: 1000, priceInRupees: 75, priceInDollars: 0.75 },
  ];

  return (
    <Card className="my-4">
      <Card.Header as="h4" className="text-center p-2" style={{ backgroundColor: 'transparent' }}>
        Order Estimate
      </Card.Header>
      <Card.Body className='pb-0'>
        <Table bordered>
          <thead>
            <tr>
              <th></th>
              <th>MOQ Quantity</th>
              <th>Price (₹)</th>
              <th>Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>
                  <Form.Check
                    type="radio"
                    name="moqOption"
                    checked={selectedOption === index}
                    onChange={() => handleRadioChange(index)}
                  />
                </td>
                <td>{row.moqQuantity}</td>
                <td>{row.priceInRupees}</td>
                <td>{row.priceInDollars}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Body className='text-danger pt-0 fw-bold'>Value currency in ($)</Card.Body>
      <Card.Body style={{ backgroundColor: '#fcf4cb', paddingBottom: 0 }}>
        <Row className="border-bottom">
          <Col className="border-end p-2">
            <div>
              <p>Value: 100</p>
              <p>Tax - GST/VAT: 18</p>
              <p>Commission: 2.5</p>
              <p>Cancellation Charges: 0</p>
            </div>
          </Col>

          <Col>
            <div>
              <p>Insurance: 0</p>
              <p>Logistics: 0</p>
              <p>Packaging: 0</p>
              <p>Rebate: 0</p>
              <p>Bank Charges: 0</p>
              <p>Ship / Lorry Logistic: 0</p>
            </div>
          </Col>
        </Row>
        <Col>
          <p>
            <strong>Total</strong>
          </p>
        </Col>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Button style={{ paddingBlock: 5, backgroundColor: '#6d751d', borderColor: '#6d751d' }}>Place Order</Button>
      </Card.Footer>
    </Card>
  );
};

export default OrderEstimate;
