import React from "react";
import "./TCC.css";

const TCC = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 400;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="TCC animate__animated animate__fadeIn">
      <section>
        <h1 className="tcc-title">Les TCC</h1>
      </section>
      <section>
        <div className="container reveal">
          <div className="text-container">
            <p>
              Les thérapies cognitives et comportementales sont des thérapies
              brèves, validées scientifiquement, qui visent à remplacer les
              idées négatives et les comportements inadaptés par des pensées et
              des réactions en adéquation avec la réalité. Elles abordent les
              problématiques en se basant sur l’analyse des mécanismes
              d’acquisition et de maintien des comportements problèmes sans
              forcément en chercher la cause dans l’inconscient ou dans le passé
              de la personne. Les TCC aident à dépasser progressivement les
              symptômes invalidants tel que le stress, les évitements, les
              inhibitions à l’origine de la souffrance psychique.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="text-container">
            <p>
              Le but est de remplacer le comportement problème, grâce à un
              nouvel apprentissage, par une conduite plus adéquate. Un travail
              sur les émotions est également mené. Pour cela on va aider le
              patient à :
            </p>
            <ul>
              <li>
                S’affirmer en se confrontant aux situations stressantes par une
                habituation progressive
              </li>
              <li>
                Endiguer le symptôme sous toutes ses formes en modifiants les
                pensées et les cognitions qui l’entretiennent
              </li>
              <li>
                Prendre conscience de son potentiel, restaurer son sentiment
                d’auto-efficacité
              </li>
              <li>
                Apprendre à identifier et à corriger les pensées automatiques
                qui le freinent dans sa progression
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container reveal">
          <div className="text-container">
            <p>
              Les TCC sont indiquées pour toute personne : enfants, adolescents,
              adultes et personnes âgées qui souhaitent trouver des solutions
              pour modifier leurs schémas de pensées et comportements qui
              sous-tendent leurs difficultés. Les études ont prouvés
              l’efficacité des TCC dans de nombreux domaines tels que :
            </p>
            </div>

            <div className="text-container">
            <ul>
              <li><b>Chez l'adulte</b></li>
              <li>Les troubles anxieux</li>
              <li>Les troubles paniques</li>
              <li>Les troubles anxieux généralisés</li>
              <li>Les états de stress post-traumatiques</li>
              <li>Les troubles obsessionnels et compulsifs</li>
              <li>Les phobies sociales</li>
              <li>Les phobies spécifiques</li>
              <li>Les troubles dépressifs</li>
              <li>Les dépendances (alcool, tabac…)</li>
            </ul>
            </div><div className="text-container">
            <ul>
            <li><b>Chez l'enfant</b></li>
              <li>Phobie scolaire</li>
              <li>Troubles oppositionnels</li>
              <li>
                TDA/H (trouble déficitaire de l’attention avec ou sans
                hyperactivité)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TCC;
