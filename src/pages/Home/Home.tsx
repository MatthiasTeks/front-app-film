import { FC } from 'react';

import Video from "./components/Video/Video";
import News from "./components/Feed/Feed";
import Introduction from "./components/Introduction/Introduction";
import Carousel from "./components/Carousel/Carousel";
import ReachOut from "./components/ReachOut/ReachOut";
import Partner from "./components/Partner/Partner";

const Home: FC = () => {
    return (
        <div>
            <Video />
            <News />
            <Introduction />
            <Carousel />
            <ReachOut />
            <Partner />
        </div>
    )
}

export default Home;