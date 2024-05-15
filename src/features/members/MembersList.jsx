import { useState, useEffect } from 'react';
import axios from 'axios';

const MembersList = () => {
    const [members, setMembers] = useState([]);
    const fetchClubs = async () => {
        let response = await axios.get('http://localhost:3000/members');
        setMembers(response.data);
    };
    useEffect(() => {
        fetchClubs();
    }, []);

    return (
        <div>
            {members.map((member) => (
                <div key={member._id}>
                    <h2>{member.name}</h2>
                    <h3>{member.age}</h3>
                    <h3>{member.occupation}</h3>
                    <p>{member.profile}</p>
                </div>
            ))}
        </div>
    );
};

export default MembersList;
