import { Card, CardImg, CardTitle } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedClubCard = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <Card>
            <CardImg width="100%" src={props.image} />
            <CardTitle>{props.name}</CardTitle>
        </Card>
    );
};

export default AnimatedClubCard;
