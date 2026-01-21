// HeroCarousel.jsx dùng để tạo 1 carousel hiển thị các hình ảnh
import { Carousel } from "react-bootstrap";
import { banners } from "../data/bannerImages";

function HeroCarousel() {
  return (
    <Carousel fade interval={3000} pause="hover" indicators={true} controls={true}>
      {banners.map((banner, index) => (
        <Carousel.Item key={index}>
  <div className="hero-wrapper">
    <img
      className="hero-banner"
      src={banner.image}
      alt={`Slide ${index + 1}`}
    />

    <div className="hero-overlay"></div>

    <Carousel.Caption>
      <h3>{banner.title}</h3>
      <p>{banner.description}</p>
    </Carousel.Caption>
  </div>
</Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;