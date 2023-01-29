import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton () {
    //declare history
    const history = useHistory();

    //send user to movieList page on button click
    const sendHome = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <>
        <button onClick={(event)=>{sendHome(event)}}>Back</button>
        </>
    )
}

export default BackButton;