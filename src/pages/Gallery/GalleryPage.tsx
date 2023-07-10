import React, {FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from "../../services/api/fetch";
import { Resume } from "./components/Resume/Resume";
import { Animation } from "../../components/Utils/Animation/Animation";
import { Project } from "../../interfaces/Interface";
import './GalleryPage.css';

export const GalleryPage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [type, setType] = useState<string>('bande-demo')
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchMoreData = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchData<Project[]>(`project/page?page=${page}&type=${type}`);
                if(data.length > 0){
                    setProjects(prevProjects => [...prevProjects, ...data]);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        })();
    }, [page])

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchData<Project[]>(`project/page?page=1&type=bande-demo`);
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        })();
    }, []);

    if(!projects.length) return null;

    return (
        <React.Fragment>
            <Resume />
                <InfiniteScroll
                    dataLength={projects.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    {projects.map(project => (
                        <Link key={project.id_project} to={`/demo/${project.label}`} >
                            <Animation y={0} xEnd={0} delay={0} ease={'easeInOut'} x={0} duration={0.4} yEnd={0} whileHover={{ y: -20 }}
                            >
                                <div className="project-card">
                                    <img src={project.s3_image_key} alt={project.name} />
                                    <div className="project-details">
                                        <h2>{project.name}</h2>
                                        <p>{project.label}</p>
                                    </div>
                                </div>
                            </Animation>
                        </Link>
                    ))}
                </InfiniteScroll>
        </React.Fragment>
    )
}