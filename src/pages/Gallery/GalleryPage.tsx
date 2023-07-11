import React, {FC, useCallback, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from "../../services/api/fetch";
import { Resume } from "./components/Resume/Resume";
import { Animation } from "../../components/Utils/Animation/Animation";
import { Project } from "../../interfaces/Interface";
import './GalleryPage.css';
import { Loader } from "../../components/Loader/Loader";

export const GalleryPage: FC = () => {
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<string>('all');
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchMoreData = useCallback(() => {
        setPage(prevPage => prevPage + 1);
    }, []);

    const fetchProjects = useCallback(async (page: number, filter: string, appendData: boolean = false) => {
        try {
            let endpoint = filter !== "all" ? `project/type-page?page=${page}&type=${filter}` : `project/page?page=${page}`;
            const data = await fetchData<Project[]>(endpoint);

            if(data.length > 0){
                if(appendData){
                    setProjects(prevProjects => [...prevProjects, ...data]);
                } else {
                    setProjects(data);
                }
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }, []);

    useEffect(() => {
        if(page > 1) {
            fetchProjects(page, filter, true);
        }
    }, [page, fetchProjects]);

    useEffect(() => {
        setPage(1);
        fetchProjects(1, filter);
    }, [filter, fetchProjects]);

    useEffect(() => {
        console.log(hasMore)
    }, [hasMore])

    if(!projects.length) return null;

    return (
        <React.Fragment>
            <Resume filter={filter} setFilter={setFilter}/>
                <InfiniteScroll
                    dataLength={projects.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<Loader />}
                >
                    {projects.map((project, i) => (
                        <Link key={`${project.label}_${i}`} to={`/demo/${project.label}`} >
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