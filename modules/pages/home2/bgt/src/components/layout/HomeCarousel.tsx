'use client';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';

interface ExampleCarouselImageProps {
  text: string;
  src: string;
}

export function ExampleCarouselImage({ text, src }: ExampleCarouselImageProps) {
  return <img className="d-flex w-100 carousel-image" src={src} alt={text} />;
}

export function HomeCarousel() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} fade>
        <Carousel.Item>
          <ExampleCarouselImage
            text="First slide"
            src="https://images.unsplash.com/photo-1516572980581-c9bd8bff75b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wcyUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage
            text="Second slide"
            src="https://images.unsplash.com/photo-1506606352681-649023fac596?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wcyUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </Carousel.Item>

        <Carousel.Item>
          <ExampleCarouselImage
            text="Third slide"
            src="https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxhcHRvcHMlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
