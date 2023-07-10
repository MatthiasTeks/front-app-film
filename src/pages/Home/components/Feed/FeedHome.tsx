import { FC } from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { useDataWithLoading } from "../../../../services/api/fetch";
import { Animation } from "../../../../components/Utils/Animation/Animation";
import { FeedType } from "../../../../interfaces/Interface";
import { FeedSkeleton } from "./FeedSkeleton";
import './FeedHome.css';

export const FeedHome: FC = () => {
    const { data, isLoading } = useDataWithLoading("feed");
    const news: FeedType[] = data ?? [];
    
    if(isLoading) return <FeedSkeleton />;

    return (
        <div className="home-actualite flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Notre actualité</h2>
                <hr/>
            </div>
            <div id="actualite-holder" className="flex row justifyCenter center">
                { news.map((actu, i) => {
                    return (
                        <Animation y={-40} yEnd={0} delay={i * 0.1} key={`${actu.name}${i}`} x={0} xEnd={0} ease="linear" duration={0}>
                            <div className="actualite-card" key={`${actu.name}_${i}`}>
                                <div className="actualite-img">
                                    <img
                                        alt={actu.name}
                                        height="350"
                                        src={actu.s3_image_key}
                                    />
                                </div>
                                <div className="actualite-resume">
                                    <div className="flex row justifyBetween center">
                                        <h3 className="card-title">{actu.name}</h3>
                                        { actu.is_instagram ?
                                            <a href={actu.link_instagram} rel="noreferrer" target="_blank">
                                                <AiOutlineInstagram />
                                            </a> : ""
                                        }
                                    </div>
                                    <p className="card-resume">{actu.resume}</p>
                                    <p className="card-detail">Les Films de la Bande - {actu.date}</p>
                                </div>
                            </div>
                        </Animation>
                    )
                })}
            </div>
        </div>
    )
}
