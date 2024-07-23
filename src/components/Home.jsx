import Navbar from "./Navbar";
import Banner from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/cake1.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-banner-image-container">
          <img src={Banner} alt="imagem da home" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seu <span className="cake-text">BOLO FAVORITO</span> entregue na sua
            casa!
          </h1>
          <p className="primary-text">
            Diversos sabores deliciosos para adoçar seus melhores momentos. Peça
            já o seu e receba um mimo surpresa!!!
          </p>
          <a href="https://wa.me/5511974533388" target="_blank">
            <button className="secondary-button">
              Faça seu pedido <FiArrowRight />
            </button>
          </a>
        </div>

        <div className="home-image-section">
          <div className="home-primary-image">
            <img src={BannerImage} alt="donuts" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
