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
import { Link } from 'react-router-dom';

const ClubCaraousel = () => {
    const [clubs, setClubs] = useState([]);
    const [randomClubs, setRandomClubs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const fetchClubs = async () => {
        let response = await axios.get('http://localhost:3000/clubs');
        setClubs(response.data);
        setRandomClubs(selectRandomClubs(response.data, 3));
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
                <CarouselCaption
                    captionText={club.description}
                    captionHeader={club.name}
                />
            </CarouselItem>
        );
    });
};

export default ClubCaraousel;
