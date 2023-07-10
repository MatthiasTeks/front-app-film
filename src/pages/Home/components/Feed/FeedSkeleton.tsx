import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

export const FeedSkeleton: FC = () => {
    return (
        <div className="home-actualite flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Notre actualité</h2>
                <hr/>
            </div>
            <div id="actualite-holder" className="flex row justifyCenter center">
                <Skeleton className="actualite-img" width="350" style={{marginInline: "1em"}} />
                <Skeleton className="actualite-img" width="350" style={{marginInline: "1em"}}/>
                <Skeleton className="actualite-img" width="350" style={{marginInline: "1em"}}/>
            </div>
        </div>
    )
}