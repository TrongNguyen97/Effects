import React, { useEffect, useState } from 'react'
import './VRAvatar.scss'

const VRAvatar = () => {

    const positions = [
        {
            left: '27%',
            transform: 'scale(1.2)',
        },
        {
            left: '0%',
            transform: 'scale(1)',
        },
        {
            left: '61%',
            transform: 'scale(0.8)',
        },
        {
            left: '84%',
            transform: 'scale(1)',
        },
    ]

    const [styles, setStyles] = useState(positions)

    const activeTab = (index) => {
        let position = [...positions]
        let pos = position.splice(0,index)
        // position.splice(0,index)
        setStyles(position.concat(pos))
    }

    return (
        <div className='container'>
            {console.log(styles)}
            <div className='boxImg'>
                {[0,1,2,3].map( item => 
                    <img src='/img/avatar.png' style={styles[item]}/>
                )}
            </div>
            <div>
                {[0,1,2,3].map( item => 
                    <span style={{fontSize: '18px'}} onClick={() => activeTab(item)}>long {item}</span>
                )}
            </div>
        </div>
    )
}

export default VRAvatar