import React, { useEffect } from 'react'
import gsap, { Power4 } from 'gsap'

import './ScrollTrigger.scss'

const ScrollTrigger = () => {

    useEffect(() => {
        gsap.to('.page', { rotateX: 14, rotateY: 70, duration: 1, ease: 'ease-in-out' })
        gsap.to('.box1', { z: 50, backgroundColor: 'red', duration: 1, delay: 1, ease: Power4.easeOut })
    }, [])

    return (
        <div className='container'>
            <div className="page">
                <div className='box box1'></div>
                <div className='box box2'></div>
                <div className='box box3'></div>
                <div className='box box4'></div>
            </div>
        </div>
    )
}

export default ScrollTrigger;