import ClubCaraousel from '../features/clubs/ClubCarousel';
import { Row, Col } from 'reactstrap';
import Activity from '../assets/img/Activity.png';
import Topics from '../components/Topics';

const Home = () => {
    return (
        <>
            <Row>
                <Col md="5" className="m-4">
                    <h3 style={{ color: '#66bfbf' }}>
                        Seize Your Sunday with
                        <br />
                        See You Sunday
                    </h3>
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
            <br />
            <br />

            <Row className="center-carousel">
                <h3 style={{ color: '#66bfbf' }}>Hot Choice</h3>
                <Col md="9">
                    <ClubCaraousel />
                </Col>
            </Row>
            <Row className="center-topics">
                <Col md="8">
                    <Topics />
                </Col>
            </Row>
        </>
    );
};

export default Home;
