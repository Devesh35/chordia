import React, { useState } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

const OrderEstimate: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedPriceOption, setSelectedPriceOption] = useState<string | null>(null);
  const [voucherCode, setVoucherCode] = useState<string>('');

  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  const handlePriceChange = (value: string) => {
    setSelectedPriceOption(value === selectedPriceOption ? null : value);
  };

  const handleVoucherCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoucherCode(e.target.value.toUpperCase().substring(0, 15));
  };

  const data = [
    { moqQuantity: 'MQO', priceInRupees: 100, priceInDollars: 1, status: 'Available' },
    { moqQuantity: 'Max Qty', priceInRupees: 90, priceInDollars: 0.9, status: 'Block' },
    { moqQuantity: '100', priceInRupees: 80, priceInDollars: 0.8, status: 'Sold' },
    { moqQuantity: 'Sample', priceInRupees: 75, priceInDollars: 0.75, status: 'Available' },
  ];

  const leftColumnValues = [
    { label: 'Value', amount: 100.0 },
    { label: 'Tax', amount: 18.0 },
    { label: 'Fees', amount: 2.5 },
    { label: 'Cancellation', amount: 0.0 },
  ];

  const rightColumnValues = [
    { label: 'Insurance', amount: 0.0 },
    { label: 'Logistics', amount: 0.0 },
    { label: 'Packaging', amount: 0.0 },
    { label: 'Charges', amount: 0.0 },
    { label: 'Bank Charges', amount: 0.0 },
    { label: 'Shipping', amount: 0.0 },
  ];

  const leftTotal = leftColumnValues.reduce((total, item) => total + item.amount, 0);
  const rightTotal = rightColumnValues.reduce((total, item) => total + item.amount, 0);

  return (
    <Card className="my-4">
      <Card.Header as="h4" className="text-center p-2" style={{ backgroundColor: 'transparent' }}>
        Order Estimate
      </Card.Header>
      <Card.Body className="pb-0">
        <Table bordered>
          <thead>
            <tr>
              <th></th>
              <th>Quantity</th>
              <th>
                <div className="d-flex align-items-center">
                  <Form.Check
                    type="radio"
                    name="priceRupees"
                    checked={selectedPriceOption === 'rupees'}
                    onChange={() => handlePriceChange('rupees')}
                  />
                  Price (₹)
                </div>
              </th>
              <th>
                <div className="d-flex align-items-center">
                  <Form.Check
                    type="radio"
                    name="priceDollars"
                    checked={selectedPriceOption === 'dollars'}
                    onChange={() => handlePriceChange('dollars')}
                  />
                  Price ($)
                </div>
              </th>
              <th>Status</th>
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
                <td className="text-end">{row.priceInRupees.toFixed(2)}</td>
                <td className="text-end">{row.priceInDollars.toFixed(2)}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Body className="text-danger pt- 0 fw-bold">Value currency in ($)</Card.Body>
      <Card.Body style={{ backgroundColor: '#fcf4cb', paddingBottom: 0 }}>
        <Row className="border-bottom">
          <Col className="border-end p-3 d-flex flex-column">
            <div className="d-flex flex-column" style={{ gap: '12px', flexGrow: 1 }}>
              {leftColumnValues.map((item, index) => (
                <p key={index} className="d-flex justify-content-between m-0" style={{ width: '100%' }}>
                  <span style={{ minWidth: '120px' }}>{item.label}:</span>
                  <span>{item.amount.toFixed(2)}</span>
                </p>
              ))}
            </div>
            <Form.Group controlId="voucherCode" className="mt-3">
              <Form.Label style={{ minWidth: '120px' }}>Voucher Code:</Form.Label>
              <div className="d-flex justify-content-between">
                <Col xs={8} className="p-0">
                  <Form.Control
                    type="text"
                    value={voucherCode}
                    onChange={handleVoucherCodeChange}
                    placeholder="Enter code"
                  />
                </Col>
                <span>00.00</span>
              </div>
            </Form.Group>
            <hr className="my-2" />
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span style={{ minWidth: '120px' }}>Total:</span>
              <span>{leftTotal.toFixed(2)}</span>
            </div>
          </Col>
          <Col className="d-flex flex-column p-3">
            <div className="d-flex flex-column" style={{ gap: '12px', flexGrow: 1 }}>
              {rightColumnValues.map((item, index) => (
                <p key={index} className="d-flex justify-content-between m-0" style={{ width: '100%' }}>
                  <span style={{ minWidth: '120px' }}>{item.label}:</span>
                  <span>{item.amount.toFixed(2)}</span>
                </p>
              ))}
            </div>
            <hr className="my-2" />
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span style={{ minWidth: '120px' }}>Total:</span>
              <span>{rightTotal.toFixed(2)}</span>
            </div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Button style={{ paddingBlock: 5, backgroundColor: '#6d751d', borderColor: '#6d751d' }}>Place Order</Button>
      </Card.Footer>
    </Card>
  );
};

export default OrderEstimate;
