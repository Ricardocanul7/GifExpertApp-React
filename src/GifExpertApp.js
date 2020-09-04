import React, { useState } from 'react'
import { AddCategoriy } from './components/AddCategoriy';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategoriy setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                                    category={category} 
                                    key={category}
                                />
                    })
                }
            </ol>
        </>
    )
}
