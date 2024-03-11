import React, { useEffect, useState } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Clear the timeout when the component is unmounted or when the effect is re-executed
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array to run the effect only once
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident minima quo illum? Aliquid, consectetur fugit tempore doloremque sit distinctio unde nam excepturi natus qui.
                    </p>
                </div>

                <div className="contact-form">
                    <form>
                        <ol>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required></input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required></input>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ol>
                    </form>
                </div>
                
            </div>

            <Loader type='pacman' />

        </>

    )
}

export default Contact
