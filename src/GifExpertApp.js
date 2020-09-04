import React, { useState } from 'react'
import { AddCategoriy } from './components/AddCategoriy';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Naruto']);
    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategoriy setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map((category) => {
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
        </>
    )
}
