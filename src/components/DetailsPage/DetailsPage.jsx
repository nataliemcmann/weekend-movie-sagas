import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GenreList from './GenreList';
import BackButton from './BackButton';

function DetailsPage () {
        //declare dispatch
        const dispatch = useDispatch();

        //subscribe to movies and movieID reducer
        const movieDetails = useSelector(store => store.movieDetails);
        const movieID = useSelector(store => store.movieID);

        //grabbing id from route parameter
        let { id } = useParams();

        //fetch movieDetails fron db on page load
        useEffect(() => {
            console.log(id);
            dispatch({ 
                type: 'FETCH_DETAILS',
                payload: id });
        }, []);

    return (
        <>
            <BackButton />
            <h2>{movieDetails.title}</h2>
            <img 
                src={movieDetails.poster} 
                alt={movieDetails.title}
            /> 
            <GenreList />
            <p>{movieDetails.description}</p>
        </>
    )
}

export default DetailsPage;