/* eslint-disable no-restricted-globals */
'use client';

import { TimeRangePicker } from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import ReactFlagsSelect from 'react-flags-select';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import ImageCropUploader from './components/common/ImageComponent';
import OfferDataTable from './components/common/OfferDataTable';
import OfferDetailsModal from './components/common/OfferDetailsModal';
import {
  cancellationTimeOptions,
  complimentaryOptions,
  deliveryByOptions,
  dispatchTimeOptions,
  distanceOptions,
  plans,
  responseOptions,
  statusOptions,
  stores,
} from './utils/constants';
import { Item, OfferData } from './utils/interfaces';

type FormValues = {
  type: string;
  store: string;
  subscriptionDate: string;
  plan: string;
  renewalDate: string;
  amount: string;
  voucherCode: string;
  rebate: string;
  toPay: string;
  shopName: string;
  pincode: string;
  city: string;
  country: string;
  deliveryArea: string;
  deliveryBy: string;
  deliveryByOther: string;
  deliveryCharges: string;
  basketValue: string;
  freeDel: string;
  complimentary: string;
  cancelPolicy: string;
  status: string;
  customOrder: string;
  registeredShop: string;
  resTime: string;
  dispatchTime: string;
  gstInvoice: string;
  vatGst: string;
  email: string;
  shopTimings: string;
  description: string;
  items: Item[];
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
    type: 'subscription',
    amount: '',
    rebate: '',
    toPay: '',
    shopName: '',
    pincode: '',
    items: Array(15).fill({
      addOnTitle: '',
      mrp: '',
      sellingPrice: '',
      weightUnits: '',
      availability: '',
    }),
    store: '',
    plan: '',
    renewalDate: '',
    voucherCode: '',
    city: '',
    country: '',
    deliveryArea: '',
    deliveryBy: '',
    deliveryByOther: '',
    deliveryCharges: '',
    basketValue: '',
    freeDel: '',
    complimentary: '',
    cancelPolicy: '',
    status: '',
    customOrder: '',
    registeredShop: '',
    resTime: '',
    dispatchTime: '',
    gstInvoice: '',
    vatGst: '',
    email: '',
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

  const { fields } = useFieldArray({
    control,
    name: 'items',
  });

  const [editable, setEditable] = useState<'edit' | 'save' | 'cancel' | 'default'>('default');

  const [termsAccepted, setTermsAccepted] = useState(false);

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

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;

  // const currentItems = fields.slice(
  //   (currentPage - 1) * itemsPerPage,
  //   currentPage * itemsPerPage
  // );

  // const totalPages = Math.ceil(fields.length / itemsPerPage);

  const selectedPlan = watch('plan');
  const voucherCode = watch('voucherCode');

  useEffect(() => {
    const planDetails = plans.find((p) => p.value === selectedPlan);
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
          <Accordion.Header>STORE SUBSCRIPTION</Accordion.Header>
          <Accordion.Body>
            <Container>
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
                  <Form.Label>Shop Name</Form.Label>
                  <Controller
                    name="shopName"
                    control={control}
                    rules={{ required: 'Please enter shop name' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        maxLength={30}
                        placeholder="max 30 characters..."
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.shopName && <Form.Text className="text-danger">{errors.shopName.message}</Form.Text>}
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
                  <Form.Label>Delivery Area</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaMapMarkerAlt />
                    </InputGroup.Text>
                    <Controller
                      name="deliveryArea"
                      control={control}
                      rules={{ required: 'Please enter a delivery area' }}
                      render={({ field }) => (
                        <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                      )}
                    />
                  </InputGroup>
                  {errors.deliveryArea && <Form.Text className="text-danger">{errors.deliveryArea.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Delivery By</Form.Label>
                  <Controller
                    name="deliveryBy"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select delivery by</option>
                        {deliveryByOptions.map((deliveryBy) => (
                          <option key={deliveryBy.value} value={deliveryBy.value}>
                            {deliveryBy.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.deliveryBy && <Form.Text className="text-danger">{errors.deliveryBy.message}</Form.Text>}
                </Form.Group>
                {watch('deliveryBy') === 'other' && (
                  <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                    <Form.Label>Please specify:</Form.Label>
                    <Form.Control
                      type="text"
                      {...register('deliveryByOther', {
                        required: 'Please specify the delivery option',
                      })}
                      placeholder="Enter other delivery option"
                    />
                    {errors.deliveryByOther && (
                      <Form.Text className="text-danger">{errors.deliveryByOther.message}</Form.Text>
                    )}
                  </Form.Group>
                )}
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Delivery Charges</Form.Label>
                  <Controller
                    name="deliveryCharges"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        <option value="free">Free</option>
                        <option value="applicable">Applicable</option>
                      </Form.Select>
                    )}
                  />
                  {errors.deliveryCharges && (
                    <Form.Text className="text-danger">{errors.deliveryCharges.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Min. Basket Value</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <BsCurrencyDollar />
                    </InputGroup.Text>
                    <Controller
                      name="basketValue"
                      control={control}
                      rules={{
                        required: 'Please enter a minimum basket value ',
                      }}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          {...field}
                          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                            e.target.value = e.target.value.replace(/\D/g, '');
                          }}
                          disabled={['save', 'edit'].includes(editable)}
                        />
                      )}
                    />
                  </InputGroup>
                  {errors.basketValue && <Form.Text className="text-danger">{errors.basketValue.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Free Delivery Upto</Form.Label>
                  <Controller
                    name="freeDel"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {distanceOptions.map((freeDel) => (
                          <option key={freeDel.value} value={freeDel.value}>
                            {freeDel.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.freeDel && <Form.Text className="text-danger">{errors.freeDel.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Complimentary </Form.Label>
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
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Status </Form.Label>
                  <Controller
                    name="status"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {statusOptions.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.status && <Form.Text className="text-danger">{errors.status.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Customized Party Order</Form.Label>
                  <Controller
                    name="customOrder"
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
                  {errors.customOrder && <Form.Text className="text-danger">{errors.customOrder.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Govt. Registered Shop</Form.Label>
                  <Controller
                    name="registeredShop"
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
                  {errors.registeredShop && (
                    <Form.Text className="text-danger">{errors.registeredShop.message}</Form.Text>
                  )}
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
                  <Form.Label>Dispatch Time</Form.Label>
                  <Controller
                    name="dispatchTime"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        {dispatchTimeOptions.map((dispatchTime) => (
                          <option key={dispatchTime.value} value={dispatchTime.value}>
                            {dispatchTime.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.dispatchTime && <Form.Text className="text-danger">{errors.dispatchTime.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>VAT/GST Invoice</Form.Label>
                  <Controller
                    name="gstInvoice"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field} disabled={['save', 'edit'].includes(editable)}>
                        <option value="">Select an option</option>
                        <option value="available">Available</option>
                        <option value="notAvailable">Not Available</option>
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
                        maxLength={20}
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
                  <Form.Label className="mb-1 mr-2">Shop Timings</Form.Label>
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
                        maxLength={400}
                        placeholder="Type here... (max 400 characters)"
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
                  <Form.Label className="mt-4">Store Image</Form.Label>
                  {Array.from({ length: 3 }, (_, index) => (
                    <Col key={index} lg={2} md={3} sm={6} xs={6} className="mt-2">
                      <ImageCropUploader editable={editable} setEditable={setEditable} />
                    </Col>
                  ))}
                </Row>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add On */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>ADD ON</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Row className="justify-content-center">
                  {fields.map((field, index) => (
                    <Col key={field.id} lg={2} md={4} sm={6} xs={6}>
                      <ImageCropUploader editable={editable} setEditable={setEditable} />
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="add-on-box" style={{ width: '100%' }}>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              size="sm"
                              placeholder="Title"
                              maxLength={45}
                              {...register(`items.${index}.addOnTitle`)}
                              disabled={['save', 'edit'].includes(editable)}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              size="sm"
                              placeholder="MRP"
                              disabled={editable === 'save'}
                              {...register(`items.${index}.mrp`, {
                                pattern: /^[0-9]*$/,
                                onChange: (e) => {
                                  const value = e.target.value.replace(/\D/g, '');
                                  setValue(`items.${index}.mrp`, value);
                                },
                              })}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              size="sm"
                              placeholder="Selling Price"
                              disabled={editable === 'save'}
                              {...register(`items.${index}.sellingPrice`, {
                                pattern: /^[0-9]*$/,
                                onChange: (e) => {
                                  const value = e.target.value.replace(/\D/g, '');
                                  const mrp = watch(`items.${index}.mrp`);
                                  if (parseFloat(value) > parseFloat(mrp)) {
                                    alert('Selling Price cannot exceed MRP.');
                                    return;
                                  }
                                  setValue(`items.${index}.sellingPrice`, value);
                                },
                              })}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              size="sm"
                              placeholder="Wt./Units"
                              {...register(`items.${index}.weightUnits`)}
                              disabled={['save', 'edit'].includes(editable)}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Select
                              size="sm"
                              {...register(`items.${index}.availability`)}
                              disabled={editable === 'save'}
                            >
                              <option value="" disabled>
                                Availability
                              </option>
                              <option value="soldOut">Sold Out</option>
                              <option value="fewLeft">Few Left</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
                {/* Pagination Controls */}
                {/* <Row className="justify-content-center mt-3 d-flex align-items-center">
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className="mx-1 w-auto px-3"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className="mx-1 w-auto px-3"
                  >
                    Next
                  </Button>
                </Row> */}
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Disclaimer */}
        <Accordion.Item eventKey="3">
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
              <Form.Check className="checkbox" onChange={(e) => setTermsAccepted(e.target.checked)} />I have read and
              agree to all the terms and condition of B2B Blaunk trade policy.
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
              // If there are errors in the form
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
    </Form>
  );
}

export default App;
