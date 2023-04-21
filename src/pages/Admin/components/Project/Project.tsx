import { FC}  from "react";
import { NewProject } from "./components/NewProject/NewProject";

export const Project: FC = () => {
    return (
        <>
            <h1>PANEL ADMINISTRATEUR</h1>
            <h2>Projet</h2>
            <div id="movie-admin-form" className="dashboard-home">
                <NewProject />
            </div>
        </>
    )
}
