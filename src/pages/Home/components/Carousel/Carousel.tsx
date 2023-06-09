import { FC } from "react";
import Carousel from 'react-multi-carousel';
import { Project } from "../../../../interfaces/Interface";
import { useDataWithLoading } from "../../../../services/api/fetch";
import { CarouselSkeleton } from "./CarouselSkeleton";
import 'react-multi-carousel/lib/styles.css';
import './CarouselActor.css';

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
    }
};

export const CarouselDemo: FC = () => {
    const { data, isLoading } = useDataWithLoading("project/highlight");
    const project: Project[] = data ?? [];

    if(isLoading) return <CarouselSkeleton responsive={responsive} />;

    return (
        <div className="home-actor-main flex column justifyCenter center">
            <div className="home-actor-title flex column center justifyCenter">
                <h2>Nos dernières réalisations</h2>
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
                    {project.map((project, index) => (
                        <div key={index}>
                            <img src={project.s3_image_key} alt={project.name} />
                            <p className="legend">{project.name}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}