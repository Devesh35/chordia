/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React, { useState } from 'react';
import { Accordion, Badge, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa';
import './OrderBook.css';

// Function to generate a random OTP
const generateOTP = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const OrderBook: React.FC = () => {
  const [otp] = useState(generateOTP());
  const [rating, setRating] = useState<number>(0);
  const [status, setStatus] = useState('pending');
  const [deliveryStatus, setDeliveryStatus] = useState('Delivered');
  const [review, setReview] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('Pending');
  const [deliveryDateTime, setDeliveryDateTime] = useState('06-11-2024 02:30 PM');

  const handlePaymentStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentStatus(event.target.value);
  };

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDateTime(event.target.value);
  };

  const handleSaveReview = () => {
    console.log('Review Saved:', review);
  };

  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="d-flex justify-content-between w-100">
            <div>
              <strong className="me-2 fs-4"> Order #12345</strong>
              <span>24-2-24, 02:30 PM</span>
            </div>
            <div>
              <Badge bg="danger">{status.toUpperCase()}</Badge>{' '}
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            {/* First Row */}
            <Row className="mb-3">
              <Col md={2}>
                <div className="info-box">
                  <div className="info-box-header">Vendor</div>
                  <div className="info-box-body">
                    <Image
                      src="https://cdn.worldvectorlogo.com/logos/vendor.svg"
                      alt="Vendor Logo"
                      width={100}
                      height={100}
                      className="vendor-img"
                    />
                  </div>
                </div>
              </Col>

              {/* Order Box with PDF Icon */}
              <Col md={2}>
                <div className="info-box">
                  <div className="info-box-header">Invoice</div>
                  <div className="info-box-body d-flex align-items-center">
                    <FaFilePdf className="me-2 text-danger" /> Order_12345.pdf
                  </div>
                </div>
              </Col>

              {/* Order Status Display */}
              <Col md={2}>
                <div className="info-box">
                  <div className="info-box-header">Order Status</div>
                  <div className="info-box-body">
                    <span>{status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}</span>
                  </div>
                </div>
              </Col>

              {/* QR Code Box */}
              <Col md={2}>
                <div className="info-box">
                  <div className="info-box-header">QR Code</div>
                  <div className="info-box-body">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                      alt="QR Code"
                      width={100}
                      height={100}
                      className="qr-code-img"
                    />
                  </div>
                </div>
              </Col>
            </Row>

            {/* Second Row */}
            <Row className="mb-3">
              {/* OTP Box */}
              <Col md={2}>
                <Form.Group controlId="formOTP">
                  <div className="info-box info-box-verify-otp">
                    <div className="info-box-header">OTP</div>
                    <div className="info-box-body">{otp}</div>
                  </div>
                </Form.Group>
              </Col>

              {/* Product Rating */}
              <Col md={2}>
                <Form.Group controlId="formRating">
                  <div className="info-box">
                    <div className="info-box-header">Product Rating</div>
                    <div className="info-box-body">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          onClick={() => setRating(index + 1)}
                          style={{
                            cursor: 'pointer',
                            color: index < rating ? 'gold' : 'gray',
                            fontSize: '1.2em',
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </Form.Group>
              </Col>

              {/* Review with Save Button */}
              <Col md={4}>
                <Form.Group controlId="formReview">
                  <div className="info-box">
                    <div className="info-box-header">Review</div>
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        maxLength={95}
                        rows={2}
                        placeholder="Enter your review (max 95 characters)"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        style={{ resize: 'none' }}
                        className="bg-light"
                      />
                      <Button
                        style={{ backgroundColor: '#6c8023', borderColor: '#6c8023' }}
                        onClick={handleSaveReview}
                        className="input-group-append"
                      >
                        Save
                      </Button>
                    </InputGroup>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            {/* Delivery Date/Time Box */}
            <Row>
              <Col md={2}>
                <Form.Group controlId="formDeliveryDateTime">
                  <div className="info-box">
                    <div className="info-box-header">Delivery Date/Time</div>
                    <Form.Control
                      type="text"
                      value={deliveryDateTime}
                      onChange={handleDateTimeChange}
                      placeholder="dd-mm-yyyy hh:mm AM/PM"
                      className="form-control-delivery text-center bg-light"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col md={2}>
                <div className="info-box">
                  <div className="info-box-header">Status</div>
                  <div className="info-box-body">
                    <span>{deliveryStatus.charAt(0).toUpperCase() + deliveryStatus.slice(1).toLowerCase()}</span>
                  </div>
                </div>
              </Col>

              {/* Payment Status Dropdown */}
              <Col md={2}>
                <Form.Group controlId="formPaymentStatus">
                  <div className="info-box">
                    <div className="info-box-header">Payment</div>
                    <Form.Select
                      value={paymentStatus}
                      onChange={handlePaymentStatusChange}
                      className="text-center bg-light border-0 "
                    >
                      <option value="received">Received</option>
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>

              {/* Verify OTP Box */}
              <Col md={2}>
                <Form.Group controlId="formVerifyOTP">
                  <div className="info-box info-box-verify-otp">
                    <div className="info-box-header">Verify OTP</div>
                    <div className="info-box-body">{otp}</div>
                  </div>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default OrderBook;
