import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditClub = () => {
    const [clubDetails, setClubDetails] = useState({
        name: '',
        location: '',
        time: '',
        image: '',
        description: '',
    });
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClubDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/clubs/${_id}`
                );
                setClubDetails(response.data);
            } catch (error) {
                console.error('Error fetching club details:', error);
            }
        };

        fetchClubDetails();
    }, [_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClubDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/${_id}`,
                clubDetails
            );
            navigate(`/clubs/${_id}`);
        } catch (error) {
            console.error('Error updating club:', error);
        }
    };

    return (
        <div>
            <h3 style={{ color: '#f76b8a' }}>Edit Club</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={clubDetails.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="name"
                />
                <input
                    type="text"
                    value={clubDetails.location}
                    onChange={handleChange}
                    name="location"
                    placeholder="location"
                />
                <input
                    type="text"
                    value={clubDetails.time}
                    onChange={handleChange}
                    name="time"
                    placeholder="time"
                />
                <input
                    type="text"
                    value={clubDetails.image}
                    onChange={handleChange}
                    name="image"
                    placeholder="image"
                />
                <textarea
                    value={clubDetails.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="description"
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditClub;
