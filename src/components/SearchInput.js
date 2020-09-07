import React from 'react';

const SearchInput = ({ onInputSubmitted }) => {

    // Creating The Input Change Function Here to Lift The State Up to Parent Component
    const onInputChanged = e => {
        onInputSubmitted(e.target.value);
    }

    return (
        <div className="col-sm-12 mt-5">
            <input
                className="form-control"
                type="search"
                placeholder="Search Characters ..."
                onChange={onInputChanged}
            />
        </div>
    );
}

export default SearchInput;
