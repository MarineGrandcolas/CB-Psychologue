import React from "react"
import Cabinet from "../../assets/photoscabinet.png"
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact animate__animated animate__fadeIn'>
      <div className="contact-infos">
        <h2>Prendre rendez-vous</h2>
        <p>BRISBOIS Catherine</p>
        <p>58, rue principale</p>
        <p>57230 SCHORBACH</p>
        <p>06 74 77 79 98</p>
      </div>

      <div className="technical-infos">
        <h2>Le cabinet</h2>
        <img src={Cabinet} alt="aperçu du cabinet" />
        <p>
          Titres reconnus par l’état, enregistrés et vérifiables
          auprès du répertoire ADELI (N°579308768)</p>
      </div>
    </div>
  );
};

export default Contact;
