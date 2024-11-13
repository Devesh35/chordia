'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx';
import React, { useState } from 'react';
import { Accordion, Badge, Col, Form, Row } from 'react-bootstrap';
import styles from './LogisticsOrderBook.module.css';

const generateOTP = () => {
  return 12121;
};

const reportOptions = [
  { value: 'no-response', label: 'No Response from service provider' },
  { value: 'misbehaviour', label: 'Misbehaviour with passengers' },
  { value: 'harassment', label: 'Sexual Harassment' },
  { value: 'breakdown', label: 'Midway Vehicle Break down' },
  { value: 'trip-cancelled', label: 'Midway trip Cancelled' },
  { value: 'one-side', label: 'One side trip only complete' },
  { value: 'cancel-booking', label: 'Driver ask to cancel Booking' },
  { value: 'drunk-drive', label: 'Drunk & Drive' },
  { value: 'extra-demand', label: 'Demand extra amount' },
  { value: 'call-driving', label: 'On-call while Driving' },
  { value: 'extra-charge', label: 'Charged extra Pay demand' },
  { value: 'no-ac', label: 'No A/C ON in spite request' },
  { value: 'unclean-vehicle', label: 'Dirty or Unclean Vehicle' },
  { value: 'no-luggage-space', label: 'No Space for Luggage' },
  { value: 'different-driver', label: 'Driver not same' },
  { value: 'different-vehicle', label: 'Vehicle not same' },
  { value: 'additional-person', label: 'Driver attend with additional person' },
  { value: 'need-help', label: 'Need Help, call me' },
  { value: 'mobile-off', label: 'Driver mobile off / No reply' },
];

export const OrderBook: React.FC = () => {
  const [otp] = useState(generateOTP());
  const [status, setStatus] = useState('pending');
  const [response, setResponse] = useState('Pending');

  return (
    <Accordion defaultActiveKey="0" flush className={styles.accordion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="d-flex justify-content-between w-100">
            <div>
              <strong className="me-2 fs-4 text-white"> Order #12345</strong>
              <span className="fs-6 text-white">24-2-24, 02:30 PM</span>
            </div>
            <div>
              <Badge bg="danger">{status.toUpperCase()}</Badge>{' '}
            </div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row>
              <Col md={1}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>Pick-up Date</div>
                  <div className={styles['info-box-body']}>24-2-24</div>
                </div>
              </Col>

              <Col md={2}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>Place</div>
                  <div className={styles['info-box-body']}>
                    <div>From: New York</div>
                    <div>To: Los Angeles</div>
                  </div>
                </div>
              </Col>

              <Col md={1}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>OTP</div>
                  <div className={styles['info-box-body']}>{otp}</div>
                </div>
              </Col>

              <Col md={2}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>Driver</div>
                  <div className={styles['info-box-body']}>
                    <div>Name: user name</div>
                    <div>Mobile No. : 1234567890</div>
                  </div>
                </div>
              </Col>

              <Col md={2}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>Vehicle No.</div>
                  <div className={styles['info-box-body']}>AB-1234</div>
                </div>
              </Col>
              <Col md={1}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>Price/km(Rs)</div>
                  <div className={styles['info-box-body']}>
                    <div>0.00</div>
                  </div>
                </div>
              </Col>

              <Col md={1}>
                <div className={styles['info-box']}>
                  <div className={styles['info-box-header']}>Response</div>
                  <div className={styles['info-box-body']}>{response}</div>
                </div>
              </Col>

              <Col md={2}>
                <Form.Group controlId="formReport">
                  <div className={styles['info-box']} style={{ borderColor: 'blue' }}>
                    <div className={clsx('bg-primary', styles['info-box-header'])}>Report</div>
                    <Form.Select className="text-center ">
                      <option value="">Select if any</option>
                      {reportOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
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
