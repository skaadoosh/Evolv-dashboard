import React from 'react';
import './DashboardRow.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Tooltip from './Tooltip';
import RightIcon from './icons/Vector.svg'
import BellIcon from './icons/Bell.svg'
import userImg from './icons/image 22.png'
import date1 from './icons/date1.svg'
import date2 from './icons/date2.svg'
import addIcon from './icons/add.svg'
import subtractIcon from './icons/subtract.svg'
import ReviewIcon from './icons/Review.svg'
import { useNavigate } from 'react-router-dom'


function DashboardRow(props) {
    const navigate = useNavigate();
    const { top, userId, name, email, stepsWalked, stepsTarget, performed, scheduled, calorieTarget, feedback } = props

    const performedD = new Date(performed).toDateString().split(' ')
    const scheduledD = new Date(scheduled).toDateString().split(' ')
    let today = new Date()
    let isFinalDay = today >= new Date(scheduled)
    const performedDate = performedD[2] + " " + performedD[1]
    const scheduledDate = scheduledD[2] + " " + scheduledD[1]


    const handleClick = (type, op) => {
        props.performOp(type, op, userId)
    }

    return (
        <div className='row-container' style={{ top: `${top}px` }}>

            <div className='detail'>
                <img src={userImg} alt='user-img'></img>
                <div className='name'>{name}<br /><span>{email}</span></div>
            </div>

            <div className='steps'>
                <div className='steps-bar'>
                    <CircularProgressbarWithChildren
                        value={stepsWalked}
                        maxValue={stepsTarget}
                        styles={buildStyles({
                            pathColor: "#7FD18C",
                        })}
                    >
                        <span>{stepsWalked}</span>
                        <span>Walked</span>
                    </CircularProgressbarWithChildren>
                </div>
                <div className='target'>
                    <div className='increment' onClick={() => handleClick('steps', 'inc')}>
                        <img src={addIcon} alt='add icon'></img>
                    </div>
                    <div className='target-text'>
                        <p>{stepsTarget / 1000}k</p>
                        <span>target</span>
                    </div>
                    <div className='decrement' onClick={() => handleClick('steps', 'dec')}>
                        <img src={subtractIcon} alt='subtract icon'></img>
                    </div>
                </div>

            </div>

            <div className='date'>
                <div className='date-text'>
                    <div className='performed-date'>
                        <img src={date1} alt='performed date'></img>
                        <span>{performedDate}</span>
                    </div>
                    <div className='scheduled-date' style={{ background: isFinalDay ? '#CC3838' : '' }}>
                        <img src={date2} alt='scheduled date'></img>
                        <span >{scheduledDate}</span>
                    </div>
                </div>
                <div className='more'
                    style={{ background: !feedback ? '#101317' : '#CC3838' }}>
                    <img src={!feedback ? RightIcon : ReviewIcon} alt='right-icon' onClick={() => navigate(`/${userId}/workout`)}
                    />
                </div>
            </div>

            <div className='nutrition'>
                <Tooltip {...props} />
                <div className='target'>
                    <div className='increment' onClick={() => handleClick('cal', 'inc')}>
                        <img src={addIcon} alt='add icon'></img>
                    </div>
                    <div className='target-text'>
                        <p>{(calorieTarget / 1000).toFixed(1)}k</p>
                        <span>target</span>
                    </div>
                    <div className='decrement' onClick={() => handleClick('cal', 'dec')}>
                        <img src={subtractIcon} alt='subtract icon'></img>
                    </div>
                </div>
                <div className='more' >
                    <img src={RightIcon} alt='right-icon' onClick={() => navigate(`/${userId}/nutrition`)} />
                </div>
            </div>

            <div className='notification'>
                <img src={BellIcon} alt='bell-icon' />
            </div>
        </div>
    );
}

export default DashboardRow;