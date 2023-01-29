import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GenreList from './GenreList';
import BackButton from './BackButton';

function DetailsPage () {
        //declare dispatch
        const dispatch = useDispatch();
        //declare history
        // const history = useHistory();
        //subscribe to movies reducer
        const movieDetails = useSelector(store => store.movieDetails);
        const movieID = useSelector(store => store.movieID);

        useEffect(() => {
            console.log(movieID);
            dispatch({ 
                type: 'FETCH_DETAILS',
                payload: movieID });
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