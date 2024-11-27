import { useMedia } from '@li/design/hooks';
import clsx from 'clsx';
import { useState } from 'react';
import { Badge, Card, Col, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Controller, useForm } from 'react-hook-form';
import { FaHeart, FaStar } from 'react-icons/fa';
import { RemindMe } from '../../../../blaunk/pages/home/src/lib/components/RemindMe';
import './Details.css';

interface FormData {
  writeOn: string;
  deliverySlot: string;
  specialRequest: string;
  terms: string;
  shape: string;
  flavour: string;
  date: string;
  quantity: string;
  weight: string;
}

export const Details: React.FC = () => {
  const { isMobile } = useMedia();

  const {
    // register,
    control,
    handleSubmit,
    // reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      writeOn: '',
      deliverySlot: '',
      specialRequest: '',
      terms: '',
    },
    mode: 'onChange',
  });

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const images: string[] = [
    'https://images.unsplash.com/photo-1624006229221-2abd931f266b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNha2V8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1624006229221-2abd931f266b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNha2V8ZW58MHx8MHx8fDA%3D',
  ];

  const onSubmit = (data: FormData) => {
    console.log('Form Data: ', data);
    alert('THANK YOU\nYou can view your Request under MY ORDER');
    // reset();
  };

  const badges = [
    // { text: 'Non AC', variant: 'primary' },
    { text: 'Full Refund', variant: 'secondary' },
    // { text: 'Free Breakfast', variant: 'success' },x
    { text: 'Free Delivery', variant: 'danger' },
    // { text: 'Free Wifi', variant: 'warning' },
  ];

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour <= 23; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const startPeriod = hour < 12 ? 'AM' : 'PM';
      const endPeriod = hour + 1 < 12 || hour + 1 >= 24 ? 'AM' : 'PM';
      slots.push(`${startHour} ${startPeriod} - ${endHour} ${endPeriod}`);
    }
    return slots;
  };

  return (
    <div className="mx-5 my-5">
      <div
        className="row p-3 d-flex justify-content-center"
        style={{ backgroundColor: '#fffbe6', borderRadius: '12px' }}
      >
        <div
          className={clsx('d-flex justify-content-around mb-2', {
            'flex-column': isMobile,
          })}
        >
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className="position-relative"
              style={{ width: '600px', maxWidth: isMobile ? '80vw' : '600px' }}
            >
              <img
                src={imageSrc}
                alt={`Sample ${index + 1}`}
                className="img-fluid rounded custom-border"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  border: '20px solid white',
                  borderRadius: '20px',
                }}
              />

              {index === 0 && (
                <div className="position-absolute top-0 start-0 p-3">
                  <span className="badge bg-success" style={{ fontSize: '1.1rem' }}>
                    Best Seller
                  </span>
                </div>
              )}

              {index === 1 && (
                <div className="position-absolute top-0 end-0 p-3" style={{ paddingRight: '20px', paddingTop: '20px' }}>
                  <button
                    onClick={toggleLike}
                    className="btn btn-light"
                    style={{ border: 'none', background: 'transparent' }}
                  >
                    <FaHeart color={liked ? 'red' : 'gray'} size={28} />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="row d-flex align-items-center">
          <Col>
            <div className="d-flex align-items-center">
              <span style={{ color: 'green', fontSize: '1.5rem', marginRight: '0.5rem' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/b/b2/20131205101218%21Veg_symbol.svg/120px-Veg_symbol.svg.png"
                  alt="veg"
                  height={50}
                  width={50}
                />
              </span>

              <h3 className="fw-bold d-flex" style={{ color: '#6d751d', fontSize: '3rem' }}>
                Strawberry Cake
              </h3>
            </div>
            <h3 style={{ color: '#e75f78' }}>Anniversary Cake</h3>
            <h4 className="text-primary">Shop Timings: 9:00 AM - 10:00 PM</h4>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h3>
              <span className="badge" style={{ backgroundColor: '#6d751d', color: 'white', marginRight: '0.5rem' }}>
                <FaStar style={{ marginRight: '0.25rem' }} /> 4.3
              </span>
            </h3>

            <h3 className="fw-bold" style={{ color: '#6d751d' }}>
              Jar Cake
            </h3>
          </Col>
          <Col className="d-flex flex-column align-items-end justify-content-center">
            <h3 className="fw-bold text-success fs-2">1500</h3>
            <h4 className="fw-bold  text-primary ">You save: 500</h4>
            <h3 className="text-decoration-line-through text-secondary fw-bold me-2">2000</h3>
          </Col>
        </div>
        <Row>
          <Col md={9}>
            <div style={{ backgroundColor: '#FFFBE6', padding: '20px', marginTop: '20px' }}>
              <div className="my-5">
                <h2 className="fw-bold mb-3 ">Description</h2>
                <div>
                  <p className="bg-light p-2 fs-5">
                    Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine dining, and a
                    rooftop bar with stunning city views. Perfect for both leisure and business travelers seeking a
                    memorable stay in the heart of the city. Hotel Serenity combines modern comfort with superb service.
                    Enjoy plush rooms, fine dining, and a rooftop bar with stunning city views. Perfect for both leisure
                    and business travelers seeking a memorable stay in the heart of the city. Hotel Serenity combines
                    modern comfort with superb service. Enjoy plush rooms, fine dining, and a rooftop bar with stunning
                    city views. Perfect for both leisure and business travelers seeking a memorable stay in the heart of
                    the city. Hotel Serenity combines modern comfort with superb service. Enjoy plush rooms, fine
                    dining, and a rooftop bar with stunning city views. Perfect for both leisure and business travelers
                    seeking a memorable stay in the heart of the city.
                  </p>
                </div>
              </div>
              <div className="my-5">
                <h2 className="fw-bold mb-4">Highlights</h2>
                <Col className="d-flex flex-wrap ">
                  {badges.map((badge, index) => (
                    <Badge key={Math.random()} pill bg={badge.variant} className="custom-badge me-2">
                      {badge.text}
                    </Badge>
                  ))}
                </Col>
              </div>
            </div>
          </Col>
          <Col md={3} className="d-flex justify-content-center align-items-center">
            <RemindMe name="Cake" hasBulk />
          </Col>
        </Row>

        <div
          className={clsx('row my-2 gap-5', {
            'flex-column': isMobile,
          })}
        >
          {/* First Column */}
          <Col className="room-box bg-color-1">
            <p>Delivery by : Vendor</p>
            <p>Delivery charges : Free/NA</p>
            <p>Min-Basket value : Rs.250</p>
            <p>Free delivery : Up to 2.5km</p>
            <p>Complimentary : Knife, Candles, Box packing, Card, Flower</p>
            <p>Deal : Orders above Rs 5000 get gift hamper worth rs 500</p>
            <p>Response Time : Immediate</p>
          </Col>

          {/* Second Column */}
          <Col className="room-box bg-color-2">
            <p>Are you Govt registered Shop : Yes</p>
            <p>Supply from : Cloud Kitchen</p>
            <p>Customized Order : Yes</p>
            <p>Preparation Time : Within 2 hrs</p>
            <p>Delivery Condition : We Accept & Deliver your valued orders only on our shop Timing.</p>
            <p>Party orders : No</p>
            <p>Tax Invoice : Yes</p>
          </Col>
        </div>
      </div>
      <div
        className="row p-3 mt-3 d-flex justify-content-center"
        style={{ backgroundColor: '#fffbe6', borderRadius: '12px' }}
      >
        <Form onSubmit={handleSubmit(onSubmit)} className="row d-flex justify-content-center my-4">
          <Row style={{ backgroundColor: '#fff', borderRadius: '12px' }}>
            <Col lg={12}>
              <Row>
                <Col md={3}>
                  <Form.Group controlId="shape">
                    <Form.Label>Shape</Form.Label>
                    <Controller
                      name="shape"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Select {...field} size="lg">
                          <option value="">Select Shape</option>
                          <option value="round">Round</option>
                          <option value="square">Square</option>
                          <option value="heart">Heart</option>
                          <option value="layer">Half</option>
                          <option value="layer">Layer</option>
                          <option value="oval">Oval</option>
                          <option value="rectangle">Rectangle</option>
                        </Form.Select>
                      )}
                    />
                    {errors.shape && <span className="text-danger">Required</span>}
                  </Form.Group>
                </Col>

                {/* Flavour Select */}
                <Col md={3}>
                  <Form.Group controlId="flavour">
                    <Form.Label>Flavour</Form.Label>
                    <Controller
                      name="flavour"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Select {...field} size="lg">
                          <option value="">Select Flavour</option>
                          <option value="all"> All</option>
                          <option value="blackforest"> Black Forest</option>
                          <option value="chocolate">Chocolate</option>
                          <option value="vanilla">Vanilla</option>
                          <option value="strawberry">Strawberry</option>
                          <option value="butterscotch">Butterscotch </option>
                          <option value="coffee">Coffee</option>
                          <option value="fruit">Fruit</option>
                          <option value="kitkat">Kit-kat</option>
                          <option value="pineapple">Pineapple</option>
                          <option value="rasmalai">Ras-malai</option>
                          <option value="redvelvet">Red Velvet</option>
                          <option value="truffle">Truffle</option>
                          <option value="blueberry">Blueberry</option>
                        </Form.Select>
                      )}
                    />
                    {errors.flavour && <span className="text-danger">Required</span>}
                  </Form.Group>
                </Col>

                {/* Date Picker */}
                <Col md={2}>
                  <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Controller
                      name="date"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Control type="date" {...field} min={new Date().toISOString().split('T')[0]} size="lg" />
                      )}
                    />
                    {errors.date && <span className="text-danger">Required</span>}
                  </Form.Group>
                </Col>

                {/* Quantity Select */}
                <Col md={2}>
                  <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Controller
                      name="quantity"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Select {...field} size="lg">
                          <option value="">Select Quantity</option>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </Form.Select>
                      )}
                    />
                    {errors.quantity && <span className="text-danger">Required</span>}
                  </Form.Group>
                </Col>

                {/* Weight Select */}
                <Col md={2}>
                  <Form.Group controlId="weight">
                    <Form.Label>Weight</Form.Label>
                    <Controller
                      name="weight"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Form.Select {...field} size="lg">
                          <option value="">Select Weight</option>
                          <option value="500gms">500gms</option>
                          <option value="1kg">1kg</option>
                          <option value="2kg">2kg</option>
                          <option value="3kg">3kg</option>
                          <option value="4kg">4kg</option>
                        </Form.Select>
                      )}
                    />
                    {errors.weight && <span className="text-danger">Required</span>}
                  </Form.Group>
                </Col>
              </Row>
            </Col>

            <Col md={3} className="py-4"></Col>
          </Row>
          <Row style={{ backgroundColor: '#fff', borderRadius: '12px' }}>
            <div className="row my-4 d-flex justify-content-between">
              {/* First Column */}
              <div className="col-md-6">
                <Form.Group className="mb-3 row">
                  <label htmlFor="writeOn" className="col-sm-3 col-form-label">
                    Write on cake
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="writeOn"
                      render={({ field }) => (
                        <Form.Control
                          {...field}
                          type="text"
                          id="writeOn"
                          maxLength={25}
                          placeholder="max 25 characters"
                          size="lg"
                        />
                      )}
                    />
                    {errors.writeOn && <span className="text-danger">{errors.writeOn.message}</span>}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 row">
                  <label htmlFor="deliverySlot" className="col-sm-3 col-form-label">
                    Delivery Slot
                  </label>
                  <div className="col-sm-8">
                    <Controller
                      control={control}
                      name="deliverySlot"
                      rules={{ required: 'Delivery slot is required' }}
                      render={({ field }) => (
                        <Form.Select id="deliverySlot" {...field} size="lg">
                          <option value="">Select a time slot</option>
                          {generateTimeSlots().map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </Form.Select>
                      )}
                    />
                    {errors.deliverySlot && <span className="text-danger">{errors.deliverySlot.message}</span>}
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
                      rules={{ required: 'Purpose is required' }}
                      render={({ field }) => (
                        <Form.Select id="specialRequest" {...field} size="lg">
                          <option value="">Select a value</option>
                          <option value="requestedTime">Need delivery on requested time</option>
                          <option value="pureButterCream">Cake should be made in pure butter cream</option>
                          <option value="freshFlowers">Use fresh flowers on a cake</option>
                          <option value="handleWithCare">Handle with care on delivery</option>
                          <option value="previousDesigns">Need to look on previous designs</option>
                          <option value="customDesign">Need custom cake design</option>
                          <option value="lessCream">Need less cream</option>
                          <option value="photoCake">Need custom photo cake</option>
                        </Form.Select>
                      )}
                    />
                    {errors.specialRequest && <span className="text-danger">{errors.specialRequest.message}</span>}
                  </div>
                </Form.Group>
              </div>

              {/* Second Column */}
              <div className="col-md-6 d-flex flex-column align-items-center">
                {/* Issue Report */}
                <Card style={{ border: '2px solid #000', maxWidth: '400px', marginBottom: '20px' }}>
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
