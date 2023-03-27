import React, { FC } from "react";
import { Link } from 'react-router-dom';

import { useDataWithLoading} from "../../../../services/api/common";

import './Carousel.css';

interface Actor {
    actor_name: string;
    label: string;
    media_main: string;
}

const Carousel: FC = () => {
    const { data, isLoading } = useDataWithLoading("home/actor");
    const actor: Actor[] = data ?? [];

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
                    {actor.map((actor, index: number) => {
                        return (
                            <div key={`${actor.actor_name}_${index}`} className="carousel-item">
                                <img
                                    alt={actor.actor_name}
                                    src={actor.media_main}
                                />
                                <Link to={`les-artistes/${actor.label}`} className="holder-name flex column justifyCenter center">
                                    <p className="is5">{actor.actor_name}</p>
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
