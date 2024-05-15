import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ClubCard from '../features/clubs/ClubCard';

const ClubDetails = () => {
    const [clubDetails, setClubDetails] = useState({});
    const { _id } = useParams();

    const fetchClubDetails = async () => {
        let response = await axios.get(`http://localhost:3000/clubs/${_id}?`);
        console.log(response);
        setClubDetails(response.data);
    };
    useEffect(() => {
        fetchClubDetails();
    }, [_id]);

    return (
        <div className="club-details">
            <ClubCard name={clubDetails.name} image={clubDetails.image} />
        </div>
    );
};

export default ClubDetails;
