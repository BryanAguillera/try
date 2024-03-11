import React, { useEffect, useState } from 'react'
import "./About.scss"
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faAmbulance, faSmile } from '@fortawesome/free-solid-svg-icons'
import { frontEndSkills, BackEndSkills } from '../../Projectdata'
import { keyboard } from '@testing-library/user-event/dist/keyboard'
import { faStar } from '@fortawesome/free-brands-svg-icons'
import { Star } from '@mui/icons-material/';




const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Clear the timeout when the component is unmounted or when the effect is re-executed
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <div className='container about-page'>
                <div className="stage-cube-cont">
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faSmile} color='#EFD81D' />
                        </div>
                        {/* <div className='face6'>
                            <FontAwesomeIcon icon={faSmile} color='#EC48' />
                        </div> */}
                    </div>
                </div>
                
                <div className='featured-skills-container'>
                    <div className='skills-top'>
                        <h1 className='text'>Featured Skills </h1>
                        <Star className='star' />
                    </div>

                
                    <div className='front-end-container'>
                        <h2>Frontend</h2>
                        <div className='skills'>
                            {frontEndSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className='skill'
                                >{skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='back-end-container'>
                        <h2>Backend</h2>
                        <div className='skills'>
                            {BackEndSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className='skill'
                                >{skill}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                

            </div>
            <Loader type='pacman' />
        </>

    )
}

export default About
