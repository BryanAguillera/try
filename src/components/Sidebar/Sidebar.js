import React from 'react'
import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import Ayan from '../../assets/images/ayan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    return (
        <div className='nav-bar'>

            <Link className='logo' to='/'>
                <img src={Ayan} alt="logo" />

            </Link>
            
            <div>
                <input type="checkbox" id='check' />
                <label htmlFor="check" className='icons'>
                    <i class="bi bi-list" id='menu-icon'></i>
                    <i class="bi bi-x" id='close-icon'></i>

                    <nav>
                        <NavLink exact="true" activeclassname="active" to="/">
                            <FontAwesomeIcon icon={faHome} color="#358f2b" />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                            <FontAwesomeIcon icon={faUser} color="#358f2b" />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                            <FontAwesomeIcon icon={faArchive} color="#358f2b" />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} color="#358f2b" />
                        </NavLink>
                    </nav>
                </label>
            </div>



            

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/bryan-angelo-aguillera-6026662a4/'>
                        <FontAwesomeIcon icon={faLinkedinIn} color="#358f2b" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/BryanAguillera'>
                        <FontAwesomeIcon icon={faGithub} color="#358f2b" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100009400062485'>
                        <FontAwesomeIcon icon={faFacebook} color="#358f2b" />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Sidebar
