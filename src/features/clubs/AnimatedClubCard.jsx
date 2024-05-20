import { Card, CardImg, CardTitle } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedClubCard = (props) => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 },
    });

    return (
        <Card>
            <CardImg width="100%" src={props.image} />
            <CardTitle>{props.name}</CardTitle>
        </Card>
    );
};

export default AnimatedClubCard;
