import React, { useState } from 'react';
import axios from 'axios';
import ClubForm from './ClubForm'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

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
            navigate('/clubs'); // Redirect to club list after successful submission
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
