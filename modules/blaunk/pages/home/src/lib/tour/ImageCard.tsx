import { useState } from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaHeart, FaLocationDot } from 'react-icons/fa6';
import { SiTicktick } from 'react-icons/si';

function ImageCard() {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited((prev) => !prev);
  };
  return (
    <div className="w-100">
      <Card>
        <Row className="g-0">
          <Col md={3}>
            <Card.Img
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card Image"
              className="img-fluid rounded-start"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                padding: '10px',
              }}
            />
          </Col>

          <Col md={4}>
            <Card.Body>
              <Card.Text className="d-flex justify-content-between m-0">
                <h5>Hotel ABC International</h5>
                <FaHeart
                  size={20}
                  color={isFavorited ? 'red' : 'lightgray'}
                  onClick={toggleFavorite}
                  style={{
                    cursor: 'pointer',
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    transform: isFavorited ? 'scale(1.2)' : 'scale(1)',
                  }}
                />
              </Card.Text>
              <Card.Text className="p-0">
                <span role="img" aria-label="star">
                  ⭐⭐⭐
                </span>
                <b>7.4</b> (7304 ratings)
              </Card.Text>
              <small>
                <FaLocationDot color="red" /> City Centre 16.1 km
              </small>{' '}
              <div className="d-flex flex-wrap my-2">
                <Badge bg="primary" className="me-2 p-2">
                  Free Breakfast
                </Badge>
                <Badge bg="danger" className="me-2 p-2">
                  Non AC
                </Badge>
              </div>
            </Card.Body>
          </Col>
          <Col md={5}>
            <Card className="border-1 m-2 p-2" style={{ backgroundColor: '#FFFBE6' }}>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span
                  style={{
                    padding: '4px',
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: '1rem',
                  }}
                >
                  STANDARD ROOM
                </span>
                {/* <img
                  src="https://juststickers.in/wp-content/uploads/2017/12/sold-out.png"
                  alt="soldOut"
                  height={80}
                  width={80}
                /> */}
              </Card.Title>

              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                    <div>
                      <SiTicktick color="green" />
                      <span style={{ marginLeft: '0.5rem' }}>Pay on Arrival</span>
                    </div>
                    <div>
                      <SiTicktick color="green" />
                      <span style={{ marginLeft: '0.5rem' }}>Free Cancellation</span>
                    </div>
                  </div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5277/5277940.png"
                    width={50}
                    height={50}
                    alt="soldOut"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '0.5rem',
                    }}
                  >
                    <h4
                      className="fw-bold"
                      style={{
                        color: 'blue',
                      }}
                    >
                      ₹ 7,847
                    </h4>
                  </div>
                  <div>
                    <Badge className="text-decoration-underline" bg="primary" style={{ cursor: 'pointer' }}>
                      view more
                    </Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div
              className="d-flex justify-content-between align-items-center border-0 px-3"
              style={{ margin: 0, background: 'none' }}
            >
              <h4 className="fw-bold" style={{ position: 'relative' }}>
                <span
                  style={{
                    fontSize: '1.2rem',
                    position: 'relative',
                    zIndex: 0,
                  }}
                >
                  ₹ 10,524
                </span>
                <span
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'red',
                    transform: 'rotate(15deg)',
                    top: '50%',
                    left: '0',
                    zIndex: 1,
                  }}
                />
              </h4>
              <h6 style={{ color: 'red' }}>You saved $3200</h6>
              <h6 style={{ color: 'red' }}>
                Surprise Offer
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8146/8146553.png"
                  width={25}
                  height={25}
                  style={{ marginLeft: '0.2rem' }}
                  alt="surpriseOffer"
                />
              </h6>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ImageCard;
