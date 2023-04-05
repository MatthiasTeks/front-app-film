import React, { useState, FC, useContext, useEffect } from "react";

import { getSignedProjectMediaUrl } from "../../services/api/common";

import { ProjectContext } from "../../App";

import Resume from "./components/Resume/Resume";

import './Gallery.css';

const Gallery: FC = () => {
    const projects = useContext(ProjectContext);
    const [numProjects, setNumProjects] = useState(6);
    const [signedUrls, setSignedUrls] = useState<{[key: string]: string}>({});

    // display more project when user scroll
    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.offsetHeight;

        if (scrollTop + windowHeight >= fullHeight && numProjects < (projects ?? []).length) {
            setNumProjects(numProjects + 6);
        }
    };

    // render project depend on user scroll
    const renderProjects = () => {
        const visibleProjects = (projects ?? []).slice(0, numProjects);

        return visibleProjects.map((project) => {
            let signedUrl = signedUrls[project.s3_image_main_key];

            if (signedUrl === undefined) {
                signedUrl = getSignedProjectMediaUrl(project.s3_image_main_key).data?.signedUrl ?? '';
                setSignedUrls((prevSignedUrls) => ({...prevSignedUrls, [project.s3_image_main_key]: signedUrl }));
            }

            if (signedUrl) {
                return (
                    <div key={project.id_project} className="gallery-project">
                        <img src={signedUrl} alt={project.label} />
                        <h3>{project.name}</h3>
                    </div>
                )
            } else {
                return null;
            }
        });
    };

    // set scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [numProjects]);


    return (
        <React.Fragment>
            <Resume />
            <div className="bande-demo-gallery flex column">
                {renderProjects()}
            </div>
        </React.Fragment>
    )
}

export default Gallery