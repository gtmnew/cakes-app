import Logo from "../Assets/Logo1.jpg";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="logo" />
        </div>

        <div className="footer-icons">
          <a href="https://wa.me/5511974533388" target="_blank">
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/nathyconfeiteira10/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/nathalia.mouradasilva.3"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-links">
          <h3>Menu</h3>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="scroll-link"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="scroll-link"
          >
            Sobre mim
          </ScrollLink>
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            className="scroll-link"
          >
            Nosso Trabalho
          </ScrollLink>
          <ScrollLink
            to="testimonials"
            smooth={true}
            duration={500}
            className="scroll-link"
          >
            Avaliação
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="scroll-link"
          >
            Contato
          </ScrollLink>
        </div>

        <div className="footer-links">
          <h3>Contatos</h3>
          <a href="https://wa.me/5511974533388" target="_blank">
            11 97453-3388
          </a>
          <a href="#">naaty.mooura@hotmail.com</a>
          <a
            href="https://www.instagram.com/nathyconfeiteira10/"
            target="_blank"
          >
            @nathyconfeiteira10
          </a>
        </div>

        <div className="footer-links">
          <h3>Seguraça e Privacidade</h3>
          <a href="#">Termos & Condições</a>
          <a href="#">Política de Privacidade</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
