import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { cakesInfoData } from "./CakesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

function App() {
  const [slidePerView, setSlidePerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) {
        setSlidePerView(1);
      } else {
        setSlidePerView(4);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
          className="swiper-container"
        >
          {cakesInfoData.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="bolo" className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
