import {FC} from "react";
import { Button } from "../../../../../../components/Button/Button";

export const UpdateHighlight: FC = () => {
    return (
        <div id="dashboard-acteur" className="dashboard-home">
            <div className="dashboard-content flex column">
                <h3>Acteurs mis en avant en page d'accueil</h3>
                <form>
                    <div className="dashboard-select flex row justifyCenter center">
                    </div>
                    <Button category="primary-btn" text="Enregistrer" />
                </form>
            </div>
        </div>
    )
}
