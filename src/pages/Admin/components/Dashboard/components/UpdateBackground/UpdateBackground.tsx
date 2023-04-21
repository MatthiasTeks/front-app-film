import {FC, FormEvent, useContext, useEffect, useState} from "react";

import InputFile from "../../../../../../components/Input/InputFile/InputFile";
import Button from "../../../../../../components/Button/Button";

import { AlertContext } from "../../../../../../contexts/AlertContext";
import { useDataWithLoading } from "../../../../../../services/api/fetch";
import { uploadFileToUrl } from "../../../../../../services/api/file";

import './UpdateBackground.css';

export const UpdateBackground: FC = () => {
    const { addAlert } = useContext(AlertContext);
    const { data, isLoading } = useDataWithLoading('background');

    // store video after updating database
    const [videoUrl, setVideoUrl] = useState<File | null>(null);
    // store key video to make change dynamic
    const [videoKey, setVideoKey] = useState<number>(0);
    // store new file video to upload
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const uploadHomeVideo = (e: FormEvent<HTMLFormElement>, file: any, url: string) => {
        e.preventDefault();
        if(file){
            uploadFileToUrl(e, file, url)
                .then(r => {
                    if(r.status === 200){
                        setVideoUrl(selectedFile);
                        setSelectedFile(null);
                        addAlert({ message: "Upload réussie", type: "success" });
                    } else {
                        addAlert({ message: "Upload failed", type: "error" });
                    }
                })
        }
    };

    const getSource = () => {
        if (videoUrl) {
            return URL.createObjectURL(videoUrl);
        } else if (selectedFile) {
            return URL.createObjectURL(selectedFile);
        } else {
            return data || null;
        }
    };


    useEffect(() => {
        setVideoKey((prevKey) => prevKey + 1);
    }, [selectedFile]);

    return (
        <div id="dashboard-media" className="dashboard-home">
            <div className="dashboard-content flex column">
                <h3>Vidéo de la page d'accueil</h3>
                <form onSubmit={(e) => {uploadHomeVideo(e, selectedFile, 'background/update')}}>
                    <div>
                        <InputFile<File | null> id="update-bg" required={true} accept=".webm" setter={setSelectedFile} label="" />
                        { !isLoading &&
                            <video key={videoKey} autoPlay muted loop id="background-video-admin">
                                <source src={getSource()} type="video/webm" />
                            </video>
                        }
                        <Button category="primary-btn" text="Enregister" disabled={!selectedFile} type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
