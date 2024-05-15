import { useState, useEffect } from 'react';
import axios from 'axios';
import ClubCard from './ClubCard';
import { Row, Col } from 'reactstrap';
import { Link, Route, Routes, NavLink } from 'react-router-dom';

const ClubsList = () => {
    const [clubs, setClubs] = useState([]);
    const fetchClubs = async () => {
        let response = await axios.get('http://localhost:3000/clubs');
        setClubs(response.data);
    };
    useEffect(() => {
        fetchClubs();
    }, []);

    return (
        <>
            <Row className="ms-auto">
                {clubs.map((club) => (
                    <Col md="5" className="m-4" key={club._id}>
                        <Link to={`${club._id}`}>
                            <ClubCard name={club.name} image={club.image} />
                        </Link>
                    </Col>
                ))}
            </Row>
            <Row>
                <Routes>
                    <Route
                        path="/newclub"
                        element={
                            <ClubForm
                                newClub={newClub}
                                handleChange={handleChange}
                                addClub={addClub}
                            />
                        }
                    />
                </Routes>
            </Row>
        </>
    );
};

export default ClubsList;
