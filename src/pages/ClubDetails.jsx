import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Row,
    Col,
    CardText,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import AddMember from '../features/members/AddMember.jsx';
import Events from '../features/events/Events.jsx';

const ClubDetails = () => {
    const [clubDetails, setClubDetails] = useState({});

    const { _id } = useParams();
    const navigate = useNavigate();

    const fetchClubDetails = async () => {
        let response = await axios.get(
            `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs/${_id}?`
        );
        console.log(response);
        setClubDetails(response.data);
    };
    const fetchAvailableMembers = async () => {
        try {
            const response = await axios.get(
                'https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/members'
            );
            setAvailableMembers(response.data);
        } catch (error) {
            console.error('Error fetching available members:', error);
        }
    };
    useEffect(() => {
        fetchClubDetails();
        fetchAvailableMembers();
    }, [_id]);

    const deleteClub = async () => {
        try {
            await axios.delete(
                `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs/${_id}`
            );
            navigate('/clubs');
        } catch (error) {
            console.error('Error deleting club:', error);
        }
    };

    return (
        <Row>
            <Col md="8">
                <Card>
                    <CardImg alt="club photo" src={clubDetails.image} />
                    <CardBody>
                        <CardTitle tag="h4">{clubDetails.name}</CardTitle>
                        <CardText>{clubDetails.description}</CardText>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            Location: {clubDetails.location}
                        </ListGroupItem>
                        <ListGroupItem>Time: {clubDetails.time}</ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <button onClick={() => navigate(`/clubs/edit/${_id}`)}>
                            Edit
                        </button>
                        <button onClick={deleteClub}>Delete</button>
                    </CardBody>
                </Card>
            </Col>
            <Col md="3">
                <AddMember />
                <Events />
            </Col>
        </Row>
    );
};

export default ClubDetails;
