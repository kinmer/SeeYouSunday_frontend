import { useState, useEffect } from 'react';
import axios from 'axios';
import ClubCard from './ClubCard';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <Link to="/clubs/add">
                <button>New Club</button>
            </Link>
        </>
    );
};

export default ClubsList;
