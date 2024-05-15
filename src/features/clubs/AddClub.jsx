import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClubForm from './ClubForm';
const AddClub = () => {
    const [newClub, setNewClub] = useState({
        name: '',
        location: '',
        time: '',
        image: '',
        description: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewClub((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addClub = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/clubs', newClub);
            navigate('/clubs');
        } catch (error) {
            console.error('There was an error adding the club!', error);
        }
    };

    return (
        <div>
            <ClubForm
                newClub={newClub}
                handleChange={handleChange}
                addClub={addClub}
            />
        </div>
    );
};

export default AddClub;
