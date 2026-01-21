// src/pages/Home.jsx
import HeroCarousel from "../components/HeroCarousel";
import { banners } from "../data/bannerImages";
import PizzaMenu from "../components/PizzaMenu";
import BookingForm from "../components/BookingForm";

export default function Home() {
  return (
    <>
      <HeroCarousel slides={banners} />

      <div style={{ marginTop: "40px" }}>
        <PizzaMenu />
      </div>

      <div style={{ marginTop: "40px" }}>
        <BookingForm />
      </div>
    </>
  );
}