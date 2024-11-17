/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
'use client';

import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactFlagsSelect from 'react-flags-select';
import { Controller, useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { PiCursorClick } from 'react-icons/pi';
import { SizeTable } from '../../form/SizeTable';
import ImageCropUploader from './components/common/ImageComponent';
import OfferDataTable from './components/common/OfferDataTable';
import OfferDetailsModal from './components/common/OfferDetailsModal';
import PriceDataTable from './components/common/PriceDataTable';
import PriceDetailsModal from './components/common/PriceDetailsModal';
import ProductImageCropper from './components/common/ProductImageCropper/ProductImageCropper';
import {
  cancellationOptions,
  groupOptions,
  packagingOptions,
  paymentOptions,
  plans,
  productConditionOptions,
  productionOptions,
  sampleOptions,
  typeOptions,
  unitOptions,
  unitOptionsWeight,
} from './utils/constants';
import { Item, OfferData, RowData } from './utils/interfaces';

type FormValues = {
  token: string;
  product: string;
  subscriptionDate: string;
  plan: string;
  renewalDate: string;
  amount: string;
  voucherCode: string;
  rebate: string;
  toPay: string;
  title: string;
  city: string;
  country: string;
  listingDate: string;
  sample: string;
  contents: string;
  group: string;
  article: string;
  otherArticle: string;
  brand: string;
  type: string;
  planAction: string;
  material: string;
  warranty: string;
  vatGst: string;
  productCode: string;
  expiryDate: Date;
  cancellation: string;
  condition: string;
  productOrigin: string;
  productWeight: string;
  shipmentWeight: string;
  dimensions: string;
  colourPrints: string;
  qc: string;
  minOrderQuantity: string;
  unit: string;
  hsn: string;
  supplyPlace: string;
  production: string;
  consumable: string;
  packaging: string;
  paymentTerms: string;
  negotiable: string;
  sizeColour: string;
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
    token: '',
    product: '',
    amount: '',
    rebate: '',
    toPay: '',
    title: '',
    items: Array(15).fill({
      addOnTitle: '',
      mrp: '',
      sellingPrice: '',
      weightUnits: '',
      availability: '',
    }),
    plan: '',
    renewalDate: '',
    city: '',
    voucherCode: '',
    country: '',
    listingDate: new Date()
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\//g, '-'),
    sample: '',
    contents: '',
    group: '',
    article: '',
    otherArticle: '',
    brand: '',
    type: '',
    planAction: '',
    material: '',
    warranty: '',
    vatGst: '',
    productCode: '',
    expiryDate: new Date(),
    cancellation: '',
    condition: '',
    productOrigin: '',
    productWeight: '',
    shipmentWeight: '',
    dimensions: '',
    colourPrints: '',
    qc: '',
    minOrderQuantity: '',
    unit: '',
    hsn: '',
    supplyPlace: '',
    consumable: '',
    packaging: '',
    paymentTerms: '',
    negotiable: '',
    sizeColour: '',
    production: '',
    description: '',
  };

  const {
    control,
    handleSubmit,
    watch,
    register,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    defaultValues: defaultValues,
  });

  const selectedGroup = watch('group');
  const articles = groupOptions.find((group) => group.value === selectedGroup)?.options || [];

  const [editable, setEditable] = useState<'edit' | 'save' | 'cancel' | 'default'>('default');

  const [startDate, setStartDate] = useState<Date | null>(null);
  console.log(startDate);

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [currentPriceRow, setCurrentPriceRow] = useState<RowData | undefined>(undefined);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const [currentOfferRow, setCurrentOfferRow] = useState<OfferData | undefined>(undefined);
  const [showOfferModal, setShowOfferModal] = useState(false);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const labels = ['Company Images', 'Product Images'];

  const handleShowPriceModal = () => setShowPriceModal(true);
  const handleClosePriceModal = () => setShowPriceModal(false);

  const handleCloseOfferModal = () => setShowOfferModal(false);

  const handleShowOfferModal = () => {
    if (!isButtonClicked) {
      setShowOfferModal(true);
      setIsButtonClicked(true);
    }
  };

  const handleRowDeleted = () => {
    setIsButtonClicked(false);
  };

  const handleSavePrice = (data: RowData) => {
    setCurrentPriceRow({
      ...data,
      id: data.id++,
    });
    handleClosePriceModal();
  };

  const handleSaveOffer = (data: OfferData) => {
    setCurrentOfferRow({
      ...data,
      id: data.id++,
    });
    handleCloseOfferModal();
  };

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

  const handleVatGstChange = (value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    setValue('vatGst', numericValue ? `${numericValue}%` : '');
  };

  const handleDimensionChange = (value: string) => {
    const digits = value.replace(/\D/g, '');

    const part1 = digits.slice(0, 5);
    const part2 = digits.slice(5, 10);
    const part3 = digits.slice(10, 15);

    let formatted = '';
    if (part1.length > 0) {
      formatted += part1.length > 3 ? `${part1.slice(0, 3)}.${part1.slice(3)}` : part1;
    }
    if (part2.length > 0) {
      formatted += `x${part2.length > 3 ? `${part2.slice(0, 3)}.${part2.slice(3)}` : part2}`;
    }
    if (part3.length > 0) {
      formatted += `x${part3.length > 3 ? `${part3.slice(0, 3)}.${part3.slice(3)}` : part3}`;
    }

    return formatted;
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Accordion defaultActiveKey="0" flush>
        {/* //!Subscription */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>BUSINESS SUBSCRIPTION</Accordion.Header>
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
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Select Type</Form.Label>
                  <Controller
                    name="planAction"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="subscription">Subscription </option>
                        <option value="renewal">Renewal </option>
                      </Form.Select>
                    )}
                  />
                  {errors.planAction && <Form.Text className="text-danger">{errors.planAction.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Product</Form.Label>
                  <Controller
                    name="product"
                    control={control}
                    render={({ field }) => (
                      <Form.Control type="text" {...field} placeholder="BLAUNK GLOBAL TRADE - B2B" disabled />
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Subscription Date</Form.Label>
                  <Controller
                    name="subscriptionDate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
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

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Renewal Date</Form.Label>
                  <Controller
                    name="renewalDate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Amount</Form.Label>
                  <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
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
                          maxLength={14}
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

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Rebate</Form.Label>
                  <Controller
                    name="rebate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
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
                  <Form.Label>Title</Form.Label>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: 'Please enter a value' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        maxLength={115}
                        placeholder="max 115 characters..."
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.title && <Form.Text className="text-danger">{errors.title.message}</Form.Text>}
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
                  <Form.Label>Product Listing Date</Form.Label>
                  <Controller
                    name="listingDate"
                    control={control}
                    render={({ field }) => <Form.Control type="text" {...field} readOnly />}
                  />
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Group</Form.Label>
                  <Controller
                    name="group"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a group option</option>
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
                {selectedGroup && (
                  <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                    <Form.Label>Article</Form.Label>
                    <Controller
                      name="article"
                      control={control}
                      rules={{ required: 'Please select an article' }}
                      render={({ field }) => (
                        <Form.Select {...field}>
                          <option value="">Select an article</option>
                          {articles.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </Form.Select>
                      )}
                    />
                    {errors.article && <Form.Text className="text-danger">{errors.article.message}</Form.Text>}
                  </Form.Group>
                )}
                {watch('article') === 'others' && (
                  <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                    <Form.Label>Others</Form.Label>
                    <Controller
                      name="otherArticle"
                      control={control}
                      rules={{ required: 'Please enter a otherArticle' }}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          {...field}
                          disabled={['save', 'edit'].includes(editable)}
                          maxLength={25}
                          placeholder="max 25 characters..."
                        />
                      )}
                    />
                    {errors.otherArticle && (
                      <Form.Text className="text-danger">{errors.otherArticle.message}</Form.Text>
                    )}
                  </Form.Group>
                )}
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Brand</Form.Label>
                  <Controller
                    name="brand"
                    control={control}
                    rules={{ required: 'Please enter a brand name' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        disabled={['save', 'edit'].includes(editable)}
                        maxLength={25}
                        placeholder="max 25 characters..."
                      />
                    )}
                  />
                  {errors.brand && <Form.Text className="text-danger">{errors.brand.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Type</Form.Label>
                  <Controller
                    name="type"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a type </option>
                        {typeOptions.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.type && <Form.Text className="text-danger">{errors.type.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Material</Form.Label>
                  <Controller
                    name="material"
                    control={control}
                    rules={{ required: 'Please enter a material name' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        disabled={['save', 'edit'].includes(editable)}
                        maxLength={25}
                        placeholder="max 25 characters..."
                      />
                    )}
                  />
                  {errors.material && <Form.Text className="text-danger">{errors.material.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Warranty</Form.Label>
                  <Controller
                    name="warranty"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option</option>
                        <option value="yes">Yes </option>
                        <option value="no">No </option>
                      </Form.Select>
                    )}
                  />
                  {errors.warranty && <Form.Text className="text-danger">{errors.warranty.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>VAT/GST - Tax Rate</Form.Label>
                  <Controller
                    name="vatGst"
                    control={control}
                    rules={{ required: 'Please enter a VAT/GST rate' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => handleVatGstChange(e.target.value)}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.vatGst && <Form.Text className="text-danger">{errors.vatGst.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Product Code</Form.Label>
                  <Controller
                    name="productCode"
                    control={control}
                    rules={{ required: 'Please enter a productCode name' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        disabled={['save', 'edit'].includes(editable)}
                        maxLength={20}
                        onChange={(e) => {
                          const uppercaseInput = e.target.value.toUpperCase();
                          field.onChange(uppercaseInput);
                        }}
                      />
                    )}
                  />
                  {errors.productCode && <Form.Text className="text-danger">{errors.productCode.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Product Expiry Date</Form.Label>
                  <Controller
                    name="expiryDate"
                    control={control}
                    rules={{ required: 'Please enter a date' }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date: Date | null) => {
                          setStartDate(date);
                          field.onChange(date);
                        }}
                        dateFormat="dd-MM-yyyy"
                        className="form-control"
                        placeholderText="Select a date"
                      />
                    )}
                  />
                  {errors.expiryDate && <Form.Text className="text-danger">{errors.expiryDate.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Product Origin</Form.Label>
                  <Controller
                    name="productOrigin"
                    control={control}
                    rules={{ required: 'Please enter a productOrigin name' }}
                    render={({ field }) => (
                      <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.productOrigin && (
                    <Form.Text className="text-danger">{errors.productOrigin.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Product Weight</Form.Label>
                  <Row className="g-0">
                    <Col xs={6}>
                      <Controller
                        name="productWeight"
                        control={control}
                        rules={{
                          required: 'Please enter weight',
                        }}
                        render={({ field }) => (
                          <Form.Control
                            type="text"
                            {...field}
                            placeholder="Enter weight"
                            disabled={['save', 'edit'].includes(editable)}
                            inputMode="numeric"
                            onChange={(e) => {
                              const numericValue = e.target.value.replace(/[^0-9]/g, '');
                              field.onChange(numericValue);
                            }}
                          />
                        )}
                      />
                    </Col>
                    <Col xs={6}>
                      <Controller
                        name="unit"
                        control={control}
                        rules={{
                          required: 'Unit is required',
                        }}
                        render={({ field }) => (
                          <Form.Select {...field}>
                            <option value="">Unit</option>
                            {unitOptionsWeight.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Form.Select>
                        )}
                      />
                    </Col>
                  </Row>

                  {errors.productWeight && (
                    <Form.Text className="text-danger">{errors.productWeight.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Shipment Weight (Nett wt.)</Form.Label>
                  <Controller
                    name="shipmentWeight"
                    control={control}
                    rules={{ required: 'Please enter weight' }}
                    render={({ field }) => (
                      <Form.Control type="text" {...field} disabled={['save', 'edit'].includes(editable)} />
                    )}
                  />
                  {errors.shipmentWeight && (
                    <Form.Text className="text-danger">{errors.shipmentWeight.message}</Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Dimensions (L x B x H) cms</Form.Label>
                  <Controller
                    name="dimensions"
                    control={control}
                    rules={{ required: 'Please enter dimensions' }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        value={value}
                        placeholder="000.00 x 000.00 x 000.00"
                        onChange={(e) => {
                          const formattedValue = handleDimensionChange(e.target.value);
                          onChange(formattedValue);
                        }}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    )}
                  />
                  {errors.dimensions && <Form.Text className="text-danger">{errors.dimensions.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>No. of Colors/ Prints</Form.Label>
                  <Controller
                    name="colourPrints"
                    control={control}
                    rules={{ required: 'Please enter a value' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        disabled={['save', 'edit'].includes(editable)}
                        maxLength={5}
                        onChange={(e) => {
                          const numericInput = e.target.value.replace(/[^0-9]/g, '');
                          field.onChange(numericInput);
                        }}
                      />
                    )}
                  />
                  {errors.colourPrints && <Form.Text className="text-danger">{errors.colourPrints.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Product Condition</Form.Label>
                  <Controller
                    name="condition"
                    control={control}
                    rules={{ required: 'Please product condition' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a condition</option>
                        {productConditionOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.condition && <Form.Text className="text-danger">{errors.condition.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Quality Check</Form.Label>
                  <Controller
                    name="qc"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option</option>
                        <option value="factoryCheck">Factory Check</option>
                        <option value="notAllowed">Not Allowed</option>
                        <option value="thirdPartyQC">Third Party QC</option>
                      </Form.Select>
                    )}
                  />
                  {errors.qc && <Form.Text className="text-danger">{errors.qc.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Minimum Order Quantity (MOQ)</Form.Label>
                  <Row className="g-0">
                    <Col xs={6}>
                      <Controller
                        name="minOrderQuantity"
                        control={control}
                        rules={{
                          required: 'Please enter an order quantity',
                        }}
                        render={({ field }) => (
                          <Form.Control
                            type="text"
                            {...field}
                            placeholder="min order quantity"
                            disabled={['save', 'edit'].includes(editable)}
                            inputMode="numeric"
                            onChange={(e) => {
                              const numericValue = e.target.value.replace(/[^0-9]/g, '');
                              field.onChange(numericValue);
                            }}
                          />
                        )}
                      />
                    </Col>
                    <Col xs={6}>
                      <Controller
                        name="unit"
                        control={control}
                        rules={{
                          required: 'Unit is required',
                        }}
                        render={({ field }) => (
                          <Form.Select {...field}>
                            <option value="">Unit</option>
                            {unitOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Form.Select>
                        )}
                      />
                    </Col>
                  </Row>
                  {errors.minOrderQuantity && (
                    <Form.Text className="text-danger">{errors.minOrderQuantity.message}</Form.Text>
                  )}
                  {errors.unit && <Form.Text className="text-danger">{errors.unit.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>HSN Code</Form.Label>
                  <Controller
                    name="hsn"
                    control={control}
                    rules={{ required: 'Please enter a value' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        disabled={['save', 'edit'].includes(editable)}
                        maxLength={8}
                        onChange={(e) => {
                          const numericInput = e.target.value.replace(/[^0-9]/g, '');
                          field.onChange(numericInput);
                        }}
                      />
                    )}
                  />
                  {errors.hsn && <Form.Text className="text-danger">{errors.hsn.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Place of Supply</Form.Label>
                  <Controller
                    name="supplyPlace"
                    control={control}
                    rules={{ required: 'Please enter a value' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        {...field}
                        disabled={['save', 'edit'].includes(editable)}
                        placeholder="State/GST Code"
                      />
                    )}
                  />
                  {errors.supplyPlace && <Form.Text className="text-danger">{errors.supplyPlace.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Production TAT (Time)</Form.Label>
                  <Controller
                    name="production"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option </option>
                        {productionOptions.map((production) => (
                          <option key={production.value} value={production.value}>
                            {production.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.production && <Form.Text className="text-danger">{errors.production.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Consumable/Edible</Form.Label>
                  <Controller
                    name="consumable"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option </option>
                        <option value="yes">Yes </option>
                        <option value="no">No </option>
                      </Form.Select>
                    )}
                  />
                  {errors.consumable && <Form.Text className="text-danger">{errors.consumable.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Logistic Packing</Form.Label>
                  <Controller
                    name="packaging"
                    control={control}
                    rules={{ required: 'Please select a packing type' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a packing type</option>
                        {packagingOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.packaging && <Form.Text className="text-danger">{errors.packaging.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Shipment/Logistic Charges</Form.Label>
                  <Controller
                    name="paymentTerms"
                    control={control}
                    rules={{ required: 'Please select a payment term' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a payment term</option>
                        {paymentOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.paymentTerms && <Form.Text className="text-danger">{errors.paymentTerms.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Negotiable</Form.Label>
                  <Controller
                    name="negotiable"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option </option>
                        <option value="no">No </option>
                        <option value="yes">Yes </option>
                        <option value="cash">Cash Discount </option>
                        <option value="full ">Full QTY Discount </option>
                      </Form.Select>
                    )}
                  />
                  {errors.negotiable && <Form.Text className="text-danger">{errors.negotiable.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Size/Colour chart</Form.Label>
                  <Controller
                    name="sizeColour"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select an option </option>
                        <option value="yes">Yes </option>
                        <option value="no">No </option>
                      </Form.Select>
                    )}
                  />
                  {errors.sizeColour && <Form.Text className="text-danger">{errors.sizeColour.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Cancellation TAT</Form.Label>
                  <Controller
                    name="cancellation"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a type </option>
                        {cancellationOptions.map((cancellation) => (
                          <option key={cancellation.value} value={cancellation.value}>
                            {cancellation.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.cancellation && <Form.Text className="text-danger">{errors.cancellation.message}</Form.Text>}
                </Form.Group>
                <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Sample</Form.Label>
                  <Controller
                    name="sample"
                    control={control}
                    rules={{ required: 'Please select an option' }}
                    render={({ field }) => (
                      <Form.Select {...field}>
                        <option value="">Select a sample option</option>
                        {sampleOptions.map((sample) => (
                          <option key={sample.value} value={sample.value}>
                            {sample.label}
                          </option>
                        ))}
                      </Form.Select>
                    )}
                  />
                  {errors.sample && <Form.Text className="text-danger">{errors.sample.message}</Form.Text>}
                </Form.Group>
                {(watch('sample') === 'free' || watch('sample') === 'chargeable' || watch('sample') === 'courier') && (
                  <Form.Group as={Col} lg={3} md={4} sm={6} xs={12}>
                    <Form.Label>Sample Contains</Form.Label>
                    <Form.Control
                      type="text"
                      {...register('contents', {
                        required: 'Please specify the sample contents',
                      })}
                      placeholder="Enter sample contents"
                      maxLength={40}
                    />
                    {errors.contents && <Form.Text className="text-danger">{errors.contents.message}</Form.Text>}
                  </Form.Group>
                )}
              </Row>

              <Row>
                <Form.Group as={Col} lg={6} md={8} sm={12} xs={12} className="mt-4">
                  <Form.Label>Product Description</Form.Label>
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
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add Price */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>ADD PRICE</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col lg={6} md={12} sm={12} xs={12} className="mb-4 mb-lg-0">
                  <Row>
                    <Col className="d-flex align-items-center">
                      <Form.Label>Add Price</Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end mb-1">
                      <Button
                        variant="primary"
                        onClick={handleShowPriceModal}
                        className="mt-2"
                        size="sm"
                        disabled={editable === 'save'}
                      >
                        Add New
                      </Button>
                    </Col>
                  </Row>

                  <PriceDataTable
                    addRow={currentPriceRow}
                    editable={editable}
                    sampleValue={watch('sample')}
                    unit={watch('unit')}
                  />

                  <PriceDetailsModal
                    show={showPriceModal}
                    handleClose={handleClosePriceModal}
                    handleSave={handleSavePrice}
                    unit={watch('unit')}
                    minOrderQuantity={watch('minOrderQuantity')}
                  />
                </Col>

                <Col lg={6} md={12} sm={12} xs={12}>
                  <Row>
                    <Col className="d-flex align-items-center">
                      <Form.Label>Add Offer</Form.Label>
                    </Col>
                    <Col className="d-flex justify-content-end mb-1">
                      <Button
                        variant="primary"
                        onClick={handleShowOfferModal}
                        className="mt-2"
                        size="sm"
                        disabled={editable === 'save' || isButtonClicked}
                      >
                        Add New
                      </Button>
                    </Col>
                  </Row>
                  <OfferDataTable addRow={currentOfferRow} editable={editable} onRowDeleted={handleRowDeleted} />

                  <OfferDetailsModal
                    show={showOfferModal}
                    handleClose={handleCloseOfferModal}
                    handleSave={handleSaveOffer}
                  />
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add Size/ Colour Chart */}
        {watch('sizeColour') === 'yes' && (
          <Accordion.Item eventKey="3">
            <Accordion.Header>ADD SIZE/ COLOUR CHART</Accordion.Header>
            <Accordion.Body>
              <SizeTable />
            </Accordion.Body>
          </Accordion.Item>
        )}
        {/* //!Add Images */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>ADD IMAGES</Accordion.Header>
          <Accordion.Body>
            <Row>
              {labels.map((label, labelIndex) => (
                <Col key={labelIndex} xs={12}>
                  <Form.Label className="mt-4">{label}</Form.Label>
                  <Row>
                    {Array.from({ length: 6 }, (_, index) => (
                      <Col key={index} lg={4} md={6} sm={12} xs={12} className="mt-2">
                        <ProductImageCropper />
                      </Col>
                    ))}
                  </Row>
                </Col>
              ))}
              <Row className="mt-4">
                <Form.Label>Product Certificate</Form.Label>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <Col key={index} lg={2} md={3} sm={6} xs={6}>
                      <ImageCropUploader editable={editable} setEditable={setEditable} />
                    </Col>
                  ))}
              </Row>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Disclaimer */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>DISCLAIMER</Accordion.Header>
          <Accordion.Body>
            <p className="disclaimer-text">
              We agree with Terms & Condition of B2B Blaunk Trade. Free Returns and Refund if Buyer is not satisfied
              with goods received and found vary or different from product image. Please refer our Return Policy Terms &
              Conditions. This post will be valid as per Plan selected and get auto deleted. Return policy is only valid
              if vendor failed to supply promised articles.
            </p>
            <p className="disclaimer-text">
              The Vendor can select their choice of country currency to Trade along with INR ₹ Currency if need an
              International Trade Deal.
            </p>
            <p className="disclaimer-text">
              Blaunk will not be held liable for any legal or claiming, as this is only an Online platform for secure
              trade between vendors & Customer.
            </p>
            <p className="disclaimer-text">
              The seller should arrange their Local Logistic / Shipping Logistic to supply the Goods at Buyer
              Destination place.
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
