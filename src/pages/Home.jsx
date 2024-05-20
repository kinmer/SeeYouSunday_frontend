import { useState, useEffect } from 'react';
import axios from 'axios';
import ClubsList from '../features/clubs/ClubsList';
import ClubCaraousel from '../features/clubs/ClubCarousel';

const Home = () => {
    return (
        <div>
            <ClubCaraousel />
        </div>
    );
};

export default Home;
