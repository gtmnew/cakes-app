import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Avaliação</p>
        <h1 className="primary-heading">O que dizem sobre mim</h1>
        <p className="primary-text">
          Nossos clientes adoram a qualidade e o sabor dos nossos doces. Cada
          mordida é uma explosão de sabor que traz alegria e satisfação. Estamos
          sempre recebendo elogios pela variedade que sabores que oferecemos.
        </p>
      </div>

      <div className="testimonial-section-bottom">
        <img
          src={ProfilePic}
          className="testimonial-profile-pic"
          alt="imagem do avaliador"
        />
        <p>
          Descobri esta confeiteira através de uma indicação e não me arrependo
          de cada pedido que fiz. Sempre muito atensiosa e educada durante o
          atendimento e um capricho e carinho nos bolos que eu nunca vi antes!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>João Guilherme</h2>
      </div>
    </div>
  );
};

export default Testimonials;
