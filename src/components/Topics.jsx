import {
    CardGroup,
    CardBody,
    CardSubtitle,
    CardText,
    Card,
    CardTitle,
} from 'reactstrap';

const Topics = () => {
    return (
        <CardGroup>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Paw Friends Hang Out</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Dog Club
                    </CardSubtitle>
                    <CardText>
                        A perfect meet-up for pet lovers to socialize and let
                        their furry friends play together.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">City Tour Toronto</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Jogging Club
                    </CardSubtitle>
                    <CardText>
                        Explore the iconic landmarks and hidden gems of Toronto
                        in a fun and interactive city tour.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Winning Eleven Championship</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Winning Eleven
                    </CardSubtitle>
                    <CardText>
                        Compete in the ultimate soccer video game tournament and
                        showcase your skills to win the championship.
                    </CardText>
                </CardBody>
            </Card>
        </CardGroup>
    );
};

export default Topics;
