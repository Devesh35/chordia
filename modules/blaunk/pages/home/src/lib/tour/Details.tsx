import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Col, InputGroup, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import './Details.css';
import { PiCursorClick } from 'react-icons/pi';

interface FormData {
  checkIn: string;
  checkOut: string;
  numberOfRooms: string;
  details: string;
  visitorName: string;
  purpose: string;
  arrivingTime: string;
  bookingFor: string;
  specialRequest: string;
  kidsAge1: string;
  kidsAge2: string;
  voucherCode: string;
  toPay: string;
  portalFees: string;
  subTotal: string;
  terms: string;
}

export const Details: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    // reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      checkIn: '',
      checkOut: '',
      numberOfRooms: 'one',
      details: 'single',
      visitorName: '',
      purpose: '',
      arrivingTime: '',
      bookingFor: '',
      specialRequest: '',
      kidsAge1: 'na',
      kidsAge2: 'na',
      voucherCode: '',
      toPay: '',
      portalFees: '',
      subTotal: '',
      terms: '',
    },
    mode: 'onChange',
  });

  const [daysCount, setDaysCount] = useState<number>(0);
  const [kidsCount, setKidsCount] = useState<number>(0);
  const today = new Date().toISOString().split('T')[0];

  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');
  const details = watch('details');

  useEffect(() => {
    const updateDaysCount = (checkInDate: string, checkOutDate: string) => {
      if (checkInDate && checkOutDate) {
        const checkInDateObj = new Date(checkInDate);
        const checkOutDateObj = new Date(checkOutDate);
        if (checkOutDateObj > checkInDateObj) {
          const timeDiff = checkOutDateObj.getTime() - checkInDateObj.getTime();
          const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
          setDaysCount(days);
        } else {
          setDaysCount(0);
        }
      } else {
        setDaysCount(0);
      }
    };
    updateDaysCount(checkIn, checkOut);
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (details === 'doubleKid' || details === 'threeAdultsOneKid') {
      setKidsCount(1);
    } else if (details === 'doubleTwoKids' || details === 'threeAdultsTwoKids') {
      setKidsCount(2);
    } else {
      setKidsCount(0);
    }
  }, [details]);

  const onSubmit = (data: FormData) => {
    console.log('Form Data: ', data);
    alert('THANK YOU\nYou can view your Request under MY ORDER');
    // reset();
  };

  return (
    <div className="container-fluid my-5">
      <h2 className="fw-bold mb-4">ITC Gardenia</h2>
      <div
        className="row p-3 d-flex justify-content-center"
        style={{ backgroundColor: '#fffbe6', borderRadius: '12px' }}
      >
        <div className="row d-flex align-items-center">
          <Col>
            <h3 className="fw-bold d-flex " style={{ color: '#e75f78', fontSize: '3rem' }}>
              Suite Room
            </h3>
          </Col>
          <Col>
            <h3 className="fw-bold" style={{ color: '#e75f78' }}>
              Deluxe, Garden view
            </h3>
          </Col>
          <Col>
            <h3 className="fw-bold">
              <span className="text-decoration-line-through text-danger me-2">₹2000</span>
              <span className="text-success fs-2">₹1500</span>
            </h3>
          </Col>
        </div>
        <div className="row my-2">
          {/* First Column */}
          <Col className="room-box bg-color-1">
            <p>Free Breakfast : Yes</p>
            <p>Air Conditioning : Yes</p>
            <p>Welcome Drink : Yes</p>
            <p>Check In-Out Timings : Flexible</p>
            <p>Pet Allowed : Yes</p>
            <p>Landmark : Airport 25km</p>
          </Col>

          {/* Second Column */}
          <Col className="room-box bg-color-2">
            <p>Extra Bed Charges : For Kids Above Age ....</p>
            <p>Response Time :</p>
            <p>Cancellation Policy :</p>
            <p>Currency Exchange : No</p>
            <p>Pay Mode : Cash</p>
            <p>Complimentary Gift : Cash</p>
          </Col>

          {/* Third Column */}
          <Col className="room-box bg-color-3">
            <p>Facility : 2 Star</p>
            <p>Taxes & Levies : Extra</p>
            <p>GST Invoice : Yes</p>
            <p>Payment : On Arrival</p>
            <p>Cus Care : care@tajhotel.com</p>
            <p>Languages spoken : English, Hindi, Arabic, Tamil</p>
          </Col>
        </div>
      </div>
      <div
        className="row p-3 mt-3 d-flex justify-content-center"
        style={{ backgroundColor: '#fffbe6', borderRadius: '12px' }}
      >
        <Form onSubmit={handleSubmit(onSubmit)} className="row d-flex justify-content-center my-4">
          <Row style={{ backgroundColor: '#fff', borderRadius: '12px' }}>
            <Col md={9}>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Check In</Form.Label>
                    <Form.Control type="date" min={today} {...register('checkIn', { required: true })} size="lg" />
                    {errors.checkIn && <span className="text-danger">Check In is required</span>}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Check Out</Form.Label>
                    <Form.Control type="date" min={today} {...register('checkOut', { required: true })} size="lg" />
                    {errors.checkOut && <span className="text-danger">Check Out is required</span>}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Number of Days</Form.Label>
                    <Form.Control type="text" value={daysCount} size="lg" readOnly />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>No. of Rooms</Form.Label>
                    <Form.Select {...register('numberOfRooms', { required: true })} size="lg">
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3</option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                      <option value="six">6</option>
                      <option value="seven">7</option>
                      <option value="eight">8</option>
                      <option value="nine">9</option>
                      <option value="ten">10</option>
                    </Form.Select>
                    {errors.numberOfRooms && <span className="text-danger">Number of Rooms is required</span>}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Details</Form.Label>
                    <Form.Select {...register('details', { required: true })} size="lg">
                      <option value="single">Single</option>
                      <option value="doubleInfant">Double + Infant</option>
                      <option value="doubleKid">Double + 1 Kid</option>
                      <option value="doubleTwoKids">Double + 2 Kids</option>
                      <option value="threeAdults">3 Adults</option>
                      <option value="threeAdultsOneKid">3 Adults + 1 Kid</option>
                      <option value="threeAdultsTwoKids">3 Adults + 2 Kids</option>
                      <option value="fourAdults">4 Adults</option>
                    </Form.Select>
                    {errors.details && <span className="text-danger">Details are required</span>}
                  </Form.Group>
                </Col>
                {kidsCount > 0 && (
                  <Row>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Kids Age</Form.Label>
                        <Form.Select {...register('kidsAge1', { required: true })} size="lg">
                          <option value="na">NA</option>
                          <option value="below1year">Below 1 year</option>
                          <option value="2years">Below 2 years</option>
                          <option value="3years">Below 3 years</option>
                          <option value="4years">Below 4 years</option>
                          <option value="5years">Below 5 years</option>
                          <option value="6years">Below 6 years</option>
                          <option value="7years">Below 7 years</option>
                          <option value="8years">Below 8 years</option>
                          <option value="9years">Below 9 years</option>
                          <option value="10years">Below 10 years</option>
                          <option value="11years">Below 11 years</option>
                          <option value="12years">Below 12 years</option>
                        </Form.Select>
                        {errors.kidsAge1 && <span className="text-danger">Kids Age is required</span>}
                      </Form.Group>
                    </Col>
                    {kidsCount === 2 && (
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Kids Age</Form.Label>
                          <Form.Select {...register('kidsAge2', { required: true })} size="lg">
                            <option value="na">NA</option>
                            <option value="below1year">Below 1 year</option>
                            <option value="2years">Below 2 years</option>
                            <option value="3years">Below 3 years</option>
                            <option value="4years">Below 4 years</option>
                          </Form.Select>
                          {errors.kidsAge2 && <span className="text-danger">Kids Age is required</span>}
                        </Form.Group>
                      </Col>
                    )}
                  </Row>
                )}
              </Row>
            </Col>

            <Col md={3} className="py-4">
              <Card style={{ border: '2px solid #000' }}>
                <Card.Header className="text-center fw-bold" style={{ backgroundColor: '#e75f78' }}>
                  Issues Reported
                </Card.Header>
                <Card.Body className="p-3">
                  <Card.Text>
                    <div className="row">
                      <div className="col-8">Number of complaints:</div>
                      <div className="col-4">10</div>
                    </div>
                    <div className="row">
                      <div className="col-8">Complaints resolved:</div>
                      <div className="col-4">5</div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ backgroundColor: '#fff', borderRadius: '12px' }}>
            <div className="row my-4 d-flex justify-content-between">
              {/* First Column */}
              <div className="col-md-6">
                <Form.Group className="mb-3 row">
                  <label htmlFor="visitorName" className="col-sm-3 col-form-label">
                    Visitor Name
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="visitorName"
                      rules={{ required: 'Visitor Name is required' }}
                      render={({ field }) => (
                        <Form.Control
                          {...field}
                          type="text"
                          id="visitorName"
                          maxLength={18}
                          placeholder="max 18 characters"
                          size="lg"
                          pattern="[A-Za-z ]+"
                          onInput={(e) => {
                            const target = e.currentTarget;
                            target.value = target.value.replace(/[^A-Za-z ]/g, '');
                          }}
                        />
                      )}
                    />
                    {errors.visitorName && <span className="text-danger">{errors.visitorName.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="purposeSelect" className="col-sm-3 col-form-label">
                    Purpose
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="purpose"
                      rules={{ required: 'Purpose is required' }}
                      render={({ field }) => (
                        <Form.Select id="purposeSelect" {...field} aria-label="Purpose" size="lg">
                          <option value="">Select a value</option>
                          <option value="familyTrip">Family Trip</option>
                          <option value="business">Business</option>
                          <option value="leisure">Leisure</option>
                        </Form.Select>
                      )}
                    />
                    {errors.purpose && <span className="text-danger">{errors.purpose.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="arrivingTime" className="col-sm-3 col-form-label">
                    Arriving Time
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="arrivingTime"
                      rules={{ required: 'Arriving Time is required' }}
                      render={({ field }) => (
                        <Form.Select id="arrivingTime" {...field} aria-label="Arriving Time" size="lg">
                          <option value="">Select a value</option>
                          {Array.from({ length: 24 }).map((_, i) => {
                            const hour = i % 12 === 0 ? 12 : i % 12;
                            const nextHour = (i + 1) % 12 === 0 ? 12 : (i + 1) % 12;
                            const period = i < 12 ? 'AM' : 'PM';

                            return (
                              <option key={i} value={`time${i + 1}`}>
                                {`${hour}:00 ${period} - ${nextHour}:00 ${period}`}
                              </option>
                            );
                          })}
                        </Form.Select>
                      )}
                    />
                    {errors.arrivingTime && <span className="text-danger">{errors.arrivingTime.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="bookingFor" className="col-sm-3 col-form-label">
                    Booking For?
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="bookingFor"
                      rules={{ required: 'Booking For is required' }}
                      render={({ field }) => (
                        <Form.Select id="bookingFor" {...field} aria-label="Booking For" size="lg">
                          <option value="">Select a value</option>
                          <option value="main">I am the main guest</option>
                          <option value="other">Booking is for someone else</option>
                        </Form.Select>
                      )}
                    />
                    {errors.bookingFor && <span className="text-danger">{errors.bookingFor.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="specialRequest" className="col-sm-3 col-form-label">
                    Special Request
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="specialRequest"
                      rules={{ required: 'Special Request is required' }}
                      render={({ field }) => (
                        <Form.Select id="specialRequest" {...field} aria-label="Special Request" size="lg">
                          <option value="">Select a value</option>
                          {[
                            'bulk booking',
                            'Butler',
                            'Rooms Noise free',
                            'Room with View',
                            'High Floor Rooms',
                            'Early check-in',
                            'additional nights',
                            'transportation to & fro',
                            'Meeting Room',
                            'Guide for Local recommendation',
                          ].map((req, index) => (
                            <option key={index} value={`request${index + 1}`}>
                              Request for {req}
                            </option>
                          ))}
                        </Form.Select>
                      )}
                    />
                    {errors.specialRequest && <span className="text-danger">{errors.specialRequest.message}</span>}
                  </div>
                </Form.Group>
              </div>

              {/* Second Column */}
              <div className="col-md-6">
                <Form.Group className="mb-3 row">
                  <label htmlFor="subTotal" className="col-sm-3 col-form-label">
                    Sub Total (₹)
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="subTotal"
                      rules={{ required: 'Sub Total is required' }}
                      render={({ field }) => <Form.Control type="number" id="subTotal" size="lg" {...field} />}
                    />
                    {errors.subTotal && <span className="text-danger">{errors.subTotal.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="portalFees" className="col-sm-3 col-form-label">
                    Portal Fees (₹)
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="portalFees"
                      rules={{ required: 'Portal Fees are required' }}
                      render={({ field }) => <Form.Control type="number" id="portalFees" size="lg" {...field} />}
                    />
                    {errors.portalFees && <span className="text-danger">{errors.portalFees.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="voucherCode" className="col-sm-3 col-form-label">
                    Voucher Code
                  </label>
                  <div className="col-sm-8">
                    <InputGroup size="lg">
                      <Controller
                        control={control}
                        name="voucherCode"
                        rules={{ required: 'Voucher Code is required' }}
                        render={({ field }) => <Form.Control type="text" id="voucherCode" {...field} />}
                      />
                      <InputGroup.Text
                        onClick={() => {
                          console.log('Icon clicked');
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <PiCursorClick />
                      </InputGroup.Text>
                    </InputGroup>
                    {errors.voucherCode && <span className="text-danger">{errors.voucherCode.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="toPay" className="col-sm-3 col-form-label">
                    To Pay
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="toPay"
                      rules={{ required: 'To Pay is required' }}
                      render={({ field }) => <Form.Control type="number" id="toPay" size="lg" {...field} />}
                    />
                    {errors.toPay && <span className="text-danger">{errors.toPay.message}</span>}
                  </div>
                </Form.Group>
              </div>
              <div className="row my-4">
                <div className="col-6">
                  {/* Checkbox */}
                  <Controller
                    control={control}
                    name="terms"
                    rules={{ required: 'You must accept the terms and conditions' }}
                    render={({ field }) => (
                      <Form.Check
                        type="checkbox"
                        id="terms"
                        className="custom-checkbox"
                        label={
                          <div className="fs-5">
                            I have read all the{' '}
                            <OverlayTrigger
                              trigger={['hover', 'focus']}
                              placement="right"
                              overlay={
                                <Popover id="popover-terms">
                                  <Popover.Header
                                    as="h5"
                                    className="text-center p-3"
                                    style={{ backgroundColor: '#e75f78' }}
                                  >
                                    Terms & Conditions
                                  </Popover.Header>
                                  <Popover.Body>
                                    <span>- This platform is for Lead Generation.</span>
                                    <br />
                                    <span>
                                      - Status of Booking will be confirmed by vendor through SMS/Call or Email.
                                    </span>
                                    <br />
                                    <span>
                                      - Price may vary slightly depending upon availability, demand & number of guests.
                                    </span>
                                    <br />
                                    <span>- Payment should be done on arrival.</span>
                                    <br />
                                    <span>- On Arrival 100% payment</span>
                                    <br />
                                    <span>- Subject to availability and Confirmation SMS</span>
                                    <br />
                                    <span>- Any advance paid at your own risk</span>
                                    <br />
                                    <span>- Cancellation subjected to vendor policy</span>
                                    <br />
                                    <span>- Customer will get blocked if refuse to buy an order</span>
                                    <br />
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <span className="text-decoration-underline text-primary" style={{ cursor: 'pointer' }}>
                                terms & conditions.
                              </span>
                            </OverlayTrigger>
                            <span className="text-danger">{errors.terms?.message}</span>
                          </div>
                        }
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="col-sm-3 d-flex justify-content-center">
              <Button variant="success" type="submit" size="lg" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Details;
