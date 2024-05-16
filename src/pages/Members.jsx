import {
    Card,
    CardBody,
    CardImg,
    CardHeader,
    CardTitle,
    CardColumns,
    CardFooter,
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
            <Col md="7" className="number-list">
                <CardColumns>
                    {members.map((member) => (
                        <Card key={member._id} className="mt-4">
                            <CardHeader>{member.occupation}</CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">{member.name}</CardTitle>
                                <CardText>{member.profile}</CardText>
                            </CardBody>
                            <CardFooter>Age: {member.age}</CardFooter>
                        </Card>
                    ))}
                </CardColumns>
            </Col>
            <Col md="3" className="add-new-member"></Col>
        </Row>
    );
};

export default Clubs;
