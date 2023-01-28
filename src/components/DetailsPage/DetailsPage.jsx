import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage () {

    return (
        <>
        <h2>Specific Movie details!</h2>
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title}/>
        </>
    )
}

export default DetailsPage;