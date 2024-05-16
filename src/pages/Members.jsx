import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Row,
    Col,
    CardLink,
    CardText,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Clubs = () => {
    const [members, setMembers] = useState([]);
    const fetchClubs = async () => {
        let response = await axios.get('http://localhost:3000/members');
        setMembers(response.data);
    };
    useEffect(() => {
        fetchClubs();
    }, []);
    return (
        <Row>
            <Col md="8">
                <div>
                    {members.map((member) => (
                        <div key={member._id}>
                            <h2>{member.name}</h2>
                            <h3>{member.age}</h3>
                            <h3>{member.occupation}</h3>
                            <p>{member.profile}</p>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    );
};

export default Clubs;
