import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleChar = ({ char }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-2 mx-auto card-deck mt-5">
            <div className="card">
                <img src={char.img} className="card-img-top img-thumbnail" alt={char.name} />
                <div className="card-body text-center">
                    <h5 className="card-title">Character: <span className="text-success font-weight-bold">{char.name}</span></h5>
                </div>
                <NavLink to={`/actor/${char.char_id}`}>
                    <button className="btn btn-primary btn-block">Check Details</button>
                </NavLink>
            </div>
        </div>
    );
}

export default SingleChar;
