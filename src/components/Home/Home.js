import React, { useEffect, useState } from 'react'
import './Home.scss'
import Ayan from '../../assets/images/ayan.jpg'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'y', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    // useEffect(() => {
    //     return setTimeout(() =>{
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Clear the timeout when the component is unmounted or when the effect is re-executed
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <div className='container home-page'>
                <div className='gradient'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                    </svg>
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive"></div>

                </div>
                
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={19} />

                    </h1>
                    <h2>Frontend Developer</h2>
                    <Link to="/Contact" className='flat-button'>Contact Me</Link>
                </div>

                <div className="image-zone">
                    <img src={Ayan} alt="ayan" />

                </div>

            </div>
            <Loader type="pacman" />

        </>

    )
}

export default Home


