import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoriy = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputValueChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(c => [inputValue, ...c]);
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputValueChange }
            />
        </form>
    )
}

AddCategoriy.propTypes = {
    setCategories : PropTypes.func.isRequired
}