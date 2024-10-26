import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { getStaticImageSrc } from '@li/design/icons';
import { exportImg } from '@md/blaunk/config';

const ImageCard=() =>{
  return (
    <div className="m-4">
      <Card>
        <Row style={{ padding: '20px' }}>
          <Col md={3}>
            <Card.Img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/computer/x/4/h/-original-imah4z66zfc8bh9h.jpeg?q=70&crop=false"
              alt="Card Image"
              className="img-fluid rounded-start"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Col>

          <Col md={4}>
            <Card.Body>
              <Card.Text>
                ASUS Vivobook 16 (2023)Thin & Light Laptop,Intel Core i9-13900H 13th Gen, 16" (40.64 cm) FHD+(16GB
                RAM/512GB SSD/Intel Iris Xe/Win 11/Office 2021/Backlit KB/Fingerprint/Black/1.88 kg)
              </Card.Text>
              <small className="text-muted">
                <FaLocationDot color="red" /> Bangalore
              </small>{' '}
              <img
                className="ml-2"
                src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo="
                alt="India Flag"
                width="25"
              />{' '}
              <div className="my-2">
                <Badge bg="dark">Membership</Badge>
              </div>
            </Card.Body>
          </Col>
          <Col md={5}>
            <Card className="border-1 m-2 p-3" style={{ backgroundColor: '#FFFBE6' }}>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span
                  style={{
                    textDecoration: 'underline',
                    color: 'blue',
                    fontSize: '1rem',
                  }}
                >
                  C & D RETAIL (INDIA) LLP
                </span>
                <FaHeart style={{ color: 'red', cursor: 'pointer' }} />
              </Card.Title>

              <Card.Body className="d-flex p-1 justify-content-between">
                <div className="me-3">
                  <h6>
                    Type:<span style={{ color: 'gray' }}> Farmer</span>
                  </h6>
                  <h6>
                    MOQ:<span style={{ color: 'gray' }}> 300 pieces</span>
                  </h6>
                  <h6>
                    Price(₹):
                    <span
                      style={{
                        color: 'blue',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {' '}
                      0.15-1.25
                    </span>
                  </h6>
                </div>
                <div>
                  <img src={getStaticImageSrc(exportImg)} width="100" alt="exportImg" />
                </div>
              </Card.Body>

              <Card.Footer
                className="d-flex justify-content-between align-items-center border-0 p-0"
                style={{ margin: 0, background: 'none' }}
              >
                <span role="img" aria-label="star">
                  ⭐⭐⭐⭐⭐
                </span>
                <a href="#">(480 reviews)</a>
              </Card.Footer>
            </Card>
            <div className='d-flex justify-content-end m-2'>
              <Badge className="text-decoration-underline" bg="primary" style={{ cursor: 'pointer' }}>
                view more
              </Badge>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ImageCard;
