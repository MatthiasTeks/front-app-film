import React, {FC, useContext, useEffect, useRef, useState} from "react";
import { useDataWithLoading } from "../../../../services/api/fetch";
import { InputComponent } from "../../../../components/Input/InputComponent";
import { Button } from "../../../../components/Button/Button";
import { postRequest } from "../../../../services/api/post";
import { AlertContext } from "../../../../contexts/AlertContext";
import { uploadFileToUrl } from "../../../../services/api/file";
import './Feed.css';

interface Feeds {
    id_feed: number,
    name: string;
    resume: string;
    date: number;
    s3_image_key: string;
    is_link: number;
    link: string;
    signedUrl: string;
    selectedFile?: File;
}

export const Feed: FC = () => {
    const { data, isLoading } = useDataWithLoading("feed");
    const news: Feeds[] = data ?? [];

    const { addAlert } = useContext(AlertContext);

    const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [feedData, setFeedData] = useState<Feeds[]>([]);

    useEffect(() => {
        setFeedData(prevFeedData => {
            if (prevFeedData.length === 0 && news.length > 0) {
                return news;
            }
            return prevFeedData;
        });
    }, [news]);

    if(isLoading) return null;

    const handleButtonClick = (index: number) => {
        fileInputRefs.current[index]?.click();
    };

    const handleInputChange = (index: number, field: keyof Feeds, value: string) => {
        setFeedData(prevState => {
            const updatedFeedData = [...prevState];
            updatedFeedData[index] = {
                ...updatedFeedData[index],
                [field]: value
            };
            return updatedFeedData;
        });
    };

    const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFeedData(prevState =>
                prevState.map((feed, feedIndex) =>
                    feedIndex === index ? { ...feed, selectedFile: file } : feed
                )
            );
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, index: number) => {
        // retrieve feed submitted
        const selectedFeed = feedData[index];
        try {
            // if new media is uploaded by user, send file to S3 Bucket first
            if(selectedFeed.selectedFile){
                const response = await uploadFileToUrl(selectedFeed.selectedFile, "project/upload-many");
                if(response && response.data.success){
                    const feedId = feedData[index].id_feed;
                    const body = {
                        name: feedData[index].name,
                        resume: feedData[index].resume,
                        date: feedData[index].date,
                        s3_image_key: feedData[index].s3_image_key,
                        is_link: feedData[index].is_link,
                        link: feedData[index].link,
                        id_feed: feedId,
                    }
                    await updateFeed(body);
                } else {
                    addAlert({message: "Upload des fichiers échoués", type: "error"});
                }
            } else {
                const feedId = feedData[index].id_feed;
                const body = {
                    name: feedData[index].name,
                    resume: feedData[index].resume,
                    date: feedData[index].date,
                    s3_image_key: feedData[index].s3_image_key,
                    is_link: feedData[index].is_link,
                    link: feedData[index].link,
                    id_feed: feedId,
                }
                await updateFeed(body);
            }
        } catch {
            addAlert({ message: "Upload des fichiers échoués", type: "error" });
        }
    };

    const updateFeed = async (body: any) => {
        try {
            const response = await postRequest("feed/update", body);
            if (response.status === 201) {
                addAlert({ message: "La feed a bien était modifié", type: "success" });
            }
            else {
                addAlert({ message: "Erreur lors de la modification", type: "error" });
            }
        } catch (error) {
            addAlert({ message: "Modification failed", type: "error" });
            throw error;
        }
    };

    return (
        <>
            <h1>Feed</h1>
            <h2>Gérer les feeds du site</h2>
            <div id="movie-admin-form" className="admin-container">
                <div id="actualite-holder" className="flex row justifyCenter center">
                    {feedData.map((feed, index) => (
                        <form key={`${feed.name}_${index}`} onSubmit={(e) => handleFormSubmit(e, index)}>
                            <div className="actualite-card">
                                <div className="actualite-img">
                                    <img
                                        alt={feed.name}
                                        height="350"
                                        src={feed.selectedFile ? URL.createObjectURL(feed.selectedFile) : feed.signedUrl}
                                    />
                                    <input
                                        type="file"
                                        ref={ref => (fileInputRefs.current[index] = ref)}
                                        style={{ display: "none" }}
                                        onChange={(file) => handleFileChange(index, file)}
                                    />
                                    <Button onClick={() => handleButtonClick(index)} category="tertiary-btn" text="Upload" type="button" />
                                </div>
                                <div className="actualite-resume">
                                    <InputComponent
                                        type="text"
                                        value={feed.name}
                                        onChange={(value) =>
                                            handleInputChange(index, "name", value)
                                        }
                                        placeholder={feed.name}
                                        label="Titre"
                                    />
                                    <InputComponent
                                        type="text"
                                        value={feed.resume}
                                        onChange={(value) =>
                                            handleInputChange(index, "resume", value)
                                        }
                                        placeholder=""
                                        label="Texte"
                                    />
                                    <InputComponent
                                        type="text"
                                        value={feed.link}
                                        onChange={(value) =>
                                            handleInputChange(index, "link", value)
                                        }
                                        placeholder=""
                                        label="Lien"
                                    />
                                    <Button category="primary-btn" text="Enregister" type="submit"/>
                                </div>
                            </div>
                        </form>
                    ))}
                </div>
            </div>
        </>
    )
}
