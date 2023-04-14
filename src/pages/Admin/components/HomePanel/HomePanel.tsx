import { useState, useContext, FC } from 'react';

import Button from '../../../../components/Button/Button.jsx';

import { ProjectContext } from "../../../../App";

import './Home.css';
import {handleSubmitFile} from "../../../../services/admin/common";

const Home: FC = () => {
    const project = useContext(ProjectContext);

    const [uploadMedia, setUploadMedia] = useState<File | undefined>(undefined);

    return (
        <div className="dashboard">
            <h1>PANEL ADMINISTRATEUR</h1>
            <h2>Home Page</h2>
            {/* UPLOAD HOME BACKGROUND VIDEO */}
            <div id="dashboard-media" className="dashboard-home">
                <div className="dashboard-content flex column">
                    <h3>Vidéo de la page d'accueil</h3>
                    <form>
                        <div>
                            <input
                                type="file"
                                name="home_media.mp4"
                                accept=".webm"
                                onChange={(e) => setUploadMedia(handleSubmitFile(e))}
                                required
                            />
                            <Button isBlack={true} text="Enregister" type="submit" size="button-low"/>
                        </div>
                    </form>
                </div>
            </div>
            {/* UPLOAD HOME MAIN ACTOR */}
            <div id="dashboard-acteur" className="dashboard-home">
                <div className="dashboard-content flex column">
                    <h3>Acteurs mis en avant en page d'accueil</h3>
                    <form>
                        <div className="dashboard-select flex row justifyCenter center">
                        </div>
                        <Button isBlack={true} text="Enregistrer" size="button-low"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home