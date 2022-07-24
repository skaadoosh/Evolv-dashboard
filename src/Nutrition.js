import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Nutrition(props) {
    const params = useParams();
    const user = props.users.find(user => user.userId === params.userId)

    return (
        <div className='dashboard-container routepage'>
            Hello, {user.name}<br />
            <span>Checkout your weekly nutrtion targets</span>
            <Link to='/'>Back</Link>
        </div>
    );
}

export default Nutrition;