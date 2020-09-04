import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=pur1jAp1bOFh7zzIFHzuSRXSKqyX3Tfr'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    return (
        <div>
            <h3>{category}</h3>
            <ol>
                {
                    images.map(image => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }

            </ol>
        </div>
    )
}

GifGrid.propTypes = {

}

export default GifGrid;

