import { useState, useEffect } from 'react';
import ClubCaraousel from '../features/clubs/ClubCarousel';
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Row>
                <Col md="5" className="m-4">
                    <h2>Seize Your Sunday with See You Sunday Club</h2>
                    <p>
                        If you're stuck on what to do on Sundays, worry no
                        more—you've come to the right place! Discover the most
                        exciting Sunday activities near you right here.
                    </p>
                </Col>
                <Col md="3"></Col>
            </Row>
            <Row>
                <ClubCaraousel />
            </Row>
        </div>
    );
};

export default Home;
