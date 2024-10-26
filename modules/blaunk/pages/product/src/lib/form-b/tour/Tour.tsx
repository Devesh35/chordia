'use client';

import { TimeRangePicker } from '@wojtekmaj/react-timerange-picker';
import { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import { Amenities } from '../../form/Amenities';
import AddGuestModal from './components/common/AddGuestModal';
import AddGuestTable from './components/common/AddGuestTable';
import ImageCropUploader from './components/common/ImageComponent';
import OfferDataTable from './components/common/OfferDataTable';
import OfferDetailsModal from './components/common/OfferDetailsModal';
import {
  cancellationTimeOptions,
  complimentaryOptions,
  currencyOptions,
  discountOptions,
  facilities,
  landmarkOptions,
  paymentOptions,
  plans,
  responseOptions,
  roomOptions,
  statusOptions,
  taxesAndLevies,
  tours,
  viewOptions,
} from './utils/constants';
import { GuestData, Item, OfferData } from './utils/interfaces';
import { PiCursorClick } from 'react-icons/pi';

type FormValues = {
  token: string;
  type: string;
  store: string;
  subscriptionDate: string;
  plan: string;
  renewalDate: string;
  roomType: string;
  viewType: string;
  fees: string;
  amount: string;
  phone: string;
  petAllowed: string;
  landmark: string;
  landmarkName: string;
  landmarkDistance: string;
  currencyExchange: string;
  paymentMode: string;
  language: string;
  voucherCode: string;
  rebate: string;
  toPay: string;
  name: string;
  pincode: string;
  city: string;
  country: string;
  facility: string;
  discountUpto: string;
  basketValue: string;
  freeDel: string;
  complimentary: string;
  cancelPolicy: string;
  status: string;
  customOrder: string;
  registeredShop: string;
  resTime: string;
  taxesLevies: string;
  gstInvoice: string;
  vatGst: string;
  receptionNo: string;
  email: string;
  timing: string;
  shopTimings: string;
  description: string;
  items: Item[];
  highlights: string[];
};

export function App() {
  const defaultValues: FormValues = {
    subscriptionDate: new Date()
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-'),
    token: '',
    type: 'subscription',
    amount: '',
    rebate: '',
    toPay: '',
    phone: '',
    name: '',
    pincode: '',
    items: Array(3).fill({
      addOnTitle: '',
      roomType: '',
      viewType: '',
      status: '',
      freeBreakfast: '',
      welcomeDrink: '',
      acRoom: '',
      nonAcRoom: '',
    }),
    store: '',
    plan: '',
    renewalDate: '',
    fees: '',
    voucherCode: '',
    roomType: '',
    viewType: '',
    language: '',
    petAllowed: '',
    landmark: '',
    landmarkName: '',
    landmarkDistance: '',
    currencyExchange: '',
    paymentMode: '',
    city: '',
    country: '',
    facility: '',
    discountUpto: '',
    basketValue: '',
    freeDel: '',
    complimentary: '',
    cancelPolicy: '',
    status: '',
    customOrder: '',
    registeredShop: '',
    resTime: '',
    taxesLevies: '',
    gstInvoice: '',
    vatGst: '',
    receptionNo: '',
    email: '',
    timing: '',
    highlights: [],
    shopTimings: '',
    description: '',
  };

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  });

  // const highlights = watch('highlights') || [];

  // const handleHighlightChange = (selectedHighlight: string) => {
  //   if (highlights.includes(selectedHighlight)) {
  //     setValue(
  //       'highlights',
  //       highlights.filter((item) => item !== selectedHighlight),
  //     );
  //   } else if (highlights.length < 8) {
  //     setValue('highlights', [...highlights, selectedHighlight]);
  //   } else {
  //     alert('You can only select up to 8 highlights.');
  //   }
  // };

  const { fields } = useFieldArray({
    control,
    name: 'items',
  });

  const [editable, setEditable] = useState<'edit' | 'save' | 'cancel' | 'default'>('default');

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [currentGuestRow, setCurrentGuestRow] = useState<(GuestData | undefined)[]>([undefined, undefined, undefined]);
  const [showGuestModal, setShowGuestModal] = useState<number>();

  const [currentOfferRow, setCurrentOfferRow] = useState<OfferData | undefined>(undefined);
  const [showOfferModal, setShowOfferModal] = useState(false);

  const handleShowOfferModal = () => setShowOfferModal(true);
  const handleCloseOfferModal = () => setShowOfferModal(false);

  const handleSaveOffer = (data: OfferData) => {
    setCurrentOfferRow({
      ...data,
      id: data.id++,
    });
    handleCloseOfferModal();
  };

  const selectedPlan = watch('plan');
  const voucherCode = watch('voucherCode');
  const selectedProduct = watch('store');

  useEffect(() => {
    const planDetails = plans.find((p) => p.value === selectedPlan);
    let fees = 500;
    if (selectedProduct) {
      if (['hotel', 'resort', 'studio'].includes(selectedProduct)) {
        fees = 1000;
      }
      setValue('fees', fees.toString());
    }

    console.log(' selectedProduct:', selectedProduct);

    if (planDetails) {
      const renewalDate = new Date();
      renewalDate.setFullYear(renewalDate.getFullYear() + (planDetails.duration.years ?? 0));
      renewalDate.setMonth(renewalDate.getMonth() + (planDetails.duration.months ?? 0));
      const formattedRenewalDate = renewalDate
        .toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '-');

      const totalAmount = Number(planDetails.value) + fees;

      setValue('renewalDate', formattedRenewalDate);
      setValue('amount', planDetails.value);

      console.log('fees:', fees);
      setValue('toPay', totalAmount.toString());
      setValue('rebate', '0');

      if (voucherCode !== 'BLAUNK100') {
        setValue('voucherCode', '');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan, selectedProduct]);

  const handleVoucherApply = () => {
    const amount = Number(watch('amount'));
    const fees = Number(watch('fees'));
    const totalAmount = amount + fees;
    if (voucherCode === 'BLAUNK100') {
      setValue('rebate', totalAmount.toString());
      setValue('toPay', '0');
    } else {
      setValue('rebate', '0');
      setValue('toPay', totalAmount.toString());
    }
  };

  const handleShowGuestModal = (id: number) => setShowGuestModal(id);
  const handleCloseGuestModal = () => setShowGuestModal(undefined);

  const handleSaveGuest = (id: number) => (data: GuestData) => {
    const guestData = [...currentGuestRow];
    guestData[id] = {
      ...data,
      id: data.id++,
    };
    setCurrentGuestRow(guestData);
    handleCloseGuestModal();
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Accordion defaultActiveKey="0" flush>
        {/* //!Subscription */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>TOUR SUBSCRIPTION</Accordion.Header>
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
                      style={{ backgroundColor: '#808836', border: 'none', cursor: 'pointer' }}
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
                      </Form.Select>
                    )}
                  />
                </Form.Group>
                <Form.Group as={Col} lg={2} md={4} sm={6} xs={12}>
                  <Form.Label>Product</Form.Label>
                  <Controller
                    name="store"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select Property</option>
                        {tours.map((store) => (
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
                  <Form.Label>Fees</Form.Label>
                  <Controller
                    name="fees"
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
                  <Form.Label>Name</Form.Label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Please enter a name' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        maxLength={40}
                        placeholder="max 40 characters..."
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Zip code/Pin-code</Form.Label>
                  <Controller
                    name="pincode"
                    control={control}
                    rules={{
                      required: 'Please enter your pin-code',
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
                  <Form.Label>Facility</Form.Label>
                  <Controller
                    name="facility"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select a facility</option>
                        {facilities.map((facility) => (
                          <option key={facility.value} value={facility.value}>
                            {facility.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.facility && <Form.Text className="text-danger">{errors.facility.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Discount Upto (%)</Form.Label>
                  <Controller
                    name="discountUpto"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select a discount value</option>
                        {discountOptions.map((discountUpto) => (
                          <option key={discountUpto.value} value={discountUpto.value}>
                            {discountUpto.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.discountUpto && <Form.Text className="text-danger">{errors.discountUpto.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Complimentary Gift</Form.Label>
                  <Controller
                    name="complimentary"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {complimentaryOptions.map((complimentary) => (
                          <option key={complimentary.value} value={complimentary.value}>
                            {complimentary.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.complimentary && (
                    <Form.Text className="text-danger">{errors.complimentary.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Cancellation Time </Form.Label>
                  <Controller
                    name="cancelPolicy"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {cancellationTimeOptions.map((cancelPolicy) => (
                          <option key={cancelPolicy.value} value={cancelPolicy.value}>
                            {cancelPolicy.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.cancelPolicy && <Form.Text className="text-danger">{errors.cancelPolicy.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={13}>
                  <Form.Label>Language Spoken</Form.Label>
                  <Controller
                    name="language"
                    control={control}
                    rules={{
                      required: 'Please enter a language',
                      validate: (value) => {
                        const languages = value
                          .split(',')
                          .map((lang) => lang.trim())
                          .filter((lang) => lang);
                        if (languages.length > 3) {
                          return 'You can only enter up to 3 languages.';
                        }
                        return true;
                      },
                    }}
                    render={({ field: { onChange, value } }) => {
                      const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
                        const commaCount = (value.match(/,/g) || []).length;

                        if (commaCount >= 2 && (e.key === ',' || e.key === ' ')) {
                          e.preventDefault();
                          alert('You can only enter up to 3 languages.');
                        } else if (e.key === ' ') {
                          e.preventDefault();
                          onChange(`${value}, `);
                        }
                      };

                      return (
                        <Form.Control
                          type="text"
                          value={value || ''}
                          onChange={(e) => onChange(e.target.value)}
                          onKeyDown={handleKeyPress}
                          placeholder="max 3 languages"
                        />
                      );
                    }}
                  />
                  {errors.language && <Form.Text className="text-danger">{errors.language.message}</Form.Text>}
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Response Time</Form.Label>
                  <Controller
                    name="resTime"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {responseOptions.map((resTime) => (
                          <option key={resTime.value} value={resTime.value}>
                            {resTime.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.resTime && <Form.Text className="text-danger">{errors.resTime.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Pay Mode</Form.Label>
                  <Controller
                    name="paymentMode"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {paymentOptions.map((paymentMode) => (
                          <option key={paymentMode.value} value={paymentMode.value}>
                            {paymentMode.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.paymentMode && <Form.Text className="text-danger">{errors.paymentMode.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Whatsapp Number</Form.Label>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => (
                      <PhoneInput
                        country={'in'}
                        value={field.value}
                        onChange={field.onChange}
                        inputProps={{
                          name: 'phone',
                          required: true,
                          autoFocus: true,
                        }}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Taxes & Levies</Form.Label>
                  <Controller
                    name="taxesLevies"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {taxesAndLevies.map((taxesLevies) => (
                          <option key={taxesLevies.value} value={taxesLevies.value}>
                            {taxesLevies.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.taxesLevies && <Form.Text className="text-danger">{errors.taxesLevies.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Currency Exchange</Form.Label>
                  <Controller
                    name="currencyExchange"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {currencyOptions.map((currencyExchange) => (
                          <option key={currencyExchange.value} value={currencyExchange.value}>
                            {currencyExchange.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.currencyExchange && (
                    <Form.Text className="text-danger">{errors.currencyExchange.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>GST/VAT/TAX Invoice</Form.Label>
                  <Controller
                    name="gstInvoice"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        <option value="available">Available</option>
                        <option value="notAvailable">Not Available</option>
                        <option value="inform">Inform @ billing desk</option>
                      </Form.Select>
                    )}
                  />
                  {errors.gstInvoice && <Form.Text className="text-danger">{errors.gstInvoice.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Landmark</Form.Label>
                  <Controller
                    name="landmark"
                    control={control}
                    rules={{ required: 'Please select a landmark' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select a landmark</option>
                        {landmarkOptions.map((landmark) => (
                          <option key={landmark.value} value={landmark.value}>
                            {landmark.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.landmark && <Form.Text className="text-danger">{errors.landmark.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Landmark Name with Km</Form.Label>
                  <Row className="g-0">
                    <Col xs={8}>
                      <Controller
                        name="landmarkName"
                        control={control}
                        rules={{
                          required: 'Please enter a landmark',
                        }}
                        render={({ field }) => (
                          <Form.Control
                            type="text"
                            {...field}
                            placeholder="Landmark Name"
                            disabled={['save', 'edit'].includes(editable)}
                          />
                        )}
                      />
                    </Col>
                    <Col xs={4}>
                      <Controller
                        name="landmarkDistance"
                        control={control}
                        rules={{
                          required: 'Please enter the distance',
                        }}
                        render={({ field }) => (
                          <Form.Control
                            type="text"
                            maxLength={4}
                            {...field}
                            placeholder="Km"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                              e.target.value = e.target.value.replace(/\D/g, '');
                            }}
                            disabled={['save', 'edit'].includes(editable)}
                          />
                        )}
                      />
                    </Col>
                  </Row>
                  {errors.landmarkName && <Form.Text className="text-danger">{errors.landmarkName.message}</Form.Text>}
                  {errors.landmarkDistance && (
                    <Form.Text className="text-danger">{errors.landmarkDistance.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Pet Allowed</Form.Label>
                  <Controller
                    name="petAllowed"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Form.Select>
                    )}
                  />
                  {errors.gstInvoice && <Form.Text className="text-danger">{errors.gstInvoice.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>VAT/GST No.</Form.Label>
                  <Controller
                    name="vatGst"
                    control={control}
                    rules={{
                      required: 'Please enter your VAT/GST number',
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        maxLength={17}
                        {...field}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.target.value = e.target.value.toUpperCase();
                        }}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.vatGst && <Form.Text className="text-danger">{errors.vatGst.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Reception No.</Form.Label>
                  <Controller
                    name="receptionNo"
                    control={control}
                    rules={{
                      required: 'Please enter your VAT/GST number',
                    }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        maxLength={15}
                        {...field}
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                          e.target.value = e.target.value.toUpperCase();
                        }}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.vatGst && <Form.Text className="text-danger">{errors.vatGst.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Cus Care Email</Form.Label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: 'Please enter your email',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    }}
                    render={({ field }) => (
                      <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Timing</Form.Label>
                  <Controller
                    name="timing"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        <option value="flexible">Flexible</option>
                        <option value="no">Fixed timings</option>
                      </Form.Select>
                    )}
                  />
                  {errors.timing && <Form.Text className="text-danger">{errors.timing.message}</Form.Text>}
                </Form.Group>
                {watch('timing') === 'no' && (
                  <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                    <Form.Label className="mb-1 mr-2">Check-In/Out Timing</Form.Label>
                    <Controller
                      name="shopTimings"
                      control={control}
                      rules={{
                        required: 'Please select shop timings',
                      }}
                      render={({ field }) => (
                        <TimeRangePicker
                          {...field}
                          disableClock
                          onChange={(value) => field.onChange(value)}
                          disabled={['save', 'edit'].includes(editable)}
                        />
                      )}
                    />
                    {errors.shopTimings && <Form.Text className="text-danger">{errors.shopTimings.message}</Form.Text>}
                  </Form.Group>
                )}
              </Row>
              <Row>
                <Form.Group as={Col} lg={6} md={8} sm={12} xs={12} className="mt-4">
                  <Form.Label>Description</Form.Label>
                  <Controller
                    name="description"
                    control={control}
                    rules={{ required: 'Please enter a description' }}
                    render={({ field }) => (
                      <Form.Control
                        as="textarea"
                        rows={7}
                        {...field}
                        style={{ resize: 'none' }}
                        maxLength={1100}
                        placeholder="Type here... (max 1100 characters)"
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.description && <Form.Text className="text-danger">{errors.description.message}</Form.Text>}
                </Form.Group>
              </Row>
              <Row>
                <Col lg={6} md={12} sm={12} xs={12}>
                  <Row>
                    <Col className="d-flex align-items-center">
                      <Form.Label>Add Offer</Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end mb-1">
                      <Button
                        variant="primary"
                        className="mt-2"
                        size="sm"
                        onClick={handleShowOfferModal}
                        disabled={editable === 'save'}
                      >
                        Add New
                      </Button>
                    </Col>
                  </Row>

                  <OfferDataTable addRow={currentOfferRow} editable={editable} />

                  <OfferDetailsModal
                    show={showOfferModal}
                    handleClose={handleCloseOfferModal}
                    handleSave={handleSaveOffer}
                  />
                </Col>
              </Row>
              <Row>
                <Row>
                  <Form.Label className="mt-4">Hotel Images</Form.Label>
                  {Array.from({ length: 6 }, (_, index) => (
                    <Col key={index} lg={2} md={3} sm={6} xs={6} className="mt-2">
                      <ImageCropUploader editable={editable} setEditable={setEditable} />
                    </Col>
                  ))}
                </Row>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add On Rooms */}
        <AddGuestModal
          show={showGuestModal !== undefined}
          handleClose={handleCloseGuestModal}
          handleSave={handleSaveGuest(showGuestModal ?? 0)}
        />
        <Accordion.Item eventKey="2">
          <Accordion.Header>ADD ON ROOMS</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Row className="justify-content-center">
                  {fields.map((field, index) => (
                    <Col key={field.id} lg={4} md={6} sm={12} xs={12}>
                      <Card style={{ padding: 20 }}>
                        <Form.Group>
                          <Form.Select
                            size="sm"
                            {...register(`items.${index}.roomType`)}
                            disabled={editable === 'save'}
                            style={{ width: '100%' }}
                          >
                            <option value="">Select room type</option>
                            {roomOptions.map((roomType) => (
                              <option key={roomType.value} value={roomType.value}>
                                {roomType.label}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                        <Col className="d-flex justify-content-end mb-1">
                          <Button
                            variant="primary"
                            onClick={() => handleShowGuestModal(index)}
                            className="mt-2"
                            size="sm"
                            disabled={editable === 'save'}
                          >
                            Add Guest
                          </Button>
                        </Col>
                        <AddGuestTable addRow={currentGuestRow[index]} editable={editable} />
                        <Row>
                          {Array.from({ length: 4 }, (_, index) => (
                            <Col key={index} lg={6} md={6} sm={6} xs={6} className="mt-2 d-flex justify-content-center">
                              <ImageCropUploader editable={editable} setEditable={setEditable} />
                            </Col>
                          ))}
                        </Row>

                        <Form.Group className="mt-3">
                          <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Title"
                            maxLength={45}
                            {...register(`items.${index}.addOnTitle`)}
                            disabled={['save', 'edit'].includes(editable)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Select
                            size="sm"
                            {...register(`items.${index}.viewType`)}
                            style={{ width: '100%' }}
                            className="mt-3"
                            disabled={['save', 'edit'].includes(editable)}
                          >
                            <option value="">Select view</option>
                            {viewOptions.map((viewType) => (
                              <option key={viewType.value} value={viewType.value}>
                                {viewType.label}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group>
                          <Form.Select
                            size="sm"
                            {...register(`items.${index}.status`)}
                            disabled={editable === 'save'}
                            style={{ width: '100%' }}
                            className="mt-3"
                          >
                            <option value="">Select status</option>
                            {statusOptions.map((status) => (
                              <option key={status.value} value={status.value}>
                                {status.label}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                        <Row className="mt-3">
                          <Col md={6}>
                            <Controller
                              name={`items.${index}.freeBreakfast`}
                              control={control}
                              render={({ field }) => (
                                <Form.Check
                                  type="checkbox"
                                  label="Free Breakfast"
                                  checked={field.value || false}
                                  onChange={(e) => field.onChange(e.target.checked)}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                  disabled={['save', 'edit'].includes(editable)}
                                />
                              )}
                            />
                          </Col>
                          <Col md={6}>
                            <Controller
                              name={`items.${index}.welcomeDrink`}
                              control={control}
                              render={({ field }) => (
                                <Form.Check
                                  type="checkbox"
                                  label="Welcome Drink"
                                  checked={field.value || false}
                                  onChange={(e) => field.onChange(e.target.checked)}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                  disabled={['save', 'edit'].includes(editable)}
                                />
                              )}
                            />
                          </Col>
                          <Col md={6}>
                            <Controller
                              name={`items.${index}.acRoom`}
                              control={control}
                              render={({ field }) => (
                                <Form.Check
                                  type="checkbox"
                                  label="AC Room"
                                  checked={field.value || false}
                                  disabled={watch(`items.${index}.nonAcRoom`) || ['save', 'edit'].includes(editable)}
                                  onChange={(e) => field.onChange(e.target.checked)}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              )}
                            />
                          </Col>
                          <Col md={6}>
                            <Controller
                              name={`items.${index}.nonAcRoom`}
                              control={control}
                              render={({ field }) => (
                                <Form.Check
                                  type="checkbox"
                                  label="Non-AC Room"
                                  checked={field.value || false}
                                  disabled={watch(`items.${index}.acRoom`) || ['save', 'edit'].includes(editable)}
                                  onChange={(e) => field.onChange(e.target.checked)}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              )}
                            />
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add Availability */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>ADD AVAILABILITY</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        {/* //!Add Highlights */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>ADD HIGHLIGHTS</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Amenities />
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Disclaimer */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>DISCLAIMER</Accordion.Header>
          <Accordion.Body>
            <p className="disclaimer-text">
              We agree with Terms & Condition of B2B Blaunk Trade. Free Returns and Refund if Buyer is not satisfied
              with goods received and found vary or different from product image. This post will be valid as per Plan
              selected and get auto deleted. Return policy is only valid if vendor failed to supply promised articles.
            </p>
            <p className="disclaimer-text">
              Blaunk will not be held liable for any legal or claiming, as this is only an Online platform for secure
              trade between vendors & Customer.
            </p>
            <p className="disclaimer-text">
              Seller Profile or Product Listing will be Blocked or Delist, if found continuous Cancel/Non Supply of
              Goods or Services or any fraudulent activity got noted.
            </p>
            <p className="disclaimer-text">
              Listing fees is Non - Refundable and Inclusive of all Govt Levies & Taxes.
            </p>
            <p className="disclaimer-text">
              If seller get reported for twice, Sellers' profile/listing/advertisement will be suspended for 2 months.
            </p>
            <p className="disclaimer-text">
              If Seller get reported for more than 2 times, Sellers' profile/listing/advertisement will be blocked
              permanently.
            </p>
            <p className="disclaimer-text">
              Report an issue : If customer reports for any issue related service against the seller, will have to
              resolve immediately. Any delay in response will not be entertained and Vendor will be suspended. Any
              report on issue regarding Quality, Money fraud, Seller ID Will be blocked immediately.
            </p>
            <p className="disclaimer-text">
              <Form.Check
                className="checkbox"
                onChange={(e) => setTermsAccepted(e.target.checked)}
                disabled={['save', 'edit'].includes(editable)}
              />
              I have read and agree to all the terms and condition of B2B Blaunk trade policy.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* //!Buttons */}
      <Container className="text-center mt-4 mb-4">
        <Button
          variant="danger"
          className="mx-2"
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
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
                // eslint-disable-next-line no-restricted-globals
                const confirmSave = confirm(
                  'Once Product details are saved, cannot be edited except Guest and Offer. Are you sure you want to save?',
                );
                if (confirmSave) {
                  setEditable('save');
                }
              } else if (!termsAccepted) {
                alert('Please accept the terms and conditions before saving!');
              }
            },
            () => {
              alert('Please fill all required fields before saving!');
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
    </Form>
  );
}

export default App;
