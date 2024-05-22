import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const ClubCarousel = () => {
    const [clubs, setClubs] = useState([]);
    const [randomClubs, setRandomClubs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const fetchClubs = async () => {
        try {
            const response = await axios.get(
                'https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs'
            );
            setClubs(response.data);
            setRandomClubs(selectRandomClubs(response.data, 3));
        } catch (error) {
            console.error('Error fetching clubs:', error);
        }
    };
    useEffect(() => {
        fetchClubs();
    }, []);
    const selectRandomClubs = (clubs, count) => {
        const shuffled = clubs.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };
    const next = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === randomClubs.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex =
            activeIndex === 0 ? randomClubs.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = randomClubs.map((club) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={club._id}
            >
                <img
                    src={club.image}
                    alt={club.name}
                    className="d-block w-100"
                />
                <CarouselCaption captionHeader={club.name} />
            </CarouselItem>
        );
    });
    return (
        <Row className="mb-4">
            <Col>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators
                        items={randomClubs}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </Col>
        </Row>
    );
};
export default ClubCarousel;
