import React, {FC, useContext, useState} from "react";
import {InputComponent} from "../../../../../../components/Input/InputComponent";
import {Select} from "../../../../../../components/Input/Select/Select";
import { OPTIONS_GENDER, OPTIONS_PROJET } from '../../../../../../constants/options';
import InputFile from "../../../../../../components/Input/InputFile/InputFile";
import {Checkbox} from "../../../../../../components/Input/Checkbox/Checkbox";
import Button from "../../../../../../components/Button/Button";
import {AlertContext} from "../../../../../../contexts/AlertContext";
import {verifyTypeFiles} from "../../../../../../helpers/file";
import {uploadArrayFileToUrl} from "../../../../../../services/api/file";
import {postRequest} from "../../../../../../services/api/post";
import './NewProject.css';

export const NewProject: FC = () => {
    const { addAlert } = useContext(AlertContext);

    const [nameProject, setNameProject] = useState('');
    const [selectedGender, setSelectedGender] = useState<string>(OPTIONS_GENDER[0].value);
    const [selectedTypeProjet, setSelectedTypeProjet] = useState<string>(OPTIONS_GENDER[0].value);
    const [selectedMainPhoto, setSelectedMainPhoto] = useState<File | null>(null);
    const [selectedOtherPhoto, setSelectedOtherPhoto] = useState<File[] | null>(null);
    const [selectedHorizontalPhoto, setSelectedHorizontalPhoto] = useState<File | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
    const [isProjectHighlighted, setIsProjectHighlighted] = useState(false);

    const handleSubmitNewProject = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let date = new Date().toLocaleDateString('fr-CA');
            if(selectedMainPhoto !== null && selectedOtherPhoto !== null && selectedOtherPhoto.length === 2 && selectedHorizontalPhoto !== null && selectedVideo !== null){
                let arrayPhoto = [selectedMainPhoto, selectedOtherPhoto, selectedHorizontalPhoto].flat();
                let arrayVideo = [selectedVideo];
                if(verifyTypeFiles(arrayPhoto, 'image/webp') && verifyTypeFiles(arrayVideo, 'video/mp4')){
                    uploadArrayFileToUrl(Array(arrayPhoto, arrayVideo).flat(), 'project/upload-many')
                        .then(response => {
                            if(response){
                                if(response.data.success){
                                    let body = {
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
                                        is_highlight: isProjectHighlighted? 1 : 0
                                    }
                                    try {
                                        postRequest('project/create', body)
                                            .then(response => {
                                                if(response.status === 201){
                                                    addAlert({message: 'Le projet a bien été crée', type: 'success'})
                                                } else {
                                                    addAlert({message: 'Erreur lors de la création du projet', type: 'error'})
                                                }
                                            })
                                    } catch (error) {
                                        addAlert({message: 'Upload des fichiers échoués', type: 'error'})
                                        throw error;
                                    }
                                } else {
                                    addAlert({message: 'Upload des fichiers échoués', type: 'error'})
                                }
                            }
                        })
                }
            } else {
                addAlert({ message: "Autres photos doit contenir 2 photos.", type: "error" })
            }
        } catch {
            addAlert({message: 'Upload des fichiers échoués', type: 'error'})
        }
    }


    return (
        <div className="form-new-projet flex column">
            <h3>Ajout d'un nouveau projet</h3>
            <form className="flex column" onSubmit={(e) => handleSubmitNewProject(e)}>
                <InputComponent type="text" value={nameProject} onChange={setNameProject} required placeholder="nom de l'acteur" label=""/>
                <Select options={OPTIONS_GENDER} defaultValue={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} />
                <Select options={OPTIONS_PROJET} defaultValue={selectedTypeProjet} onChange={(e) => setSelectedTypeProjet(e.target.value)} />
                <InputFile<File | null> id="main-photo" required accept=".webp" setter={setSelectedMainPhoto} label="Photo principal de l'acteur" />
                <InputFile<File[] | null> id="other-photo" required accept=".webp" setter={setSelectedOtherPhoto} label="Autres photos"  multiple />
                <InputFile<File | null> id="horizontal-photo" required accept=".webp" setter={setSelectedHorizontalPhoto} label="Photo horizontal de l'acteur" />
                <InputFile<File | null> id="video-project" required accept=".mp4" setter={setSelectedVideo} label="Video du projet" key="video-project" />
                <Checkbox label="Mettre en avant le projet" checked={isProjectHighlighted} onChange={(e) => setIsProjectHighlighted(e.target.checked)} />
                <Button category="primary-btn" text="Enregister" type="submit"/>
            </form>
        </div>
    )
}
