import { useState, useEffect } from 'react';
import axios from 'axios';
import ClubCard from './ClubCard';
import { Row, Col } from 'reactstrap';

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
        <Row className="ms-auto">
            {clubs.map((club) => (
                <Col md="5" className="m-4" key={club.id}>
                    <ClubCard name={club.name} image={club.image} />
                </Col>
            ))}
        </Row>
    );
};

export default ClubsList;
