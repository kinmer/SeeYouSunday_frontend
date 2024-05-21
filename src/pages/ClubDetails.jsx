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
    const [selectedMember, setSelectedMember] = useState('');
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        topic: '',
        date: '',
        description: '',
    });

    const { _id } = useParams();
    const navigate = useNavigate();

    const fetchClubDetails = async () => {
        let response = await axios.get(`http://localhost:3000/clubs/${_id}?`);
        console.log(response);
        setClubDetails(response.data);
        setMembers(response.data.members);
        setEvents(response.data.events);
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

    const handleAddMember = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:3000/clubs/${_id}/addMember`,
                { memberId: selectedMember }
            );
            setMembers([...members, response.data]);
        } catch (error) {
            console.error('There was an error adding the member!', error);
        }
    };

    const handleChange = (e) => {
        setSelectedMember(e.target.value);
    };

    const handleEventChange = (e) => {
        const { name, value } = e.target;
        setNewEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleAddEvent = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `http://localhost:3000/clubs/${_id}/events`,
                newEvent
            );
            setEvents([...events, response.data]);
            setNewEvent({
                topic: '',
                date: '',
                description: '',
            });
        } catch (error) {
            console.error('There was an error adding the event!', error);
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
                            {member.name} - {member.occupation}
                        </ListGroupItem>
                    ))}
                </ListGroup>

                <h4>Add Existing Member</h4>
                <form onSubmit={handleAddMember}>
                    <select onChange={handleChange} value={selectedMember}>
                        <option value="">Select a member</option>
                        {availableMembers.map((member) => (
                            <option key={member._id} value={member._id}>
                                {member.name} - {member.occupation}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Add Member</button>
                </form>

                <h3>Events</h3>
                <ul>
                    {events.map((event) => (
                        <li key={event._id}>
                            <strong>Topic:</strong> {event.topic},{' '}
                            <strong>Date:</strong> {event.date},{' '}
                            <strong>Description:</strong> {event.description}
                        </li>
                    ))}
                </ul>
                <h4>Add Event</h4>
                <form onSubmit={handleAddEvent}>
                    <label>
                        Topic:
                        <input
                            type="text"
                            name="topic"
                            value={newEvent.topic}
                            onChange={handleEventChange}
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            name="date"
                            value={newEvent.date}
                            onChange={handleEventChange}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={newEvent.description}
                            onChange={handleEventChange}
                        />
                    </label>
                    <button type="submit">Add Event</button>
                </form>
            </Col>
        </Row>
    );
};

export default ClubDetails;
