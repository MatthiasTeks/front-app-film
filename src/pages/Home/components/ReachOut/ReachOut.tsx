import { FC } from 'react';
import { Animation } from "../../../../components/Utils/Animation/Animation";
import { Button } from "../../../../components/Button/Button.jsx";
import './ReachOut.css';

export const ReachOut: FC = () => {
    return (
        <div className="home-holder">
            <div className="home-test flex column center justifyCenter">
                <Animation x={-40} xEnd={0} delay={0.2} y={0} yEnd={0} ease='linear' duration={0}>
                    <h2 className="is4 is-white">
                        DISCUTONS DE TON PROJET
                    </h2>
                    <p className="is5">
                        Notre proposition originale est de créer une bande démo qui te ressemble
                        afin que tu puisses librement disposer d'images qui te représente artistiquement.
                    </p>
                    <a href="https://www.instagram.com/lesfilmsdelabande/?hl=fr" target="_blank" rel="noreferrer">
                        <Button category="secondary-btn" text="Contact" type="button"/>
                    </a>
                </Animation>
            </div>
        </div>
    )
}
