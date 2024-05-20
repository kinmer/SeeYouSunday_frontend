import { Card, CardImg, CardTitle } from 'reactstrap';

const ClubCard = (props) => {
    return (
        <Card>
            <CardImg width="100%" src={props.image} />
            <CardTitle>{props.name}</CardTitle>
        </Card>
    );
};

export default ClubCard;
