import React, { FC } from 'react';

import Button from '../../components/Button/Button';
import { Animation } from "../../components/Utils/Animation/Animation";

import LaBandeTeam from '../../assets/LaBandeTeam.webp';
import LaBandeWork from '../../assets/LaBandeWork.webp';
import LaBandeWork2 from '../../assets/LaBandeWork2.webp';

import './Crew.css';

const Crew: FC = () => {
    return (
        <div className="la-bande flex column">
            <div
                id="la-bande-content"
                className="flex row center justifyCenter"
            >
                <div
                    id="la-bande-holder"
                    className="flex column center start blackText"
                    style={{ height: '100%', width: '100%' }}
                >
                    <h2 className="is2">La Bande c'est qui ?</h2>
                    <div className="la-bande-resume flex column">
                        <br />
                        <p className="is5">
                            Les Films de la Bande est un collectif de création de de bandes
                            démos sur mesure. Réalisatrice, directeur de la photographie,
                            assistant réalisateur, monteuse, ingénieur du son mixeur et
                            étalonneur.
                        </p>
                        <br />
                        <p className="is5">
                            Tous nous évoluons dans le milieu de l’audiovisuel depuis plusieurs
                            années. Ensemble, nous avons réuni nos compétences pour créer un
                            collectif au service des actrices et des acteurs de demain.
                        </p>
                        <br />
                        <p className="is5">
                            Notre ambition : que les talents de demain aient la capacité de
                            montrer de quoi ils sont capables.
                        </p>
                        <br />
                    </div>
                    <a
                        href="https://www.instagram.com/lesfilmsdelabande/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button isBlack={true} text="Contact nous" />
                    </a>
                </div>
                <Animation delay={0.1} y={0} yEnd={0} x={0} xEnd={0}>
                    <img src={LaBandeTeam} alt="" />
                </Animation>
            </div>
            <div id="la-bande-img" className="flex row center justifyBetween">
                <Animation delay={0.3} y={0} yEnd={0} x={0} xEnd={0}>
                    <img src={LaBandeWork} alt="" />
                </Animation>
                <Animation delay={0.5} y={0} yEnd={0} x={0} xEnd={0}>
                    <img src={LaBandeWork2} alt="" />
                </Animation>
            </div>
        </div>
    );
};

export default Crew;