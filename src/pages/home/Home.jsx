import React from "react"
import { Link } from "react-router-dom"
import Portrait from "../../assets/catherinebrisbois.jpg"
import "./Home.css"

const Home = () => {
  return (
    <div className="Home animate__animated animate__fadeIn">
        <div className="portrait-presentation">
        <img src={Portrait} alt="portrait Catherine Brisbois" />
        <h2 className="Presentation-title">Catherine Brisbois</h2>
      </div>

      <div className="full-desc">
        <h2>Qui suis-je ?</h2>
        <p>
          Titulaire d’un Master II « évolution, involution et handicap » en 2011, j’ai
          obtenu mon diplôme de psychologue clinicienne mention "développement" à
          la faculté de Strasbourg.
          </p>
          <p>J’ai complété ma formation initiale par un cursus approfondi en <Link to='/tcc'><b>TCC</b></Link> à
          l’AFTCC <em>(Association française de thérapies cognitives et
          comportementales)</em> à Paris.
        </p>
        <p>
          C'est en 2016, à l’issue de 3 ans de formation supplémentaires que je valide mon titre de "thérapeute en thérapies cognitives et
          comportementales".
          </p>
    </div>
    </div>
  );
};

export default Home;
