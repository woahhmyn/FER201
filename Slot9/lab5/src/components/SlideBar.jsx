import React from 'react';
import { Carousel } from 'react-bootstrap';
import { slideImages } from '../data/slideImages';

function SlideBar() {
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginBottom: "1.5rem"
      }}
    >
      <Carousel fade interval={3000}>
        {slideImages.map((slide, index) => (
          <Carousel.Item key={slide.id}>
            <div style={{ position: "relative" }}>
              
              {/* Ảnh slide */}
              <img
                className="d-block w-100"
                src={slide.image}
                alt={`Slide ${index + 1}`}
                style={{
                  height: "60vh",
                  minHeight: "350px",
                  objectFit: "cover"
                }}
              />
              {/* Gradient overlay ở dưới cùng của ảnh */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "45%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                  pointerEvents: "none"
                }}
              />

              {/* Caption nằm TRÊN gradient */}
              <Carousel.Caption
                style={{
                  bottom: "20px",
                  zIndex: 2
                }}
              >
                <h3 className="fw-bold">{slide.title}</h3>
                <p className="mb-0">{slide.description}</p>
              </Carousel.Caption>

            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SlideBar;
