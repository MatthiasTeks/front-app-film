import { FC } from 'react';
import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button/Button.jsx";
import { Animation } from "../../../../components/Utils/Animation/Animation";
import './Introduction.css';

export const Introduction: FC = () => {
    return (
        <div className="home-bande-demo flex column justifyCenter">
            <Animation x={-40} xEnd={0} delay={0.4} y={0} yEnd={0} ease="linear" duration={0}>
                <div id="home-bande-demo-holder" className="flex column start justifyCenter" style={{height: "100%", width: "100%"}}>
                    <h2 className="is2">Une bande démo, c'est quoi ?</h2>
                    <div className="home-bande-demo-resume flex column">
                        <p className="is5">C'est plusieurs séquences qui montrent ton jeu d'acteur.</p>
                        <p className="is5">La bande démo c'est ton CV visuel. C'est la meme chose qu'un book photo mais mis en image. C'est la premiere image que l'on voit de toi lors d'un casting et c'est avant tout, ton premier lien avec ton agent. Il est donc indispensable qu'elle te mette en valeur artistiquement.</p>
                    </div>
                    <Link to="bande-demo">
                        <Button category="tertiary-btn" text="En savoir plus"/>
                    </Link>
                </div>
            </Animation>
        </div>
    )
}