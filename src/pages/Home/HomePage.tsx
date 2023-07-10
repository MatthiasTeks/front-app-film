import { FC } from 'react';
import { VideoHome } from "./components/Video/VideoHome";
import { FeedHome } from "./components/Feed/FeedHome";
import { Introduction } from "./components/Introduction/Introduction";
import { CarouselDemo } from "./components/Carousel/Carousel";
import { ReachOut } from "./components/ReachOut/ReachOut";
import { PartnerHome } from "./components/Partner/PartnerHome";
import './HomePage.css';

export const HomePage: FC = () => {
    return (
        <div>
            <VideoHome />
            <FeedHome />
            <Introduction />
            <CarouselDemo />
            <ReachOut />
            <PartnerHome />
        </div>
    )
}