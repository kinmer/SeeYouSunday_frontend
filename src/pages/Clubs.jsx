import { useState, useEffect } from "react";
import axios from "axios";

const Clubs = () => {

    const [clubs, setClubs] = useState([]);
    const fetchClubs = async () => {
        let response = await axios.get('http://localhost:3000/clubs')
        setClubs(response.data)
    }
     useEffect (() => {
        fetchClubs();
    }, [])
    return(
        <div>
            <h1>Clubs</h1>
            <div>
                {clubs.map(club => (
                    <h3 key={club.id}>{club.name}</h3>

                ))}
            </div>
        </div>
    )
}

export default Clubs;