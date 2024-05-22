import { useState, useEffect } from 'react';
import axios from 'axios';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AnimatedClubCard from './AnimatedClubCard';

const ClubsList = () => {
    const [clubs, setClubs] = useState([]);
    const fetchClubs = async () => {
        let response = await axios.get(
            'https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs'
        );
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
                            <AnimatedClubCard
                                name={club.name}
                                image={club.image}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
            <Link
                to="/clubs/add"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                }}
            >
                <button>New Club</button>
            </Link>
        </>
    );
};

export default ClubsList;
