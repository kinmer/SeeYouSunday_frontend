import { useState, useEffect } from 'react';
import axios from 'axios';

import ClubsList from '../features/clubs/ClubsList';

const Clubs = () => {
    return (
        <div>
            <ClubsList />
        </div>
    );
};

export default Clubs;
