import React from "react";
import "./Consultations.css";

const Consultations = () => {
  return (
    <div className="Consultations animate__animated animate__fadeIn">
      <h2 className="consult-title">Pourquoi consulter ?</h2>
        <div className="text-container">
          <p>
            Chacun peut au cours de sa vie ressentir le besoin de consulter un
            psychologue. Que ce soit pour résoudre des problématiques qui
            envahissent le quotidien ou pour demander un soutien afin de
            traverser une période difficile. Les raisons de consulter peuvent
            être diverses :
          </p>
        </div>
        
        <div className="text-container">
          <ul>
            <li>Stress, anxiété</li>
            <li>Phobie</li>
            <li>Dépression</li>
            <li>Addictions</li>
            <li>Difficultés à surmonter une situation</li>
            <li>Difficultés d’affirmation de soi</li>
            <li>TOC (trouble Obsessionnel et Compulsif)</li>
            <li>Besoin d’un soutien ou d’une écoute</li>
          </ul>
        </div>

        <div className="text-container">
          <p>
            Un travail auprès d’un psychologue permet d’identifier les
            cognitions qui sont à l’origine des difficultés et ainsi de les
            modifier. De par le cadre de son travail soumis au secret
            professionnel, le psychologue garanti à chacun une liberté
            d’expression sans jugement.
          </p>
        </div>

        <h2 className="consult-title">Consultations</h2>
        <div className="text-container">
          <p>
            Un premier entretien permet de faire le point sur votre demande,
            d’évaluer votre situation et d’envisager des axes thérapeutiques.
            Avec votre accord nous pourrons envisager la fréquence et la
            modalité des entretiens. Un entretien dure 45mn (compter 45mn à 1h
            pour la 1ère séance.) Les honoraires pour un entretien sont de 48 €. Le règlement se fait par chèque ou en espèces à la fin de
            chaque entretien. Les consultations ne sont pas prises en charge par
            la sécurité sociale. Selon votre contrat de mutuelle un
            remboursement est possible. N’hésitez pas à me contacter.
          </p>
        </div>
    </div>
  );
};

export default Consultations;
