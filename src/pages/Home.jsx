import { useState, useEffect } from 'react';
import ClubCaraousel from '../features/clubs/ClubCarousel';
import { Row, Col } from 'reactstrap';
import Activity from '../assets/img/Activity.png';

const Home = () => {
    return (
        <div>
            <Row>
                <Col md="5" className="m-4">
                    <h2>
                        Seize Your Sunday with
                        <br />
                        See You Sunday
                    </h2>
                    <br />

                    <p>
                        If you're stuck on what to do on Sundays, worry no
                        more—you've come to the right place! Discover the most
                        exciting Sunday activities near you right here.
                    </p>
                </Col>
                <Col md="3">
                    <img src={Activity} alt="activity" id="activity" />
                </Col>
            </Row>
            <Row>
                <ClubCaraousel />
            </Row>
        </div>
    );
};

export default Home;
