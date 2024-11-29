'use client';

import { grid } from '@li/config/design';
import clsx from 'clsx';
import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styles from './find-vendors.module.css';

interface FormData {
  country: string;
  pinCode: string;
  city: string;
  area: string;
  services: string;
  purpose: string;
  requirement: string;
  bookingSlot: string;
  origin: string;
  destination: string;
  pickupDate: string;
  dropDate: string;
}

const groupOptions = ['Cab', 'Logistics', 'Packers', 'Driver'];

const articleRequirementOptions = {
  Cab: [
    'Auto',
    '4s Car',
    '4s SUV',
    '6s SUV',
    'Self Drive Car - (A)',
    'Self Drive Car - (EV)',
    'Self Drive Car',
    'Self Drive Scooter',
    'Scooter',
    'Bike',
    'Pick up bike',
    'Self Drive Bullet',
  ],
  Logistics: [
    'Box Truck',
    'Flatbed Truck',
    'Refrigerated trucks',
    'Trailer',
    'Trailer Truck',
    'Van',
    'Light commercial vehicle',
    'Pick up',
    'Train',
    'Mini Truck',
    'Tank Truck',
    'Tow Truck',
    'Canter Truck',
    'Goods Transport',
    'Fruits and Vegetables Transport',
    'Mini Bus',
  ],
  Packers: ['Container', 'Lorry', 'Tempo', 'Box Truck'],
  Driver: ['Car'],
};

const purposeOptions = [
  'Household ',
  'Commercial Moving',
  'Office Moving',
  'Goods',
  'Liquid & Gas',
  'Iron & Steel',
  'Food & Grains',
  'Garments ',
  'Perishable',
  'Fragile Goods',
  'Give Duty',
  'Family Trip',
  'Business Trip',
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    const startHour = hour % 12 || 12;
    const endHour = (hour + 1) % 12 || 12;
    const periodStart = hour < 12 ? 'AM' : 'PM';
    const periodEnd = hour + 1 < 12 ? 'AM' : 'PM';
    const startTime = `${startHour}:00 ${periodStart}`;
    const endTime = `${endHour}:00 ${periodEnd}`;
    slots.push(`${startTime} - ${endTime}`);
  }
  return slots;
};

interface FindVendorsProps {
  backgroundImage: string;
}

export const FindVendors = ({ backgroundImage }: FindVendorsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [selectedGroup, setSelectedGroup] = useState<string>('');

  const timeSlots = generateTimeSlots();

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <div
      className={clsx(styles.wrapper, grid['col-6'], grid['col-m-6'])}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4)), ${backgroundImage}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // border: '30px solid #d0d0d0',
      }}
    >
      <div className={styles.heading}>Let us help you find the best Logistics</div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Row 1 */}
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="country">
              <Form.Label className={styles.formLabelWhite}>Country</Form.Label>
              <InputGroup className={styles.inputGroup}>
                <InputGroup.Text>
                  <img
                    src="https://imgs.search.brave.com/RKtNQD4y9Kj05k99gvwpzwYnk2SzXCRgf7vevmq-2SA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzIxNzUwNi9waG90/by9mbGFnLW9mLWlu/ZGlhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0yX3VsVWN0/eENxVXk5OGY4Qk1S/NHVjTlkxOTJyM2xi/MnUyOW9PSUZKc1hF/PQ"
                    alt="India Flag"
                    width={25}
                    height={20}
                  />
                </InputGroup.Text>
                <Form.Control type="text" value="India" readOnly className={styles.formSelectWhite} />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="pinCode">
              <Form.Label className={styles.formLabelWhite}>Pin Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pin code"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={7}
                {...register('pinCode', {
                  required: 'Pin code is required',
                  pattern: { value: /^[0-9]{6}$/, message: 'Pin code must be 6 digits' },
                })}
                className={styles.formSelectWhite}
                onKeyDown={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.pinCode && <small className="text-danger">{errors.pinCode.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="city">
              <Form.Label className={styles.formLabelWhite}>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                {...register('city', { required: 'City is required' })}
                className={styles.formSelectWhite}
              />
              {errors.city && <small className="text-danger">{errors.city.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="area">
              <Form.Label className={styles.formLabelWhite}>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter area"
                {...register('area', { required: 'Area is required' })}
                className={styles.formSelectWhite}
              />
              {errors.area && <small className="text-danger">{errors.area.message}</small>}
            </Form.Group>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="services">
              <Form.Label className={styles.formLabelWhite}>Services</Form.Label>
              <Form.Select
                {...register('services', { required: 'Service is required' })}
                onChange={(e) => {
                  setSelectedGroup(e.target.value);
                }}
                className={styles.formSelectWhite}
              >
                <option value="">Select a services</option>
                {groupOptions.map((services) => (
                  <option key={services} value={services}>
                    {services}
                  </option>
                ))}
              </Form.Select>
              {errors.services && <small className="text-danger">{errors.services.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="requirement">
              <Form.Label className={styles.formLabelWhite}>Requirement</Form.Label>
              <Form.Select
                {...register('requirement', { required: 'Requirement is required' })}
                disabled={!selectedGroup}
                className={styles.formSelectWhite}
              >
                <option value="">Select an option</option>
                {selectedGroup &&
                  articleRequirementOptions[selectedGroup as keyof typeof articleRequirementOptions].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </Form.Select>
              {errors.requirement && <small className="text-danger">{errors.requirement.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="purpose">
              <Form.Label className={styles.formLabelWhite}> Purpose</Form.Label>
              <Form.Select
                {...register('purpose', { required: 'Purpose is required' })}
                className={styles.formSelectWhite}
              >
                <option value="">Select an option</option>
                {purposeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Select>
              {errors.purpose && <small className="text-danger">{errors.purpose.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="bookingSlot">
              <Form.Label className={styles.formLabelWhite}>Pick-up slot</Form.Label>
              <Form.Select
                {...register('bookingSlot', { required: 'Booking slot is required' })}
                className={styles.formSelectWhite}
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </Form.Select>
              {errors.bookingSlot && <small className="text-danger">{errors.bookingSlot.message}</small>}
            </Form.Group>
          </Col>
        </Row>

        {/* Row 3 */}
        <Row className="mb-5">
          <Col md={3}>
            <Form.Group controlId="origin">
              <Form.Label className={styles.formLabelWhite}>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter origin"
                {...register('origin', { required: 'Origin is required' })}
                className={styles.formSelectWhite}
              />
              {errors.origin && <small className="text-danger">{errors.origin.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="destination">
              <Form.Label className={styles.formLabelWhite}>To Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination"
                {...register('destination', { required: 'Destination is required' })}
                className={styles.formSelectWhite}
              />
              {errors.destination && <small className="text-danger">{errors.destination.message}</small>}
            </Form.Group>
          </Col>

          <Col md={3}>
            <Form.Group controlId="pickupDate">
              <Form.Label className={styles.formLabelWhite}>Pick-up Date</Form.Label>
              <Form.Control
                type="date"
                {...register('pickupDate', { required: 'Date is required' })}
                className={styles.formSelectWhite}
              />
              {errors.pickupDate && <small className="text-danger">{errors.pickupDate.message}</small>}
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="dropDate">
              <Form.Label className={styles.formLabelWhite}>Drop Date</Form.Label>
              <Form.Control
                type="date"
                {...register('dropDate', { required: 'Date is required' })}
                className={styles.formSelectWhite}
              />
              {errors.dropDate && <small className="text-danger">{errors.dropDate.message}</small>}
            </Form.Group>
          </Col>
        </Row>

        {/* Submit button */}
        <Row className="d-flex justify-content-center ">
          <Button
            type="submit"
            className="w-auto"
            style={{ backgroundColor: '#6d751d', borderColor: '#6d751d', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}
          >
            Submit Requirement
          </Button>
        </Row>
      </Form>
    </div>
  );
};
