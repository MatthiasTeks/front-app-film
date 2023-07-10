import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import Carousel from 'react-multi-carousel';

export const CarouselSkeleton: FC<{responsive: any}> = ({responsive}) => {
    return (
        <div className="home-actor-main flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Ils ont decroche un agent</h2>
                <hr />
            </div>
            <div className="holder-slider">
                <Carousel
                    arrows
                    autoPlaySpeed={3000}
                    centerMode
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="carousel-item"
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    slidesToSlide={1}
                    swipeable
                >
                    <Skeleton width="300px" height="200px" />
                    <Skeleton width="300px" height="200px" />
                    <Skeleton width="300px" height="200px" />
                    <Skeleton width="300px" height="200px" />
                    <Skeleton width="300px" height="200px" />
                </Carousel>
            </div>
        </div>
    )
}