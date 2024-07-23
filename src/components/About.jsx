import AboutBackground from "../Assets/background3.jpg";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="imagem de donuts" />
      </div>

      <div className="about-section-text-container">
        <h1 className="primary-subheading">Sobre mim</h1>
        <h1 className="primary-heading">
          É importante conhecer quem te alimenta!
        </h1>

        <p className="primary-text">
          Desde pequena, sempre tive uma paixão inigualável pela confeitaria. Em
          2017, decidi transformar essa paixão em profissão ao concluir o curso
          de confeitaria na Fundamental - Assessoria e Treinamento. Desde então,
          tenho me dedicado inteiramente à arte de criar doces deliciosos e
          visualmente encantadores.
        </p>

        <p className="primary-text">
          Ao longo dos últimos 7 anos, tenho trabalhado com encomendas,
          conquistando a confiança e o paladar de muitos clientes. Minha
          principal habilidade é a confecção de bolos, mas também preparo uma
          ampla variedade de outros doces, incluindo ovos de Páscoa recheados,
          bolos de pote, brownies, cookies, tortas, brigadeiros gourmets,
          mousses e muito mais.
        </p>
      </div>
    </div>
  );
};

export default About;
