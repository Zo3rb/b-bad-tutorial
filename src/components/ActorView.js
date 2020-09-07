import React, { Fragment } from 'react';

const ActorView = ({ actor }) => {
    return (
        <Fragment>
            <div className="col-xs-12 col-sm-6 mt-3 p-2">
                <img src={actor.img} className="img-fluid" alt={actor.img} />
            </div>
            <div className="col-xs-12 col-sm-6 mt-3 p-5 text-center text-white d-flex justify-content-between flex-column">
                <h3>Character's Name: <span className="text-primary">{actor.name}</span></h3>
                <h5>Birth Date: <span className="text-primary">{actor.birthday}</span></h5>
                <h5>A.K.A: <span className="text-primary">{actor.nickname}</span></h5>
                <h5>Show Status: <span className="text-primary">{actor.status}</span></h5>
                <h5>Actor's Name: <span className="text-primary">{actor.portrayed}</span></h5>
                <ul>
                    <p>Acting As: </p>
                    {actor.occupation.map(ocu => <li key={ocu}>{ocu}</li>)}
                </ul>
            </div>
        </Fragment>
    );
}

export default ActorView;
