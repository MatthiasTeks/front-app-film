import { FC } from "react";
import { AiOutlineInstagram } from 'react-icons/ai';

import { useDataWithLoading } from "../../../../services/api/common";
import { convertTimestamp } from "../../../../services/common/convertTimestamp";

import { Animation } from "../../../../components/Utils/Animation/Animation";

import './News.css';

interface News {
    id_news: number,
    name: string;
    resume: string;
    date: number;
    s3_image_key: string;
    isInsta: number;
    linkInsta: string;
}

const Actualite: FC = () => {
    const { data, isLoading } = useDataWithLoading("home/news");
    const news: News[] = data ?? [];

    if(isLoading) return null;

    return (
        <div className="home-actualite flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Notre actualité</h2>
                <hr/>
            </div>
            <div id="actualite-holder" className="flex row justifyCenter center">
                { news.map((actu, i: number) => {
                        return (
                            <Animation y={-40} yEnd={0} delay={i * 0.1} key={`${actu.name}${i}`} x={0} xEnd={0}>
                                <div>
                                    <img
                                        alt={actu.name}
                                        height="350"
                                        src={actu.s3_image_key}
                                    />
                                    <div>
                                        <div className="flex row justifyBetween center">
                                            <h3 className="card-title">{actu.name}</h3>
                                            { actu.isInsta ?
                                                <a href={actu.linkInsta} rel="noreferrer" target="_blank">
                                                    <AiOutlineInstagram />
                                                </a> : ""
                                            }
                                        </div>
                                        <p className="card-resume">{actu.resume}</p>
                                        <p className="card-detail">Les Films de la Bande - {convertTimestamp(actu.date)}</p>
                                    </div>
                                </div>
                            </Animation>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Actualite;
