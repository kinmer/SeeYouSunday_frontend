import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ClubForm from './ClubForm';
import { Row, Col } from 'reactstrap';

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
            await axios.post(
                'https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs',
                newClub
            );
            navigate('/clubs');
        } catch (error) {
            console.error('There was an error adding the club!', error);
        }
    };

    return (
        <Row className="align-items-center">
            <Col md="8" className="mx-auto">
                <ClubForm
                    newClub={newClub}
                    handleChange={handleChange}
                    addClub={addClub}
                />
            </Col>
        </Row>
    );
};

export default AddClub;
