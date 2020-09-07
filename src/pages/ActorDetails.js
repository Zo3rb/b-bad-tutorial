import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import logo from '../img/logo.png';
import Loader from '../components/Loader';
import ActorView from '../components/ActorView';

const ActorDetails = props => {

    // Creating Helper Method to Fetch The Character Details From The API
    const fetchActor = async () => {
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${props.match.params.id}`);
        setActor(response.data[0]);
        setLoading(false);
    }

    // Creating Our Actor Details State Here
    const [actor, setActor] = useState({});
    const [loading, setLoading] = useState(true);

    // Simulating The Life Cycle Hook
    useEffect(() => {
        fetchActor();
    }, []);

    return (
        <div className="container-fluid wrapper">
            <div className="py-5 row">
                <div className="col-sm-12 d-flex justify-content-center align-items-center">
                    <img src={logo} alt="Breaking Bad Logo" className="logo-img img-fluid" />
                </div>
                <div className="col-sm-12">
                    <NavLink to="/">
                        <i className="fas fa-arrow-left fa-3x text-white"></i>
                    </NavLink>
                </div>
                {loading ? <Loader /> : <ActorView actor={actor} />}
            </div>
        </div>
    );
}

export default ActorDetails;
