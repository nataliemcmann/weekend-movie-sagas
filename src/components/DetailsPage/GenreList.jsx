import React from 'react';
import { useSelector } from 'react-redux';

function GenreList () {
    //retrieve movieDetails
    const genreList = useSelector(store => store.genreList);


    return (
        <>
        <h4>Genres: {genreList.join(' - ')}</h4>
        </>
    )
}

export default GenreList;