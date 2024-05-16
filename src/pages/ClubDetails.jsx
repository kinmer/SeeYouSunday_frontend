import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    Row,
    Col,
    CardLink,
    CardText,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

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
                        <button>edit</button>
                        <button>delete</button>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Card Link</CardLink>
                    </CardBody>
                </Card>
            </Col>
            <Col md="3"></Col>
        </Row>
    );
};

export default ClubDetails;
