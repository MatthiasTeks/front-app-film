import React, {FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchData } from "../../services/api/fetch";
import Resume from "./components/Resume/Resume";
import { Animation } from "../../components/Utils/Animation/Animation";
import { Project } from "../../interfaces/Interface";
import './Gallery.css';

const Gallery: FC = () => {
    const [page, setPage] = useState(1);
    const [type, setType] = useState('bande-demo')
    const [hasMore, setHasMore] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);

    const fetchMoreData = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        (async () => {
            try {
                console.log('first use:', `project/page?page=${page}&type=${type}`)
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
                console.log('second use:', `project/page?page=1&type=bande-demo`)
                const data = await fetchData<Project[]>(`project/page?page=1&type=bande-demo`);
                setProjects(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        })();
    }, []);

    return (
        <React.Fragment>
            <Resume />
            { projects.length ?
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
                : ''
            }
        </React.Fragment>
    )
}

export default Gallery;