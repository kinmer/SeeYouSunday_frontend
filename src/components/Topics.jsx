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
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This card has supporting text below as a natural lead-in
                        to additional content.
                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                    </CardText>
                </CardBody>
            </Card>
        </CardGroup>
    );
};

export default Topics;
