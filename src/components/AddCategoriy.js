import React, { useState } from 'react'

export const AddCategoriy = () => {

    const [inputValue, setinputValue] = useState('Hola Mundo');

    const handleInputValueChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
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
