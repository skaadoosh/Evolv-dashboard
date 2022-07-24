import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { PieChart } from 'react-minimal-pie-chart';
import './Tooltip.css'


function Tooltip(props) {

    const [hovered, setHovered] = useState(false)

    const { userId, protienConsumed, fatConsumed, carbConsumed } = props

    useEffect(() => {
        ReactTooltip.rebuild();
    })

    const macros = (
        <div className='macro-container'>
            {[{ name: 'protien', value: protienConsumed }, { name: 'fats', value: fatConsumed }, { name: 'carbs', value: carbConsumed }]
                .map(e => {
                    let percentage = ((e.value / 70) * 100).toFixed(1)
                    return (<div key={e.name} className={`macro ${e.name}`}>
                        <div className='text'>{e.name.toUpperCase()} <span>{e.value}g</span></div>
                        <div className='bar'>
                            <div className='macro-value' style={{ width: `${percentage}%` }}></div>
                        </div>
                    </div>)
                })}
        </div>
    )
    return (
        <div className='calorie-bar'
            data-tip=''
            data-for={`nutrition-macros-${userId}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <PieChart
                totalValue={protienConsumed + fatConsumed + carbConsumed}
                data={[
                    { value: carbConsumed, color: '#F5C90F' },
                    { value: fatConsumed, color: '#03C7FC' },
                    { value: protienConsumed, color: '#F45C84' },
                ]}
                lineWidth={26}
            />
            <div className='value'>
                <span>{props.calorieIntake}</span>
                <span>calories</span>
            </div>
            <ReactTooltip id={`nutrition-macros-${userId}`} place='bottom' effect='solid' className='tooltip'>
                {hovered ? macros : null}
            </ReactTooltip>
        </div>
    );
}

export default Tooltip;