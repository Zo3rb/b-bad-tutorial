import React from 'react';
import SingleChar from './SingleChar';

const CharList = ({ chars }) => {

    // Creating Render Helper Method
    const renderList = () => {
        if (chars.length === 0) {
            return (
                <div className="col-sm-12 text-white">
                    <p className="text-lead">Please Search Again With Valid Character Name</p>
                </div>
            )
        }
        return chars.map(char => <SingleChar key={char.char_id} char={char} />)
    }

    return (
        renderList()
    );
}

export default CharList;
