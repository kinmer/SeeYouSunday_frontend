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
            People
        </div>
    )
}

export default Clubs;