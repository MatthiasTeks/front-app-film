import {FC, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import {useDataWithLoading} from "../../services/api/fetch";

const Player: FC = () => {
    let { label } = useParams();
    const { data, error, isLoading, isError } = useDataWithLoading(`project/label/${label}`);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(data)

    return (
        <div className="artiste-player-page flex column justifyCenter center">
            <div className="movie-played-holder-actor">
                <div className="movie-played">
                    <ReactPlayer
                        controls={true}
                        width='100%'
                        height='100%'
                        url={data.video}
                        className="movie-player"
                    />
                </div>
            </div>
        </div>
    )
}

export default Player