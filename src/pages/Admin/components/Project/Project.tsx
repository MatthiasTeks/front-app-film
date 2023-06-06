import { FC }  from "react";
import { NewProject } from "./components/NewProject/NewProject";

export const Project: FC = () => {
    return (
        <>
            <h1>Projets</h1>
            <h2>Gérer les projets du site</h2>
            <div id="movie-admin-form" className="admin-container">
                <NewProject />
            </div>
        </>
    )
}
