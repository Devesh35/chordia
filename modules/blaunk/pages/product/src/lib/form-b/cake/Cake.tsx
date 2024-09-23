/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { getStaticImageSrc } from '@li/design/icons';
import { TimeRangePicker } from '@wojtekmaj/react-timerange-picker';
import '@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css';
import { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { IoLocationSharp, IoSearchOutline } from 'react-icons/io5';
import nonVeg from './assets/images/nonVeg.png';
import veg from './assets/images/veg.png';
import vegan from './assets/images/vegan.png';
import ImageCropUploader from './components/common/ImageComponent';
import OfferDataTable from './components/common/OfferDataTable';
import OfferDetailsModal from './components/common/OfferDetailsModal';
import PriceDataTable from './components/common/PriceDataTable';
import PriceDetailsModal from './components/common/PriceDetailsModal';
import {
  cakeShapes,
  cakeTypes,
  cancellationPolicyOptions,
  complimentaryOptions,
  deliveryByOptions,
  distanceOptions,
  flavours,
  occasions,
  plans,
  prepTimeOptions,
  responseOptions,
  statusOptions,
  supplySourceOptions,
} from './utils/constants';
import { Field, Highlight, OfferData, RowData } from './utils/interfaces';

export function App() {
  const [subscriptionData, setSubscriptionData] = useState<{
    renewalDate: string | undefined;
    type: string;
    selectedPlan: string;
    currentDate: string;
    amount: string;
    voucherCode: string;
    rebateAmount: string;
    toPayAmount: string;
    originalAmount: string;
    highlights: Highlight;
    title: string;
    pincode: string;
    city: string;
    occasion: string;
    flavour: string;
    cakeType: string;
    cakeShape: string;
    deliveryBy: string;
    deliveryCharge: string;
    basketValue: string;
    freeDelUpto: string;
    complimentary: string;
    cancelPolicy: string;
    supplySource: string;
    status: string;
    customOrder: string;
    registeredShop: string;
    resTime: string;
    prepTime: string;
    gstInv: string;
    delLocation: string;
    vatGst: string;
    email: string;
    description: string;
    fields: Field[];
  }>({
    renewalDate: undefined,
    type: 'subscription',
    selectedPlan: '300',
    currentDate: new Date().toISOString().substring(0, 10),
    amount: '300',
    voucherCode: '',
    rebateAmount: '0',
    toPayAmount: '300',
    originalAmount: '300',
    highlights: {
      labels: [
        'Hygiene',
        'Fast Delivery',
        '100% Vegan',
        '100% Veg',
        'No Cancellation',
        'COD',
        'Food Certification',
        'Free Delivery',
        'Full Refund',
        'Easy Return',
      ],
      values: [],
    },
    title: '',
    pincode: '',
    city: '',
    occasion: 'anniversary',
    flavour: '',
    cakeType: 'jar',
    cakeShape: '',
    deliveryBy: '',
    deliveryCharge: '',
    basketValue: '',
    freeDelUpto: '',
    complimentary: '',
    cancelPolicy: '',
    supplySource: '',
    status: '',
    customOrder: '',
    registeredShop: '',
    resTime: '',
    prepTime: '',
    gstInv: '',
    delLocation: '',
    vatGst: '',
    email: '',
    description: '',
    fields: Array.from({ length: 6 }).map(() => ({
      addOnTitle: '',
      mrp: '',
      sellingPrice: '',
      weightUnits: '',
      availability: '',
    })),
  });

  const {
    renewalDate,
    selectedPlan,
    type,
    currentDate,
    amount,
    voucherCode,
    rebateAmount,
    toPayAmount,
    highlights,
    title,
    pincode,
    city,
    occasion,
    flavour,
    cakeType,
    cakeShape,
    deliveryBy,
    deliveryCharge,
    basketValue,
    freeDelUpto,
    complimentary,
    cancelPolicy,
    supplySource,
    status,
    customOrder,
    registeredShop,
    resTime,
    prepTime,
    gstInv,
    delLocation,
    vatGst,
    email,
    description,
    fields,
  } = subscriptionData;

  type ValuePiece = Date | string | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>('');

  const [termsAccepted, setTermsAccepted] = useState(false);

  const [currentPriceRow, setCurrentPriceRow] = useState<RowData | undefined>(undefined);
  const [showPriceModal, setShowPriceModal] = useState(false);

  const [currentOfferRow, setCurrentOfferRow] = useState<OfferData | undefined>(undefined);
  const [showOfferModal, setShowOfferModal] = useState(false);

  const handleShowPriceModal = () => setShowPriceModal(true);
  const handleClosePriceModal = () => setShowPriceModal(false);

  const handleShowOfferModal = () => setShowOfferModal(true);
  const handleCloseOfferModal = () => setShowOfferModal(false);

  const [editable, setEditable] = useState<'edit' | 'save' | 'cancel' | 'default'>('default');

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

  useEffect(() => {
    const today = new Date();
    const expiryDate = new Date(today);

    const selectedPlanObj = plans.find((plan) => plan.value === selectedPlan);
    if (selectedPlanObj) {
      const { duration } = selectedPlanObj;
      if (duration.months) {
        expiryDate.setMonth(today.getMonth() + duration.months);
      }
      if (duration.years) {
        expiryDate.setFullYear(today.getFullYear() + duration.years);
      }
      const newAmount = selectedPlanObj.value;
      setSubscriptionData((prevData) => ({
        ...prevData,
        renewalDate: expiryDate.toISOString().substring(0, 10),
        amount: newAmount,
        originalAmount: newAmount,
        rebateAmount: voucherCode === 'BLAUNK100' ? newAmount : '0',
        toPayAmount: voucherCode === 'BLAUNK100' ? '0' : newAmount,
      }));
    }
  }, [selectedPlan]);

  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubscriptionData((prevData) => ({
      ...prevData,
      selectedPlan: event.target.value,
    }));
  };

  const handleCancel = () => {
    setSubscriptionData({
      renewalDate: undefined,
      type: 'subscription',
      selectedPlan: '300',
      currentDate: new Date().toISOString().substring(0, 10),
      amount: '300',
      voucherCode: '',
      rebateAmount: '0',
      toPayAmount: '300',
      originalAmount: '300',
      highlights: {
        labels: [
          'Hygiene',
          'Fast Delivery',
          '100% Vegan',
          '100% Veg',
          'No Cancellation',
          'COD',
          'Food Certification',
          'Free Delivery',
          'Full Refund',
          'Easy Return',
        ],
        values: [],
      },
      title: '',
      pincode: '',
      city: '',
      occasion: 'anniversary',
      flavour: '',
      cakeType: 'jar',
      cakeShape: '',
      deliveryBy: '',
      deliveryCharge: '',
      basketValue: '',
      freeDelUpto: '',
      complimentary: '',
      cancelPolicy: '',
      supplySource: '',
      status: '',
      customOrder: '',
      registeredShop: '',
      resTime: '',
      prepTime: '',
      gstInv: '',
      delLocation: '',
      vatGst: '',
      email: '',
      description: '',
      fields: Array.from({ length: 6 }).map(() => ({
        addOnTitle: '',
        mrp: '',
        sellingPrice: '',
        weightUnits: '',
        availability: '',
      })),
    });
    setEditable('cancel');
    setTermsAccepted(false);
  };

  const applyVoucher = () => {
    const isValidVoucher = subscriptionData.voucherCode === 'BLAUNK100';

    if (isValidVoucher) {
      setSubscriptionData((prevData) => ({
        ...prevData,
        rebateAmount: prevData.amount,
        toPayAmount: '0',
      }));
    } else {
      alert('Invalid voucher code');
      setSubscriptionData((prevData) => ({
        ...prevData,
        voucherCode: '',
        rebateAmount: '0',
        toPayAmount: prevData.amount,
      }));
    }
  };

  const resetVoucher = () => {
    setSubscriptionData((prevData) => ({
      ...prevData,
      voucherCode: '',
      rebateAmount: '0',
      toPayAmount: prevData.originalAmount,
    }));
  };

  useEffect(() => {
    if (!voucherCode) {
      resetVoucher();
    }
  }, [voucherCode]);

  const handleHighlightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      if (highlights.values.length < 6) {
        setSubscriptionData((prevData) => ({
          ...prevData,
          highlights: {
            ...highlights,
            values: [...highlights.values, value],
          },
        }));
      }
    } else {
      setSubscriptionData((prevData) => ({
        ...prevData,
        highlights: {
          ...highlights,
          values: highlights.values.filter((highlight) => highlight !== value),
        },
      }));
    }
  };

  const handleChange =
    (name: string, index: number | null = null) =>
    (e: any) => {
      const { value } = e.target;

      if (e.target.validity !== undefined && !e.target.validity.valid) {
        return;
      }

      if (index !== null) {
        setSubscriptionData((prevData) => ({
          ...prevData,
          fields: prevData.fields.map((field, i) => (i === index ? { ...field, [name]: value } : field)),
        }));
      } else {
        // Update the state variable
        setSubscriptionData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };

  const handlePincodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubscriptionData((prevData) => ({
      ...prevData,
      pincode: event.target.value,
    }));
  };

  return (
    <>
      <Accordion defaultActiveKey="0" flush>
        {/* //!Subscription */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>SUBSCRIPTION</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Select Type</Form.Label>
                    <Form.Select value={type} onChange={handleChange('type')} disabled={editable === 'save'}>
                      <option value="subscription">Subscription</option>
                      <option value="renewal">Renewal</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Product</Form.Label>
                    <Form.Control type="text" placeholder="Cake" readOnly />
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="currentDateInput">
                    <Form.Label>Subscription Date</Form.Label>
                    <Form.Control type="date" value={currentDate} readOnly />
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="planSelect">
                    <Form.Label>Plan</Form.Label>
                    <Form.Select
                      value={selectedPlan}
                      onChange={handlePlanChange}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {plans.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="renewalDateInput">
                    <Form.Label>Renewal Date</Form.Label>
                    <Form.Control type="date" value={renewalDate} readOnly />
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="amountInput">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" value={amount} readOnly />
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="voucherCodeInput">
                    <Form.Label>Voucher Code</Form.Label>
                    <div className="voucher-container">
                      <Form.Control
                        type="text"
                        value={voucherCode.toUpperCase()}
                        onChange={handleChange('voucherCode')}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                      <IoSearchOutline className="voucher-icon" onClick={applyVoucher} />
                    </div>
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="rebateAmountInput">
                    <Form.Label>Rebate Amount</Form.Label>
                    <Form.Control type="text" value={rebateAmount} readOnly />
                  </Form.Group>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12}>
                  <Form.Group controlId="toPayAmountInput">
                    <Form.Label>To Pay</Form.Label>
                    <Form.Control type="text" value={toPayAmount} readOnly />
                  </Form.Group>
                </Col>
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
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="max 35 characters"
                      value={title}
                      onChange={handleChange('title')}
                      maxLength={35}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group controlId="zipCodeInput">
                    <Form.Label>Zip code/Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      inputMode="numeric"
                      maxLength={7}
                      value={pincode}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9]/g, '');
                      }}
                      onChange={handlePincodeChange}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      value={city}
                      onChange={handleChange('city')}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Occasion</Form.Label>
                    <Form.Select
                      value={occasion}
                      onChange={handleChange('occasion')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {occasions.map((occasion) => (
                        <option key={occasion.value} value={occasion.value}>
                          {occasion.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Flavour</Form.Label>
                    <Form.Select
                      value={flavour}
                      onChange={handleChange('flavour')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {flavours.map((flavour) => (
                        <option key={flavour.value} value={flavour.value}>
                          {flavour.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      value={cakeType}
                      onChange={handleChange('cakeType')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {cakeTypes.map((cakeType) => (
                        <option key={cakeType.value} value={cakeType.value}>
                          {cakeType.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Cake Shape</Form.Label>
                    <Form.Select
                      value={cakeShape}
                      onChange={handleChange('cakeShape')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {cakeShapes.map((cakeShape) => (
                        <option key={cakeShape.value} value={cakeShape.value}>
                          {cakeShape.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Delivery By</Form.Label>
                    <Form.Select
                      value={deliveryBy}
                      onChange={handleChange('deliveryBy')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {deliveryByOptions.map((deliveryBy) => (
                        <option key={deliveryBy.value} value={deliveryBy.value}>
                          {deliveryBy.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Delivery Charge</Form.Label>
                    <Form.Select
                      value={deliveryCharge}
                      onChange={handleChange('deliveryCharge')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      <option value="free">Free</option>
                      <option value="applicable">Applicable</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Min. Basket Value</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control
                        type="text"
                        value={basketValue}
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(/[^0-9]/g, '');
                        }}
                        onChange={handleChange('basketValue')}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Free Delivery Upto</Form.Label>
                    <Form.Select
                      value={freeDelUpto}
                      onChange={handleChange('freeDelUpto')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {distanceOptions.map((freeDelUpto) => (
                        <option key={freeDelUpto.value} value={freeDelUpto.value}>
                          {freeDelUpto.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Complimentary</Form.Label>
                    <Form.Select
                      value={complimentary}
                      onChange={handleChange('complimentary')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {complimentaryOptions.map((complimentary) => (
                        <option key={complimentary.value} value={complimentary.value}>
                          {complimentary.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Cancellation Time</Form.Label>
                    <Form.Select
                      value={cancelPolicy}
                      onChange={handleChange('cancelPolicy')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {cancellationPolicyOptions.map((cancelPolicy) => (
                        <option key={cancelPolicy.value} value={cancelPolicy.value}>
                          {cancelPolicy.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Supply Source</Form.Label>
                    <Form.Select
                      value={supplySource}
                      onChange={handleChange('supplySource')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {supplySourceOptions.map((supplySource) => (
                        <option key={supplySource.value} value={supplySource.value}>
                          {supplySource.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      value={status}
                      onChange={handleChange('status')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {statusOptions.map((status) => (
                        <option key={status.value} value={status.value}>
                          {status.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Customized Party Order</Form.Label>
                    <Form.Select
                      value={customOrder}
                      onChange={handleChange('customOrder')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Govt. Registered Shop</Form.Label>
                    <Form.Select
                      value={registeredShop}
                      onChange={handleChange('registeredShop')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Response Time</Form.Label>
                    <Form.Select
                      value={resTime}
                      onChange={handleChange('resTime')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {responseOptions.map((resTime) => (
                        <option key={resTime.value} value={resTime.value}>
                          {resTime.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Preparation Time</Form.Label>
                    <Form.Select
                      value={prepTime}
                      onChange={handleChange('prepTime')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      {prepTimeOptions.map((prepTime) => (
                        <option key={prepTime.value} value={prepTime.value}>
                          {prepTime.label}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Gst Invoice</Form.Label>
                    <Form.Select
                      value={gstInv}
                      onChange={handleChange('gstInv')}
                      disabled={['save', 'edit'].includes(editable)}
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Delivery Area</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <IoLocationSharp />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        value={delLocation}
                        onChange={handleChange('delLocation')}
                        disabled={['save', 'edit'].includes(editable)}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>VAT/GST No.</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength={20}
                      value={vatGst.toUpperCase()}
                      onChange={handleChange('vatGst')}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Cus Care Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={handleChange('email')}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Label>Food Label</Form.Label>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      id="option1"
                      name="foodLabel"
                      inline
                      label={<img height={32} width={32} src={getStaticImageSrc(veg)} alt="veg" />}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                    <Form.Check
                      type="radio"
                      id="option2"
                      name="foodLabel"
                      inline
                      label={<img height={32} width={32} src={getStaticImageSrc(nonVeg)} alt="nonVeg" />}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                    <Form.Check
                      type="radio"
                      id="option3"
                      name="foodLabel"
                      inline
                      label={<img height={32} width={32} src={getStaticImageSrc(vegan)} alt="vegan" />}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={4} sm={6} xs={12}>
                  <Form.Group className="mb-3 mt-3">
                    <Form.Label>Shop Timings</Form.Label>
                    <TimeRangePicker
                      onChange={onChange}
                      value={value}
                      disableClock
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={8} sm={12} xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      value={description}
                      onChange={handleChange('description')}
                      placeholder="Type here...(max 275 characters)"
                      maxLength={275}
                      style={{ resize: 'none' }}
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  </Form.Group>
                </Col>
              </Row>
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

                  <PriceDataTable addRow={currentPriceRow} editable={editable} />

                  <PriceDetailsModal
                    show={showPriceModal}
                    handleClose={handleClosePriceModal}
                    handleSave={handleSavePrice}
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
                <Form.Label className="mt-4">Image</Form.Label>
                {Array.from({ length: 6 }, (_, index) => (
                  <Col key={index} lg={2} md={3} sm={6} xs={6} className="mt-2">
                    <ImageCropUploader editable={editable} setEditable={setEditable} />
                  </Col>
                ))}
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
                {fields.map((field, index) => (
                  <Col key={index} lg={2} md={4} sm={6} xs={6}>
                    <ImageCropUploader editable={editable} setEditable={setEditable} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div className="add-on-box" style={{ width: '100%' }}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Title"
                            value={field.addOnTitle}
                            onChange={handleChange('addOnTitle', index)}
                            disabled={['save', 'edit'].includes(editable)}
                            maxLength={30}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            size="sm"
                            placeholder="MRP"
                            value={field.mrp}
                            onInput={(e) => {
                              const target = e.target as HTMLInputElement;
                              target.value = target.value.replace(/[^0-9]/g, '');
                            }}
                            onChange={handleChange('mrp', index)}
                            disabled={editable === 'save'}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Selling Price"
                            value={field.sellingPrice}
                            onInput={(e) => {
                              const target = e.target as HTMLInputElement;
                              target.value = target.value.replace(/[^0-9]/g, '');
                            }}
                            onChange={(e) => {
                              const value = e.target.value;
                              const mrp = fields[index].mrp;

                              if (parseFloat(value) > parseFloat(mrp)) {
                                alert('Selling Price cannot exceed MRP.');
                                return;
                              }

                              handleChange('sellingPrice', index)(e);
                            }}
                            disabled={editable === 'save'}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            size="sm"
                            placeholder="Wt./Units"
                            value={field.weightUnits}
                            onChange={handleChange('weightUnits', index)}
                            disabled={['save', 'edit'].includes(editable)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Select
                            size="sm"
                            value={field.availability}
                            onChange={handleChange('availability', index)}
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
            </Container>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Add Highlights */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>ADD HIGHLIGHTS</Accordion.Header>
          <Accordion.Body>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h4>Select Image</h4>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <h6>Max 6 only</h6>
              </Col>
              <Col lg={12} md={6} sm={4} xs={12}>
                <Form.Group controlId="highlights" className="d-flex flex-wrap">
                  {highlights.labels.map((label, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      inline
                      label={label}
                      value={label}
                      checked={highlights.values.includes(label)}
                      onChange={handleHighlightChange}
                      className="custom-checkbox"
                      disabled={['save', 'edit'].includes(editable)}
                    />
                  ))}
                </Form.Group>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        {/* //!Disclaimer */}
        <Accordion.Item eventKey="4">
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
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              I have read and agree to all the terms and condition of B2B Blaunk trade policy.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* //!Buttons */}
      <Container className="text-center mt-4 mb-4">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="danger" className="mx-2" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="success"
              className="mx-2"
              onClick={() => {
                if (termsAccepted) {
                  setEditable('save');
                  confirm(
                    'Once Product details are saved, cannot be edited except Type, Product price , Product offer and Product availability status. Are you sure you want to save?',
                  );
                } else {
                  alert('Please accept the terms and conditions before saving!');
                }
              }}
            >
              Save
            </Button>
            <Button
              variant="warning"
              className="mx-2"
              onClick={() => {
                setEditable('edit');
              }}
            >
              Edit
            </Button>
            <Button variant="primary" className="mx-2">
              Payment
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
