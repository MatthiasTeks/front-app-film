import React, { useState, useEffect, FC } from "react";
import Resume from "./components/Resume/Resume";
import './Gallery.css';
import {useDataWithLoading} from "../../services/api/common";
import { ProjectType } from "../../types/ProjectInterface";

interface GalleryProps {
    col: number;
    row: number;
}

const Gallery: FC<GalleryProps> = ({ col, row }) => {
    const { data, isLoading, isError } = useDataWithLoading("projet/page?count=6&type=all");

    const [projectDisplay, setProjectDisplay] = useState<ProjectType[]>([]);

    useEffect(() => {
        if(data){
            setProjectDisplay(data);
        }
    }, [data])

    if(isLoading) return null;

    return (
        <React.Fragment>
            <Resume />
            <div className="bande-demo-gallery flex column">
            </div>
        </React.Fragment>
    )
}

export default Gallery