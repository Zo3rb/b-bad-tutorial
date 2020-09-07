import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import Loader from '../components/Loader';
import CharList from '../components/CharList';
import axios from 'axios';
import SearchInput from '../components/SearchInput';

const HomePage = () => {

    // Creating Helper Method to Fetch Data from The API and SetChars State With it.
    const fetchChars = async () => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters');
        setChars(response.data.filter(character => character.name.toLowerCase().includes(`${query}`)));
        setLoading(false);
    }

    // Creating Our App States Here.
    const [loading, setLoading] = useState(true);
    const [chars, setChars] = useState([]);
    const [query, setQuery] = useState('');

    // Using UseEffect Hook to Simulate Life Cycle Hooks.
    useEffect(() => {
        fetchChars();
    }, [query]);

    // Creating Function to Change The state from Child Component
    const onInputSubmitted = term => {
        setQuery(term);
    }

    return (
        <div className="container-fluid wrapper">
            <div className="py-5 row">
                <div className="col-sm-12 d-flex justify-content-center align-items-center">
                    <img src={logo} alt="Breaking Bad Logo" className="logo-img img-fluid" />
                </div>
                <SearchInput onInputSubmitted={onInputSubmitted} />
                {loading ? <Loader /> : <CharList chars={chars} />}
            </div>
        </div>
    );
}

export default HomePage;
