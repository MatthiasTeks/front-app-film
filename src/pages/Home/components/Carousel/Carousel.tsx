import React, { FC } from "react";
import { Link } from 'react-router-dom';

import { Project } from "../../../../interfaces/Interface";
import { useDataWithLoading} from "../../../../services/api/fetch";

import './Carousel.css';


const Carousel: FC = () => {
    const { data, isLoading } = useDataWithLoading("project/highlight");
    const project: Project[] = data ?? [];

    const onCarouselDragStart = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.preventDefault();
    }

    if(isLoading) return null;

    return (
        <div className="home-actor-main flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Ils ont decroche un agent</h2>
                <hr />
            </div>
            <div className="holder-slider">
                <div className="carousel-container" onDragStart={onCarouselDragStart}>
                    {project.map((element, index: number) => {
                        return (
                            <div key={`${element.name}_${index}`} className="carousel-item">
                                <img
                                    alt={element.name}
                                    src={element.s3_image_main_key}
                                />
                                <Link to={`les-artistes/${element.label}`} className="holder-name flex column justifyCenter center">
                                    <p className="is5">{element.name}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel;
