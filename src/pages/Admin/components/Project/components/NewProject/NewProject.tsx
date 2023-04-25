import React, { FC, useContext, useState } from "react";

import { AlertContext } from "../../../../../../contexts/AlertContext";
import { InputComponent } from "../../../../../../components/Input/InputComponent";
import { Select } from "../../../../../../components/Input/Select/Select";
import { Checkbox } from "../../../../../../components/Input/Checkbox/Checkbox";
import { InputFile } from "../../../../../../components/Input/InputFile/InputFile";
import { Button } from "../../../../../../components/Button/Button";
import { Loader } from "../../../../../../components/Loader/Loader";

import { OPTIONS_GENDER, OPTIONS_PROJET } from '../../../../../../constants/options';
import { verifyTypeFiles } from "../../../../../../helpers/file";
import { uploadArrayFileToUrl } from "../../../../../../services/api/file";
import { postRequest } from "../../../../../../services/api/post";

import './NewProject.css';

export const NewProject: FC = () => {
    const { addAlert } = useContext(AlertContext);

    // hold project value and files
    const [nameProject, setNameProject] = useState('');
    const [selectedGender, setSelectedGender] = useState<string>(OPTIONS_GENDER[0].value);
    const [selectedTypeProjet, setSelectedTypeProjet] = useState<string>(OPTIONS_GENDER[0].value);
    const [selectedMainPhoto, setSelectedMainPhoto] = useState<File | null>(null);
    const [selectedOtherPhoto, setSelectedOtherPhoto] = useState<File[] | null>(null);
    const [selectedHorizontalPhoto, setSelectedHorizontalPhoto] = useState<File | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
    const [isProjectHighlighted, setIsProjectHighlighted] = useState(false);

    // hold loading to wait api response
    const [isLoading, setIsLoading] = useState(false);

    const createProject = async (body: any) => {
        try {
            const response = await postRequest("project/create", body);
            if (response.status === 201) {
                addAlert({ message: "Le projet a bien été crée", type: "success" });
            } else if(response.status === 409){
                addAlert({ message: "Un projet du meme nom existe déjà", type: "error" });
            }
            else {
                addAlert({ message: "Erreur lors de la création du projet", type: "error" });
            }
        } catch (error) {
            addAlert({ message: "Upload des fichiers échoués", type: "error" });
            throw error;
        }
    };

    const handleSubmitNewProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let date = new Date().toLocaleDateString('fr-CA');
            if (selectedMainPhoto !== null && selectedOtherPhoto !== null && selectedOtherPhoto.length === 2 && selectedHorizontalPhoto !== null && selectedVideo !== null) {
                let arrayPhoto = [selectedMainPhoto, selectedOtherPhoto, selectedHorizontalPhoto].flat();
                let arrayVideo = [selectedVideo];
                if (verifyTypeFiles(arrayPhoto, "image/webp") && verifyTypeFiles(arrayVideo, "video/mp4")) {
                    const response = await uploadArrayFileToUrl(Array(arrayPhoto, arrayVideo).flat(), "project/upload-many");

                    if (response && response.data.success) {
                        const body = {
                            name: nameProject,
                            label: nameProject.replace(/\s/g, ""),
                            gender: selectedGender,
                            type_projet: selectedTypeProjet,
                            s3_image_main_key: response.data.urls[0],
                            s3_image_2_key: response.data.urls[1],
                            s3_image_3_key: response.data.urls[2],
                            s3_image_horizontal_key: response.data.urls[3],
                            s3_video_projet_key: response.data.urls[4],
                            date: date,
                            is_highlight: isProjectHighlighted ? 1 : 0
                        };

                        await createProject(body);
                    } else {
                        addAlert({message: "Upload des fichiers échoués", type: "error"});
                    }
                }
            } else {
                addAlert({ message: "Fichier manquant", type: "error" });
            }
        } catch {
            addAlert({ message: "Upload des fichiers échoués", type: "error" });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="form-new-projet flex column">
            {isLoading && <Loader />}
            <h3>Ajout projet</h3>
            <h4>Ajouter un nouveau projet à la base de donnée</h4>
            <form className="flex column" onSubmit={(e) => handleSubmitNewProject(e)}>
                <div className="holder-info-form">
                    <div>
                        <h5>Détail de l'acteur</h5>
                    </div>
                    <div>
                        <InputComponent type="text" value={nameProject} onChange={setNameProject} required placeholder="" label="Prénom"/>
                        <Select options={OPTIONS_GENDER} defaultValue={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} label="Sexe"/>
                        <InputFile<File | null> id="main-photo" required accept=".webp" setter={setSelectedMainPhoto} label="Photo principal" />
                        <InputFile<File[] | null> id="other-photo" required accept=".webp" setter={setSelectedOtherPhoto} label="Autres photos"  multiple />
                        <InputFile<File | null> id="horizontal-photo" required accept=".webp" setter={setSelectedHorizontalPhoto} label="Photo horizontal" />
                    </div>
                </div>
                <div className="holder-info-form">
                    <div>
                        <h5>Détail du projet</h5>
                    </div>
                    <div>
                        <Select options={OPTIONS_PROJET} defaultValue={selectedTypeProjet} onChange={(e) => setSelectedTypeProjet(e.target.value)} label="Type"  />
                        <InputFile<File | null> id="video-project" required accept=".mp4" setter={setSelectedVideo} label="Video du projet" key="video-project" />
                    </div>
                </div>
                <div className="holder-info-form">
                    <Checkbox label="Mettre en avant le projet sur la page home" checked={isProjectHighlighted} onChange={(e) => setIsProjectHighlighted(e.target.checked)} />
                </div>
                <Button category="primary-btn" text="Enregister" type="submit"/>
            </form>
        </div>
    )
}
