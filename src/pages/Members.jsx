import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    CardColumns,
    CardFooter,
    Row,
    Col,
    CardText,
} from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] = useState({
        name: '',
        occupation: '',
        age: '',
        profile: '',
    });

    const navigate = useNavigate();

    const fetchMembers = async () => {
        let response = await axios.get(
            'https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/members'
        );
        setMembers(response.data);
    };
    useEffect(() => {
        fetchMembers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMember((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addMember = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'https://seeyousunday-backend-5a3db0f273d4.herokuapp.com/members',
                newMember
            );
            fetchMembers();
            setNewMember({ name: '', occupation: '', age: '', profile: '' });
            navigate('/members');
        } catch (error) {
            console.error('There was an error adding the member!', error);
        }
    };

    return (
        <Row>
            <Col md="7" className="number-list">
                <h3 style={{ color: '#f76b8a' }}>Member List</h3>
                <CardColumns>
                    {members.map((member) => (
                        <Card key={member._id} className="mt-3">
                            <CardHeader>{member.occupation}</CardHeader>
                            <CardBody>
                                <CardTitle tag="h5">{member.name}</CardTitle>
                                <CardText>{member.profile}</CardText>
                            </CardBody>
                            <CardFooter>Age: {member.age}</CardFooter>
                        </Card>
                    ))}
                </CardColumns>
            </Col>
            <Col md="3" className="add-new-member">
                <h3 style={{ color: '#f76b8a' }}>Add A Member</h3>
                <form onSubmit={addMember}>
                    <input
                        type="text"
                        value={newMember.name}
                        onChange={handleChange}
                        name="name"
                        placeholder="name"
                    />
                    <input
                        type="text"
                        value={newMember.occupation}
                        onChange={handleChange}
                        name="occupation"
                        placeholder="occupation"
                    />
                    <input
                        type="text"
                        value={newMember.age}
                        onChange={handleChange}
                        name="age"
                        placeholder="age"
                    />
                    <textarea
                        value={newMember.profile}
                        onChange={handleChange}
                        name="profile"
                        placeholder="profile"
                    />
                    <button type="submit">Submit</button>
                </form>
            </Col>
        </Row>
    );
};

export default Members;
