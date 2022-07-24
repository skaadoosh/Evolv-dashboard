import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Workout(props) {
    const params = useParams();
    const user = props.users.find(user => user.userId === params.userId)

    return (
        <div className='dashboard-container routepage'>
            Hello, {user.name}<br />
            <span>See if you met your workout goals.</span>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default Workout;