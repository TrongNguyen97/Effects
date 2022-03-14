import React, { useEffect } from 'react'

import gsap, { Power2 } from 'gsap'

import './Ride.scss'

const Ride = () => {

    useEffect(() => {
        const tl = gsap.timeline({ delay: 1 });
        tl.from('header', { y: -60, duration: 0.6, ease: Power2.easeOut });
        tl.from('.hero-content', { y: -40, duration: 0.6, ease: Power2.easeOut, opacity: 0 });
        tl.from('.illustration', { duration: 0.6, ease: Power2.easeOut, opacity: 0 });

        gsap.to("#red-car", {
            x: 1960,
            y: 439,
            duration: 8,
            repeat: 4,
            repeatDelay: 2
        });

        gsap.to("#blue-car", {
            x: 572,
            y: 210,
            duration: 16,
            ease: "none",
            repeat: 5,
            repeatDelay: 1
        });

        gsap.to("#yellow-car", {
            x: 884,
            y: 1114,
            duration: 7,
            ease: "none",
            repeat: 4,
            repeatDelay: 1
        });
    }, [])

    return (
        <>
            <header>
                <div className="logo">Ride.</div>
                <nav>
                    <ul>
                        <li>Our Products</li>
                        <li>Our Company</li>
                        <li>Safety</li>
                        <li>Help</li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Get in the driver's seat and <span>get paid</span>.</h1>
                    <p>Drive on the largest network of active riders.</p>
                    <button className="signup-btn">Sign up to drive</button>
                    <button className="talk-btn">Talk to us</button>
                </div>

                <div className="illustration">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1726.62" height="1036.184" viewBox="0 0 1486 966">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0.012" y1="0.499" x2="1.012" y2="0.499" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#9629b6" />
                                <stop offset="0.006" stopColor="#9429b4" />
                                <stop offset="0.141" stopColor="#702295" />
                                <stop offset="0.282" stopColor="#521c7c" />
                                <stop offset="0.432" stopColor="#3b1868" />
                                <stop offset="0.592" stopColor="#2b145a" />
                                <stop offset="0.769" stopColor="#211352" />
                                <stop offset="1" stopColor="#1e124f" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-2" x1="0.001" y1="0.498" x2="1.003" y2="0.498" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#6ae1c1" />
                                <stop offset="0.052" stopColor="#64d0be" />
                                <stop offset="0.224" stopColor="#539fb5" />
                                <stop offset="0.395" stopColor="#4575ad" />
                                <stop offset="0.56" stopColor="#3a55a8" />
                                <stop offset="0.719" stopColor="#323fa3" />
                                <stop offset="0.869" stopColor="#2e31a1" />
                                <stop offset="1" stopColor="#2c2ca0" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-3" x1="-0.008" y1="0.498" x2="0.992" y2="0.498" xlinkHref="#linear-gradient" />
                            <linearGradient id="linear-gradient-4" x1="-0.002" y1="0.501" x2="0.999" y2="0.501" xlinkHref="#linear-gradient-2" />
                            <linearGradient id="linear-gradient-5" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset="0.006" stopColor="#1b063c" stopOpacity="0" />
                                <stop offset="0.087" stopColor="#1e0942" stopOpacity="0.157" />
                                <stop offset="0.194" stopColor="#281152" stopOpacity="0.369" />
                                <stop offset="0.316" stopColor="#391e6e" stopOpacity="0.608" />
                                <stop offset="0.447" stopColor="#4f3094" stopOpacity="0.863" />
                                <stop offset="0.517" stopColor="#5d3bab" />
                                <stop offset="0.545" stopColor="#5837a3" stopOpacity="0.941" />
                                <stop offset="0.757" stopColor="#371d6c" stopOpacity="0.502" />
                                <stop offset="0.915" stopColor="#230c49" stopOpacity="0.176" />
                                <stop offset="1" stopColor="#1b063c" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-6" x1="-0.001" y1="0.499" x2="0.999" y2="0.499" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#f25a91" />
                                <stop offset="0.192" stopColor="#db5595" />
                                <stop offset="0.596" stopColor="#9f49a0" />
                                <stop offset="1" stopColor="#5d3bab" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-7" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#7162c8" />
                                <stop offset="0.121" stopColor="#5c4eaa" />
                                <stop offset="0.282" stopColor="#463989" />
                                <stop offset="0.448" stopColor="#342870" />
                                <stop offset="0.62" stopColor="#281c5d" />
                                <stop offset="0.799" stopColor="#201453" />
                                <stop offset="1" stopColor="#1e124f" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-8" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-9" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-10" x1="-0.001" y1="0.5" x2="1.001" y2="0.5" xlinkHref="#linear-gradient-7" />
                            <linearGradient id="linear-gradient-11" x1="0" y1="0.499" x2="1" y2="0.499" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-12" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-13" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-7" />
                            <linearGradient id="linear-gradient-14" x1="0" y1="0.501" x2="1" y2="0.501" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-15" x1="0.001" y1="0.5" x2="1.001" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-16" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-7" />
                            <linearGradient id="linear-gradient-17" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-18" x1="0.001" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-7" />
                            <linearGradient id="linear-gradient-19" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-7" />
                            <linearGradient id="linear-gradient-20" x1="0.001" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-21" x1="0.001" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-22" x1="0.005" y1="0.499" x2="1.002" y2="0.499" gradientUnits="objectBoundingBox">
                                <stop offset="0.006" stopColor="#1b063c" />
                                <stop offset="0.238" stopColor="#180536" />
                                <stop offset="0.506" stopColor="#100328" />
                                <stop offset="0.651" stopColor="#14042f" />
                                <stop offset="1" stopColor="#1b063c" />
                            </linearGradient>
                            <linearGradient id="linear-gradient-23" x1="-0.001" y1="0.499" x2="0.996" y2="0.499" xlinkHref="#linear-gradient-22" />
                            <linearGradient id="linear-gradient-24" x1="-0.001" y1="0.499" x2="0.996" y2="0.499" xlinkHref="#linear-gradient-22" />
                            <linearGradient id="linear-gradient-25" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-26" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-6" />
                            <linearGradient id="linear-gradient-27" x1="0" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-7" />
                            <linearGradient id="linear-gradient-28" x1="-0.003" y1="0.501" x2="0.997" y2="0.501" xlinkHref="#linear-gradient" />
                            <linearGradient id="linear-gradient-29" x1="-0.001" y1="0.5" x2="1" y2="0.5" xlinkHref="#linear-gradient-2" />
                            <linearGradient id="linear-gradient-30" x1="0.015" y1="0.502" x2="1.015" y2="0.502" xlinkHref="#linear-gradient" />
                            <linearGradient id="linear-gradient-31" x1="0.002" y1="0.501" x2="1.003" y2="0.501" xlinkHref="#linear-gradient-2" />
                            <linearGradient id="linear-gradient-32" x1="-0.007" y1="0.499" x2="1.017" y2="0.499" xlinkHref="#linear-gradient" />
                            <linearGradient id="linear-gradient-33" x1="-0.002" y1="0.502" x2="1.004" y2="0.502" xlinkHref="#linear-gradient-2" />
                            <linearGradient id="linear-gradient-34" x1="0.008" y1="0.502" x2="1.008" y2="0.502" xlinkHref="#linear-gradient" />
                            <linearGradient id="linear-gradient-35" x1="0.001" y1="0.5" x2="1.002" y2="0.5" xlinkHref="#linear-gradient-2" />
                        </defs>
                        <g id="Group_543" data-name="Group 543" transform="translate(-412 -106.149)">
                            <g id="Group_483" data-name="Group 483" transform="translate(1880.833 363.672)">
                                <path id="Path_1304" data-name="Path 1304" d="M601.177,158.709c-11.128-3.444-18.281-12.717-17.221-21.2l-18.281-5.564a3.39,3.39,0,0,1-2.649-3.709c.53-1.325,2.385-2.12,4.239-1.59l18.281,5.564c4.239-7.683,15.367-11.127,26.494-7.683,12.187,3.709,19.606,14.572,16.691,23.845C625.551,157.914,613.364,162.418,601.177,158.709Z" transform="translate(-540.24 -54.323)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1305" data-name="Path 1305" d="M566.774,161.138h0a4.075,4.075,0,0,1-3.974-3.974V109.474a4.075,4.075,0,0,1,3.974-3.974h0a4.075,4.075,0,0,1,3.974,3.974v47.689A3.9,3.9,0,0,1,566.774,161.138Z" transform="translate(-540.545 -83.51)" fill="url(#linear-gradient)" />
                                <circle id="Ellipse_9" data-name="Ellipse 9" cx="26.229" cy="26.229" r="26.229" fill="url(#linear-gradient-2)" />
                            </g>
                            <g id="Group_492" data-name="Group 492" transform="translate(1917.13 598.145)">
                                <path id="Path_1382" data-name="Path 1382" d="M614.777,247.309c-11.128-3.444-18.281-12.717-17.221-21.2l-18.281-5.564a3.39,3.39,0,0,1-2.65-3.709c.53-1.325,2.385-2.12,4.239-1.59l18.281,5.564c4.239-7.683,15.367-11.128,26.494-7.683,12.187,3.709,19.606,14.572,16.691,23.845C639.416,246.514,626.964,251.018,614.777,247.309Z" transform="translate(-554.105 -142.658)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1383" data-name="Path 1383" d="M580.474,249.738h0a4.075,4.075,0,0,1-3.974-3.974V198.074a4.075,4.075,0,0,1,3.974-3.974h0a4.075,4.075,0,0,1,3.974,3.974v47.689A4.075,4.075,0,0,1,580.474,249.738Z" transform="translate(-554.245 -171.845)" fill="url(#linear-gradient-3)" />
                                <circle id="Ellipse_14" data-name="Ellipse 14" cx="26.229" cy="26.229" r="26.229" fill="url(#linear-gradient-4)" />
                            </g>
                            <path id="Path_1306" data-name="Path 1306" d="M1249.461,655.729l386.284,223.08-113.66,65.44L1135.8,721.434l-545.248,314.75L477.159,970.479l544.983-314.75L0,65.705,113.66,0,1135.8,590.288,1612.96,314.75l113.66,65.705Z" transform="translate(412 106.149)" fill="url(#linear-gradient-5)" />
                            <g id="Group_486" data-name="Group 486" transform="translate(1593.372 315.983)">
                                <path id="Path_1321" data-name="Path 1321" d="M536.775,281.175V176.258L445.9,123.8V228.717Z" transform="translate(-445.9 -5.636)" fill="url(#linear-gradient-6)" />
                                <path id="Path_1322" data-name="Path 1322" d="M480.2,217.164l158.965-91.934,22.785-12.982L684.469,99V203.917L480.2,322.08Z" transform="translate(-389.325 -46.542)" fill="url(#linear-gradient-7)" />
                                <path id="Path_1323" data-name="Path 1323" d="M741.044,131.658,650.169,79.2,445.9,197.364l90.875,52.458Z" transform="translate(-445.9 -79.2)" fill="url(#linear-gradient-8)" />
                            </g>
                            <g id="blue-car" transform="translate(2052 1060)">
                                <g id="Group_521" data-name="Group 521" transform="translate(3.758 24.655)" opacity="0.5">
                                    <path id="Path_1435" data-name="Path 1435" d="M24.845,11.522a15.451,15.451,0,0,1,8.162,1.5l35.442,18.9c3.652,2.148,2.578,6.014-2.148,8.162L54.057,47.179a17.22,17.22,0,0,1-6.444,1.933,15.451,15.451,0,0,1-8.162-1.5L4.009,26.773c-3.652-2.148-2.792-5.8,1.933-7.948L17.756,13.24a24.494,24.494,0,0,1,7.088-1.718Z" transform="translate(-1.747 -11.481)" fill="#1c0942" />
                                </g>
                                <g id="Group_535" data-name="Group 535" transform="translate(0 0)">
                                    <g id="Group_532" data-name="Group 532">
                                        <path id="Path_1436" data-name="Path 1436" d="M37.432,15.9C29.914,20.411,21.322,27.714,13.8,32.225c-.859.43,0,1.5,0,2.148,0,.215.644.644.644.859l21.91-16.54v-.644A2.644,2.644,0,0,1,37.432,15.9Z" transform="translate(15.414 18.248)" fill="#010101" />
                                        <path id="Path_1437" data-name="Path 1437" d="M24.543,9.859,23.254,9,.7,24.466,2.633,26.4Z" transform="translate(0.809 10.326)" fill="#010101" />
                                        <g id="Group_522" data-name="Group 522" transform="translate(30.176 48.379)">
                                            <path id="Path_1438" data-name="Path 1438" d="M14.592,31.278c1.289,3.007,4.726,4.511,7.3,3.007,2.792-1.5,3.652-5.155,2.363-8.162s-4.726-4.511-7.3-3.007C14.377,24.4,13.3,28.056,14.592,31.278Z" transform="translate(-14.046 -22.525)" fill="#1f1e1f" />
                                            <path id="Path_1439" data-name="Path 1439" d="M15.119,29.429c.859,2.148,3.007,3.222,4.511,2.363s1.933-3.222.859-5.37c-.859-2.148-3.007-3.222-4.511-2.363C14.474,25.133,14.045,27.281,15.119,29.429Zm1.5-3.866.644,1.5-1.074.43h0A1.928,1.928,0,0,1,16.622,25.562Zm2.578.215-.859.644-1.074-1.289A1.944,1.944,0,0,1,19.2,25.777Zm.859,1.289a2.888,2.888,0,0,1,.43,1.718l-.859-.859.215-1.5C19.844,26.851,20.059,26.851,20.059,27.066ZM16.408,29c0-.215-.215-.43-.215-.644l1.289.43v1.933l.859.43.43-1.933,1.289.859c0,.215-.43.644-.644.859C18.341,31.362,17.052,30.5,16.408,29Z" transform="translate(-13.499 -21.106)" fill="#fff" />
                                        </g>
                                        <g id="Group_523" data-name="Group 523" transform="translate(3.76 30.98)">
                                            <path id="Path_1440" data-name="Path 1440" d="M2.289,23.178c1.5,3.007,4.726,4.511,7.518,3.007s3.652-5.155,2.363-8.162-4.726-4.511-7.3-3.007A6.435,6.435,0,0,0,2.289,23.178Z" transform="translate(-1.748 -14.425)" fill="#1f1e1f" />
                                            <path id="Path_1441" data-name="Path 1441" d="M2.819,21.429c1.074,2.148,3.007,3.222,4.511,2.363s1.933-3.222.859-5.37S5.182,15.2,3.678,16.059,1.745,19.281,2.819,21.429Zm1.289-4.081.644,1.5-1.074.43h0A2.06,2.06,0,0,1,4.108,17.347Zm2.792.43-1.074.644L4.752,17.133A2.179,2.179,0,0,1,6.9,17.777Zm.859,1.289a2.888,2.888,0,0,1,.43,1.718l-.859-.859.215-1.5A.789.789,0,0,0,7.759,19.066ZM3.893,21a.789.789,0,0,0-.215-.644l1.289.43v1.933l.859.43.43-1.933,1.289.859c0,.215-.43.644-.644.859C6.041,23.362,4.752,22.5,3.893,21Z" transform="translate(-1.204 -12.891)" fill="#fff" />
                                        </g>
                                        <path id="Path_1442" data-name="Path 1442" d="M28.939,1.3,6.6,15.047l25.561,16.11L54.715,17.41Z" transform="translate(7.582 1.487)" fill="#219fd8" />
                                        <path id="Path_1443" data-name="Path 1443" d="M39.741,25.347,14.18,9.237l-.215-.215C6.017,4.081-.212,6.229,0,13.747l.215,9.881c0,.644-.215,3.437,1.933,4.94l1.289.859V29c0-2.578,1.933-4.726,4.94-2.792A9.5,9.5,0,0,1,12.891,34.8v.644l17.184,10.74v-.644c0-1.289,1.718-5.155,4.726-3.222s4.511,4.94,4.94,9.451v.43l.859.43c.859.43,1.5.43,1.289-.43l-.644-12.888h.215l-.644-9.022V27.924C40.815,26.85,40.385,25.561,39.741,25.347Z" transform="translate(0.003 7.297)" fill="#2faae1" />
                                        <path id="Path_1444" data-name="Path 1444" d="M41.554,11.2,19,24.732v9.236L41.554,20.222Z" transform="translate(21.818 12.852)" fill="#fff" />
                                        <g id="Group_524" data-name="Group 524" transform="translate(41.677 24.481)">
                                            <path id="Path_1445" data-name="Path 1445" d="M39.591,19.777V11.83l.644-.43v9.022L19.4,33.095v-.859Z" transform="translate(-19.4 -11.4)" fill="#121042" />
                                        </g>
                                        <path id="Path_1446" data-name="Path 1446" d="M42.2,28.5c0-.215-.644-13.1-.644-13.1L19,28.932l.644,13.318L41.984,28.718A.21.21,0,0,0,42.2,28.5Z" transform="translate(21.818 17.674)" fill="#2faae1" />
                                        <g id="Group_525" data-name="Group 525" transform="translate(39.744 18.897)">
                                            <path id="Path_1447" data-name="Path 1447" d="M41.054,8.8,18.5,22.547a3.389,3.389,0,0,1,1.074,2.792L42.128,11.592A5.771,5.771,0,0,0,41.054,8.8Z" transform="translate(-18.5 -8.8)" fill="#219fd8" />
                                        </g>
                                        <g id="Group_526" data-name="Group 526" transform="translate(40.818 21.689)">
                                            <path id="Path_1448" data-name="Path 1448" d="M41.339,10.1,19,23.632V26L41.554,12.463Z" transform="translate(-19 -10.1)" fill="#219fd8" />
                                        </g>
                                        <g id="Group_527" data-name="Group 527" transform="translate(2.798)">
                                            <path id="Path_1449" data-name="Path 1449" d="M23.854.856C16.336,5.367,8.818,9.878,1.3,14.6c2.578-1.718,6.659-1.074,11.17,1.718a.21.21,0,0,1,.215.215L35.024,2.789a.21.21,0,0,1-.215-.215C30.3-.218,26.432-.648,23.854.856Z" transform="translate(-1.3 -0.003)" fill="#fff" />
                                        </g>
                                        <path id="Path_1450" data-name="Path 1450" d="M31.284,24.5,8.3,11.4v8.377L31.5,33.525Z" transform="translate(9.534 13.081)" fill="#fff" />
                                        <g id="Group_528" data-name="Group 528" transform="translate(17.834 24.481)">
                                            <path id="Path_1451" data-name="Path 1451" d="M8.3,19.777V11.4l.644.43.215,7.518L31.5,32.665v.859Z" transform="translate(-8.3 -11.4)" fill="#121042" />
                                        </g>
                                        <g id="Group_529" data-name="Group 529" transform="translate(0.429 15.093)">
                                            <path id="Path_1452" data-name="Path 1452" d="M.2,14.055c-.215-7.3,5.155-9.451,13.532-3.866,0,.43.43,12.458.43,12.458Z" transform="translate(-0.197 -7.029)" fill="#fff" />
                                        </g>
                                        <path id="Path_1453" data-name="Path 1453" d="M.2,14.088C.2,9.792,1.918,7.43,4.926,7c-2.363.644-3.866,3.007-3.652,6.874l13.1,7.948v.644Z" transform="translate(0.235 8.03)" fill="#121042" />
                                        <g id="Group_530" data-name="Group 530" transform="translate(0.214 27.918)">
                                            <path id="Path_1454" data-name="Path 1454" d="M.1,16.007V13L41.13,37.917l.43,6.659c0,.644-.644.859-1.289.43l-.859-.43v-.43c-.215-4.511-1.933-7.518-4.94-9.451s-4.726,1.933-4.726,3.222v.644L12.562,27.821v-.644a9.5,9.5,0,0,0-4.511-8.592c-3.007-1.933-4.94.215-4.94,2.792v.43l-1.074-.859C-.112,19.444.1,16.652.1,16.007Z" transform="translate(-0.097 -13)" fill="#2a5b86" />
                                        </g>
                                        <g id="Group_531" data-name="Group 531" transform="translate(41.247 39.088)">
                                            <path id="Path_1455" data-name="Path 1455" d="M19.2,31.732,41.754,18.2c.215,3.437.43,6.874.43,7.088a.75.75,0,0,1-.215.43L19.63,39.251Z" transform="translate(-19.2 -18.2)" fill="#2a5b86" />
                                        </g>
                                        <path id="Path_1456" data-name="Path 1456" d="M19,26.966l.859-.215V17.3L19,17.515Z" transform="translate(21.818 19.855)" fill="#2faae1" />
                                        <path id="Path_1457" data-name="Path 1457" d="M29.1,20.881l.859-.215V11l-.859.43Z" transform="translate(33.413 12.622)" fill="#2faae1" />
                                    </g>
                                    <g id="Group_533" data-name="Group 533" transform="translate(39.958 51.426)">
                                        <path id="Path_1458" data-name="Path 1458" d="M18.6,26.857V29a.763.763,0,0,0,.43.644,3.321,3.321,0,0,0,1.289.644s4.3-2.578,5.155-3.007c.644-.43.644-.859.644-.859V24.494s0-.859-.859-.43-4.94,3.007-4.94,3.007a9.031,9.031,0,0,0-1.074-.43C18.6,26.212,18.6,26.857,18.6,26.857Z" transform="translate(-18.6 -23.944)" fill="#ed1f24" />
                                    </g>
                                    <g id="Group_534" data-name="Group 534" transform="translate(58.216 40.806)">
                                        <path id="Path_1459" data-name="Path 1459" d="M27.1,23.081v2.363s0,.644.644.215c.43-.215,5.155-3.007,5.155-3.007V19l-4.94,3.007A.972.972,0,0,0,27.1,23.081Z" transform="translate(-27.1 -19)" fill="#ed1f24" />
                                    </g>
                                </g>
                            </g>
                            <g id="Group_487" data-name="Group 487" transform="translate(1457.192 355.459)">
                                <path id="Path_1331" data-name="Path 1331" d="M394.5,324.293V113.4l90.875,52.458V376.751Z" transform="translate(-394.5 -62.266)" fill="url(#linear-gradient-9)" />
                                <path id="Path_1332" data-name="Path 1332" d="M428.8,165.3l90.61-51.4V323.733L428.8,376.192Z" transform="translate(-337.925 -61.442)" fill="url(#linear-gradient-10)" />
                                <path id="Path_1333" data-name="Path 1333" d="M394.6,145.5l90.345-51.4,90.875,52.458-90.345,51.4Z" transform="translate(-394.335 -94.1)" fill="url(#linear-gradient-11)" />
                                <path id="Path_1334" data-name="Path 1334" d="M437.3,154.929v26.229l45.3-26.229V128.7Z" transform="translate(-323.905 -37.03)" fill="#ffd400" />
                                <path id="Path_1335" data-name="Path 1335" d="M437.3,174.729v26.229l45.3-26.229V148.5Z" transform="translate(-323.905 -4.372)" fill="#ffd400" />
                                <path id="Path_1336" data-name="Path 1336" d="M437.3,194.529v26.229l45.3-26.229V168.3Z" transform="translate(-323.905 28.286)" fill="#ffd400" />
                                <path id="Path_1337" data-name="Path 1337" d="M448.3,154.929,403,128.7v26.229l45.3,26.229Z" transform="translate(-380.48 -37.03)" fill="#ffd400" />
                                <path id="Path_1338" data-name="Path 1338" d="M403,148.5v26.229l45.3,26.229V174.729Z" transform="translate(-380.48 -4.372)" fill="#ffd400" />
                                <path id="Path_1339" data-name="Path 1339" d="M448.3,194.529v26.229L403,194.529V168.3Z" transform="translate(-380.48 28.286)" fill="#ffd400" />
                            </g>
                            <g id="Group_541" data-name="Group 541">
                                <g id="Group_485" data-name="Group 485" transform="translate(979.768 368.441)">
                                    <g id="Group_484" data-name="Group 484">
                                        <path id="Path_1307" data-name="Path 1307" d="M214.3,381.356V118.8l90.875,52.458V433.815Z" transform="translate(-214.3 -66.342)" fill="url(#linear-gradient-12)" />
                                        <path id="Path_1308" data-name="Path 1308" d="M248.6,171.258,339.475,118.8V381.356L248.6,433.815Z" transform="translate(-157.725 -66.342)" fill="url(#linear-gradient-13)" />
                                        <path id="Path_1309" data-name="Path 1309" d="M214.3,151.458,305.175,99l90.875,52.458-90.875,52.458Z" transform="translate(-214.3 -99)" fill="url(#linear-gradient-14)" />
                                        <path id="Path_1310" data-name="Path 1310" d="M257.2,159.929v26.229l45.3-26.229V133.7Z" transform="translate(-143.54 -41.765)" fill="#ffd400" />
                                        <path id="Path_1311" data-name="Path 1311" d="M257.2,199.529v26.229l45.3-26.229V173.3Z" transform="translate(-143.54 23.551)" fill="#ffd400" />
                                        <path id="Path_1312" data-name="Path 1312" d="M268.2,159.929,222.9,133.7v26.229l45.3,26.229Z" transform="translate(-200.115 -41.765)" fill="#ffd400" />
                                        <path id="Path_1313" data-name="Path 1313" d="M222.9,153.5v26.229l45.3,26.229V179.729Z" transform="translate(-200.115 -9.107)" fill="#ffd400" />
                                        <path id="Path_1314" data-name="Path 1314" d="M268.2,199.529v26.229l-45.3-26.229V173.3Z" transform="translate(-200.115 23.551)" fill="#ffd400" />
                                    </g>
                                    <path id="Path_1315" data-name="Path 1315" d="M268.2,219.329v26.229l-45.3-26.229V193.1Z" transform="translate(-200.115 56.209)" fill="#ffd400" />
                                    <path id="Path_1316" data-name="Path 1316" d="M257.2,179.729v26.229l45.3-26.229V153.5Z" transform="translate(-143.54 -9.107)" fill="#ffd400" />
                                </g>
                                <path id="Path_1320" data-name="Path 1320" d="M257.2,402.933V193.1l90.875,52.458V455.391Z" transform="translate(836.228 424.65)" fill="url(#linear-gradient-15)" />
                                <path id="Path_1324" data-name="Path 1324" d="M291.5,286.464,496.034,168.3V378.133L291.5,496.3Z" transform="translate(892.803 383.745)" fill="url(#linear-gradient-16)" />
                                <path id="Path_1325" data-name="Path 1325" d="M257.2,266.664,461.734,148.5l90.875,52.458L348.075,319.122Z" transform="translate(836.228 351.087)" fill="url(#linear-gradient-17)" />
                                <path id="Path_1326" data-name="Path 1326" d="M311.37,234.129,265.8,207.9v26.229l45.57,26.229Z" transform="translate(850.413 449.062)" fill="#ffd400" />
                                <path id="Path_1327" data-name="Path 1327" d="M265.8,227.7v26.229l45.57,26.229V253.929Z" transform="translate(850.413 481.72)" fill="#ffd400" />
                                <path id="Path_1328" data-name="Path 1328" d="M311.37,273.729v26.229L265.8,273.729V247.5Z" transform="translate(850.413 514.378)" fill="#ffd400" />
                                <path id="Path_1330" data-name="Path 1330" d="M334.4,265.482v26.229l22.785-12.982V252.5Z" transform="translate(963.563 522.625)" fill="#1e1e1e" />
                                <path id="Path_1340" data-name="Path 1340" d="M300.1,252.111V225.882L322.885,212.9v26.229Z" transform="translate(906.988 457.309)" fill="#ffd400" />
                                <path id="Path_1341" data-name="Path 1341" d="M317.3,242.211V215.982L339.82,203v26.229Z" transform="translate(935.358 440.979)" fill="#ffd400" />
                                <path id="Path_1342" data-name="Path 1342" d="M334.4,206.082v26.229l22.785-12.982V193.1Z" transform="translate(963.563 424.65)" fill="#ffd400" />
                                <path id="Path_1344" data-name="Path 1344" d="M351.6,222.411V196.182L374.12,183.2v26.229Z" transform="translate(991.932 408.321)" fill="#ffd400" />
                                <path id="Path_1348" data-name="Path 1348" d="M300.1,245.682v26.229l22.785-12.982V232.7Z" transform="translate(906.988 489.967)" fill="#ffd400" />
                                <path id="Path_1349" data-name="Path 1349" d="M317.3,262.011V235.782L339.82,222.8v26.229Z" transform="translate(935.358 473.638)" fill="#ffd400" />
                                <path id="Path_1350" data-name="Path 1350" d="M334.4,252.111V225.882L357.185,212.9v26.229Z" transform="translate(963.563 457.309)" fill="#ffd400" />
                                <path id="Path_1351" data-name="Path 1351" d="M351.5,242.211l.265-26.229L374.285,203v26.229Z" transform="translate(991.768 440.979)" fill="#ffd400" />
                                <path id="Path_1352" data-name="Path 1352" d="M300.1,265.482v26.229l22.785-12.982V252.5Z" transform="translate(906.988 522.625)" fill="#ffd400" />
                                <path id="Path_1353" data-name="Path 1353" d="M317.3,281.811V255.582L339.82,242.6v26.229Z" transform="translate(935.358 506.296)" fill="#ffd400" />
                                <path id="Path_1354" data-name="Path 1354" d="M334.4,271.911V245.682L357.185,232.7v26.229Z" transform="translate(963.563 489.967)" fill="#ffd400" />
                                <path id="Path_1355" data-name="Path 1355" d="M351.5,262.011V235.782L374.285,222.8v26.229Z" transform="translate(991.768 473.638)" fill="#ffd400" />
                            </g>
                            <path id="Path_1362" data-name="Path 1362" d="M445.9,227.576V201.347L468.42,188.1v26.229Z" transform="translate(1147.472 416.403)" fill="#1e1e1e" />
                            <g id="yellow-car" transform="translate(1974 499)">
                                <g id="Group_508" data-name="Group 508" transform="translate(9.663 20.975)" opacity="0.5">
                                    <g id="Group_507" data-name="Group 507">
                                        <g id="Group_506" data-name="Group 506">
                                            <g id="Group_505" data-name="Group 505">
                                                <g id="Group_504" data-name="Group 504">
                                                    <path id="Path_1411" data-name="Path 1411" d="M46.817,9.829a13.141,13.141,0,0,0-7.3,1.289L6.65,29.59c-3.222,1.718-2.792,4.94,1.074,7.088L17.6,41.834a13.829,13.829,0,0,0,6.014,1.5,13.141,13.141,0,0,0,7.3-1.289l32.65-18.473c3.437-1.933,3.007-5.155-1.074-7.088l-9.666-5.155a17.685,17.685,0,0,0-6.014-1.5Z" transform="translate(-4.499 -9.775)" fill="#1c0942" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g id="Group_519" data-name="Group 519" transform="translate(0 0)">
                                    <path id="Path_1412" data-name="Path 1412" d="M18.5,7c6.659,3.866,13.532,7.518,20.191,11.384,1.289.644,2.148,2.363,2.148,4.511v.859L20.433,12.37v-.859Q20.433,8.289,18.5,7Z" transform="translate(21.238 8.014)" fill="#010101" />
                                    <path id="Path_1413" data-name="Path 1413" d="M6.2,13.9,26.391,25.284c1.289.644,2.148,2.363,2.148,4.511v.859L8.348,19.27v-.859C8.133,16.263,7.489,14.759,6.2,13.9Z" transform="translate(7.118 15.936)" fill="#010101" />
                                    <g id="Group_509" data-name="Group 509" transform="translate(22.662 40.924)">
                                        <path id="Path_1414" data-name="Path 1414" d="M21.612,27.95c-1.289,3.652-4.726,5.585-7.733,4.511S9.8,27.52,11.087,23.869s4.726-5.585,7.733-4.511C21.612,20.432,22.9,24.3,21.612,27.95Z" transform="translate(-10.55 -19.062)" fill="#010101" />
                                        <path id="Path_1415" data-name="Path 1415" d="M17.34,20.58c-1.5-.644-3.652.859-4.511,3.437s-.43,5.155,1.289,5.585c1.5.644,3.652-.859,4.511-3.437C19.488,23.8,18.844,21.224,17.34,20.58Zm.215,3.652h0l-1.289-.43.43-1.718A2.262,2.262,0,0,1,17.555,24.231Zm-1.289-2.578-1.074,1.5-1.074-.644A4.536,4.536,0,0,1,16.266,21.654ZM13.474,23.8l.43,1.5-.859,1.074c-.215-.644,0-1.074.215-2.148A.665.665,0,0,1,13.474,23.8Zm.43,4.511a.959.959,0,0,1-.644-.859l1.5-1.074.644,2.148.859-.644-.215-2.148,1.289-.644a.789.789,0,0,1-.215.644C16.481,27.668,15.192,28.742,13.9,28.312Z" transform="translate(-8.427 -17.492)" fill="#fff" />
                                    </g>
                                    <g id="Group_510" data-name="Group 510" transform="translate(49.083 25.244)">
                                        <path id="Path_1416" data-name="Path 1416" d="M33.912,20.65c-1.289,3.652-4.726,5.585-7.733,4.511s-4.081-4.94-2.792-8.592,4.726-5.585,7.733-4.511C33.912,13.132,35.2,17,33.912,20.65Z" transform="translate(-22.85 -11.762)" fill="#010101" />
                                        <path id="Path_1417" data-name="Path 1417" d="M29.54,13.28c-1.5-.644-3.652.859-4.511,3.437s-.43,5.155,1.289,5.585c1.5.644,3.652-.859,4.511-3.437C31.9,16.5,31.259,13.924,29.54,13.28Zm.43,3.652h0l-1.289-.43.43-1.718A2.491,2.491,0,0,1,29.97,16.931Zm-1.289-2.363-1.074,1.5-1.074-.644A2.195,2.195,0,0,1,28.681,14.568ZM25.674,16.5l.43,1.5-.859,1.074c-.215-.644,0-1.074.215-2.148C25.674,16.931,25.674,16.716,25.674,16.5Zm.644,4.726a.959.959,0,0,1-.644-.859l1.5-1.074.644,2.148.859-.644-.215-2.148,1.289-.644c0,.215-.215.43-.215.644C28.9,20.368,27.392,21.657,26.318,21.227Z" transform="translate(-20.842 -10.192)" fill="#fff" />
                                    </g>
                                    <path id="Path_1418" data-name="Path 1418" d="M20.989,3.186a.653.653,0,0,0-.859,0,.665.665,0,0,0-.43.215L39.891,14.785a.665.665,0,0,1,.43-.215c.43-.215.644-.215.859,0C34.521,10.7,27.648,6.838,20.989,3.186Z" transform="translate(22.616 3.451)" fill="#ffde17" />
                                    <g id="Group_511" data-name="Group 511" transform="translate(1.718 22.532)">
                                        <path id="Path_1419" data-name="Path 1419" d="M20.991,28.973.8,17.588,10.681,10.5,31.087,21.67Z" transform="translate(-0.8 -10.5)" fill="#ffde17" />
                                    </g>
                                    <g id="Group_512" data-name="Group 512" transform="translate(0 29.621)">
                                        <path id="Path_1420" data-name="Path 1420" d="M20.406,27.977,0,16.592A3.352,3.352,0,0,1,1.5,13.8L21.695,25.184A4.856,4.856,0,0,0,20.406,27.977Z" transform="translate(0 -13.8)" fill="#efb61d" />
                                    </g>
                                    <path id="Path_1421" data-name="Path 1421" d="M20.406,35.936,0,24.551.215,15.1,20.406,26.484Z" transform="translate(0 17.313)" fill="#ffde17" />
                                    <path id="Path_1422" data-name="Path 1422" d="M20.836,31.958.43,20.574c-.215,0-.43-.43-.43-1.074L20.406,30.884A.785.785,0,0,0,20.836,31.958Z" transform="translate(0 22.364)" fill="#efb61d" />
                                    <g id="Group_513" data-name="Group 513" transform="translate(19.977 11.414)">
                                        <path id="Path_1423" data-name="Path 1423" d="M38.083,7.206c.43-.215.644-.43.859-.43,3.652-1.718,8.592-3.652,12.888,5.37a.665.665,0,0,1,.43-.215c.859-.43,1.5,0,1.5,1.074l-.215,9.451a3.352,3.352,0,0,1-1.5,2.792l-.644.43v-.859c0-3.866-2.578-6.014-6.014-4.3-3.437,1.933-6.229,7.3-6.229,10.955v.859L24.766,40.285v-.859c0-3.866-2.578-6.014-6.014-4.3-3.437,1.933-6.229,7.3-6.229,11.17v.859l-1.718.859c-.859.43-1.5,0-1.5-1.074l.215-9.451a3.352,3.352,0,0,1,1.5-2.792L20.9,27.4,26.914,13.65C27.773,13.65,34.647,9.139,38.083,7.206Z" transform="translate(-9.3 -5.324)" fill="#efb61d" />
                                    </g>
                                    <path id="Path_1424" data-name="Path 1424" d="M22.107.848c6.659,3.866,13.532,7.518,20.406,11.384-2.792-1.5-5.585-.43-7.948.644-.43,0-.644.215-1.074.43L13.3,1.922c.43-.215.644-.43,1.074-.43C16.522.418,19.314-.871,22.107.848Z" transform="translate(15.269 -0.01)" fill="#efb61d" />
                                    <path id="Path_1425" data-name="Path 1425" d="M28.491,18.943,8.3,7.559C8.73,7.344,15.6,2.833,19.04.9L39.231,12.284C35.795,14.218,28.921,18.728,28.491,18.943Z" transform="translate(9.528 1.011)" fill="#ffde17" />
                                    <path id="Path_1426" data-name="Path 1426" d="M25.806,29.132,5.4,17.962,11.629,4,31.821,15.384Z" transform="translate(6.199 4.57)" fill="#efb61d" />
                                    <g id="Group_514" data-name="Group 514" transform="translate(12.888 9.644)">
                                        <path id="Path_1427" data-name="Path 1427" d="M24.473,27.484,6,17.173,11.37,4.5,30.058,14.81Z" transform="translate(-6 -4.5)" fill="#fff" />
                                    </g>
                                    <path id="Path_1428" data-name="Path 1428" d="M6,17.173l18.473,10.31.43-.859L8.148,16.529l4.081-11.6L11.37,4.5Z" transform="translate(6.888 5.144)" fill="#0e1035" />
                                    <g id="Group_515" data-name="Group 515" transform="translate(33.509 12.178)">
                                        <path id="Path_1429" data-name="Path 1429" d="M21.185,13.886,15.6,26.559,43.954,11.738s-4.726-6.659-7.733-6.014C33,6.583,21.185,13.886,21.185,13.886Z" transform="translate(-15.6 -5.68)" fill="#fff" />
                                    </g>
                                    <g id="Group_516" data-name="Group 516" transform="translate(33.509 12.216)">
                                        <path id="Path_1430" data-name="Path 1430" d="M43.954,11.717s-4.3-6.229-7.3-6.014c2.578,1.5,5.585,5.8,5.585,5.8L16.244,25.035l-.644,1.5Z" transform="translate(-15.6 -5.697)" fill="#0e1035" />
                                    </g>
                                    <g id="Group_517" data-name="Group 517" transform="translate(0.826 36.494)">
                                        <path id="Path_1431" data-name="Path 1431" d="M5.143,19.792C5.358,21.3,4.5,22.8,3.21,22.8A3.186,3.186,0,0,1,.418,20.007C.2,18.289,1.062,17,2.351,17A3.186,3.186,0,0,1,5.143,19.792Z" transform="translate(-0.385 -17)" />
                                        <path id="Path_1432" data-name="Path 1432" d="M4.174,19.448c.215,1.289-.43,2.363-1.5,2.363A2.5,2.5,0,0,1,.522,19.663c-.215-1.289.43-2.363,1.5-2.363A2.484,2.484,0,0,1,4.174,19.448Z" transform="translate(-0.274 -16.656)" fill="#fff" />
                                    </g>
                                    <g id="Group_518" data-name="Group 518" transform="translate(14.144 44.359)">
                                        <path id="Path_1433" data-name="Path 1433" d="M11.343,23.322c.215,1.5-.644,3.007-1.933,3.007a3.186,3.186,0,0,1-2.792-2.792c-.215-1.5.644-3.007,1.933-2.792C9.84,20.315,11.128,21.6,11.343,23.322Z" transform="translate(-6.585 -20.661)" />
                                        <path id="Path_1434" data-name="Path 1434" d="M10.374,23.063c.215,1.289-.43,2.363-1.5,2.363a2.5,2.5,0,0,1-2.148-2.148,1.88,1.88,0,0,1,1.5-2.363C9.085,20.7,10.159,21.774,10.374,23.063Z" transform="translate(-6.474 -20.402)" fill="#fff" />
                                    </g>
                                </g>
                            </g>
                            <g id="red-car" transform="translate(840 1090)">
                                <g id="Group_494" data-name="Group 494" transform="translate(7.144 9.614)" opacity="0.5">
                                    <path id="Path_1384" data-name="Path 1384" d="M52.889,4.528c-3.222-.215-6.229.215-8.377,1.718L6.063,30.089c-4.081,2.578-3.437,6.874.859,9.666l11.17,7.088a14.416,14.416,0,0,0,6.874,2.148,14.13,14.13,0,0,0,8.592-1.718L71.792,23.215c4.081-2.578,3.652-6.874-.859-9.666L59.763,6.461a18.184,18.184,0,0,0-6.874-1.933Z" transform="translate(-3.326 -4.476)" fill="#1c0942" />
                                </g>
                                <g id="Group_502" data-name="Group 502">
                                    <path id="Path_1385" data-name="Path 1385" d="M15.6,2.2,45.028,17.021c1.933.859,3.007,3.222,2.792,6.444a2.724,2.724,0,0,1-.215,1.289L18.392,9.718a2.724,2.724,0,0,1,.215-1.289C18.607,5.422,17.533,3.059,15.6,2.2Z" transform="translate(17.909 2.526)" fill="#010101" />
                                    <path id="Path_1386" data-name="Path 1386" d="M5.018,10.9,29.935,24.432c1.933.859,3.007,3.222,3.007,6.229,0,.43-.215.859-.215,1.289L3.3,17.129a2.724,2.724,0,0,1,.215-1.289C3.515,13.048,6.952,11.974,5.018,10.9Z" transform="translate(3.788 12.513)" fill="#010101" />
                                    <g id="Group_495" data-name="Group 495" transform="translate(21.653 39.562)">
                                        <path id="Path_1387" data-name="Path 1387" d="M23.44,27.186c-1.933,3.866-6.229,6.229-9.666,5.37s-4.726-4.726-2.792-8.592,6.229-6.229,9.666-5.37C24.085,19.668,25.373,23.535,23.44,27.186Z" transform="translate(-10.08 -18.418)" fill="#151315" />
                                        <path id="Path_1388" data-name="Path 1388" d="M18.693,19.935c-1.933-.43-4.511,1.289-5.8,3.866s-.859,5.155,1.074,5.8c1.933.43,4.511-1.289,5.8-3.866C21.056,22.942,20.627,20.365,18.693,19.935Zm0,3.652h0l-1.5-.215.644-1.933A1.759,1.759,0,0,1,18.693,23.587ZM17.4,21.224l-1.5,1.718-1.074-.43A2.805,2.805,0,0,1,17.4,21.224Zm-3.652,2.363.43,1.5-1.074,1.074a2.645,2.645,0,0,1,.43-2.148A.75.75,0,0,0,13.753,23.587Zm.43,4.726a.959.959,0,0,1-.644-.859l1.718-1.289.43,2.148,1.074-.644V25.52l1.718-.644c0,.215-.215.43-.215.644C17.4,27.238,15.471,28.527,14.183,28.312Z" transform="translate(-7.696 -16.752)" fill="#e6e7e8" />
                                    </g>
                                    <g id="Group_496" data-name="Group 496" transform="translate(51.224 21.744)">
                                        <path id="Path_1389" data-name="Path 1389" d="M36.849,18.666c-1.718,3.866-5.8,6.444-9.236,5.585s-4.726-4.511-3.007-8.377,5.8-6.444,9.236-5.585S38.567,14.8,36.849,18.666Z" transform="translate(-23.847 -10.123)" fill="#151315" />
                                        <path id="Path_1390" data-name="Path 1390" d="M32.092,11.535c-1.933-.43-4.3,1.289-5.585,4.081-1.074,2.792-.644,5.155,1.289,5.585s4.3-1.5,5.585-4.081C34.455,14.542,34.026,11.965,32.092,11.535Zm.215,3.652h0l-1.5-.215.644-1.933A2.491,2.491,0,0,1,32.307,15.187Zm-1.5-2.363-1.5,1.933-1.074-.644A3.357,3.357,0,0,1,30.8,12.824ZM27.367,15.4l.43,1.5-1.074,1.074a2.789,2.789,0,0,1,.43-2.148C27.152,15.616,27.152,15.616,27.367,15.4Zm.43,4.511a.968.968,0,0,1-.644-.644l1.718-1.289.644,2.148,1.074-.644V17.335l1.718-.859c0,.215-.215.43-.215.644C30.8,19.053,29.085,20.342,27.8,19.912Z" transform="translate(-21.454 -8.577)" fill="#e6e7e8" />
                                    </g>
                                    <path id="Path_1391" data-name="Path 1391" d="M17.84,3,38.675,16.532a4.7,4.7,0,0,0-1.074.644c-4.081,2.792-9.666,6.659-15.466,20.191L1.3,23.836C7.1,10.518,12.684,6.437,16.766,3.859,16.98,3.644,17.41,3.43,17.84,3Z" transform="translate(1.492 3.444)" fill="#e6e7e8" />
                                    <path id="Path_1392" data-name="Path 1392" d="M2.448,12.7,23.284,26.232c-.859.644-2.148,1.933-2.148,3.007L.3,15.707A3.847,3.847,0,0,1,2.448,12.7Z" transform="translate(0.344 14.58)" fill="#ed1c24" />
                                    <path id="Path_1393" data-name="Path 1393" d="M28.055.2,48.676,13.947l-10.74,4.94L17.1,5.355Z" transform="translate(19.631 0.23)" fill="#ed1c24" />
                                    <g id="Group_497" data-name="Group 497" transform="translate(19.332)">
                                        <path id="Path_1394" data-name="Path 1394" d="M20.814,0,41.65,13.532c-.43.215-7.948,4.3-11.6,6.444L9,6.444C12.652,4.3,20.384.215,20.814,0Z" transform="translate(-9)" fill="#dcddde" />
                                    </g>
                                    <path id="Path_1395" data-name="Path 1395" d="M23.274.275,44.11,13.808c-.215-.215-.644-.215-1.074.215L22.2.49C22.63.061,23.059.061,23.274.275Z" transform="translate(25.486 0.154)" fill="#ce2027" />
                                    <path id="Path_1396" data-name="Path 1396" d="M21.051,32.606.215,19.074A1.61,1.61,0,0,1,0,18L20.836,31.532A1.61,1.61,0,0,0,21.051,32.606Z" transform="translate(0 20.664)" fill="#771213" />
                                    <path id="Path_1397" data-name="Path 1397" d="M14.409,5.148c3.222,1.933,13.1,7.948,16.11,10.1a1.356,1.356,0,0,1,0,1.933c-2.578,1.933-6.229,6.014-9.236,12.458-.644,1.5-2.148.43-2.148.43l-15.9-10.1a1.752,1.752,0,0,1-.43-2.148A37.735,37.735,0,0,1,12.046,5.362,4.465,4.465,0,0,1,14.409,5.148Z" transform="translate(2.99 5.807)" fill="#fff" />
                                    <path id="Path_1398" data-name="Path 1398" d="M4.891,19.606a1.537,1.537,0,0,1-.43-1.933A37.735,37.735,0,0,1,13.7,5.215.21.21,0,0,0,13.913,5c-.644,0-1.5.215-1.718.644C9.617,7.578,5.965,11.659,2.958,17.888a1.517,1.517,0,0,0,.43,2.148l15.9,10.31s1.289.859,1.933,0a.75.75,0,0,1-.43-.215Z" transform="translate(3.057 5.74)" fill="#771213" />
                                    <g id="Group_498" data-name="Group 498" transform="translate(20.836 13.532)">
                                        <path id="Path_1399" data-name="Path 1399" d="M17.918,28.9v.644L33.6,20.088v-.644A15.107,15.107,0,0,1,36.391,13L16.2,25.244C17.274,25.673,17.918,26.962,17.918,28.9Z" transform="translate(-2.238 1.392)" fill="#771213" />
                                        <path id="Path_1400" data-name="Path 1400" d="M9.7,27.744c0,.859.644,1.289,1.5.859l.859-.43v-.644A14.808,14.808,0,0,1,14.64,21.3L9.915,24.092Z" transform="translate(-9.7 10.92)" fill="#771213" />
                                        <path id="Path_1401" data-name="Path 1401" d="M58.56,7.589c0-1.074-.644-1.289-1.5-.859l-10.74,5.155L40.517,6.3c-.43.215-7.948,4.3-11.6,6.444a4.7,4.7,0,0,0-1.074.644c-4.081,2.792-9.666,6.659-15.466,20.191a.665.665,0,0,1-.43.215c-.859.859-1.718,1.933-1.718,2.792L9.8,41.1l4.726-2.792a13.537,13.537,0,0,1,4.726-4.511c1.718-1.074,3.222-1.289,4.3-.859L43.739,20.692a18,18,0,0,1,4.511-4.511c1.718-1.074,3.222-1.289,4.3-.859l5.8-3.437Z" transform="translate(-9.585 -6.3)" fill="#ce2027" />
                                        <path id="Path_1402" data-name="Path 1402" d="M29.7,12.552c1.289.43,2.148,1.718,1.933,3.652v.644l1.933-1.074a3.923,3.923,0,0,0,1.718-2.792l.43-4.081Z" transform="translate(13.26 -3.315)" fill="#771213" />
                                    </g>
                                    <path id="Path_1403" data-name="Path 1403" d="M12.929,26.6c2.363-5.155,7.733-12.888,22.339-19.117a2.318,2.318,0,0,1,2.363,0c1.074.859,2.578,2.363,3.437,3.222.43.43.43.859-.43,1.289C36.343,14.57,20.018,23.807,14,27.244,13.144,28.1,12.714,27.244,12.929,26.6Z" transform="translate(14.78 8.199)" fill="#fff" />
                                    <path id="Path_1404" data-name="Path 1404" d="M41.254,10.752c-.859-.859-2.363-2.363-3.437-3.222A2.888,2.888,0,0,0,36.1,7.1a.21.21,0,0,1,.215.215c1.074.859,2.578,2.363,3.437,3.222.43.43.215.859-.43,1.289C35.025,14.4,18.914,23.64,12.9,27.077c0,.43.43.859,1.289.215,5.8-3.437,22.125-12.888,26.635-15.251C41.469,11.826,41.683,11.181,41.254,10.752Z" transform="translate(14.809 8.151)" fill="#771213" />
                                    <g id="Group_499" data-name="Group 499" transform="translate(0 30.287)">
                                        <path id="Path_1405" data-name="Path 1405" d="M21.365,27.632.53,14.1.1,18.826,20.936,32.358Z" transform="translate(0.115 -14.1)" fill="#ed1c24" />
                                        <path id="Path_1406" data-name="Path 1406" d="M.215,16.3,0,19.952,20.836,33.484l.215-3.652Z" transform="translate(0 -11.574)" fill="#b72025" />
                                    </g>
                                    <g id="Group_500" data-name="Group 500" transform="translate(15.251 41.336)">
                                        <path id="Path_1407" data-name="Path 1407" d="M8.174,19.794c.859.43,4.94,3.222,4.94,3.222s1.5-.859,2.148-1.289c.43-.215.43.215.43.43v-.43s0-.859-.43-.43c-.644.43-2.148,1.289-2.148,1.289s-4.081-2.792-4.94-3.222-.859.43-.859.43L7.1,21.942v.215l.215-1.718S7.315,19.364,8.174,19.794Z" transform="translate(-7.1 -19.244)" fill="#941a1d" />
                                        <path id="Path_1408" data-name="Path 1408" d="M7.744,22.572c.644.43,5.155,3.222,5.155,3.222s1.718-1.074,2.363-1.5c.43-.43.43-.644.43-.644l.215-1.933c0-.215,0-.644-.43-.43-.644.43-2.148,1.289-2.148,1.289s-4.3-2.363-5.155-3.007c-.859-.43-.859.43-.859.43L7.1,21.712C7.315,21.927,7.315,22.357,7.744,22.572Z" transform="translate(-7.1 -19.014)" fill="#f7b224" />
                                    </g>
                                    <g id="Group_501" data-name="Group 501" transform="translate(0.215 30.931)">
                                        <path id="Path_1409" data-name="Path 1409" d="M5.47,18.7a1.481,1.481,0,0,1,.644,1.074v-.644a1.2,1.2,0,0,0-.43-1.289L.53,14.4.1,18.052h0l.215-3.007Z" transform="translate(-0.1 -14.4)" fill="#941a1d" />
                                        <path id="Path_1410" data-name="Path 1410" d="M6,21.244a9.443,9.443,0,0,1,.215-1.933,1.072,1.072,0,0,0-.644-1.074L.415,14.8.2,17.807c.215,0,4.726,3.222,5.155,3.437C6,21.674,6,21.244,6,21.244Z" transform="translate(0.015 -13.941)" fill="#f7b224" />
                                    </g>
                                </g>
                            </g>
                            <g id="Group_542" data-name="Group 542">
                                <path id="Path_1343" data-name="Path 1343" d="M488.7,280.158l113.66,65.705,90.875-52.458L579.575,227.7Z" transform="translate(1218.067 481.72)" fill="url(#linear-gradient-18)" />
                                <path id="Path_1345" data-name="Path 1345" d="M531.6,225.263,622.475,173.6V382.638L531.6,435.1Z" transform="translate(1288.826 392.487)" fill="url(#linear-gradient-19)" />
                                <path id="Path_1346" data-name="Path 1346" d="M602.359,234.005,488.7,168.3V378.133l113.66,65.705Z" transform="translate(1218.067 383.745)" fill="url(#linear-gradient-20)" />
                                <path id="Path_1347" data-name="Path 1347" d="M693.234,215l-113.66-66.5L488.7,200.958l113.66,65.705Z" transform="translate(1218.067 351.087)" fill="url(#linear-gradient-21)" />
                                <path id="Path_1356" data-name="Path 1356" d="M497.3,183.2v26.229l22.785,12.982V196.182Z" transform="translate(1232.251 408.321)" fill="#ffd400" />
                                <path id="Path_1357" data-name="Path 1357" d="M514.5,193.1v26.229l22.52,12.982V206.082Z" transform="translate(1260.621 424.65)" fill="#ffd400" />
                                <path id="Path_1358" data-name="Path 1358" d="M497.3,203v26.229l22.785,12.982V215.982Z" transform="translate(1232.251 440.979)" fill="#ffd400" />
                                <path id="Path_1359" data-name="Path 1359" d="M514.5,212.9v26.229l22.52,12.982V225.882Z" transform="translate(1260.621 457.309)" fill="#ffd400" />
                                <path id="Path_1360" data-name="Path 1360" d="M497.3,222.8v26.229l22.785,12.982V235.782Z" transform="translate(1232.251 473.638)" fill="#ffd400" />
                                <path id="Path_1361" data-name="Path 1361" d="M514.5,232.7v26.229l22.52,12.982V245.682Z" transform="translate(1260.621 489.967)" fill="#ffd400" />
                                <path id="Path_1363" data-name="Path 1363" d="M497.3,268.829V242.6l22.785,12.982v26.229Z" transform="translate(1232.251 506.296)" fill="#1e1e1e" />
                            </g>
                            <path id="Path_1364" data-name="Path 1364" d="M488.7,156.582v26.229l22.785-12.982V143.6Z" transform="translate(1218.067 343.005)" fill="url(#linear-gradient-22)" />
                            <path id="Path_1365" data-name="Path 1365" d="M505.9,146.682v26.229l22.785-12.982V133.7Z" transform="translate(1246.436 326.675)" fill="url(#linear-gradient-23)" />
                            <path id="Path_1366" data-name="Path 1366" d="M523,136.782v26.229l22.785-12.982V123.8Z" transform="translate(1274.641 310.346)" fill="#ffd400" />
                            <path id="Path_1367" data-name="Path 1367" d="M540.2,126.882v26.229l22.785-12.982V113.9Z" transform="translate(1303.011 294.017)" fill="url(#linear-gradient-24)" />
                            <g id="Group_540" data-name="Group 540">
                                <path id="Path_1317" data-name="Path 1317" d="M334.5,418.411V287l90.875,52.458V470.869Z" transform="translate(963.727 579.53)" fill="url(#linear-gradient-25)" />
                                <path id="Path_1318" data-name="Path 1318" d="M334.5,376.563,584.074,232.7l90.875,52.458L425.375,429.021Z" transform="translate(963.727 489.967)" fill="url(#linear-gradient-26)" />
                                <path id="Path_1319" data-name="Path 1319" d="M368.8,396.528,618.374,252.4V383.811L368.8,527.939Z" transform="translate(1020.302 522.46)" fill="url(#linear-gradient-27)" />
                                <path id="Path_1329" data-name="Path 1329" d="M343,302v26.229l45.3,26.229V328.229Z" transform="translate(977.747 604.271)" fill="#ffd400" />
                                <path id="Path_1368" data-name="Path 1368" d="M343,321.8v26.229l45.3,26.229V348.029Z" transform="translate(977.747 636.929)" fill="#ffd400" />
                                <path id="Path_1369" data-name="Path 1369" d="M377.3,320.147v26.229l22.52-13.247V306.9Z" transform="translate(1034.322 612.353)" fill="#1e1e1e" />
                                <path id="Path_1370" data-name="Path 1370" d="M394.4,310.247v26.229l22.785-13.247V297Z" transform="translate(1062.527 596.024)" fill="#ffd400" />
                                <path id="Path_1371" data-name="Path 1371" d="M411.6,300.347v26.229l22.52-13.247V287.1Z" transform="translate(1090.897 579.695)" fill="#ffd400" />
                                <path id="Path_1372" data-name="Path 1372" d="M428.7,290.447v26.229l22.785-13.247V277.2Z" transform="translate(1119.102 563.366)" fill="#1e1e1e" />
                                <path id="Path_1373" data-name="Path 1373" d="M445.9,280.547v26.229l22.52-13.247V267.3Z" transform="translate(1147.472 547.036)" fill="#ffd400" />
                            </g>
                            <g id="Group_488" data-name="Group 488" transform="translate(1035.671 831.293)">
                                <path id="Path_1374" data-name="Path 1374" d="M282.077,335.209c-11.128-3.444-18.281-12.717-17.221-21.2l-18.281-5.564a3.39,3.39,0,0,1-2.649-3.709c.53-1.325,2.384-2.119,4.239-1.59l18.281,5.564c4.239-7.683,15.366-11.128,26.494-7.683,12.187,3.709,19.606,14.572,16.691,23.845C306.716,334.679,294.264,339.183,282.077,335.209Z" transform="translate(-221.405 -230.823)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1375" data-name="Path 1375" d="M247.774,337.638h0a4.075,4.075,0,0,1-3.974-3.974V285.974A4.075,4.075,0,0,1,247.774,282h0a4.075,4.075,0,0,1,3.974,3.974v47.689A3.9,3.9,0,0,1,247.774,337.638Z" transform="translate(-221.545 -260.01)" fill="url(#linear-gradient-28)" />
                                <circle id="Ellipse_10" data-name="Ellipse 10" cx="26.229" cy="26.229" r="26.229" fill="url(#linear-gradient-29)" />
                            </g>
                            <g id="Group_489" data-name="Group 489" transform="translate(915.653 816.456)">
                                <path id="Path_1376" data-name="Path 1376" d="M236.877,329.609c-11.128-3.444-18.281-12.717-17.221-21.2l-18.281-5.564a3.39,3.39,0,0,1-2.649-3.709c.53-1.325,2.384-2.12,4.239-1.59l18.281,5.564c4.239-7.683,15.367-11.128,26.494-7.683,12.187,3.709,19.606,14.572,16.691,23.845C261.251,329.079,249.064,333.583,236.877,329.609Z" transform="translate(-175.94 -225.223)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1377" data-name="Path 1377" d="M202.474,332.038h0a4.075,4.075,0,0,1-3.974-3.974V280.374a4.075,4.075,0,0,1,3.974-3.974h0a4.075,4.075,0,0,1,3.974,3.974v47.689A3.755,3.755,0,0,1,202.474,332.038Z" transform="translate(-176.245 -254.41)" fill="url(#linear-gradient-30)" />
                                <circle id="Ellipse_11" data-name="Ellipse 11" cx="26.229" cy="26.229" r="26.229" fill="url(#linear-gradient-31)" />
                            </g>
                            <g id="Group_490" data-name="Group 490" transform="translate(844.119 911.835)">
                                <path id="Path_1378" data-name="Path 1378" d="M197.98,350.1c-8.213-2.649-13.777-9.538-12.982-15.9l-13.512-4.239c-1.325-.53-2.12-1.59-1.855-2.649s1.855-1.59,3.179-1.06l13.512,4.239c3.179-5.829,11.392-8.213,19.871-5.829,9.273,2.914,14.837,10.863,12.717,18.016C216.526,349.575,207.253,353.019,197.98,350.1Z" transform="translate(-152.41 -271.682)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1379" data-name="Path 1379" d="M172.314,352h0a2.94,2.94,0,0,1-2.914-2.914V313.314a2.94,2.94,0,0,1,2.914-2.914h0a2.94,2.94,0,0,1,2.914,2.914v35.767A2.94,2.94,0,0,1,172.314,352Z" transform="translate(-152.709 -293.709)" fill="url(#linear-gradient-32)" />
                                <circle id="Ellipse_12" data-name="Ellipse 12" cx="19.606" cy="19.606" r="19.606" fill="url(#linear-gradient-33)" />
                            </g>
                            <g id="Group_491" data-name="Group 491" transform="translate(1350.951 445.804)">
                                <path id="Path_1380" data-name="Path 1380" d="M401.177,189.709c-11.128-3.444-18.281-12.717-17.221-21.2l-18.281-5.564a3.39,3.39,0,0,1-2.649-3.709c.53-1.325,2.385-2.12,4.239-1.59l18.281,5.564c4.239-7.683,15.367-11.128,26.494-7.683,12.187,3.709,19.606,14.572,16.691,23.845C425.551,189.179,413.364,193.683,401.177,189.709Z" transform="translate(-340.24 -85.323)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1381" data-name="Path 1381" d="M366.774,192.138h0a4.075,4.075,0,0,1-3.974-3.974V140.474a4.075,4.075,0,0,1,3.974-3.974h0a4.075,4.075,0,0,1,3.974,3.974v47.689A3.755,3.755,0,0,1,366.774,192.138Z" transform="translate(-340.545 -114.51)" fill="url(#linear-gradient-34)" />
                                <circle id="Ellipse_13" data-name="Ellipse 13" cx="26.229" cy="26.229" r="26.229" fill="url(#linear-gradient-35)" />
                            </g>
                            <g id="Group_537" data-name="Group 537" transform="translate(1638.671 958.293)">
                                <path id="Path_1374-2" data-name="Path 1374" d="M282.077,335.209c-11.128-3.444-18.281-12.717-17.221-21.2l-18.281-5.564a3.39,3.39,0,0,1-2.649-3.709c.53-1.325,2.384-2.119,4.239-1.59l18.281,5.564c4.239-7.683,15.366-11.128,26.494-7.683,12.187,3.709,19.606,14.572,16.691,23.845C306.716,334.679,294.264,339.183,282.077,335.209Z" transform="translate(-221.405 -230.823)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1375-2" data-name="Path 1375" d="M247.774,337.638h0a4.075,4.075,0,0,1-3.974-3.974V285.974A4.075,4.075,0,0,1,247.774,282h0a4.075,4.075,0,0,1,3.974,3.974v47.689A3.9,3.9,0,0,1,247.774,337.638Z" transform="translate(-221.545 -260.01)" fill="url(#linear-gradient-28)" />
                                <circle id="Ellipse_10-2" data-name="Ellipse 10" cx="26.229" cy="26.229" r="26.229" fill="url(#linear-gradient-29)" />
                            </g>
                            <g id="Group_538" data-name="Group 538" transform="translate(1525.119 984.835)">
                                <path id="Path_1378-2" data-name="Path 1378" d="M197.98,350.1c-8.213-2.649-13.777-9.538-12.982-15.9l-13.512-4.239c-1.325-.53-2.12-1.59-1.855-2.649s1.855-1.59,3.179-1.06l13.512,4.239c3.179-5.829,11.392-8.213,19.871-5.829,9.273,2.914,14.837,10.863,12.717,18.016C216.526,349.575,207.253,353.019,197.98,350.1Z" transform="translate(-152.41 -271.682)" fill="#1e124f" opacity="0.2" />
                                <path id="Path_1379-2" data-name="Path 1379" d="M172.314,352h0a2.94,2.94,0,0,1-2.914-2.914V313.314a2.94,2.94,0,0,1,2.914-2.914h0a2.94,2.94,0,0,1,2.914,2.914v35.767A2.94,2.94,0,0,1,172.314,352Z" transform="translate(-152.709 -293.709)" fill="url(#linear-gradient-32)" />
                                <circle id="Ellipse_12-2" data-name="Ellipse 12" cx="19.606" cy="19.606" r="19.606" fill="url(#linear-gradient-33)" />
                            </g>
                        </g>
                    </svg>
                </div>
            </section>
        </>
    )
}

export default Ride;