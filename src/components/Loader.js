import React from 'react';
import spinner from '../img/spinner.gif';

const Loader = () => {
    return (
        <div className="col-sm-12 d-flex justify-content-center align-items-center p-3">
            <img src={spinner} className="img-fluid" alt="spinner Loader" />
        </div>
    );
}

export default Loader;
