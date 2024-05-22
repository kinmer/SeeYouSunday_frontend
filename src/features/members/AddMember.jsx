import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const AddMember = () => {
    const [clubDetails, setClubDetails] = useState({});
    const [members, setMembers] = useState([]);
    const [availableMembers, setAvailableMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState('');

    const { _id } = useParams();
    const navigate = useNavigate();

    const fetchClubDetails = async () => {
        let response = await axios.get(
            `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs/${_id}?`
        );
        console.log(response);
        setClubDetails(response.data);
        setMembers(response.data.members);
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

    const handleAddMember = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/clubs/${_id}/addMember`,
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

    return (
        <>
            <h3 style={{ color: '#f76b8a' }}> Club Members</h3>
            <ListGroup>
                {members.map((member) => (
                    <ListGroupItem key={member._id}>
                        {member.name} - {member.occupation}
                    </ListGroupItem>
                ))}
            </ListGroup>

            <h3 style={{ color: '#f76b8a' }}>Add Existing Member</h3>
            <form onSubmit={handleAddMember}>
                <select onChange={handleChange} value={selectedMember}>
                    <option value="">Select a member</option>
                    {availableMembers.map((member) => (
                        <option key={member._id} value={member._id}>
                            {member.name} - {member.occupation}
                        </option>
                    ))}
                </select>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                    }}
                >
                    <button type="submit">Add Member</button>
                </div>
            </form>
        </>
    );
};

export default AddMember;
