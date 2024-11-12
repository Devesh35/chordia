'use client';

import './Details.css';

const CakeBanner: React.FC<{
  shopName: string;
  location: string;
  discount: number;
}> = ({ shopName, location, discount }) => {
  return (
    <div
      className="card card mx-2 my-2"
      style={{
        height: '200px',
        backgroundImage: 'url(https://i.ibb.co/JcVFg55/cake.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        color: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <div className="row g-0 h-100 ">
        {/* Shop Image Section */}
        <div className="col-4 d-flex align-items-center">
          <img
            src="https://images.unsplash.com/photo-1595144780677-6d0b5abbd089?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjYWtlJTIwc2hvcHxlbnwwfDB8MHx8fDA%3D"
            className="img-fluid rounded-start"
            alt="Shop"
            style={{
              marginLeft: '10px',
              height: '180px',
              width: '65%',
              objectFit: 'cover',
              borderRadius: '12px',
              border: '8px solid white',
            }}
          />
        </div>
        {/* Shop Name and Location Section */}
        <div className="col-4 d-flex flex-column justify-content-center text-center">
          <div className="card-body h-100 d-flex flex-column justify-content-center">
            <h3
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'yellow',
                fontFamily: 'Segoe Print',
                textShadow: '0 0 5px white, 0 0 10px white',
              }}
            >
              {shopName}
            </h3>
            <p className="card-text kalam-regular" style={{ fontSize: '1.7rem', color: 'white', fontWeight: 'bold' }}>
              {location}
            </p>
          </div>
        </div>
        {/* Discount Section */}
        <div className="col-4 d-flex align-items-center justify-content-center h-100">
          <div className="text-center">
            <span
              style={{
                fontSize: '1.5rem',
                display: 'block',
                color: 'white',
                fontFamily: 'cursive',
                fontWeight: 'bold',
              }}
            >
              Discount Upto
            </span>
            <span
              className="knewave-regular"
              style={{
                fontSize: '5rem',
                // fontFamily: "cursive",
                fontWeight: 'bold',
                color: 'red',
                borderRadius: '5px',
                textShadow: '0 0 5px white, 0 0 10px white',
                WebkitTextStroke: '1px white',
              }}
            >
              {discount}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeBanner;
