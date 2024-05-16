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

const ClubDetails = () => {
    const [clubDetails, setClubDetails] = useState({});
    const [members, setMembers] = useState([]);
    const [availableMembers, setAvailableMembers] = useState([]);

    const { _id } = useParams();
    const navigate = useNavigate();

    const fetchClubDetails = async () => {
        let response = await axios.get(`http://localhost:3000/clubs/${_id}?`);
        console.log(response);
        setClubDetails(response.data);
    };
    const fetchAvailableMembers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/members');
            setAvailableMembers(response.data);
        } catch (error) {
            console.error('Error fetching available members:', error);
        }
    };
    useEffect(() => {
        fetchClubDetails();
        fetchAvailableMembers();
    }, [_id]);

    const handleAddMember = async (memberId) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/clubs/${_id}/addMember`,
                { memberId }
            );
            setMembers([...members, response.data]);
        } catch (error) {
            console.error('There was an error adding the member!', error);
        }
    };

    const deleteClub = async () => {
        try {
            await axios.delete(`http://localhost:3000/clubs/${_id}`);
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
                <h5> Club Members</h5>
                <ListGroup>
                    {members.map((member) => (
                        <ListGroupItem key={member._id}>
                            {member.name} - {member.occupation} - Age:{' '}
                            {member.age}
                        </ListGroupItem>
                    ))}
                </ListGroup>

                <h4>Add Existing Member</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <select onChange={(e) => handleAddMember(e.target.value)}>
                        <option value="">Select a member</option>
                        {availableMembers.map((member) => (
                            <option key={member._id} value={member._id}>
                                {member.name} - {member.occupation}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Add Member</button>
                </form>
            </Col>
        </Row>
    );
};

export default ClubDetails;
