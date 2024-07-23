import {
  faHouseFloodWater,
  faUtensils,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  const workInfoData = [
    {
      image: <FontAwesomeIcon icon={faHouseFloodWater} />,
      title: "Feito como se fosse em casa",
      text: "Todos nossos doces são preparados com carinho e atenção nos detalhes. Como se fossem feitos na cozinha da sua casa.",
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} />,
      title: "Ingredientes selecionados",
      text: "Escolhemos a dedo os melhores ingredientes para garantir que nossos doces sejam sempre fresquinhos, deliciosos e principalmente de muita qualidade.",
    },
    {
      image: <FontAwesomeIcon icon={faTruck} />,
      title: "Entrega em toda cidade",
      text: "Levamos nossos doces diretamente até você, em qualquer lugar da cidade. Nossa equipe de entregas garante que seu pedido chegue em perfeitas condições!",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso trabalho</p>
        <h1>Como servimos você</h1>
        <p className="primary-text">
          Nossa missão é proporcionar a você uma experiência única e deliciosa.
          Desde a seleção cuidadosa dos ingredientes até a entrega no seu
          endereço. Cada etapa do nosso processo é pensada para garantir que
          você receba os melhores doces da cidade. Eu e minha equipe estaremos
          sempre comprometidos com a qualidade e a satisfação dos nossos
          clientes.
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
      <div className="cakes-title">
        <h1 className="primary-subheading">Pedidos realizados:</h1>
      </div>
    </div>
  );
};

export default Work;
