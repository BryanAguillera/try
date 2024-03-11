import React from 'react'
import Arduino from '../../assets/images/arduino.png'
import Unity from '../../assets/images/unity.png'
import './Project.scss'
import { projectData } from '../../Projectdata'
const Project = ({ data }) => {

    const tagColors = data.tags.map(() => getRandomColor());

    return (
        <div className='project-container'>
            <img src={data.photo} alt="Project Picture" />
            <div className="col-two">
                <div>
                    <p className='project-title'>{data.title}</p>
                    <div className='tags-container'>
                        {data.tags.map((data, index) => (
                            <div
                                className='tag'
                                key={index}
                                style={{ backgroundColor: tagColors[index] }}

                            >{data}
                            </div>
                        ))}
                    </div>
                </div>

                <p className='project-description'>{data.description}</p>
            </div>

        </div>
    )
}

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default Project
