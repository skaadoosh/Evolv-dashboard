import React, { useState } from 'react';
import DashboardRow from './DashboardRow';
import './DashBoard.css'
import stepsIcon from './icons/Steps.svg'
import workoutIcon from './icons/Workout.svg'
import nutritionIcon from './icons/Nutrtion.svg'

function DashBoard(props) {

    const [users, setUsers] = useState(props.users)
    const [diab, setDiab] = useState(false)

    const performOp = (type, op, id) => {
        let idx = parseInt(id.replace('user', ''))
        let editedUsers = users
        if (type === 'steps')
            op === 'inc'
                ? editedUsers[idx].stepsTarget += 500
                : editedUsers[idx].stepsTarget -= 500
        else
            op === 'inc'
                ? editedUsers[idx].calorieTarget += 100
                : editedUsers[idx].calorieTarget -= 100

        setUsers(editedUsers)
        setDiab(!diab)
    }

    const rows = users.map((user, i) =>
        <DashboardRow key={user.userId} {...user} performOp={performOp} top={(i * 100) + 80} />)
    return (
        <div className='dashboard-container'>
            {[{ title: 'Steps', img: stepsIcon }, { title: 'Workout', img: workoutIcon }, { title: 'Nutrition', img: nutritionIcon }]
                .map(h =>
                    <div key={h.title} className={`header ${h.title}`}>
                        <img src={h.img} alt={`${h.title} icon`}></img>
                        <h5>{h.title}</h5>
                    </div>
                )}
            {rows}
        </div>
    );
}

export default DashBoard;