/* eslint-disable no-restricted-globals */
'use client';

import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import { Controller, useForm } from 'react-hook-form';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { PiCursorClick } from 'react-icons/pi';
import './App.css';

import ProductImageCropper from './components/ProductImageCropper/ProductImageCropper';
import Lead from './components/common/Lead';
import { groupOptions, plans, stores, vehicleTypeOptions } from './utils/constants';

type FormValues = {
  token: string;
  type: string;
  store: string;
  subscriptionDate: string;
  plan: string;
  renewalDate: string;
  amount: string;
  voucherCode: string;
  rebate: string;
  toPay: string;
  driverName: string;
  pincode: string;
  city: string;
  country: string;
  area: string;
  group: string;
  userType: string;
  vehicleModel: string;
  vehicleType: string;
  dlNo: string;
  rcNo: string;
  vehicleNo: string;
  unit: string;
  price: string;
  emissionExpire: string;
  drivingExp: string;
  policeVerification: string;
  insuranceId: string;
  criminalCase: string;
  insuranceRenewalDate: string;
};

const labels = [
  'Driver',
  'Vehicle (Front View)',
  'Vehicle (Side View)',
  'Vehicle (Back View)',
  'D/L Front View',
  'RC (RTO) - Front',
  'RC (RTO) - Back',
  'Letter Upload - Police Verify ',
];

export function App() {
  const defaultValues: FormValues = {
    subscriptionDate: new Date()
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-'),
    type: 'subscription',
    token: '',
    amount: '',
    rebate: '',
    toPay: '',
    driverName: '',
    pincode: '',
    store: '',
    plan: '',
    renewalDate: '',
    voucherCode: '',
    city: '',
    country: '',
    area: '',
    group: '',
    userType: '',
    vehicleModel: '',
    vehicleType: '',
    dlNo: '',
    rcNo: '',
    vehicleNo: '',
    unit: '',
    price: '',
    emissionExpire: '',
    drivingExp: '',
    policeVerification: '',
    criminalCase: '',
    insuranceId: '',
    insuranceRenewalDate: '',
  };

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  });

  const [editable, setEditable] = useState<'edit' | 'save' | 'cancel' | 'default'>('default');

  const [termsAccepted, setTermsAccepted] = useState(false);

  const selectedPlan = watch('plan');
  const voucherCode = watch('voucherCode');

  const unitOptions = ['km', 'hr', 'day'];

  useEffect(() => {
    const planDetails = plans.find((p) => p.value === selectedPlan);
    if (planDetails) {
      const renewalDate = new Date();
      renewalDate.setFullYear(renewalDate.getFullYear() + (planDetails.duration.years ?? 0));
      // renewalDate.setMonth(renewalDate.getMonth() + (planDetails.duration.months ?? 0));
      const formattedRenewalDate = renewalDate
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '-');

      setValue('renewalDate', formattedRenewalDate);
      setValue('amount', planDetails.value);
      setValue('toPay', planDetails.value);
      setValue('rebate', '0');

      if (voucherCode !== 'BLAUNK100') {
        setValue('voucherCode', '');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan, setValue]);

  const handleVoucherApply = () => {
    if (voucherCode === 'BLAUNK100') {
      const rebateAmount = watch('amount');
      setValue('rebate', rebateAmount);
      setValue('toPay', '0');
    } else {
      setValue('rebate', '0');
      setValue('toPay', watch('amount'));
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Accordion defaultActiveKey="0" flush>
        {/* //!Subscription */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>LOGISTICS SUBSCRIPTION</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row className="mb-4">
                <Form.Group as={Col} lg={4} md={6} sm={12} xs={12} className="d-flex align-items-center">
                  <Form.Label className="me-2 mb-0" style={{ whiteSpace: 'nowrap', marginRight: '10px' }}>
                    Token No.
                  </Form.Label>
                  <InputGroup>
                    <Controller
                      name="token"
                      control={control}
                      render={({ field }) => <Form.Control type="text" {...field} />}
                    />
                    <InputGroup.Text
                      style={{
                        backgroundColor: '#808836',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      className="text-white"
                    >
                      <PiCursorClick />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Select Type</Form.Label>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={editable === 'save'}>
                        <option value="subscription">Subscription</option>
                        <option value="renewal">Renewal</option>
                        <option value="renewal">Lead</option>
                      </Form.Select>
                    )}
                  />
                </Form.Group>
                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Select Store</Form.Label>
                  <Controller
                    name="store"
                    control={control}
                    rules={{ required: 'Please select a store' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select a store</option>
                        {stores.map((store) => (
                          <option key={store.value} value={store.value}>
                            {store.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.store && <Form.Text className="text-danger">{errors.store.message}</Form.Text>}
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Subscription Date</Form.Label>
                  <Controller
                    name="subscriptionDate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Plan</Form.Label>
                  <Controller
                    name="plan"
                    control={control}
                    rules={{ required: 'Please select a plan' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select a plan</option>
                        {plans.map((plan) => (
                          <option key={plan.value} value={plan.value}>
                            {plan.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.plan && <Form.Text className="text-danger">{errors.plan.message}</Form.Text>}
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Renewal Date</Form.Label>
                  <Controller
                    name="renewalDate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Amount</Form.Label>
                  <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Voucher Code</Form.Label>
                  <div className="position-relative">
                    <Controller
                      name="voucherCode"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          {...field}
                          style={{ paddingRight: '2.5rem' }}
                          disabled={['save', 'edit'].includes(editable)}
                          onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        />
                      )}
                    />
                    <Button
                      onClick={handleVoucherApply}
                      variant="link"
                      className="position-absolute top-50 translate-middle-y pt-0"
                      style={{
                        right: '0.2rem',
                        padding: 6,
                        backgroundColor: '#808836',
                        color: 'white',
                      }}
                    >
                      <FaSearch />
                    </Button>
                  </div>
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Rebate</Form.Label>
                  <Controller
                    name="rebate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>To Pay</Form.Label>
                  <Controller
                    name="toPay"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add Product */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>ADD PRODUCT</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={13}>
                  <Form.Label>Driver Name</Form.Label>
                  <Controller
                    name="driverName"
                    control={control}
                    rules={{ required: 'Please enter driver name' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        maxLength={45}
                        placeholder="max 45 characters..."
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.driverName && <Form.Text className="text-danger">{errors.driverName.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Country</Form.Label>
                  <Controller
                    name="country"
                    control={control}
                    rules={{ required: 'Please select a country' }}
                    render={({ field: { onChange, value } }) => (
                      <ReactFlagsSelect
                        countries={['IN', 'BH', 'BD', 'BT', 'ID', 'JO', 'MY', 'MV', 'PH', 'SG', 'LK', 'AE', 'QA', 'VN']}
                        customLabels={{
                          IN: 'India',
                          BH: 'Bahrain',
                          BD: 'Bangladesh',
                          BT: 'Bhutan',
                          ID: 'Indonesia',
                          JO: 'Jordan',
                          MY: 'Malaysia',
                          MV: 'Maldives',
                          PH: 'Philippines',
                          SG: 'Singapore',
                          LK: 'Sri Lanka',
                          AE: 'United Arab Emirates',
                          QA: 'Qatar',
                          VN: 'Vietnam',
                        }}
                        selected={value}
                        onSelect={onChange}
                        placeholder="Select Country"
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.country && <Form.Text className="text-danger">{errors.country.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Zip code/Pincode</Form.Label>
                  <Controller
                    name="pincode"
                    control={control}
                    rules={{
                      required: 'Please enter your pincode',
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        maxLength={7}
                        {...field}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.pincode && <Form.Text className="text-danger">{errors.pincode.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>City</Form.Label>
                  <Controller
                    name="city"
                    control={control}
                    rules={{ required: 'Please enter a city' }}
                    render={({ field }) => (
                      <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.city && <Form.Text className="text-danger">{errors.city.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label> Area</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaMapMarkerAlt />
                    </InputGroup.Text>
                    <Controller
                      name="area"
                      control={control}
                      rules={{ required: 'Please enter an area' }}
                      render={({ field }) => (
                        <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                      )}
                    />
                  </InputGroup>
                  {errors.area && <Form.Text className="text-danger">{errors.area.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Group</Form.Label>
                  <Controller
                    name="group"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a group</option>
                        {groupOptions.map((group) => (
                          <option key={group.value} value={group.value}>
                            {group.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.group && <Form.Text className="text-danger">{errors.group.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Type</Form.Label>
                  <Controller
                    name="userType"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        <option value="individual">Individual</option>
                        <option value="company">Company</option>
                        <option value="firm">Firm</option>
                      </Form.Select>
                    )}
                  />
                  {errors.userType && <Form.Text className="text-danger">{errors.userType.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Vehicle Model (Brand)</Form.Label>
                  <Controller
                    name="vehicleModel"
                    control={control}
                    rules={{
                      required: 'Please enter vehicle model ',
                    }}
                    render={({ field }) => (
                      <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.vehicleModel && <Form.Text className="text-danger">{errors.vehicleModel.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Vehicle Type</Form.Label>
                  <Controller
                    name="vehicleType"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {vehicleTypeOptions.map((vehicleType) => (
                          <option key={vehicleType.value} value={vehicleType.value}>
                            {vehicleType.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.vehicleType && <Form.Text className="text-danger">{errors.vehicleType.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Driving License No.</Form.Label>
                  <Controller
                    name="dlNo"
                    control={control}
                    rules={{ required: 'Please enter driving license no.' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.dlNo && <Form.Text className="text-danger">{errors.dlNo.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Vehicle RC No. (RTO)</Form.Label>
                  <Controller
                    name="rcNo"
                    control={control}
                    rules={{ required: 'Please enter vehicle RC no.' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.rcNo && <Form.Text className="text-danger">{errors.rcNo.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Vehicle No.</Form.Label>
                  <Controller
                    name="vehicleNo"
                    control={control}
                    rules={{ required: 'Please enter vehicle no.' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.vehicleNo && <Form.Text className="text-danger">{errors.vehicleNo.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Row className="align-items-center">
                    {/* Price label and input */}
                    <div className="d-flex" style={{ width: '100%' }}>
                      {/* Wrap in a div with full width */}
                      <Col xs={7}>
                        <div className="d-flex flex-column">
                          <Form.Label>Price (in Rs.)</Form.Label>
                          <Controller
                            name="price"
                            control={control}
                            rules={{ required: 'Please enter a price' }}
                            render={({ field }) => (
                              <Form.Control
                                type="text"
                                placeholder="Enter price"
                                {...field}
                                maxLength={5}
                                onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''))}
                                onBlur={(e) => {
                                  if (e.currentTarget.value && !e.currentTarget.value.includes('.')) {
                                    e.currentTarget.value += '.00';
                                    field.onChange(e);
                                  }
                                }}
                              />
                            )}
                          />
                          {errors.price && <Form.Text className="text-danger">{errors.price.message}</Form.Text>}
                        </div>
                      </Col>
                      {/* Per unit label and select */}
                      <Col xs={5}>
                        <div className="d-flex flex-column">
                          <Form.Label>Per unit</Form.Label>
                          <Controller
                            name="unit"
                            control={control}
                            rules={{ required: 'Please select a unit' }}
                            render={({ field }) => (
                              <Form.Select {...field}>
                                <option value="">Select unit</option>
                                {unitOptions.map((unit) => (
                                  <option key={unit} value={unit}>
                                    {unit}
                                  </option>
                                ))}
                              </Form.Select>
                            )}
                          />
                          {errors.unit && <Form.Text className="text-danger">{errors.unit.message}</Form.Text>}
                        </div>
                      </Col>
                    </div>
                  </Row>
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Emission Expire Date</Form.Label>
                  <Controller
                    name="emissionExpire"
                    control={control}
                    rules={{ required: 'Please select emission expire date.' }}
                    render={({ field }) => (
                      <Form.Control type="date" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.emissionExpire && (
                    <Form.Text className="text-danger">{errors.emissionExpire.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Driving Experience</Form.Label>
                  <Controller
                    name="drivingExp"
                    control={control}
                    rules={{
                      required: 'Please enter your driving experience.',
                      min: {
                        value: 0,
                        message: 'Experience must be a positive number.',
                      },
                      max: {
                        value: 50,
                        message: 'Please enter a realistic value.',
                      },
                      pattern: {
                        value: /^[0-9]*$/,
                        message: 'Only numbers are allowed.',
                      },
                    }}
                    render={({ field }) => (
                      <InputGroup>
                        <Form.Control
                          type="text"
                          {...field}
                          placeholder="Enter years"
                          maxLength={2}
                          onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''))}
                        />
                        <InputGroup.Text>Years</InputGroup.Text>
                      </InputGroup>
                    )}
                  />
                  {errors.drivingExp && <Form.Text className="text-danger">{errors.drivingExp.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Police Verification</Form.Label>
                  <Controller
                    name="policeVerification"
                    control={control}
                    rules={{
                      required: 'Please select an option for police verification.',
                    }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="na">N/A</option>
                      </Form.Select>
                    )}
                  />
                  {errors.policeVerification && (
                    <Form.Text className="text-danger">{errors.policeVerification.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Criminal/Police Case</Form.Label>
                  <Controller
                    name="criminalCase"
                    control={control}
                    rules={{
                      required: 'Please select an option for police verification.',
                    }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="na">N/A</option>
                      </Form.Select>
                    )}
                  />
                  {errors.criminalCase && <Form.Text className="text-danger">{errors.criminalCase.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Vehicle Insurance ID</Form.Label>
                  <Controller
                    name="insuranceId"
                    control={control}
                    rules={{ required: 'Please enter driving license no.' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.insuranceId && <Form.Text className="text-danger">{errors.insuranceId.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Renewal Date</Form.Label>
                  <Controller
                    name="insuranceRenewalDate"
                    control={control}
                    rules={{ required: 'Please select a renewal date.' }}
                    render={({ field }) => (
                      <Form.Control type="date" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.insuranceRenewalDate && (
                    <Form.Text className="text-danger">{errors.insuranceRenewalDate.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Livestock Shipment</Form.Label>
                  <Form.Control
                    type="text"
                    value="Not Allowed"
                    readOnly
                    style={{
                      color: 'red',
                      borderColor: '#f5c6cb',
                      border: '2px solid red',
                    }}
                  />
                </Form.Group>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Images */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>IMAGES</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Row className="mb-5">
                  {labels.slice(0, 4).map((label, index) => (
                    <Col key={index} lg={3} md={4} sm={6} xs={12}>
                      <div className="text-center">
                        <Form.Label>
                          <h6>{label}</h6>
                        </Form.Label>
                        <ProductImageCropper />
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row className="mt-3">
                  {labels.slice(4).map((label, index) => (
                    <Col key={index + 4} lg={3} md={4} sm={6} xs={12}>
                      <div className="text-center">
                        <Form.Label>
                          <h6>{label}</h6>
                        </Form.Label>
                        {/* Display custom label */}
                        <ProductImageCropper />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Row>
              {/* cspell:disable */}
              <Row className=" mt-5">
                <span className="mb-3">On verification found Suspicious / Fake Documents ID will be suspended</span>
                All the documents uploaded are true to your knowledge & Notary Verified & Bonafied.
                <br /> अपलोड किए गए सभी दस्तावेज़ आपकी जानकारी के अनुसार सही हैं और नोटरी द्वारा सत्यापित और प्रामाणिक
                हैं। <br />
                பதிவேற்றிய அனைத்து ஆவணங்களும் உங்கள் அறிவுக்கு ஏற்றது & நோட்டரி சரிபார்க்கப்பட்டது & உறுதியளிக்கப்பட்டது
                {/* cspell:enable */}
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Disclaimer */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>DISCLAIMER</Accordion.Header>
          <Accordion.Body>
            <p className="text-center">
              Blaunk will not be held liable for any legal or claiming, as this is only an Online platform for secure
              trade between vendors & customer.
            </p>
            <p className="text-center ">Listing fees is Non-Refundable and Inclusive of all Govt Levied & Taxes.</p>
            <p className="text-center">
              If Service provider fails to provide required services, penalty of penalty of Rs. 100 will be levied.
            </p>
            <p className="text-center">
              Any complain on Service provider's misbehaviour will lead to immediate action or profile will get blocked
              without any prior intimation.
            </p>
            <p className="text-center">
              If ride is cancelled more than 3 times, Blaunk have all rights to block or suspend the service provider.
            </p>
            <p className="d-flex justify-content-center flex-wrap">
              <Form.Check className="checkbox" onChange={(e) => setTermsAccepted(e.target.checked)} />I have read and
              agree to all the terms and conditions.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Buttons */}
        <Container className="text-center mt-4 mb-4">
          <Button
            variant="danger"
            className="mx-2"
            onClick={() => {
              const warn = confirm('You will lose all saved details. Are you sure you want to cancel?');
              if (warn) {
                setEditable('cancel');
                reset(defaultValues);
              }
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="success"
            className="mx-2"
            onClick={handleSubmit(
              () => {
                if (isValid && termsAccepted) {
                  const confirmSave = confirm(
                    'Once Product details are saved, cannot be edited except Type, Delivery By, Product offer, MRP, Selling Price and Product availability status. Are you sure you want to save?',
                  );
                  if (confirmSave) {
                    setEditable('save');
                  }
                } else if (!termsAccepted) {
                  alert('Please accept the terms and conditions before saving!');
                }
              },
              () => {
                alert('Please fix all form errors before saving!');
              },
            )}
          >
            Save
          </Button>
          <Button variant="warning" className="mx-2" onClick={() => setEditable('edit')}>
            Edit
          </Button>
          <Button variant="primary" className="mx-2">
            Payment
          </Button>
        </Container>
        {/* //!Lead  */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <span className="me-2">LEAD</span>
            <Row className="w-100 align-items-center">
              <Col md={4} className="d-flex">
                <img src="https://i.ibb.co/L88jqR1/lead-logo.png" width={32} height={35} />
              </Col>
              <Col md={8} className="d-flex justify-content-end ">
                {/* Form Group for VEHICLE input */}
                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12} className="mx-2">
                  <Controller
                    name="vehicleType"
                    control={control}
                    render={({ field }) => <Form.Control {...field} placeholder="CAB" type="text" readOnly />}
                  />
                </Form.Group>

                {/* Form Group for CITY input */}
                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12} className="mx-2">
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => <Form.Control {...field} placeholder="CITY" type="text" />}
                  />
                </Form.Group>

                {/* Form Group for PINCODE input */}
                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12} className="mx-2">
                  <Controller
                    name="pincode"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        {...field}
                        placeholder="PINCODE"
                        type="text"
                        maxLength={7}
                        {...field}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                      />
                    )}
                  />
                </Form.Group>
                <Button
                  style={{
                    backgroundColor: 'orange',
                    fontWeight: 'bold',
                    borderColor: 'orange',
                  }}
                  className="me-4"
                >
                  Refresh
                </Button>
              </Col>
            </Row>
          </Accordion.Header>
          <Accordion.Body>
            <Lead />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );
}

export default App;
