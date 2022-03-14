import React, { useEffect } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { CgSearch } from 'react-icons/cg'
import { IoMdCart } from 'react-icons/io'

import gsap, { Expo } from 'gsap'
import Parallax from 'parallax-js'

import '../../gsap-config'
import './CleanJuice.scss'

const CleanJuice = () => {

    useEffect(() => {
        const scene = document.getElementById('scene');
        new Parallax(scene);

        gsap.effects.translate(".logo", { x: -20, ease: Expo.easeInOut, duration: 1 })
        gsap.effects.translate(".menu-links ul li", {
            x: -20, ease: Expo.easeInOut, duration: 1,
            stagger: function (index, target, list) {
                return index * 0.1;
            }
        })
        gsap.effects.translate(".search", { x: -20, ease: Expo.easeInOut, duration: 1, delay: 0.5 })
        gsap.effects.translate(".account", { x: -20, ease: Expo.easeInOut, duration: 1, delay: 0.6 })
        gsap.effects.translate(".cart", { x: -20, ease: Expo.easeInOut, duration: 1, delay: 0.7 })
        gsap.effects.translate(".juice", { y: -800, ease: Expo.easeInOut, duration: 1, delay: 2 })
        // const tl = gsap.timeline();
        // tl.translate(".search", { x: -20, ease: Expo.easeInOut, duration: 1 }, 0.5)
        // tl.translate(".account", { x: -20, ease: Expo.easeInOut, duration: 1 }, 0.6)
        // tl.translate(".cart", { x: -20, ease: Expo.easeInOut, duration: 1 }, 0.7)
        // tl.translate(".juice", { y: -800, ease: Expo.easeInOut, duration: 1 }, 2)
        gsap.effects.translate(".leaves .layer:nth-child(1)", { y: -800, ease: Expo.easeInOut, duration: 2, delay: 2 })
        gsap.effects.translate(".leaves .layer:nth-child(2)", { y: -800, ease: Expo.easeInOut, duration: 2, delay: 2.1 })
        gsap.effects.translate(".leaves .layer:nth-child(3)", { y: -800, ease: Expo.easeInOut, duration: 2, delay: 2.2 })
        gsap.effects.translate(".leaves .layer:nth-child(4)", { y: -800, ease: Expo.easeInOut, duration: 2, delay: 2.3 })
        gsap.effects.translate(".leaves .layer:nth-child(5)", { y: -800, ease: Expo.easeInOut, duration: 2, delay: 2.5 })

        gsap.effects.translate(".title", { y: 20, ease: Expo.easeInOut, duration: 1, delay: 1 })
        gsap.effects.translate(".tagline", { y: 20, ease: Expo.easeInOut, duration: 1, delay: 1.3 })
        gsap.effects.translate(".pages", { y: 20, ease: Expo.easeInOut, duration: 1, delay: 1.3 })
        gsap.effects.translate(".more", { y: 20, ease: Expo.easeInOut, duration: 1, delay: 1.4 })
        gsap.effects.translate(".desc", { y: 20, ease: Expo.easeInOut, duration: 1, delay: 1.4 })
        gsap.effects.translate(".arrows", { ease: Expo.easeInOut, duration: 1, delay: 2 })
    }, [])

    return (
        <div className="wrapper">
            <div className="nav">
                <div className="logo">Clean Juice</div>

                <div className="menu-links">
                    <ul>
                        <li>locations</li>
                        <li>our menu</li>
                        <li>our story</li>
                        <li>meet our teem</li>
                        <li>own a clean juice</li>
                        <li>contact us</li>
                    </ul>
                </div>

                <div className="search">
                    <CgSearch />
                </div>

                <div className="account">my account</div>

                <div className="cart">
                    <IoMdCart />
                </div>
            </div>
            <div className="content">
                <div className="tagline">Find your clean juice</div>

                <div className="pages">
                    <span>2</span>/21
                </div>

                <div className="title">orange</div>

                <div className="more">
                    <a href="#">show all the juices</a>
                </div>

                <div className="desc">
                    <p>
                        Your <span>healthy</span> life <br />
                        starts here with us
                    </p>
                    <p>
                        A family owned company founded with the purpose of giving your
                        family access to clean, organic products while you are on the go.
                    </p>
                </div>
            </div>

            <div className="juice">
                <img src="./img/juice.png" alt="" />
            </div>

            <div className="leaves">
                <ul id="scene">
                    <li className="layer" data-depth="-.1">
                        <img src="./img/leaf01.png" alt="" />
                    </li>
                    <li className="layer" data-depth="-.3">
                        <img src="./img/leaf02.png" alt="" />
                    </li>
                    <li className="layer" data-depth="-1.5">
                        <img src="./img/leaf03.png" alt="" />
                    </li>
                    <li className="layer" data-depth=".1">
                        <img src="./img/leaf04.png" alt="" />
                    </li>
                    <li className="layer" data-depth=".3">
                        <img src="./img/leaf05.png" alt="" />
                    </li>
                </ul>
            </div>

            <div className="arrows">
                <button className="prev">
                    <GoChevronLeft />
                </button>
                <button className="next">
                    <GoChevronRight />
                </button>
            </div>
        </div>
    )
}

export default CleanJuice;