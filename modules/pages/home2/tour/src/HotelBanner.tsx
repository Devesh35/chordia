import './HotelBanner.css';

export const HotelBanner: React.FC<{
  hotelName: string;
  location: string;
  discount: number;
}> = ({ hotelName, location, discount }) => {
  return (
    <div
      className="card mx-2 my-4"
      style={{
        height: '200px',
        // backgroundImage:
        //   "url('https://png.pngtree.com/background/20210711/original/pngtree-flat-tourist-season-world-map-background-picture-image_1116739.jpg')",
        backgroundColor: '#C4E1F6',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        color: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <div className="row g-0 h-100 ">
        {/* Hotel Image Section */}
        <div className="col-4 d-flex align-items-center">
          <img
            src="https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg"
            className="img-fluid rounded-start"
            alt="Hotel"
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
        {/* Hotel Name and Location Section */}
        <div className="col-4 d-flex flex-column justify-content-center text-center">
          <div className="card-body h-100 d-flex flex-column justify-content-center">
            <h3
              // className="card-title anton-regular"
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#1E3E62',
                fontFamily: 'cursive',
                textShadow: '0 0 5px white, 0 0 10px white',
              }}
            >
              {hotelName}
            </h3>
            <p className="card-text kalam-regular" style={{ fontSize: '1.7rem', color: '#024CAA' }}>
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
                color: '#024CAA',
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
