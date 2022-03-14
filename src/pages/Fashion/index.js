import React, { useEffect } from 'react'
import { IoIosMenu, IoIosSearch } from 'react-icons/io'

import hoverEffect from 'hover-effect'
import gsap, { Expo } from 'gsap'

import './Fashion.scss'

const Fashion = () => {

    useEffect(() => {
        new hoverEffect({
            parent: document.querySelector('.distortion'),
            intensity: 0.2,
            image1: './img/01.png',
            image2: './img/02.png',
            displacementImage: './img/diss.png',
            imagesRatio: 380 / 380
        })

        gsap.to(".overlay", {
            top: '-100%', duration: 1.5, ease: Expo.easeInOut, stagger: (index) => {
                return (index + 1) * 0.2
            }
        })
        gsap.from(".navbar div", {
            y: 20,
            opacity: 0,
            duration: 1.5,
            delay: 1.5,
            ease: Expo.easeInOut,
            stagger: (index) => {
                return index * 0.08
            }
        })
        gsap.from(".media ul li", {
            x: -20,
            opacity: 0,
            duration: 1.5,
            delay: 1.5,
            ease: Expo.easeInOut,
            stagger: (index) => {
                return index * 0.08
            }
        })
        gsap.from(".text h1 .hidetext", { y: '100%', duration: 1.5, delay: 1, ease: Expo.easeInOut })
        gsap.from(".text h3 .hidetext", { y: '100%', duration: 1.5, delay: 1.2, ease: Expo.easeInOut })
        gsap.from(".text p .hidetext", { y: '100%', duration: 1.5, delay: 1.3, ease: Expo.easeInOut })
        gsap.from(".text h2", { x: -10000, opacity: 0, duration: 1.5, delay: 1.5, ease: Expo.easeInOut })

        gsap.from(".sponsor img", { y: 20, opacity: 0, duration: 1.5, delay: 1.5, ease: Expo.easeInOut })
        gsap.from(".sponsor p", { y: 20, opacity: 0, duration: 1.5, delay: 1.6, ease: Expo.easeInOut })
        gsap.from(".distortion", { y: 20, opacity: 0, duration: 1.5, delay: 2, ease: Expo.easeInOut })
    }, [])

    return (
        <div className="wrapper">

            {/* OVERLAY */}
            <div className="overlay first"></div>
            <div className="overlay second"></div>
            <div className="overlay third"></div>

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="menu">
                    <IoIosMenu />
                </div>
                <div className="lang">eng</div>
                <div className="search">
                    <IoIosSearch />
                </div>
            </nav>

            {/* SOCIAL MEDIA */}
            <div className="media">
                <ul>
                    <li>facebook</li>
                    <li>instagram</li>
                    <li>twitter</li>
                </ul>
            </div>

            {/* TEXT */}
            <div className="text">
                <h1>
                    <span className="hidetext">toni&guy</span>
                </h1>
                <h2>duality</h2>
                <h3>
                    <span className="hidetext">collection 2017 <br /> duality</span>
                </h3>
                <p>
                    <span className="hidetext">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis, delectus facere
                        neque sunt commodi quae
                        culpa dolores doloribus magnam?
                    </span>
                </p>
            </div>

            {/* SPONSOR */}
            <div className="sponsor">
                <img src="./img/sponsor-logo.png" alt="" />
                <p>official sponsor</p>
            </div>


            {/* DISTORTION */}
            <div className="distortion"></div>

        </div>
    )
}

export default Fashion;