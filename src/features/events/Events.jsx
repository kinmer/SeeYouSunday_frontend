import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {} from 'reactstrap';

const Events = () => {
    const [clubDetails, setClubDetails] = useState({});
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        topic: '',
        date: '',
        description: '',
    });

    const { _id } = useParams();
    const navigate = useNavigate();

    const fetchClubDetails = async () => {
        let response = await axios.get(
            `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/${_id}?`
        );
        setClubDetails(response.data);
        setEvents(response.data.events);
    };

    useEffect(() => {
        fetchClubDetails();
    }, [_id]);

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
                `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/${_id}/events`,
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

    return (
        <>
            <h3 style={{ color: '#f76b8a' }}>Events</h3>
            <ul>
                {events.map((event) => (
                    <li key={event._id}>
                        <strong>Topic:</strong> {event.topic}, <br />
                        <strong>Date:</strong>{' '}
                        {new Date(event.date).toLocaleDateString('en-CA')},{' '}
                        <br />
                        <strong>Description:</strong> {event.description}
                    </li>
                ))}
            </ul>
            <h3 style={{ color: '#f76b8a' }}>Add Event</h3>
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
        </>
    );
};

export default Events;
