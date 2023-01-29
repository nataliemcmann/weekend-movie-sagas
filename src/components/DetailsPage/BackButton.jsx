import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton () {
    const history = useHistory();

    const sendHome = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <>
        <button onClick={(event)=>{sendHome(event)}}>Home</button>
        </>
    )
}

export default BackButton;